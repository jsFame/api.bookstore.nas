/*
  Warnings:

  - A unique constraint covering the columns `[walletId,name]` on the table `boards` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[boardId,name]` on the table `columns` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[taskId,title]` on the table `subtasks` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[columnId,title]` on the table `tasks` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "boards_walletId_name_key" ON "boards"("walletId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "columns_boardId_name_key" ON "columns"("boardId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "subtasks_taskId_title_key" ON "subtasks"("taskId", "title");

-- CreateIndex
CREATE UNIQUE INDEX "tasks_columnId_title_key" ON "tasks"("columnId", "title");
