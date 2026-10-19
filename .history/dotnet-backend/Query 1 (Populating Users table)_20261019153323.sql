-- ============================================
-- KEMIS Users — Seed Data
-- Password for ALL users below is: Password@123
-- (BCrypt hash, work factor 11)
-- ============================================
INSERT INTO "Users"
  ("emailId", "fullName", "mobileNo", "password", "role", "nationalId",
   "county", "subCounty", "constituency", "createdDate",
   "updatedAt", "deletedAt", "status")
VALUES
-- 1. ADMIN — active, never updated, never deleted
('admin@kemis.go.ke', 'Alice Wanjiku Mwangi', '+254700000001',
 '123bghi45!',
 'Admin', '10000001', 'Nairobi', 'Starehe', 'Starehe',
 '2025-11-01T08:00:00.000Z', NULL, NULL, 'active'),

-- 2. HOI — active, was updated once
('hoi@kemis.go.ke', 'Brian Otieno Ochieng', '+254700000002',
 'bNmKdEfG2',
 'Head of Institution (HOI)', '10000002', 'Nairobi', 'Westlands', 'Westlands',
 '2025-10-15T09:30:00.000Z', '2025-12-10T14:22:11.500Z', NULL, 'active'),

-- 3. CDE — active
('cde@kemis.go.ke', 'Catherine Njeri Kamau', '+254700000003',
 'NmKdEfG2',
 'County Director of Education (CDE)', '10000003', 'Nairobi', 'Kasarani', 'Kasarani',
 '2025-09-20T11:15:00.000Z', NULL, NULL, 'active'),

-- 4. SCDE — active
('scde@kemis.go.ke', 'David Kimani Njoroge', '+254700000004',
 '$2a$11$X',
 'Sub-County Director of Education (SCDE)', '10000004', 'Nairobi', 'Embakasi', 'Embakasi East',
 '2025-08-05T07:45:00.000Z', NULL, NULL, 'active'),

-- 5. CQASO — was deactivated but reactivated
('cqaso@kemis.go.ke', 'Esther Achieng Odhiambo', '+254700000005',
 '3rT1oUleY9C0hV5kQx8mNpLwRtYuVbNmKdEfG2',
 'County Quality Assurance and Standards Officer (CQASO)', '10000005',
 'Nairobi', 'Langata', 'Langata',
 '2025-07-12T10:00:00.000Z', '2025-12-01T16:00:00.000Z', NULL, 'active'),

-- 6. SCQASO — active
('scqaso@kemis.go.ke', 'Francis Mutua Kilonzo', '+254700000006',
 '$2a$11$Xq7uLpVbJdK6Zf3rT1oUleY9C0hV5kQx8mNpLwRtYuVbNmKdEfG2',
 'Sub-County Quality Assurance and Standards Officer (SCQASO)', '10000006',
 'Nairobi', 'Kibra', 'Kibra',
 '2025-06-18T13:30:00.000Z', NULL, NULL, 'active'),

-- 7. IT OFFICER — active
('itofficer@kemis.go.ke', 'Grace Wairimu Kariuki', '+254700000007',
 '$2a$11$Xq7uLpVbJdK6Zf3rT1oUleY9C0hV5kQx8mNpLwRtYuVbNmKdEfG2',
 'IT Officer', '10000007', 'Nairobi', 'Dagoretti', 'Dagoretti North',
 '2025-05-22T09:00:00.000Z', NULL, NULL, 'active'),

-- 8. INACTIVE — deactivated (not deleted), useful for testing status filter
('inactive.user@kemis.go.ke', 'Peter Njoroge Mwangi', '+254700000008',
 '$2a$11$Xq7uLpVbJdK6Zf3rT1oUleY9C0hV5kQx8mNpLwRtYuVbNmKdEfG2',
 'IT Officer', '10000008', 'Nairobi', 'Roysambu', 'Roysambu',
 '2025-04-10T12:00:00.000Z', '2025-12-20T08:30:00.000Z', NULL, 'inactive'),

-- 9. SOFT-DELETED — has both deletedAt and status='inactive'
('deleted.user@kemis.go.ke', 'Mary Atieno Wekesa', '+254700000009',
 '$2a$11$Xq7uLpVbJdK6Zf3rT1oUleY9C0hV5kQx8mNpLwRtYuVbNmKdEfG2',
 'Head of Institution (HOI)', '10000009', 'Nairobi', 'Mathare', 'Mathare',
 '2025-03-01T09:00:00.000Z', '2025-11-15T15:45:00.000Z', '2025-11-15T15:45:00.000Z', 'inactive'),

-- 10. HOI in a different county — for county filtering tests
('hoi.mombasa@kemis.go.ke', 'Hassan Omar Juma', '+254700000010',
 '$2a$11$Xq7uLpVbJdK6Zf3rT1oUleY9C0hV5kQx8mNpLwRtYuVbNmKdEfG2',
 'Head of Institution (HOI)', '10000010', 'Mombasa', 'Mvita', 'Mvita',
 '2025-02-14T10:20:00.000Z', NULL, NULL, 'active')
ON CONFLICT ("emailId") DO NOTHING;

-- Quick sanity check
SELECT "userId", "emailId", "role", "status", "deletedAt", "updatedAt"
FROM "Users"
ORDER BY "userId";