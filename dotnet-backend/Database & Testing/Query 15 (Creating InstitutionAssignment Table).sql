DROP TABLE IF EXISTS "InstitutionAssignments";

CREATE TABLE "InstitutionAssignments" (
    "assignmentId" SERIAL PRIMARY KEY,
    "institutionId" INT NOT NULL,
    "assigneeId" INT NOT NULL, 
    "assignerId" INT NOT NULL, 
    "status" VARCHAR(20) NOT NULL DEFAULT 'pending',
    "hasReport" BOOLEAN NOT NULL DEFAULT FALSE,
    "assignedAt" VARCHAR(40) NOT NULL,
    "updatedAt" VARCHAR(40) NULL,

    CONSTRAINT "FK_Assignments_Institution" 
        FOREIGN KEY ("institutionId") REFERENCES "BasicEducation"("institutionId") ON DELETE CASCADE,
        
    CONSTRAINT "FK_Assignments_Assignee" 
        FOREIGN KEY ("assigneeId") REFERENCES "Users"("userId") ON DELETE RESTRICT,
        
    CONSTRAINT "FK_Assignments_Assigner" 
        FOREIGN KEY ("assignerId") REFERENCES "Users"("userId") ON DELETE RESTRICT
);