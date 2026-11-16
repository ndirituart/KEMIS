INSERT INTO "Users" 
  ("userId", "emailId", "fullName", "mobileNo", "password", "role", "nationalId", "county", "subCounty", "constituency", "createdDate", "status", "institutionId")
VALUES
-- Nairobi SCDEs
(71, 'scde.westlands@kemis.go.ke', 'John Kamau Njoroge', '+254700000071', 'Password@123', 'Sub-County Director of Education (SCDE)', '20000071', 'Nairobi', 'Westlands', 'Westlands', '2026-01-01T08:00:00Z', 'active', NULL),
(72, 'scde.dagoretti@kemis.go.ke', 'Mary Achieng Omondi', '+254700000072', 'Password@123', 'Sub-County Director of Education (SCDE)', '20000072', 'Nairobi', 'Dagoretti', 'Dagoretti North', '2026-01-01T08:00:00Z', 'active', NULL),
(73, 'scde.embakasi@kemis.go.ke', 'Peter Mwangi Maina', '+254700000073', 'Password@123', 'Sub-County Director of Education (SCDE)', '20000073', 'Nairobi', 'Embakasi East Sub County', 'Embakasi East', '2026-01-01T08:00:00Z', 'active', NULL),
(74, 'scde.kasarani@kemis.go.ke', 'Grace Wanjiku Kariuki', '+254700000074', 'Password@123', 'Sub-County Director of Education (SCDE)', '20000074', 'Nairobi', 'Kasarani', 'Kasarani', '2026-01-01T08:00:00Z', 'active', NULL),
-- Mombasa SCDEs
(75, 'scde.mvita@kemis.go.ke', 'Ali Hassan Omar', '+254700000075', 'Password@123', 'Sub-County Director of Education (SCDE)', '20000075', 'Mombasa', 'Mvita', 'Mvita', '2026-01-01T08:00:00Z', 'active', NULL),
-- Kisumu SCDEs
(76, 'scde.kisumucentral@kemis.go.ke', 'Ochieng Oduor Otieno', '+254700000076', 'Password@123', 'Sub-County Director of Education (SCDE)', '20000076', 'Kisumu', 'Kisumu Central', 'Kisumu Central', '2026-01-01T08:00:00Z', 'active', NULL),
-- Nakuru SCDEs
(77, 'scde.nakurucentral@kemis.go.ke', 'Kiprono Cheruiyot Kigen', '+254700000077', 'Password@123', 'Sub-County Director of Education (SCDE)', '20000077', 'Nakuru', 'Nakuru Town East', 'Nakuru Town East', '2026-01-01T08:00:00Z', 'active', NULL)
ON CONFLICT ("emailId") DO NOTHING;