BEGIN;

ALTER TABLE "InstitutionComments"
    ADD COLUMN IF NOT EXISTS "reportFileName" TEXT,
    ADD COLUMN IF NOT EXISTS "inspectionDate" VARCHAR(10);

ALTER TABLE "Reports"
    ADD COLUMN IF NOT EXISTS "inspectionCommentId" INT
        REFERENCES "InstitutionComments" ("commentId") ON DELETE SET NULL;

COMMIT;
