/*
  Warnings:

  - You are about to drop the column `course_id` on the `tag` table. All the data in the column will be lost.
  - Added the required column `tags` to the `course` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "tag" DROP CONSTRAINT "tag_course_id_fkey";

-- AlterTable
ALTER TABLE "course" ADD COLUMN     "tags" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "tag" DROP COLUMN "course_id";
