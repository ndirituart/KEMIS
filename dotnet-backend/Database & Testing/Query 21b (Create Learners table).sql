DROP TABLE IF EXISTS "Learners";

CREATE TABLE "Learners" (
    "learnerId" VARCHAR (50) PRIMARY KEY,
    "institutionId" INT NOT NULL,
    "institutionName" VARCHAR(255) NOT NULL,
    "cluster" VARCHAR(50) NULL,
    "county" VARCHAR(100) NULL,
    "subCounty" VARCHAR(100) NULL,
    "uli" VARCHAR(50) UNIQUE NOT NULL,
    
    -- (A) Personal Details
    "firstName" VARCHAR(100) NOT NULL,
    "middleName" VARCHAR(100) NULL,
    "lastName" VARCHAR(100) NOT NULL,
    "countryOfResidence" VARCHAR(100) NULL,
    "countyOfBirth" VARCHAR(100) NULL,
    "subCountyOfBirth" VARCHAR(100) NULL,
    "locationOfBirth" VARCHAR(150) NULL,
    "knecAssessmentNumber" VARCHAR(50) NULL,
    "learnerInterest" VARCHAR(100) NULL,
    "medicalCondition" TEXT NULL,
    "religion" VARCHAR(100) NULL,
    "educationLevel" VARCHAR(100) NULL,
    
    -- Biographical Info
    "gender" VARCHAR(20) NULL,
    "dateOfBirth" VARCHAR(20) NULL,
    "isOrphan" BOOLEAN DEFAULT FALSE,
    "isSne" BOOLEAN DEFAULT FALSE,
    "nationality" VARCHAR(100) DEFAULT 'Kenyan',
    "citizenshipStatus" VARCHAR(100) NULL,
    "identificationDocumentType" VARCHAR(100) NULL,
    "birthCertificateNumber" VARCHAR(50) NULL,
    "grade" VARCHAR(50) NULL,
    "boardingStatus" VARCHAR(50) NULL,
    
    -- Assistive Devices
    "assistiveDeviceRequired" VARCHAR(50) NULL,
    "assistiveDeviceName" VARCHAR(100) NULL,
    "assistiveDeviceType" VARCHAR(100) NULL,
    
    -- (B) Parent/Guardian Details
    "parentFirstName" VARCHAR(100) NULL,
    "parentMiddleName" VARCHAR(100) NULL,
    "parentLastName" VARCHAR(100) NULL,
    "parentRelationship" VARCHAR(50) NULL,
    "parentIdType" VARCHAR(50) NULL,
    "parentNationalId" VARCHAR(50) NULL,
    "parentCountry" VARCHAR(100) NULL,
    "parentMobileNo" VARCHAR(20) NULL,
    "parentEmailId" VARCHAR(100) NULL,
    
    -- Auditing & Status
    "status" VARCHAR(20) NOT NULL DEFAULT 'active',
    "createdAt" VARCHAR(40) NOT NULL,
    "updatedAt" VARCHAR(40) NULL,
    "deletedAt" VARCHAR(40) NULL,

    CONSTRAINT "FK_Learners_Institution" 
        FOREIGN KEY ("institutionId") REFERENCES "BasicEducation"("institutionId") ON DELETE CASCADE
);