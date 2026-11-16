CREATE TABLE IF NOT EXISTS "InstitutionComments" (
    "commentId" SERIAL PRIMARY KEY,
    
    -- Foreign Keys
    "institutionId" INT NOT NULL,
    "userId" INT NOT NULL,
    "updatedBy" INT NULL, -- Optional because it's only set if someone edits the comment

    -- Content
    "commentText" TEXT NOT NULL, 
    
    -- Auditing
    "createdAt" VARCHAR(40) NOT NULL,
    "updatedAt" VARCHAR(40) NULL,

    -- Constraints
    CONSTRAINT "FK_Comments_Institution" 
        FOREIGN KEY ("institutionId") REFERENCES "BasicEducation"("institutionId") ON DELETE CASCADE,
        
    CONSTRAINT "FK_Comments_User" 
        FOREIGN KEY ("userId") REFERENCES "Users"("userId") ON DELETE RESTRICT,
        
    CONSTRAINT "FK_Comments_UpdatedBy" 
        FOREIGN KEY ("updatedBy") REFERENCES "Users"("userId") ON DELETE SET NULL
);

-- Indexes for fast lookups
CREATE INDEX IF NOT EXISTS "IX_Comments_Institution" ON "InstitutionComments" ("institutionId");