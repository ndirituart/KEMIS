UPDATE "BasicEducation"
SET "cluster" = (
  ARRAY['Cluster 1', 'Cluster 2', 'Cluster 3', 'Cluster 4', 'Private' ]::varchar[]
)[floor(random() * 5 + 1)]
WHERE "cluster" IS NULL;

-- Verify the update
SELECT "cluster", COUNT(*) 
FROM "BasicEducation" 
GROUP BY "cluster";