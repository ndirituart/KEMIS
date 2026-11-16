CREATE TABLE "Users" (
    "userId"         SERIAL PRIMARY KEY,
    "emailId"        VARCHAR(255) NOT NULL,
    "fullName"       VARCHAR(255) NOT NULL,
    "mobileNo"       VARCHAR(20)  NOT NULL,
    "password"       VARCHAR(255) NOT NULL,
    "role"           VARCHAR(100) NOT NULL,
    "nationalId"     VARCHAR(20)  NOT NULL,
    "county"         VARCHAR(100) NOT NULL,
    "subCounty"      VARCHAR(100) NOT NULL,
    "constituency"   VARCHAR(100) NOT NULL,
    "createdDate"    VARCHAR(40)  NOT NULL DEFAULT (to_char(now() AT TIME ZONE 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS.MS"Z"')),
    "updatedAt"      VARCHAR(40)  NULL,           -- ⬅️ NULL until first update
    "deletedAt"      VARCHAR(40)  NULL,           -- ⬅️ NULL unless soft-deleted
    "status"         VARCHAR(10)  NOT NULL DEFAULT 'active',

    CONSTRAINT "UQ_Users_emailId"    UNIQUE ("emailId"),
    CONSTRAINT "UQ_Users_nationalId" UNIQUE ("nationalId"),
    CONSTRAINT "UQ_Users_mobileNo"   UNIQUE ("mobileNo"),
    CONSTRAINT "CHK_Users_status" CHECK ("status" IN ('active', 'inactive')),
    CONSTRAINT "CHK_Users_role" CHECK ("role" IN (
        'Admin',
        'Head of Institution (HOI)',
        'County Director of Education (CDE)',
        'Sub-County Director of Education (SCDE)',
        'County Quality Assurance and Standards Officer (CQASO)',
        'Sub-County Quality Assurance and Standards Officer (SCQASO)',
        'IT Officer'
    ))
);

CREATE INDEX "IX_Users_role"    ON "Users" ("role");
CREATE INDEX "IX_Users_county"  ON "Users" ("county");
CREATE INDEX "IX_Users_status"  ON "Users" ("status");