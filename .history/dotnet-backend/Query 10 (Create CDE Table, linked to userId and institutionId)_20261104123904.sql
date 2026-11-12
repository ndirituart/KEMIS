CREATE TABLE IF NOT EXISTS "CountyEducation" (
    "countyEducationId" SERIAL PRIMARY KEY,
    "county" VARCHAR(100) NOT NULL,
    "countyCode" VARCHAR(10) NOT NULL,
    "officeAddress" VARCHAR(255) NULL,
    "userId" INT NULL, -- Assuming your Users table uses an INT primary key
    "isActive" BOOLEAN NOT NULL DEFAULT TRUE,
    "status" VARCHAR(20) NOT NULL DEFAULT 'pending',
    "createdAt" VARCHAR(40) NOT NULL,
    "updatedAt" VARCHAR(40) NULL,
    "deletedAt" VARCHAR(40) NULL,
    
    -- Foreign Key linking to Users
    CONSTRAINT "FK_CountyEducation_Users" 
        FOREIGN KEY ("userId") REFERENCES "Users"("userId") 
        ON DELETE SET NULL
);

-- Add an index for fast lookups by county
CREATE INDEX "IX_CountyEducation_county" ON "CountyEducation" ("county");