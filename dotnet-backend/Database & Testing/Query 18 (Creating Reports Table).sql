CREATE TABLE IF NOT EXISTS "Reports" (
    "reportId" SERIAL PRIMARY KEY,
    
    -- Links
    "institutionId" INT NOT NULL,
    "scdeId" INT NOT NULL, -- The SCDE who wrote the report
    
    -- Data
    "institutionName" VARCHAR(255) NOT NULL, -- Cached for convenience
    "summary" TEXT NOT NULL,
    "recommendation" TEXT NOT NULL,
    "status" VARCHAR(50) NOT NULL DEFAULT 'submitted', 
    
    -- Auditing
    "createdAt" VARCHAR(40) NOT NULL,
    "updatedAt" VARCHAR(40) NULL,

    -- Constraints
    CONSTRAINT "FK_Reports_Institution" 
        FOREIGN KEY ("institutionId") REFERENCES "BasicEducation"("institutionId") ON DELETE CASCADE,
        
    CONSTRAINT "FK_Reports_SCDE" 
        FOREIGN KEY ("scdeId") REFERENCES "Users"("userId") ON DELETE RESTRICT
);

-- Indexes for fast lookups
CREATE INDEX IF NOT EXISTS "IX_Reports_Institution" ON "Reports" ("institutionId");
CREATE INDEX IF NOT EXISTS "IX_Reports_SCDE" ON "Reports" ("scdeId");