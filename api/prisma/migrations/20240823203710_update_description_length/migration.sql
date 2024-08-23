/*
  Warnings:

  - You are about to alter the column `description` on the `Animal` table. The data in that column could be lost. The data in that column will be cast from `VarChar(280)` to `VarChar(275)`.

*/
-- AlterTable
ALTER TABLE "Animal" ALTER COLUMN "description" SET DATA TYPE VARCHAR(275);
