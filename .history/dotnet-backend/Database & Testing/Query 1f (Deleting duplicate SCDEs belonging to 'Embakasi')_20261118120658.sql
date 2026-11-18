DELETE FROM "Users"
WHERE "role" = 'Sub-County Director of Education (SCDE)'
  AND "subCounty" = 'Embakasi'
  AND "deletedAt" IS NULL
  -- This line protects the SCDE who is currently assigned as a supervisor
  AND "userId" NOT IN (
      SELECT DISTINCT "supervisorId" 
      FROM "BasicEducation" 
      WHERE "supervisorId" IS NOT NULL
  );