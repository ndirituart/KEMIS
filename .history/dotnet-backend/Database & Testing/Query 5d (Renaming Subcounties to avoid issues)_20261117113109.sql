SELECT *
FROM "SubCountyEducation"
WHERE "subCounty" LIKE '%Embakasi%';
--There was an issue because "Embakasi" is different from Embakasi East/West/Central/South/North
UPDATE "SubCountyEducation"
SET "subCounty" = 'Embakasi'
WHERE "subCounty" = 'Embakasi East Sub County';
UPDATE "SubCountyEducation"
SET "subCounty" = 'Embakasi'
WHERE "subCounty" = 'Embakasi North Sub County';
UPDATE "SubCountyEducation"
SET "subCounty" = 'Embakasi'
WHERE "subCounty" = 'Embakasi South Sub County';
UPDATE "SubCountyEducation"
SET "subCounty" = 'Embakasi'
WHERE "subCounty" = 'Embakasi West Sub County';
UPDATE "SubCountyEducation"
SET "subCounty" = 'Embakasi'
WHERE "subCounty" = 'Embakasi Central Sub County';
-- Fetching schools for SCDE
SELECT "institutionId",
  "institutionName",
  "subCounty",
  "status"
FROM "BasicEducation"
WHERE "subCounty" ILIKE '%Embakasi%';
-- Issues with PostgreSQL being case-sensitive by default with status, let me fix that
-- Standardize all statuses to Title Case
UPDATE "BasicEducation"
SET "status" = CASE
    WHEN "status" = 'pending' THEN 'Pending'
    WHEN "status" = 'SCQASO Recommended' THEN 'Assigned SCQA'
    WHEN "status" = 'approved' THEN 'Approved'
    WHEN "status" = 'rejected' THEN 'Rejected'
    WHEN "status" = 'assigned scde' THEN 'Assigned SCDE'
    ELSE "status"
  END;
-- Verify the change
SELECT DISTINCT "status"
FROM "BasicEducation";