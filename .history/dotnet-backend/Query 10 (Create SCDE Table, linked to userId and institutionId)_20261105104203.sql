CREATE TABLE IF NOT EXISTS "ScdeReports" (
    "reportId" SERIAL PRIMARY KEY, 
    "scdeId" INT NOT NULL,
    "institutionId" INT NOT NULL,
    "summary" TEXT NOT NULL,
    "recommendation" TEXT NOT NULL,
    "status" VARCHAR(20) NOT NULL DEFAULT 'pending',
    "createdAt" VARCHAR(40) NOT NULL,
    "updatedAt" VARCHAR(40) NULL
);