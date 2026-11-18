-- 2. Force the link in the DB
UPDATE "BasicEducation" SET "userId" = 13 WHERE "institutionId" = 18;

--Link schools to an SCDE
ALTER TABLE "BasicEducation" ADD COLUMN "supervisorId" INT NULL;

-- Link schools to an SCQASO
ALTER TABLE "BasicEducation" ADD COLUMN "assigneeId" INT NULL;

--Link schools assigned to SCQASO

-- 2. Force the link for SCQASO to an assigned School in the DB
UPDATE "BasicEducation" SET "assigneeId" = 147 WHERE "institutionId" = 36;
