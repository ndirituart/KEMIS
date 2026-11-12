-- 2. Populate with a representative sample (Nairobi, Mombasa, Kisumu, Nakuru)
INSERT INTO "SubCountyEducation" (
    "subCounty",
    "county",
    "countyCode",
    "officeAddress",
    "userId",
    "isActive",
    "status",
    "createdAt"
  )
VALUES -- NAIROBI (17)
  (
    'Westlands Sub County',
    'Nairobi',
    '047',
    'County Education Office Westlands',
    NULL,
    TRUE,
    'active',
    '2026-01-01T08:00:00Z'
  ),
  (
    'Dagoretti North Sub County',
    'Nairobi',
    '047',
    'County Education Office Dagoretti',
    NULL,
    TRUE,
    'active',
    '2026-01-01T08:00:00Z'
  ),
  (
    'Dagoretti South Sub County',
    'Nairobi',
    '047',
    'County Education Office Dagoretti',
    NULL,
    TRUE,
    'active',
    '2026-01-01T08:00:00Z'
  ),
  (
    'Lang''ata Sub County',
    'Nairobi',
    '047',
    'County Education Office Langata',
    NULL,
    TRUE,
    'active',
    '2026-01-01T08:00:00Z'
  ),
  (
    'Kibra Sub County',
    'Nairobi',
    '047',
    'County Education Office Kibra',
    NULL,
    TRUE,
    'active',
    '2026-01-01T08:00:00Z'
  ),
  (
    'Roysambu Sub County',
    'Nairobi',
    '047',
    'County Education Office Roysambu',
    NULL,
    TRUE,
    'active',
    '2026-01-01T08:00:00Z'
  ),
  (
    'Kasarani Sub County',
    'Nairobi',
    '047',
    'County Education Office Kasarani',
    NULL,
    TRUE,
    'active',
    '2026-01-01T08:00:00Z'
  ),
  (
    'Ruaraka Sub County',
    'Nairobi',
    '047',
    'County Education Office Ruaraka',
    NULL,
    TRUE,
    'active',
    '2026-01-01T08:00:00Z'
  ),
  (
    'Embakasi South Sub County',
    'Nairobi',
    '047',
    'County Education Office Embakasi',
    NULL,
    TRUE,
    'active',
    '2026-01-01T08:00:00Z'
  ),
  (
    'Embakasi North Sub County',
    'Nairobi',
    '047',
    'County Education Office Embakasi',
    NULL,
    TRUE,
    'active',
    '2026-01-01T08:00:00Z'
  ),
  (
    'Embakasi Central Sub County',
    'Nairobi',
    '047',
    'County Education Office Embakasi',
    NULL,
    TRUE,
    'active',
    '2026-01-01T08:00:00Z'
  ),
  -- 🔥 HERE IS THE ACTIVE USER
  (
    'Embakasi East Sub County',
    'Nairobi',
    '047',
    'County Education Office Embakasi East',
    4,
    TRUE,
    'active',
    '2026-01-01T08:00:00Z'
  ),
  (
    'Embakasi West Sub County',
    'Nairobi',
    '047',
    'County Education Office Embakasi',
    NULL,
    TRUE,
    'active',
    '2026-01-01T08:00:00Z'
  ),
  (
    'Makadara Sub County',
    'Nairobi',
    '047',
    'County Education Office Makadara',
    NULL,
    TRUE,
    'active',
    '2026-01-01T08:00:00Z'
  ),
  (
    'Kamukunji Sub County',
    'Nairobi',
    '047',
    'County Education Office Kamukunji',
    NULL,
    TRUE,
    'active',
    '2026-01-01T08:00:00Z'
  ),
  (
    'Starehe Sub County',
    'Nairobi',
    '047',
    'County Education Office Starehe',
    NULL,
    TRUE,
    'active',
    '2026-01-01T08:00:00Z'
  ),
  (
    'Mathare Sub County',
    'Nairobi',
    '047',
    'County Education Office Mathare',
    NULL,
    TRUE,
    'active',
    '2026-01-01T08:00:00Z'
  ),
  -- MOMBASA (6)
  (
    'Changamwe Sub County',
    'Mombasa',
    '001',
    'County Education Office Changamwe',
    NULL,
    TRUE,
    'active',
    '2026-01-01T08:00:00Z'
  ),
  (
    'Jomvu Sub County',
    'Mombasa',
    '001',
    'County Education Office Jomvu',
    NULL,
    TRUE,
    'active',
    '2026-01-01T08:00:00Z'
  ),
  (
    'Kisauni Sub County',
    'Mombasa',
    '001',
    'County Education Office Kisauni',
    NULL,
    TRUE,
    'active',
    '2026-01-01T08:00:00Z'
  ),
  (
    'Nyali Sub County',
    'Mombasa',
    '001',
    'County Education Office Nyali',
    NULL,
    TRUE,
    'active',
    '2026-01-01T08:00:00Z'
  ),
  (
    'Likoni Sub County',
    'Mombasa',
    '001',
    'County Education Office Likoni',
    NULL,
    TRUE,
    'active',
    '2026-01-01T08:00:00Z'
  ),
  (
    'Mvita Sub County',
    'Mombasa',
    '001',
    'County Education Office Mvita',
    NULL,
    TRUE,
    'active',
    '2026-01-01T08:00:00Z'
  ) -- ... (You can continue adding the remaining 260+ subcounties here) ...
  ON CONFLICT DO NOTHING;