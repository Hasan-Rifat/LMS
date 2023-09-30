/*
  Warnings:

  - You are about to drop the column `thumbnailPublic_id` on the `course` table. All the data in the column will be lost.
  - You are about to drop the column `thumbnailUrl` on the `course` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "course" DROP COLUMN "thumbnailPublic_id",
DROP COLUMN "thumbnailUrl";

-- CreateTable
CREATE TABLE "Thumbnail" (
    "id" TEXT NOT NULL,
    "public_id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "courseId" TEXT,

    CONSTRAINT "Thumbnail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Thumbnail_public_id_key" ON "Thumbnail"("public_id");

-- CreateIndex
CREATE UNIQUE INDEX "Thumbnail_courseId_key" ON "Thumbnail"("courseId");

-- AddForeignKey
ALTER TABLE "Thumbnail" ADD CONSTRAINT "Thumbnail_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE SET NULL ON UPDATE CASCADE;
