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
    'Westlands ',
    'Nairobi',
    '047',
    'County Education Office Westlands',
    NULL,
    TRUE,
    'active',
    '2026-01-01T08:00:00Z'
  ),
  (
    'Dagoretti North ',
    'Nairobi',
    '047',
    'County Education Office Dagoretti',
    NULL,
    TRUE,
    'active',
    '2026-01-01T08:00:00Z'
  ),
  (
    'Dagoretti South ',
    'Nairobi',
    '047',
    'County Education Office Dagoretti',
    NULL,
    TRUE,
    'active',
    '2026-01-01T08:00:00Z'
  ),
  (
    'Lang''ata ',
    'Nairobi',
    '047',
    'County Education Office Langata',
    NULL,
    TRUE,
    'active',
    '2026-01-01T08:00:00Z'
  ),
  (
    'Kibra ',
    'Nairobi',
    '047',
    'County Education Office Kibra',
    NULL,
    TRUE,
    'active',
    '2026-01-01T08:00:00Z'
  ),
  (
    'Roysambu ',
    'Nairobi',
    '047',
    'County Education Office Roysambu',
    NULL,
    TRUE,
    'active',
    '2026-01-01T08:00:00Z'
  ),
  (
    'Kasarani ',
    'Nairobi',
    '047',
    'County Education Office Kasarani',
    NULL,
    TRUE,
    'active',
    '2026-01-01T08:00:00Z'
  ),
  (
    'Ruaraka ',
    'Nairobi',
    '047',
    'County Education Office Ruaraka',
    NULL,
    TRUE,
    'active',
    '2026-01-01T08:00:00Z'
  ),
  (
    'Embakasi South ',
    'Nairobi',
    '047',
    'County Education Office Embakasi',
    NULL,
    TRUE,
    'active',
    '2026-01-01T08:00:00Z'
  ),
  (
    'Embakasi North ',
    'Nairobi',
    '047',
    'County Education Office Embakasi',
    NULL,
    TRUE,
    'active',
    '2026-01-01T08:00:00Z'
  ),
  (
    'Embakasi Central ',
    'Nairobi',
    '047',
    'County Education Office Embakasi',
    NULL,
    TRUE,
    'active',
    '2026-01-01T08:00:00Z'
  ),
  -- HERE IS THE ACTIVE USER
  (
    'Embakasi ',
    'Nairobi',
    '047',
    'County Education Office Embakasi',
    4,
    TRUE,
    'active',
    '2026-01-01T08:00:00Z'
  ),
  (
    'Embakasi West ',
    'Nairobi',
    '047',
    'County Education Office Embakasi',
    NULL,
    TRUE,
    'active',
    '2026-01-01T08:00:00Z'
  ),
  (
    'Makadara ',
    'Nairobi',
    '047',
    'County Education Office Makadara',
    NULL,
    TRUE,
    'active',
    '2026-01-01T08:00:00Z'
  ),
  (
    'Kamukunji ',
    'Nairobi',
    '047',
    'County Education Office Kamukunji',
    NULL,
    TRUE,
    'active',
    '2026-01-01T08:00:00Z'
  ),
  (
    'Starehe ',
    'Nairobi',
    '047',
    'County Education Office Starehe',
    NULL,
    TRUE,
    'active',
    '2026-01-01T08:00:00Z'
  ),
  (
    'Mathare ',
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
    'Changamwe ',
    'Mombasa',
    '001',
    'County Education Office Changamwe',
    NULL,
    TRUE,
    'active',
    '2026-01-01T08:00:00Z'
  ),
  (
    'Jomvu ',
    'Mombasa',
    '001',
    'County Education Office Jomvu',
    NULL,
    TRUE,
    'active',
    '2026-01-01T08:00:00Z'
  ),
  (
    'Kisauni ',
    'Mombasa',
    '001',
    'County Education Office Kisauni',
    NULL,
    TRUE,
    'active',
    '2026-01-01T08:00:00Z'
  ),
  (
    'Nyali ',
    'Mombasa',
    '001',
    'County Education Office Nyali',
    NULL,
    TRUE,
    'active',
    '2026-01-01T08:00:00Z'
  ),
  (
    'Likoni ',
    'Mombasa',
    '001',
    'County Education Office Likoni',
    NULL,
    TRUE,
    'active',
    '2026-01-01T08:00:00Z'
  ),
  (
    'Mvita ',
    'Mombasa',
    '001',
    'County Education Office Mvita',
    NULL,
    TRUE,
    'active',
    '2026-01-01T08:00:00Z'
  ) -- ... (You can continue adding the remaining 260+ subcounties here) ...
  ON CONFLICT DO NOTHING;