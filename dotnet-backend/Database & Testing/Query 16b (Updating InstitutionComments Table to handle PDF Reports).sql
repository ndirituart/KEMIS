-- 1. Add the new columns for the Report
ALTER TABLE "InstitutionComments"
ADD COLUMN "reportFileName" VARCHAR(255) NULL,
    ADD COLUMN "inspectionDate" VARCHAR(40) NULL;
-- 2. Add an index for the report (optional, but good for searching)
CREATE INDEX IF NOT EXISTS "IX_Comments_Report" ON "InstitutionComments" ("reportFileName");