BEGIN;

ALTER TABLE "BasicEducation" ADD COLUMN IF NOT EXISTS "assigneeId" INT;

WITH latest_inspection_assignment AS (
    SELECT DISTINCT ON (a."institutionId")
        a."institutionId", a."assigneeId", a."assignerId"
    FROM "InstitutionAssignments" a
    JOIN "Users" officer ON officer."userId" = a."assigneeId"
    WHERE officer.role = 'Sub-County Quality Assurance and Standards Officer (SCQASO)'
    ORDER BY a."institutionId", a."assignmentId" DESC
)
UPDATE "BasicEducation" school
SET "assigneeId" = a."assigneeId",
    "supervisorId" = COALESCE(school."supervisorId", (
        SELECT scde."userId"
        FROM "SubCountyEducation" scde
        WHERE scde."userId" = a."assignerId"
          AND scde."isActive"
          AND lower(trim(scde.county)) = lower(trim(school.county))
          AND lower(trim(scde."subCounty")) = lower(trim(school."subCounty"))
        LIMIT 1
    ))
FROM latest_inspection_assignment a
WHERE a."institutionId" = school."institutionId"
  AND school.status IN (
      'Assigned SCQASO', 'SCQASO Recommended', 'SCDE Approved', 'SCDE Rejected'
  )
  AND (school."assigneeId" IS DISTINCT FROM a."assigneeId" OR school."supervisorId" IS NULL);

COMMIT;
