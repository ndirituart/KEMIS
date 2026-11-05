CREATE TABLE IF NOT EXISTS "ScdeReports" (
    "reportId" SERIAL PRIMARY KEY,
    "scdeId" INT NOT NULL, --from users table
    "institutionId" INT NOT NULL,
    "summary" TEXT NOT NULL,
    "recommendation" TEXT NOT NULL,
    "status" VARCHAR(20) NOT NULL DEFAULT 'pending',
    "createdAt" VARCHAR(40) NOT NULL,
    "updatedAt" VARCHAR(40) NULL,
    
    CONSTRAINT "FK_ScdeReports_Users" FOREIGN KEY ("scdeId") REFERENCES "Users"("userId"),
    CONSTRAINT "FK_ScdeReports_Institutions" FOREIGN KEY ("institutionId") REFERENCES "BasicEducation"("institutionId")
);