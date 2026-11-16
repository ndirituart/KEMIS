INSERT INTO "Users" 
  ("userId", "emailId", "fullName", "mobileNo", "password", "role", "nationalId", "county", "subCounty", "constituency", "createdDate", "status", "institutionId")
VALUES
-- 1. CQASO for Mombasa County
(129, 'cqaso.mombasa@kemis.go.ke', 'Suleiman Bakari Juma', '+254700000129', 'Password@123', 'County Quality Assurance and Standards Officer (CQASO)', '40000029', 'Mombasa', 'Mvita', 'Mvita', '2026-01-01T08:00:00Z', 'active', NULL),

-- 2. SCQASO for Mombasa Sub-Counties
-- Mvita
(130, 'scqaso.mombasa.mvita@kemis.go.ke', 'Hassan Ali Omar', '+254700000130', 'Password@123', 'Sub-County Quality Assurance and Standards Officer (SCQASO)', '40000030', 'Mombasa', 'Mvita', 'Mvita', '2026-01-01T08:00:00Z', 'active', NULL),
-- Nyali
(131, 'scqaso.mombasa.nyali@kemis.go.ke', 'Fatuma Said Ahmed', '+254700000131', 'Password@123', 'Sub-County Quality Assurance and Standards Officer (SCQASO)', '40000031', 'Mombasa', 'Nyali', 'Nyali', '2026-01-01T08:00:00Z', 'active', NULL),
-- Likoni
(132, 'scqaso.mombasa.likoni@kemis.go.ke', 'Mohamed Swaleh Kalu', '+254700000132', 'Password@123', 'Sub-County Quality Assurance and Standards Officer (SCQASO)', '40000032', 'Mombasa', 'Likoni', 'Likoni', '2026-01-01T08:00:00Z', 'active', NULL),
-- Changamwe
(133, 'scqaso.mombasa.changamwe@kemis.go.ke', 'Amina Yusuf Abdi', '+254700000133', 'Password@123', 'Sub-County Quality Assurance and Standards Officer (SCQASO)', '40000033', 'Mombasa', 'Changamwe', 'Changamwe', '2026-01-01T08:00:00Z', 'active', NULL),
-- Jomvu
(134, 'scqaso.mombasa.jomvu@kemis.go.ke', 'Omar Juma Said', '+254700000134', 'Password@123', 'Sub-County Quality Assurance and Standards Officer (SCQASO)', '40000034', 'Mombasa', 'Jomvu', 'Jomvu', '2026-01-01T08:00:00Z', 'active', NULL),
-- Kisauni
(135, 'scqaso.mombasa.kisauni@kemis.go.ke', 'Halima Ali Hassan', '+254700000135', 'Password@123', 'Sub-County Quality Assurance and Standards Officer (SCQASO)', '40000035', 'Mombasa', 'Kisauni', 'Kisauni', '2026-01-01T08:00:00Z', 'active', NULL),

-- 3. SCQASO for Nairobi Sub-Counties
-- Westlands
(136, 'scqaso.nairobi.westlands@kemis.go.ke', 'James Mwangi Kimani', '+254700000136', 'Password@123', 'Sub-County Quality Assurance and Standards Officer (SCQASO)', '40000036', 'Nairobi', 'Westlands Sub County', 'Westlands', '2026-01-01T08:00:00Z', 'active', NULL),
-- Dagoretti North
(137, 'scqaso.nairobi.dagorettinorth@kemis.go.ke', 'Mary Wanjiku Njoroge', '+254700000137', 'Password@123', 'Sub-County Quality Assurance and Standards Officer (SCQASO)', '40000037', 'Nairobi', 'Dagoretti North Sub County', 'Dagoretti North', '2026-01-01T08:00:00Z', 'active', NULL),
-- Dagoretti South
(138, 'scqaso.nairobi.dagorettisouth@kemis.go.ke', 'Peter Kamau Maina', '+254700000138', 'Password@123', 'Sub-County Quality Assurance and Standards Officer (SCQASO)', '40000038', 'Nairobi', 'Dagoretti South Sub County', 'Dagoretti South', '2026-01-01T08:00:00Z', 'active', NULL),
-- Lang'ata
(139, 'scqaso.nairobi.langata@kemis.go.ke', 'Grace Achieng Odhiambo', '+254700000139', 'Password@123', 'Sub-County Quality Assurance and Standards Officer (SCQASO)', '40000039', 'Nairobi', 'Lang''ata Sub County', 'Lang''ata', '2026-01-01T08:00:00Z', 'active', NULL),
-- Kibra
(140, 'scqaso.nairobi.kibra@kemis.go.ke', 'David Ochieng Ouma', '+254700000140', 'Password@123', 'Sub-County Quality Assurance and Standards Officer (SCQASO)', '40000040', 'Nairobi', 'Kibra Sub County', 'Kibra', '2026-01-01T08:00:00Z', 'active', NULL),
-- Roysambu
(141, 'scqaso.nairobi.roysambu@kemis.go.ke', 'Esther Njeri Kariuki', '+254700000141', 'Password@123', 'Sub-County Quality Assurance and Standards Officer (SCQASO)', '40000041', 'Nairobi', 'Roysambu Sub County', 'Roysambu', '2026-01-01T08:00:00Z', 'active', NULL),
-- Kasarani
(142, 'scqaso.nairobi.kasarani@kemis.go.ke', 'Samuel Kiprop Rono', '+254700000142', 'Password@123', 'Sub-County Quality Assurance and Standards Officer (SCQASO)', '40000042', 'Nairobi', 'Kasarani Sub County', 'Kasarani', '2026-01-01T08:00:00Z', 'active', NULL),
-- Ruaraka
(143, 'scqaso.nairobi.ruaraka@kemis.go.ke', 'Catherine Nekesa Wekesa', '+254700000143', 'Password@123', 'Sub-County Quality Assurance and Standards Officer (SCQASO)', '40000043', 'Nairobi', 'Ruaraka Sub County', 'Ruaraka', '2026-01-01T08:00:00Z', 'active', NULL),
-- Embakasi South
(144, 'scqaso.nairobi.embakasisouth@kemis.go.ke', 'Andrew Mutua Musyoka', '+254700000144', 'Password@123', 'Sub-County Quality Assurance and Standards Officer (SCQASO)', '40000044', 'Nairobi', 'Embakasi South Sub County', 'Embakasi South', '2026-01-01T08:00:00Z', 'active', NULL),
-- Embakasi North
(145, 'scqaso.nairobi.embakasinorth@kemis.go.ke', 'Lucy Wambui Ndungu', '+254700000145', 'Password@123', 'Sub-County Quality Assurance and Standards Officer (SCQASO)', '40000045', 'Nairobi', 'Embakasi North Sub County', 'Embakasi North', '2026-01-01T08:00:00Z', 'active', NULL),
-- Embakasi Central
(146, 'scqaso.nairobi.embakasicentral@kemis.go.ke', 'Kevin Omondi Otieno', '+254700000146', 'Password@123', 'Sub-County Quality Assurance and Standards Officer (SCQASO)', '40000046', 'Nairobi', 'Embakasi Central Sub Count', 'Embakasi Central', '2026-01-01T08:00:00Z', 'active', NULL),
-- Embakasi East
(147, 'scqaso.nairobi.embakasieast@kemis.go.ke', 'Mercy Chebet Kiprop', '+254700000147', 'Password@123', 'Sub-County Quality Assurance and Standards Officer (SCQASO)', '40000047', 'Nairobi', 'Embakasi East Sub County', 'Embakasi East', '2026-01-01T08:00:00Z', 'active', NULL),
-- Embakasi West
(148, 'scqaso.nairobi.embakasiwest@kemis.go.ke', 'George Kariuki Mwaura', '+254700000148', 'Password@123', 'Sub-County Quality Assurance and Standards Officer (SCQASO)', '40000048', 'Nairobi', 'Embakasi West Sub County', 'Embakasi West', '2026-01-01T08:00:00Z', 'active', NULL),
-- Makadara
(149, 'scqaso.nairobi.makadara@kemis.go.ke', 'Fatuma Ali Hussein', '+254700000149', 'Password@123', 'Sub-County Quality Assurance and Standards Officer (SCQASO)', '40000049', 'Nairobi', 'Makadara Sub County', 'Makadara', '2026-01-01T08:00:00Z', 'active', NULL),
-- Kamukunji
(150, 'scqaso.nairobi.kamukunji@kemis.go.ke', 'Hassan Omar Ali', '+254700000150', 'Password@123', 'Sub-County Quality Assurance and Standards Officer (SCQASO)', '40000050', 'Nairobi', 'Kamukunji Sub County', 'Kamukunji', '2026-01-01T08:00:00Z', 'active', NULL),
-- Starehe
(151, 'scqaso.nairobi.starehe@kemis.go.ke', 'Amina Hussein Yusuf', '+254700000151', 'Password@123', 'Sub-County Quality Assurance and Standards Officer (SCQASO)', '40000051', 'Nairobi', 'Starehe Sub County', 'Starehe', '2026-01-01T08:00:00Z', 'active', NULL),
-- Mathare
(152, 'scqaso.nairobi.mathare@kemis.go.ke', 'Simon Kimani Njoroge', '+254700000152', 'Password@123', 'Sub-County Quality Assurance and Standards Officer (SCQASO)', '40000052', 'Nairobi', 'Mathare Sub County', 'Mathare', '2026-01-01T08:00:00Z', 'active', NULL)

ON CONFLICT ("emailId") DO NOTHING;