CREATE TABLE IF NOT EXISTS "AssignedSchools" (
    "assignmentId" SERIAL PRIMARY KEY,
    -- Foreign Keys
    "institutionId" INT NOT NULL,
    --  BOTH POINT TO THE USERS TABLE 
    "assigneeId" INT NOT NULL,
    -- The SCDE (User)
    "assignerId" INT NOT NULL,
    -- The CDE (User)
    -- Data Columns
    "institutionName" VARCHAR(255) NOT NULL,
    "county" VARCHAR(100) NOT NULL,
    "subCounty" VARCHAR(100) NOT NULL,
    "status" VARCHAR(20) NOT NULL DEFAULT 'pending',
    "hasReport" BOOLEAN NOT NULL DEFAULT FALSE,
    "createdDate" VARCHAR(40) NOT NULL,
    "updatedAt" VARCHAR(40) NULL,
    "deletedAt" VARCHAR(40) NULL,
    -- Constraints
    CONSTRAINT "FK_AssignedSchools_Institution" FOREIGN KEY ("institutionId") REFERENCES "BasicEducation"("institutionId") ON DELETE CASCADE,
    CONSTRAINT "FK_AssignedSchools_Assignee" FOREIGN KEY ("assigneeId") REFERENCES "Users"("userId") ON DELETE RESTRICT,
    CONSTRAINT "FK_AssignedSchools_Assigner" FOREIGN KEY ("assignerId") REFERENCES "Users"("userId") ON DELETE RESTRICT
);
-- Indexes for faster filtering
CREATE INDEX IF NOT EXISTS "IX_AssignedSchools_Assignee" ON "AssignedSchools" ("assigneeId");
CREATE INDEX IF NOT EXISTS "IX_AssignedSchools_Assigner" ON "AssignedSchools" ("assignerId");