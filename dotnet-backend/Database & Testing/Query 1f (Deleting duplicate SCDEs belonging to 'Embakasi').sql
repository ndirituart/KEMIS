DELETE FROM "Users"
WHERE "role" = 'Sub-County Director of Education (SCDE)'
  AND "subCounty" = 'Embakasi'
  AND "deletedAt" IS NULL
  -- This line protects the SCDE who is currently assigned as a supervisor
  AND "userId" NOT IN (
      SELECT DISTINCT "supervisorId" 
      FROM "BasicEducation" 
      WHERE "supervisorId" IS NOT NULL
  )

--Returning the Embakasi SCDE I deleted in SCDE table
INSERT INTO "SubCountyEducation" (
    "subCounty",
    "county",
    "countyCode",
    "officeAddress",
    "userId",
    "isActive",
    "status",
    "createdAt"
  )
 -- HERE IS THE ACTIVE USER
  VALUES (
    'Embakasi ',
    'Nairobi',
    '047',
    'County Education Office Embakasi',
    4,
    TRUE,
    'active',
    '2026-01-01T08:00:00Z'
  );

