/*
  Warnings:

  - You are about to drop the column `thumbnail` on the `course` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "course" DROP COLUMN "thumbnail";

-- CreateTable
CREATE TABLE "Thumbnail" (
    "id" TEXT NOT NULL,
    "public_id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,

    CONSTRAINT "Thumbnail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Thumbnail_public_id_key" ON "Thumbnail"("public_id");

-- CreateIndex
CREATE UNIQUE INDEX "Thumbnail_courseId_key" ON "Thumbnail"("courseId");

-- AddForeignKey
ALTER TABLE "Thumbnail" ADD CONSTRAINT "Thumbnail_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
