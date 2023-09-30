/*
  Warnings:

  - You are about to drop the column `courseId` on the `Thumbnail` table. All the data in the column will be lost.
  - Added the required column `thumbnail` to the `course` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Thumbnail" DROP CONSTRAINT "Thumbnail_courseId_fkey";

-- DropIndex
DROP INDEX "Thumbnail_courseId_key";

-- AlterTable
ALTER TABLE "Thumbnail" DROP COLUMN "courseId";

-- AlterTable
ALTER TABLE "course" ADD COLUMN     "thumbnail" JSONB NOT NULL;
