-- 1. Create the Table
CREATE TABLE IF NOT EXISTS "SubCountyEducation" (
    "scdeId" SERIAL PRIMARY KEY,
    "subCounty" VARCHAR(150) NOT NULL,
    "county" VARCHAR(100) NOT NULL,
    "countyCode" VARCHAR(10) NOT NULL,
    "officeAddress" VARCHAR(255) NULL,
    "userId" INT NULL, 
    "isActive" BOOLEAN NOT NULL DEFAULT TRUE,
    "status" VARCHAR(20) NOT NULL DEFAULT 'active',
    "createdAt" VARCHAR(40) NOT NULL,
    "updatedAt" VARCHAR(40) NULL,
    "deletedAt" VARCHAR(40) NULL,
    
    CONSTRAINT "FK_SubCountyEducation_Users" 
        FOREIGN KEY ("userId") REFERENCES "Users"("userId") 
        ON DELETE SET NULL
);

CREATE INDEX "IX_SubCountyEducation_subCounty" ON "SubCountyEducation" ("subCounty");

