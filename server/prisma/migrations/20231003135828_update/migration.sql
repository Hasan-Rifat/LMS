/*
  Warnings:

  - You are about to drop the column `commentId` on the `comment_replay` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `comment_replay` table. All the data in the column will be lost.
  - You are about to drop the `comments` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[comment_id]` on the table `comment_replay` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `comment_id` to the `comment_replay` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `comment_replay` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "comment_replay" DROP CONSTRAINT "comment_replay_commentId_fkey";

-- DropForeignKey
ALTER TABLE "comment_replay" DROP CONSTRAINT "comment_replay_userId_fkey";

-- DropForeignKey
ALTER TABLE "comments" DROP CONSTRAINT "comments_courseId_fkey";

-- DropForeignKey
ALTER TABLE "comments" DROP CONSTRAINT "comments_reviewId_fkey";

-- AlterTable
ALTER TABLE "comment_replay" DROP COLUMN "commentId",
DROP COLUMN "userId",
ADD COLUMN     "comment_id" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "comments";

-- CreateTable
CREATE TABLE "comment" (
    "id" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "reviewId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "comment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "comment_replay_comment_id_key" ON "comment_replay"("comment_id");

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "review"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment_replay" ADD CONSTRAINT "comment_replay_comment_id_fkey" FOREIGN KEY ("comment_id") REFERENCES "comment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment_replay" ADD CONSTRAINT "comment_replay_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
