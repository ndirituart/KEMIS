-- 2. Force the link in the DB
UPDATE "BasicEducation" SET "userId" = 13 WHERE "institutionId" = 18;


ALTER TABLE "BasicEducation" ADD COLUMN "supervisorId" INT NULL;

-- Link schools to an SCQASO
ALTER TABLE "BasicEducation" ADD COLUMN "assigneeId" INT NULL;