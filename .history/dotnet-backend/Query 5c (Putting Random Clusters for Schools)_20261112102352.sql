-- 1. Drop the old constraint
ALTER TABLE "BasicEducation" DROP CONSTRAINT IF EXISTS "CHK_BasicEdu_cluster";

-- 2. Add the new constraint with all 5 options
ALTER TABLE "BasicEducation" 
ADD CONSTRAINT "CHK_BasicEdu_cluster" 
CHECK ("cluster" IN ('Cluster 1', 'Cluster 2', 'Cluster 3', 'Cluster 4', 'Private'));


UPDATE "BasicEducation"
SET "cluster" = (
  ARRAY['Cluster 1', 'Cluster 2', 'Cluster 3', 'Cluster 4', 'Private']::varchar[]
)[floor(random() * 5 + 1)]
WHERE "cluster" IS NULL;