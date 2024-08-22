/*
  Warnings:

  - You are about to drop the `Director` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DirectorPhoto` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DirectorPhoto" DROP CONSTRAINT "DirectorPhoto_directorId_fkey";

-- DropTable
DROP TABLE "Director";

-- DropTable
DROP TABLE "DirectorPhoto";
