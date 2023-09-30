/*
  Warnings:

  - You are about to drop the `Thumbnail` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `thumbnail` to the `course` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Thumbnail" DROP CONSTRAINT "Thumbnail_courseId_fkey";

-- AlterTable
ALTER TABLE "course" ADD COLUMN     "thumbnail" JSONB NOT NULL;

-- DropTable
DROP TABLE "Thumbnail";
