/*
  Warnings:

  - You are about to drop the `faq_item` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `answer` to the `faq` table without a default value. This is not possible if the table is not empty.
  - Added the required column `question` to the `faq` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "faq_item" DROP CONSTRAINT "faq_item_faq_id_fkey";

-- AlterTable
ALTER TABLE "faq" ADD COLUMN     "answer" TEXT NOT NULL,
ADD COLUMN     "question" TEXT NOT NULL;

-- DropTable
DROP TABLE "faq_item";
