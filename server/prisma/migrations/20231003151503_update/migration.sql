/*
  Warnings:

  - You are about to drop the `comment_replay` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "comment_replay" DROP CONSTRAINT "comment_replay_comment_id_fkey";

-- DropForeignKey
ALTER TABLE "comment_replay" DROP CONSTRAINT "comment_replay_user_id_fkey";

-- DropTable
DROP TABLE "comment_replay";

-- CreateTable
CREATE TABLE "CommentReplayForUser" (
    "id" TEXT NOT NULL,
    "reply" TEXT NOT NULL,
    "comment_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CommentReplayForUser_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CommentReplayForUser" ADD CONSTRAINT "CommentReplayForUser_comment_id_fkey" FOREIGN KEY ("comment_id") REFERENCES "comment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommentReplayForUser" ADD CONSTRAINT "CommentReplayForUser_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
