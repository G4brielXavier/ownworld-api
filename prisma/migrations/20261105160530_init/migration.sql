-- CreateTable
CREATE TABLE "item" (
    "name" TEXT NOT NULL,
    "description" TEXT,
    "rarity" TEXT,
    "tags" TEXT DEFAULT '[]',
    "links" TEXT DEFAULT '[]'
);

-- CreateTable
CREATE TABLE "character" (
    "name" TEXT NOT NULL,
    "short_description" TEXT,
    "description" TEXT,
    "tags" TEXT DEFAULT '[]',
    "relations" TEXT DEFAULT '[]',
    "links" TEXT DEFAULT '[]'
);

-- CreateTable
CREATE TABLE "world" (
    "name" TEXT NOT NULL,
    "description" TEXT,
    "tags" TEXT DEFAULT '[]',
    "links" TEXT DEFAULT '[]'
);

-- CreateIndex
CREATE UNIQUE INDEX "item_name_key" ON "item"("name");

-- CreateIndex
CREATE UNIQUE INDEX "character_name_key" ON "character"("name");

-- CreateIndex
CREATE UNIQUE INDEX "world_name_key" ON "world"("name");
