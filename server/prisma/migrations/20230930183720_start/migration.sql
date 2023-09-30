/*
  Warnings:

  - You are about to drop the column `benefit_id` on the `course` table. All the data in the column will be lost.
  - You are about to drop the column `prerequisite_id` on the `course` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[course_id]` on the table `benefit` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[course_id]` on the table `prerequisite` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `course_id` to the `benefit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `course_id` to the `prerequisite` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "course" DROP CONSTRAINT "course_benefit_id_fkey";

-- DropForeignKey
ALTER TABLE "course" DROP CONSTRAINT "course_prerequisite_id_fkey";

-- DropIndex
DROP INDEX "course_benefit_id_key";

-- DropIndex
DROP INDEX "course_prerequisite_id_key";

-- AlterTable
ALTER TABLE "benefit" ADD COLUMN     "course_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "course" DROP COLUMN "benefit_id",
DROP COLUMN "prerequisite_id";

-- AlterTable
ALTER TABLE "prerequisite" ADD COLUMN     "course_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "benefit_course_id_key" ON "benefit"("course_id");

-- CreateIndex
CREATE UNIQUE INDEX "prerequisite_course_id_key" ON "prerequisite"("course_id");

-- AddForeignKey
ALTER TABLE "benefit" ADD CONSTRAINT "benefit_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prerequisite" ADD CONSTRAINT "prerequisite_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
