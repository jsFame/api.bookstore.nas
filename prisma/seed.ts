import { PrismaClient } from '@prisma/client'
import argon from 'argon2'
import { AuthDto } from '../src/auth/dto'

const prisma = new PrismaClient()

async function create_user(dto: AuthDto) {
  const hash = await argon.hash(dto.password)
  const user = await prisma.user.create({
    data: {
      email: dto.email,
      hash: hash,
    },
  })
  console.log({ created: user })
  return user
}

async function main() {
  await prisma.user.deleteMany()

  const hiro = await create_user({
    email: 'hiro@nas.com',
    password: 'hiro@Nas@@@@#',
  })

  console.debug({ hiro })

  const book = await prisma.book.create({
    data: {
      title: 'Hiro: my life',
      writer: 'Hiro Hamada',
      coverImage:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbig-hero-6-fanon.fandom.com%2Fwiki%2FHiro_Hamada%2FGallery&psig=AOvVaw0UOJKW-dwJu5pnx1pPqq7H&ust=1690837586355000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCICf5P-qt4ADFQAAAAAdAAAAABAE',
      point: 1,
      tags: ['autobiography', 'hiro'],
    },
  })

  console.debug({ book })

  const order = await prisma.order.create({
    data: {
      bookId: book.id,
      customerId: hiro.id,
    },
  })

  console.debug({ order })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
