-- Add the foreign key to BasicEducation (it must be NULLABLE)
ALTER TABLE "BasicEducation" ADD COLUMN "userId" INT NULL;

-- Link it to the BasicEducation table
ALTER TABLE "BasicEducation" 
ADD CONSTRAINT "FK_BasicEducation_Users" 
FOREIGN KEY ("userId") REFERENCES "Users"("userId") 
ON DELETE SET NULL;