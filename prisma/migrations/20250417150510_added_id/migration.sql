/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `cars` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "cars" ADD COLUMN     "id" SERIAL NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "cars_id_key" ON "cars"("id");
