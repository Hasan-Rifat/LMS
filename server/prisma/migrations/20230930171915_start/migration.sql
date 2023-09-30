/*
  Warnings:

  - You are about to drop the column `course_id` on the `benefit` table. All the data in the column will be lost.
  - You are about to drop the column `course_id` on the `prerequisite` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[benefit_id]` on the table `course` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[prerequisite_id]` on the table `course` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `benefit_id` to the `course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prerequisite_id` to the `course` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "benefit" DROP CONSTRAINT "benefit_course_id_fkey";

-- DropForeignKey
ALTER TABLE "prerequisite" DROP CONSTRAINT "prerequisite_course_id_fkey";

-- DropIndex
DROP INDEX "benefit_course_id_key";

-- DropIndex
DROP INDEX "prerequisite_course_id_key";

-- AlterTable
ALTER TABLE "benefit" DROP COLUMN "course_id";

-- AlterTable
ALTER TABLE "course" ADD COLUMN     "benefit_id" TEXT NOT NULL,
ADD COLUMN     "prerequisite_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "prerequisite" DROP COLUMN "course_id";

-- CreateIndex
CREATE UNIQUE INDEX "course_benefit_id_key" ON "course"("benefit_id");

-- CreateIndex
CREATE UNIQUE INDEX "course_prerequisite_id_key" ON "course"("prerequisite_id");

-- AddForeignKey
ALTER TABLE "course" ADD CONSTRAINT "course_benefit_id_fkey" FOREIGN KEY ("benefit_id") REFERENCES "benefit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course" ADD CONSTRAINT "course_prerequisite_id_fkey" FOREIGN KEY ("prerequisite_id") REFERENCES "prerequisite"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
