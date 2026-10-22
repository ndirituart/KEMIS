-- ============================================
-- KEMIS BasicEducation Table
-- ============================================
CREATE TABLE IF NOT EXISTS "BasicEducation" (
    "institutionId"         SERIAL PRIMARY KEY,
    
    -- Section 1: Institution Details
    "institutionName"       VARCHAR(255) NOT NULL,
    "institutionType"       VARCHAR(100) NOT NULL,
    "emailId"               VARCHAR(255) NOT NULL,
    "mobileNo"              VARCHAR(20)  NOT NULL,
    "headOfInstitution"     VARCHAR(255) NOT NULL,
    "postalAddressHoi"      VARCHAR(255) NULL,
    "county"                VARCHAR(100) NOT NULL,
    "subCounty"             VARCHAR(100) NOT NULL,
    "constituency"          VARCHAR(100) NULL,
    "postalAddressInstitution" VARCHAR(255) NULL,
    
    -- Application Details
    "applicationType"       VARCHAR(100) NOT NULL,
    "institutionLevel"      VARCHAR(100) NOT NULL,
    "certificateValid"      BOOLEAN      NOT NULL DEFAULT TRUE,
    "certificatePdfUrl"     VARCHAR(500) NULL, -- Storing file path/URL, not raw file
    "certificateNumber"     VARCHAR(100) NULL,
    "totalLearners"         INT          NOT NULL DEFAULT 0,

    -- Section 2: Coordinates
    "latitude"              VARCHAR(50)  NULL,
    "longitude"             VARCHAR(50)  NULL,

    -- Section 3: Other Details
    "accomodationType"      VARCHAR(100) NULL,
    "schoolCategory"        VARCHAR(100) NULL,

    -- Section 4: Auditing & Status
    "isActive"              BOOLEAN      NOT NULL DEFAULT TRUE,
    "status"                VARCHAR(20)  NOT NULL DEFAULT 'pending', -- e.g., pending, approved, rejected
    "createdAt"             VARCHAR(40)  NOT NULL DEFAULT (to_char(now() AT TIME ZONE 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS.MS"Z"')),
    "updatedAt"             VARCHAR(40)  NULL,
    "deletedAt"             VARCHAR(40)  NULL,

    -- Constraints
    CONSTRAINT "CHK_BasicEdu_institutionType" CHECK ("institutionType"IN (
        "Boy's School",
        "Girl's School"
    ))
    CONSTRAINT "CHK_BasicEdu_applicationType" CHECK ("applicationType" IN (
        'Regular School',
        'Regular School with Special Unit',
        'Special School',
        'Integrated School'
    )),
    CONSTRAINT "CHK_BasicEdu_institutionLevel" CHECK ("institutionLevel" IN (
        'Pre-Primary', 
        'Primary', 
        'Secondary', 
        'High School'
    )),
    CONSTRAINT "CHK_BasicEdu_schoolCategory" CHECK ("schoolCategory" IN(
        'Private',
        'Public',
        'Refugee Camp-based School '
    ))
);

-- Indexes for faster lookups
CREATE INDEX IF NOT EXISTS "IX_BasicEdu_county" ON "BasicEducation" ("county");
CREATE INDEX IF NOT EXISTS "IX_BasicEdu_status" ON "BasicEducation" ("status");
CREATE INDEX IF NOT EXISTS "IX_BasicEdu_email" ON "BasicEducation" ("emailId");