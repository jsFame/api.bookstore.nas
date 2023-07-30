-- AlterTable
ALTER TABLE "users" ADD COLUMN     "point" INT4 NOT NULL DEFAULT 100;

-- CreateTable
CREATE TABLE "Book" (
    "id" INT4 NOT NULL GENERATED BY DEFAULT AS IDENTITY,
    "title" STRING NOT NULL,
    "writer" STRING NOT NULL,
    "coverImage" STRING NOT NULL,
    "point" INT4 NOT NULL,
    "tags" STRING[],
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" INT4 NOT NULL GENERATED BY DEFAULT AS IDENTITY,
    "customerId" INT4 NOT NULL,
    "bookId" INT4 NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;