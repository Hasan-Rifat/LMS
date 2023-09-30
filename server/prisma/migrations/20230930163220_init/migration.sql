/*
  Warnings:

  - You are about to drop the column `course_id` on the `order` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "order" DROP CONSTRAINT "order_course_id_fkey";

-- AlterTable
ALTER TABLE "order" DROP COLUMN "course_id",
ADD COLUMN     "course" JSONB[];
