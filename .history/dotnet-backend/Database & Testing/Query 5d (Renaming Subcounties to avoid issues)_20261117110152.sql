SELECT * FROM "SubCountyEducation" WHERE "subCounty" LIKE '%Embakasi%';

--There was an issue because "Embakasi" is different from Embakasi East
UPDATE "SubCountyEducation"
SET "subCounty" = 'Embakasi'
WHERE "subCounty" = 'Embakasi East Sub County';

UPDATE "SubCountyEducation"
SET "subCounty" = 'Embakasi'
WHERE "subCounty" = 'Embakasi North Sub County';

