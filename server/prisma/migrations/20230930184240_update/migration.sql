/*
  Warnings:

  - You are about to drop the column `thumbnail_id` on the `course` table. All the data in the column will be lost.
  - You are about to drop the `Thumbnail` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `thumbnailPublic_id` to the `course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumbnailUrl` to the `course` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "course" DROP CONSTRAINT "course_thumbnail_id_fkey";

-- DropIndex
DROP INDEX "benefit_course_id_key";

-- DropIndex
DROP INDEX "course_thumbnail_id_key";

-- DropIndex
DROP INDEX "prerequisite_course_id_key";

-- AlterTable
ALTER TABLE "course" DROP COLUMN "thumbnail_id",
ADD COLUMN     "thumbnailPublic_id" TEXT NOT NULL,
ADD COLUMN     "thumbnailUrl" TEXT NOT NULL;

-- DropTable
DROP TABLE "Thumbnail";
