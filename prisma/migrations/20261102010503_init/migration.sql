-- CreateTable
CREATE TABLE "item" (
    "name" TEXT NOT NULL,
    "description" TEXT,
    "rarity" TEXT
);

-- CreateTable
CREATE TABLE "character" (
    "name" TEXT NOT NULL,
    "description" TEXT
);

-- CreateTable
CREATE TABLE "world" (
    "name" TEXT NOT NULL,
    "description" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "item_name_key" ON "item"("name");

-- CreateIndex
CREATE UNIQUE INDEX "character_name_key" ON "character"("name");

-- CreateIndex
CREATE UNIQUE INDEX "world_name_key" ON "world"("name");
