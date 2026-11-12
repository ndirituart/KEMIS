INSERT INTO "CountyEducation" 
  ("county", "countyCode", "officeAddress", "userId", "isActive", "status", "createdAt")
VALUES
-- 1. Mombasa (Coast - Swahili/Muslim)
('Mombasa', '001', 'County Education Office, Mombasa Island, Nkrumah Road', NULL, TRUE, 'active', '2026-01-01T08:00:00Z'),
-- 2. Kwale (Coast - Swahili/Muslim)
('Kwale', '002', 'County Education Office, Kwale Town, Hospital Road', NULL, TRUE, 'active', '2026-01-01T08:00:00Z'),
-- 3. Kilifi (Coast - Giriama/Muslim)
('Kilifi', '003', 'County Education Office, Kilifi Town, Biashara Street', NULL, TRUE, 'active', '2026-01-01T08:00:00Z'),
-- 4. Tana River (Coast - Pokomo/Somali)
('Tana River', '004', 'County Education Office, Hola Town, Main Road', NULL, TRUE, 'active', '2026-01-01T08:00:00Z'),
-- 5. Lamu (Coast - Swahili/Muslim)
('Lamu', '005', 'County Education Office, Lamu Town, Langoni Ward', NULL, TRUE, 'active', '2026-01-01T08:00:00Z'),
-- 6. Taita-Taveta (Coast - Taita)
('Taita-Taveta', '006', 'County Education Office, Voi Town, Kenyatta Avenue', NULL, TRUE, 'active', '2026-01-01T08:00:00Z'),
-- 7. Garissa (North Eastern - Somali)
('Garissa', '007', 'County Education Office, Garissa Town, Kismayu Road', NULL, TRUE, 'active', '2026-01-01T08:00:00Z'),
-- 8. Wajir (North Eastern - Somali)
('Wajir', '008', 'County Education Office, Wajir Town, Hospital Road', NULL, TRUE, 'active', '2026-01-01T08:00:00Z'),
-- 9. Mandera (North Eastern - Somali)
('Mandera', '009', 'County Education Office, Mandera Town, Border Road', NULL, TRUE, 'active', '2026-01-01T08:00:00Z'),
-- 10. Marsabit (North Eastern - Borana/Rendille)
('Marsabit', '010', 'County Education Office, Marsabit Town, Main Street', NULL, TRUE, 'active', '2026-01-01T08:00:00Z'),
-- 11. Isiolo (North Eastern - Borana/Somali)
('Isiolo', '011', 'County Education Office, Isiolo Town, Hospital Road', NULL, TRUE, 'active', '2026-01-01T08:00:00Z'),
-- 12. Meru (Eastern - Meru)
('Meru', '012', 'County Education Office, Meru Town, Kenyatta Highway', NULL, TRUE, 'active', '2026-01-01T08:00:00Z'),
-- 13. Tharaka-Nithi (Eastern - Ameru/Chuka)
('Tharaka-Nithi', '013', 'County Education Office, Kathwana Town, Embu-Meru Highway', NULL, TRUE, 'active', '2026-01-01T08:00:00Z'),
-- 14. Embu (Eastern - Embu)
('Embu', '014', 'County Education Office, Embu Town, Kenyatta Highway', NULL, TRUE, 'active', '2026-01-01T08:00:00Z'),
-- 15. Kitui (Eastern - Kamba)
('Kitui', '015', 'County Education Office, Kitui Town, Nzambani Road', NULL, TRUE, 'active', '2026-01-01T08:00:00Z'),
-- 16. Machakos (Eastern - Kamba)
('Machakos', '016', 'County Education Office, Machakos Town, Mwatu wa Ngoma Road', NULL, TRUE, 'active', '2026-01-01T08:00:00Z'),
-- 17. Makueni (Eastern - Kamba)
('Makueni', '017', 'County Education Office, Wote Town, Machakos-Wote Road', NULL, TRUE, 'active', '2026-01-01T08:00:00Z'),
-- 18. Nyandarua (Central - Kikuyu)
('Nyandarua', '018', 'County Education Office, Ol Kalou Town, Mairo Inya Road', NULL, TRUE, 'active', '2026-01-01T08:00:00Z'),
-- 19. Nyeri (Central - Kikuyu)
('Nyeri', '019', 'County Education Office, Nyeri Town, Kimathi Way', NULL, TRUE, 'active', '2026-01-01T08:00:00Z'),
-- 20. Kirinyaga (Central - Kikuyu)
('Kirinyaga', '020', 'County Education Office, Kerugoya Town, Hospital Road', NULL, TRUE, 'active', '2026-01-01T08:00:00Z'),
-- 21. Murang'a (Central - Kikuyu)
('Murang''a', '021', 'County Education Office, Murang''a Town, Kenyatta Highway', NULL, TRUE, 'active', '2026-01-01T08:00:00Z'),
-- 22. Kiambu (Central - Kikuyu)
('Kiambu', '022', 'County Education Office, Kiambu Town, Biashara Street', NULL, TRUE, 'active', '2026-01-01T08:00:00Z'),
-- 23. Turkana (Rift Valley - Turkana)
('Turkana', '023', 'County Education Office, Lodwar Town, Lodwar-Kitale Highway', NULL, TRUE, 'active', '2026-01-01T08:00:00Z'),
-- 24. West Pokot (Rift Valley - Pokot)
('West Pokot', '024', 'County Education Office, Kapenguria Town, Makutano Road', NULL, TRUE, 'active', '2026-01-01T08:00:00Z'),
-- 25. Samburu (Rift Valley - Samburu)
('Samburu', '025', 'County Education Office, Maralal Town, Hospital Road', NULL, TRUE, 'active', '2026-01-01T08:00:00Z'),
-- 26. Trans-Nzoia (Rift Valley - Luhya/Kalenjin)
('Trans-Nzoia', '026', 'County Education Office, Kitale Town, Kenyatta Avenue', NULL, TRUE, 'active', '2026-01-01T08:00:00Z'),
-- 27. Uasin Gishu (Rift Valley - Kalenjin)
('Uasin Gishu', '027', 'County Education Office, Eldoret Town, Uganda Road', NULL, TRUE, 'active', '2026-01-01T08:00:00Z'),
-- 28. Elgeyo-Marakwet (Rift Valley - Kalenjin)
('Elgeyo-Marakwet', '028', 'County Education Office, Iten Town, Kerio Valley Road', NULL, TRUE, 'active', '2026-01-01T08:00:00Z'),
-- 29. Nandi (Rift Valley - Kalenjin)
('Nandi', '029', 'County Education Office, Kapsabet Town, Main Street', NULL, TRUE, 'active', '2026-01-01T08:00:00Z'),
-- 30. Baringo (Rift Valley - Kalenjin/Tugen)
('Baringo', '030', 'County Education Office, Kabarnet Town, Main Street', NULL, TRUE, 'active', '2026-01-01T08:00:00Z'),
-- 31. Laikipia (Rift Valley - Kikuyu/Samburu)
('Laikipia', '031', 'County Education Office, Rumuruti Town, Main Street', NULL, TRUE, 'active', '2026-01-01T08:00:00Z'),
-- 32. Nakuru (Rift Valley - Kikuyu/Kalenjin)
('Nakuru', '032', 'County Education Office, Nakuru Town, Kenyatta Avenue', NULL, TRUE, 'active', '2026-01-01T08:00:00Z'),
-- 33. Narok (Rift Valley - Maasai)
('Narok', '033', 'County Education Office, Narok Town, Hospital Road', NULL, TRUE, 'active', '2026-01-01T08:00:00Z'),
-- 34. Kajiado (Rift Valley - Maasai)
('Kajiado', '034', 'County Education Office, Kajiado Town, Namanga Road', NULL, TRUE, 'active', '2026-01-01T08:00:00Z'),
-- 35. Kericho (Rift Valley - Kalenjin)
('Kericho', '035', 'County Education Office, Kericho Town, Moi Highway', NULL, TRUE, 'active', '2026-01-01T08:00:00Z'),
-- 36. Bomet (Rift Valley - Kalenjin)
('Bomet', '036', 'County Education Office, Bomet Town, Hospital Road', NULL, TRUE, 'active', '2026-01-01T08:00:00Z'),
-- 37. Kakamega (Western - Luhya)
('Kakamega', '037', 'County Education Office, Kakamega Town, Kenyatta Highway', NULL, TRUE, 'active', '2026-01-01T08:00:00Z'),
-- 38. Vihiga (Western - Luhya)
('Vihiga', '038', 'County Education Office, Mbale Town, Main Street', NULL, TRUE, 'active', '2026-01-01T08:00:00Z'),
-- 39. Bungoma (Western - Luhya)
('Bungoma', '039', 'County Education Office, Bungoma Town, Kanduyi Road', NULL, TRUE, 'active', '2026-01-01T08:00:00Z'),
-- 40. Busia (Western - Luhya)
('Busia', '040', 'County Education Office, Busia Town, Kenyatta Avenue', NULL, TRUE, 'active', '2026-01-01T08:00:00Z'),
-- 41. Siaya (Nyanza - Luo)
('Siaya', '041', 'County Education Office, Siaya Town, Hospital Road', NULL, TRUE, 'active', '2026-01-01T08:00:00Z'),
-- 42. Kisumu (Nyanza - Luo)
('Kisumu', '042', 'County Education Office, Kisumu City, Oginga Odinga Street', NULL, TRUE, 'active', '2026-01-01T08:00:00Z'),
-- 43. Homa Bay (Nyanza - Luo)
('Homa Bay', '043', 'County Education Office, Homa Bay Town, Main Street', NULL, TRUE, 'active', '2026-01-01T08:00:00Z'),
-- 44. Migori (Nyanza - Luo/Kuria)
('Migori', '044', 'County Education Office, Migori Town, Hospital Road', NULL, TRUE, 'active', '2026-01-01T08:00:00Z'),
-- 45. Kisii (Nyanza - Kisii)
('Kisii', '045', 'County Education Office, Kisii Town, Hospital Road', NULL, TRUE, 'active', '2026-01-01T08:00:00Z'),
-- 46. Nyamira (Nyanza - Kisii)
('Nyamira', '046', 'County Education Office, Nyamira Town, Main Street', NULL, TRUE, 'active', '2026-01-01T08:00:00Z'),
-- 47. Nairobi (Central/Nairobi - Mixed)
('Nairobi', '047', 'County Education Office, Jogoo House, Taifa Road', NULL, TRUE, 'active', '2026-01-01T08:00:00Z');

-- Sanity check
SELECT "county", "countyCode", "officeAddress" FROM "CountyEducation" ORDER BY "countyCode";