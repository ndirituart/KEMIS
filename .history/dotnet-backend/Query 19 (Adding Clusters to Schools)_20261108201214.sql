-- 1. Add the Cluster column (it can be NULL by default until the Admin sets it)
ALTER TABLE "BasicEducation" ADD COLUMN "cluster" VARCHAR(50) NULL;

-- 2. Add the constraint to enforce only the 4 allowed values
ALTER TABLE "BasicEducation" 
ADD CONSTRAINT "CHK_BasicEdu_cluster" 
CHECK ("cluster" IN ('Cluster 1', 'Cluster 2', 'Cluster 3', 'Private'));


--3. Add SupervisorId for SCDE
ALTER TABLE "BasicEducation" ADD COLUMN "supervisorId" INT NULL;

--4. 

