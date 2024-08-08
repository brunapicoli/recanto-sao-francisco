/*
  Warnings:

  - You are about to drop the `Photo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Photo" DROP CONSTRAINT "Photo_animalId_fkey";

-- DropTable
DROP TABLE "Photo";

-- CreateTable
CREATE TABLE "Director" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "position" TEXT NOT NULL,

    CONSTRAINT "Director_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DirectorPhoto" (
    "publicId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "directorId" INTEGER NOT NULL,

    CONSTRAINT "DirectorPhoto_pkey" PRIMARY KEY ("publicId")
);

-- CreateTable
CREATE TABLE "AnimalPhoto" (
    "publicId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "animalId" INTEGER NOT NULL,

    CONSTRAINT "AnimalPhoto_pkey" PRIMARY KEY ("publicId")
);

-- CreateIndex
CREATE UNIQUE INDEX "DirectorPhoto_directorId_key" ON "DirectorPhoto"("directorId");

-- CreateIndex
CREATE UNIQUE INDEX "AnimalPhoto_animalId_key" ON "AnimalPhoto"("animalId");

-- AddForeignKey
ALTER TABLE "DirectorPhoto" ADD CONSTRAINT "DirectorPhoto_directorId_fkey" FOREIGN KEY ("directorId") REFERENCES "Director"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnimalPhoto" ADD CONSTRAINT "AnimalPhoto_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "Animal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
