/*
  Warnings:

  - You are about to drop the column `qusstion` on the `question` table. All the data in the column will be lost.
  - Added the required column `question` to the `question` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "question" DROP COLUMN "qusstion",
ADD COLUMN     "question" TEXT NOT NULL;
