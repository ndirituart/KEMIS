

INSERT INTO "SubCountyQualityAssurance" 
  ("subCounty", "county", "countyCode", "officeAddress", "userId", "isActive", "status", "createdAt")
VALUES
-- 1. Original SCQASO (Kibra)
('Kibra ', 'Nairobi', '047', 'Sub-County QA Office Kibra', 6, TRUE, 'active', '2026-01-01T08:00:00Z'),

-- 2. Mombasa SCQASOs
('Mvita', 'Mombasa', '001', 'Sub-County QA Office Mvita', 130, TRUE, 'active', '2026-01-01T08:00:00Z'),
('Nyali', 'Mombasa', '001', 'Sub-County QA Office Nyali', 131, TRUE, 'active', '2026-01-01T08:00:00Z'),
('Likoni', 'Mombasa', '001', 'Sub-County QA Office Likoni', 132, TRUE, 'active', '2026-01-01T08:00:00Z'),
('Changamwe', 'Mombasa', '001', 'Sub-County QA Office Changamwe', 133, TRUE, 'active', '2026-01-01T08:00:00Z'),
('Jomvu', 'Mombasa', '001', 'Sub-County QA Office Jomvu', 134, TRUE, 'active', '2026-01-01T08:00:00Z'),
('Kisauni', 'Mombasa', '001', 'Sub-County QA Office Kisauni', 135, TRUE, 'active', '2026-01-01T08:00:00Z'),

-- 3. Nairobi SCQASOs
('Westlands ', 'Nairobi', '047', 'Sub-County QA Office Westlands', 136, TRUE, 'active', '2026-01-01T08:00:00Z'),
('Dagoretti North ', 'Nairobi', '047', 'Sub-County QA Office Dagoretti', 137, TRUE, 'active', '2026-01-01T08:00:00Z'),
('Dagoretti South ', 'Nairobi', '047', 'Sub-County QA Office Dagoretti', 138, TRUE, 'active', '2026-01-01T08:00:00Z'),
('Lang''ata ', 'Nairobi', '047', 'Sub-County QA Office Langata', 139, TRUE, 'active', '2026-01-01T08:00:00Z'),
('Kibra ', 'Nairobi', '047', 'Sub-County QA Office Kibra', 140, TRUE, 'active', '2026-01-01T08:00:00Z'),
('Roysambu ', 'Nairobi', '047', 'Sub-County QA Office Roysambu', 141, TRUE, 'active', '2026-01-01T08:00:00Z'),
('Kasarani ', 'Nairobi', '047', 'Sub-County QA Office Kasarani', 142, TRUE, 'active', '2026-01-01T08:00:00Z'),
('Ruaraka ', 'Nairobi', '047', 'Sub-County QA Office Ruaraka', 143, TRUE, 'active', '2026-01-01T08:00:00Z'),
('Makadara ', 'Nairobi', '047', 'Sub-County QA Office Makadara', 149, TRUE, 'active', '2026-01-01T08:00:00Z'),
('Kamukunji ', 'Nairobi', '047', 'Sub-County QA Office Kamukunji', 150, TRUE, 'active', '2026-01-01T08:00:00Z'),
('Embakasi South ', 'Nairobi', '047', 'Sub-County QA Office Embakasi', 144, TRUE, 'active', '2026-01-01T08:00:00Z'),
('Embakasi East ', 'Nairobi', '047', 'Sub-County QA Office Embakasi', 147, TRUE, 'active', '2026-01-01T08:00:00Z'),
('Embakasi West ', 'Nairobi', '047', 'Sub-County QA Office Embakasi', 148, TRUE, 'active', '2026-01-01T08:00:00Z'),
('Embakasi', 'Nairobi', '047', 'Sub-County QA Office Embakasi', 146, TRUE, 'active', '2026-01-01T08:00:00Z'),
('Starehe ', 'Nairobi', '047', 'Sub-County QA Office Starehe', 151, TRUE, 'active', '2026-01-01T08:00:00Z'),
('Mathare ', 'Nairobi', '047', 'Sub-County QA Office Mathare', 152, TRUE, 'active', '2026-01-01T08:00:00Z'),
('Embakasi North ', 'Nairobi', '047', 'Sub-County QA Office Embakasi', 145, TRUE, 'active', '2026-01-01T08:00:00Z')
ON CONFLICT DO NOTHING;