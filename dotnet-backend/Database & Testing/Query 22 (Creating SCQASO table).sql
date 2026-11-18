CREATE TABLE IF NOT EXISTS "SubCountyQualityAssurance" (
    "scqasoId" SERIAL PRIMARY KEY,
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
    
    -- Foreign Key linking to Users
    CONSTRAINT "FK_SubCountyQA_Users" 
        FOREIGN KEY ("userId") REFERENCES "Users"("userId") 
        ON DELETE SET NULL
);

-- Index for fast lookups by subcounty
CREATE INDEX "IX_SubCountyQA_subCounty" ON "SubCountyQualityAssurance" ("subCounty");