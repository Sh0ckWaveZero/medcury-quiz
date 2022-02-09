-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "telephone" TEXT NOT NULL,
    "name" TEXT,
    "pin_code" INTEGER
);

-- CreateIndex
CREATE UNIQUE INDEX "User_telephone_key" ON "User"("telephone");
