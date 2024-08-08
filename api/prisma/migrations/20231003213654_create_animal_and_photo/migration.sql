-- CreateEnum
CREATE TYPE "Sex" AS ENUM ('MALE', 'FEMALE');

-- CreateEnum
CREATE TYPE "Size" AS ENUM ('SMALL', 'MEDIUM', 'LARGE');

-- CreateEnum
CREATE TYPE "Species" AS ENUM ('CAT', 'DOG');

-- CreateTable
CREATE TABLE "Animal" (
    "id" SERIAL NOT NULL,
    "age" INTEGER NOT NULL,
    "breed" TEXT NOT NULL DEFAULT 'SRD',
    "coat" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "entryDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "sex" "Sex" NOT NULL,
    "size" "Size" NOT NULL,
    "species" "Species" NOT NULL,

    CONSTRAINT "Animal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Photo" (
    "publicId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "animalId" INTEGER NOT NULL,

    CONSTRAINT "Photo_pkey" PRIMARY KEY ("publicId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Photo_animalId_key" ON "Photo"("animalId");

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "Animal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
