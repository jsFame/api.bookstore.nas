import { Test } from '@nestjs/testing'
import { AppModule } from '../src/app.module'
import { HttpStatus, INestApplication, ValidationPipe } from '@nestjs/common'
import pactum from 'pactum'
import { ConfigService } from '@nestjs/config'
import { PrismaService } from '../src/prisma/prisma.service'
import { AuthDto } from '../src/auth/dto'

describe('App e2e', () => {
  let app: INestApplication
  let prisma: PrismaService
  let url: string
  beforeAll(async () => {
    const ModuleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()
    app = ModuleRef.createNestApplication()
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }))
    await app.init()
    prisma = app.get<PrismaService>(PrismaService)
    const config = app.get<ConfigService>(ConfigService)
    const port = config.get('PORT')
    url = `http://localhost:${port}`
    await app.listen(port)
    pactum.request.setBaseUrl(url)
  })

  afterAll(async () => {
    await app.close()
    await prisma.cleanDb()
  })

  describe('App', () => {
    it('should return home', () => {
      return pactum
        .spec()
        .get(url)
        .withRequestTimeout(1 * 1000) //cold start
        .expectStatus(HttpStatus.OK)
        .expectBodyContains({ message: 'app is up and running' })
        .inspect()
    })

    it('should return health status', () => {
      return pactum
        .spec()
        .get('/health')
        .withRequestTimeout(10 * 1000) //cold start for db
        .expectStatus(HttpStatus.OK)
        .expectJsonMatch('app', {
          ok: true,
          status: 'OK',
        })
        .expectJsonLike({
          db: {
            ok: true,
            status: 'OK',
          },
          app: {
            ok: true,
            status: 'OK',
          },
        })
    })
  })

  describe('Auth', function () {
    const dto: AuthDto = {
      wallet: 'eH9js2vBZGCxb3MmweX9zkJDHp7DmJuZS31tTrQFw8e',
    }
    describe('Sign in', () => {
      it('error: wallet must contain only letters and numbers', () => {
        return pactum
          .spec()
          .post(`${url}/auth/signin`)
          .withBody({
            wallet: 'AEESTENRTENSRT@1231',
          })
          .expectStatus(HttpStatus.BAD_REQUEST)
          .expectJsonLike({
            message: ['wallet must contain only letters and numbers'],
          })
          .inspect()
      })

      it('error: wallet must be longer than 32 chars', () => {
        return pactum
          .spec()
          .post(`${url}/auth/signin`)
          .withBody({
            wallet: 'rsteisnrten213123esrne',
          })
          .expectStatus(HttpStatus.BAD_REQUEST)
          .expectJsonLike({
            message: ['wallet must be longer than or equal to 32 characters'],
          })
          .inspect()
      })

      it('should throw if wallet empty', () => {
        return pactum.spec().post('/auth/signin').withBody({}).expectStatus(400).inspect()
      })

      it('should signin', () => {
        return pactum
          .spec()
          .post('/auth/signin')
          .withBody(dto)
          .expectStatus(200)
          .expectBodyContains('access_token')
          .stores('userToken', 'access_token')
          .expectCookiesLike('token')
      })
    })
  })
})
