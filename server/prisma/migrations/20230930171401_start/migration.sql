/*
  Warnings:

  - You are about to drop the column `courseId` on the `tag` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[course_id]` on the table `tag` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `course_id` to the `tag` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "tag" DROP CONSTRAINT "tag_courseId_fkey";

-- AlterTable
ALTER TABLE "tag" DROP COLUMN "courseId",
ADD COLUMN     "course_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "tag_course_id_key" ON "tag"("course_id");

-- AddForeignKey
ALTER TABLE "tag" ADD CONSTRAINT "tag_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
