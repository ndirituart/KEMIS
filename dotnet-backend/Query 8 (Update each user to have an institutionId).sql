-- ============================================
-- KEMIS Users — Seed Data (Updated with institutionId)
-- Password for ALL users below is: Password@123
-- (BCrypt hash, work factor 11)
-- ============================================
INSERT INTO "Users"
  ("emailId", "fullName", "mobileNo", "password", "role", "nationalId",
   "county", "subCounty", "constituency", "createdDate",
   "updatedAt", "deletedAt", "status", "institutionId")
VALUES
-- 1. ADMIN — Ministry Official (No School)
('admin@kemis.go.ke', 'Alice Wanjiku Mwangi', '+254700000001',
 '123bghi45!',
 'Admin', '10000001', 'Nairobi', 'Starehe', 'Starehe',
 '2025-11-01T08:00:00.000Z', NULL, NULL, 'active', NULL),

-- 2. HOI — Linked to School ID 1
('hoi@kemis.go.ke', 'Brian Otieno Ochieng', '+254700000002',
 'bNmKdEfG2',
 'Head of Institution (HOI)', '10000002', 'Nairobi', 'Westlands', 'Westlands',
 '2025-10-15T09:30:00.000Z', '2025-12-10T14:22:11.500Z', NULL, 'active', 1),

-- 3. CDE — Ministry Official (No School)
('cde@kemis.go.ke', 'Catherine Njeri Kamau', '+254700000003',
 'NmKdEfG2',
 'County Director of Education (CDE)', '10000003', 'Nairobi', 'Kasarani', 'Kasarani',
 '2025-09-20T11:15:00.000Z', NULL, NULL, 'active', NULL),

-- 4. SCDE — Ministry Official (No School)
('scde@kemis.go.ke', 'David Kimani Njoroge', '+254700000004',
 '$2a$11$X',
 'Sub-County Director of Education (SCDE)', '10000004', 'Nairobi', 'Embakasi', 'Embakasi East',
 '2025-08-05T07:45:00.000Z', NULL, NULL, 'active', NULL),

-- 5. CQASO — Ministry Official (No School)
('cqaso@kemis.go.ke', 'Esther Achieng Odhiambo', '+254700000005',
 '3rT1oUleY9C0',
 'County Quality Assurance and Standards Officer (CQASO)', '10000005',
 'Nairobi', 'Langata', 'Langata',
 '2025-07-12T10:00:00.000Z', '2025-12-01T16:00:00.000Z', NULL, 'active', NULL),

-- 6. SCQASO — Ministry Official (No School)
('scqaso@kemis.go.ke', 'Francis Mutua Kilonzo', '+254700000006',
 'pVbJdK6Zf',
 'Sub-County Quality Assurance and Standards Officer (SCQASO)', '10000006',
 'Nairobi', 'Kibra', 'Kibra',
 '2025-06-18T13:30:00.000Z', NULL, NULL, 'active', NULL),

-- 7. IT OFFICER — Linked to School ID 1
('itofficer@kemis.go.ke', 'Grace Wairimu Kariuki', '+254700000007',
 'LpVbJdK6Zf3rT',
 'IT Officer', '10000007', 'Nairobi', 'Dagoretti', 'Dagoretti North',
 '2025-05-22T09:00:00.000Z', NULL, NULL, 'active', 1),

-- 8. INACTIVE — Linked to School ID 2
('inactive.user@kemis.go.ke', 'Peter Njoroge Mwangi', '+254700000008',
 '$20hV5kQx8m',
 'IT Officer', '10000008', 'Nairobi', 'Roysambu', 'Roysambu',
 '2025-04-10T12:00:00.000Z', '2025-12-20T08:30:00.000Z', NULL, 'inactive', 2),

-- 9. SOFT-DELETED — Linked to School ID 3
('deleted.user@kemis.go.ke', 'Mary Atieno Wekesa', '+254700000009',
 '$1C0hV5kQ',
 'Head of Institution (HOI)', '10000009', 'Nairobi', 'Mathare', 'Mathare',
 '2025-03-01T09:00:00.000Z', '2025-11-15T15:45:00.000Z', '2025-11-15T15:45:00.000Z', 'inactive', 3),

-- 10. HOI in a different county — Linked to School ID 4
('hoi.mombasa@kemis.go.ke', 'Hassan Omar Juma', '+254700000010',
 'V5kQx8mNp',
 'Head of Institution (HOI)', '10000010', 'Mombasa', 'Mvita', 'Mvita',
 '2025-02-14T10:20:00.000Z', NULL, NULL, 'active', 4)
ON CONFLICT ("emailId") DO NOTHING;