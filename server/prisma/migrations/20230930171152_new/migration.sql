/*
  Warnings:

  - You are about to drop the column `course_id` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `tags` on the `course` table. All the data in the column will be lost.
  - You are about to drop the column `thumbnail` on the `course` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[course_id]` on the table `benefit` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[thumbnail_id]` on the table `course` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[course_id]` on the table `course_data` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[course_id]` on the table `prerequisite` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[course_data_id]` on the table `question` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `courseId` to the `category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumbnail_id` to the `course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `courseId` to the `tag` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "category" DROP CONSTRAINT "category_course_id_fkey";

-- AlterTable
ALTER TABLE "category" DROP COLUMN "course_id",
ADD COLUMN     "courseId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "course" DROP COLUMN "tags",
DROP COLUMN "thumbnail",
ADD COLUMN     "thumbnail_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "tag" ADD COLUMN     "courseId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "benefit_course_id_key" ON "benefit"("course_id");

-- CreateIndex
CREATE UNIQUE INDEX "course_thumbnail_id_key" ON "course"("thumbnail_id");

-- CreateIndex
CREATE UNIQUE INDEX "course_data_course_id_key" ON "course_data"("course_id");

-- CreateIndex
CREATE UNIQUE INDEX "prerequisite_course_id_key" ON "prerequisite"("course_id");

-- CreateIndex
CREATE UNIQUE INDEX "question_course_data_id_key" ON "question"("course_data_id");

-- AddForeignKey
ALTER TABLE "course" ADD CONSTRAINT "course_thumbnail_id_fkey" FOREIGN KEY ("thumbnail_id") REFERENCES "Thumbnail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tag" ADD CONSTRAINT "tag_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "category" ADD CONSTRAINT "category_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
