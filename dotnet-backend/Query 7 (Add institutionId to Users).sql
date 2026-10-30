-- 1. Add the nullable institutionId column
ALTER TABLE "Users" ADD COLUMN "institutionId" INT NULL;

-- 2. Add the foreign key linking to BasicEducation
ALTER TABLE "Users" 
ADD CONSTRAINT "FK_Users_BasicEducation" 
FOREIGN KEY ("institutionId") REFERENCES "BasicEducation"("institutionId") 
ON DELETE SET NULL;