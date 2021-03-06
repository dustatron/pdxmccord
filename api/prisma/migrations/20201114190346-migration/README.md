# Migration `20201114190346-migration`

This migration has been generated by Dusty McCord at 11/14/2020, 11:03:46 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "video" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "img" TEXT,
    "type" TEXT,
    "body" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
)

CREATE UNIQUE INDEX "video.title_unique" ON "video"("title")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201114190346-migration
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,22 @@
+datasource DS {
+  // optionally set multiple providers
+  // example: provider = ["sqlite", "postgresql"]
+  provider = ["sqlite", "postgresql"]
+  url = "***"
+}
+
+generator client {
+  provider      = "prisma-client-js"
+  binaryTargets = ["native", "rhel-openssl-1.0.x"]
+}
+
+
+model video {
+  id         Int     @id @default(autoincrement())
+  title      String  @unique
+  link       String
+  img        String?
+  type       String?
+  body       String
+  createdAt  DateTime  @default(now())
+}
```


