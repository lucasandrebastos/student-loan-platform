/*
  Warnings:

  - You are about to drop the column `description` on the `Simulation` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Simulation` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Simulation` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Student` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Simulation" DROP CONSTRAINT "Simulation_studentId_fkey";

-- AlterTable
ALTER TABLE "Simulation" DROP COLUMN "description",
DROP COLUMN "name",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";
