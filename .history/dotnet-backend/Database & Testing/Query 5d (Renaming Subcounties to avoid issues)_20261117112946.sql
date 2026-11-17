SELECT * FROM "SubCountyEducation" WHERE "subCounty" LIKE '%Embakasi%';

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

