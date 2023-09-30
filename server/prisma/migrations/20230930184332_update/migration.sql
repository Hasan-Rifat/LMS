/*
  Warnings:

  - A unique constraint covering the columns `[course_id]` on the table `benefit` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[course_id]` on the table `prerequisite` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "benefit_course_id_key" ON "benefit"("course_id");

-- CreateIndex
CREATE UNIQUE INDEX "prerequisite_course_id_key" ON "prerequisite"("course_id");
