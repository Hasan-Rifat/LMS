/*
  Warnings:

  - You are about to drop the column `publice_id` on the `avater` table. All the data in the column will be lost.
  - Added the required column `public_id` to the `avater` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "avater" DROP COLUMN "publice_id",
ADD COLUMN     "public_id" TEXT NOT NULL;
