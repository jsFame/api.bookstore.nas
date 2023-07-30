import { PrismaClient } from '@prisma/client'
import * as argon from 'argon2'
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

  const user1 = create_user({
    email: 'hiro@nas.com',
    password: 'hiro@Nas@@@@#',
  })
  const user2 = create_user({
    email: 'laciferin@nas.com',
    password: 'laciferin@Testing#',
  })

  await Promise.allSettled([user1, user2])
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
