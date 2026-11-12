SELECT * 
FROM "BasicEducation" 
WHERE "status" = 'Assigned SCDE';

--Then adding schools before this function from Assign SCDE to this table were done:
INSERT INTO "AssignedSchools" 
  ("institutionId", "institutionName", "county", "subCounty", "assigneeId", "assignerId", "status", "hasReport", "createdDate")
VALUES
-- 1. Embakasi Central Primary
(25, 'Embakasi Central Primary', 'Nairobi', 'Embakasi Central Sub Count', 4, 3, 'pending', FALSE, '2026-11-12T15:11:26.5352730Z'),

-- 2. Embakasi Central Senior
(27, 'Embakasi Central Senior', 'Nairobi', 'Embakasi Central Sub Count', 4, 3, 'pending', FALSE, '2026-11-12T15:14:39.6673796Z'),

-- 3. Embakasi East Senior
(30, 'Embakasi East Senior', 'Nairobi', 'Embakasi East Sub County', 4, 3, 'pending', FALSE, '2026-11-12T15:29:20.0702726Z'),

-- 4. Dagoretti South Junior
(23, 'Dagoretti South Junior', 'Nairobi', 'Dagoretti South Sub County', 4, 3, 'pending', FALSE, '2026-11-12T12:59:03.8974561Z'),

-- 5. Embakasi North Junior
(32, 'Embakasi North Junior', 'Nairobi', 'Embakasi North Sub County', 4, 3, 'pending', FALSE, '2026-11-12T16:33:23.1563777Z');