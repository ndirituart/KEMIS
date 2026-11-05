CREATE TABLE IF NOT EXISTS "InstitutionDecisions" (
    "decisionId" SERIAL PRIMARY KEY,
    
    -- Links
    "institutionId" INT NOT NULL,
    "userId" INT NOT NULL,         -- The SCDE/SCQASO making the decision
    "updatedBy" INT NULL,          -- The CDE who might override/update it

    -- Decision Details
    "isApproved" BOOLEAN NOT NULL,
    "remarks" TEXT NOT NULL DEFAULT '',
    "rejectionReason" TEXT NULL,
    "decisionType" VARCHAR(50) NOT NULL, -- "SCDE recommendation" or "CDE Final"
    
    -- Auditing
    "createdAt" VARCHAR(40) NOT NULL,
    "updatedAt" VARCHAR(40) NULL,

    -- Constraints
    CONSTRAINT "FK_Decisions_Institution" 
        FOREIGN KEY ("institutionId") REFERENCES "BasicEducation"("institutionId") ON DELETE CASCADE,
        
    CONSTRAINT "FK_Decisions_User" 
        FOREIGN KEY ("userId") REFERENCES "Users"("userId") ON DELETE RESTRICT,
        
    CONSTRAINT "FK_Decisions_UpdatedBy" 
        FOREIGN KEY ("updatedBy") REFERENCES "Users"("userId") ON DELETE SET NULL
);

-- Indexes for fast lookups
CREATE INDEX IF NOT EXISTS "IX_Decisions_Institution" ON "InstitutionDecisions" ("institutionId");