INSERT INTO "Users" 
  ("userId", "emailId", "fullName", "mobileNo", "password", "role", "nationalId", "county", "subCounty", "constituency", "createdDate", "status", "institutionId")
VALUES
-- 1. Mombasa
(25, 'cde.mombasa@kemis.go.ke', 'Hassan Ali Mwinyi', '+254700000025', 'Password@123', 'County Director of Education (CDE)', '20000025', 'Mombasa', 'Mvita', 'Mvita', '2026-01-01T08:00:00Z', 'active', NULL),
-- 2. Kwale
(26, 'cde.kwale@kemis.go.ke', 'Fatuma Bakari Juma', '+254700000026', 'Password@123', 'County Director of Education (CDE)', '20000026', 'Kwale', 'Matuga', 'Matuga', '2026-01-01T08:00:00Z', 'active', NULL),
-- 3. Kilifi
(27, 'cde.kilifi@kemis.go.ke', 'Omar Said Kalu', '+254700000027', 'Password@123', 'County Director of Education (CDE)', '20000027', 'Kilifi', 'Kilifi Central', 'Kilifi North', '2026-01-01T08:00:00Z', 'active', NULL),
-- 4. Tana River
(28, 'cde.tanariver@kemis.go.ke', 'Abdi Hassan Farah', '+254700000028', 'Password@123', 'County Director of Education (CDE)', '20000028', 'Tana River', 'Hola', 'Garsen', '2026-01-01T08:00:00Z', 'active', NULL),
-- 5. Lamu
(29, 'cde.lamu@kemis.go.ke', 'Aisha Swaleh Mohammed', '+254700000029', 'Password@123', 'County Director of Education (CDE)', '20000029', 'Lamu', 'Lamu Central', 'Lamu East', '2026-01-01T08:00:00Z', 'active', NULL),
-- 6. Taita-Taveta
(30, 'cde.taitatave@kemis.go.ke', 'Mwadime Juma Mwanyalo', '+254700000030', 'Password@123', 'County Director of Education (CDE)', '20000030', 'Taita-Taveta', 'Voi', 'Voi', '2026-01-01T08:00:00Z', 'active', NULL),
-- 7. Garissa
(31, 'cde.garissa@kemis.go.ke', 'Abdullahi Ahmed Nur', '+254700000031', 'Password@123', 'County Director of Education (CDE)', '20000031', 'Garissa', 'Garissa Central', 'Garissa Township', '2026-01-01T08:00:00Z', 'active', NULL),
-- 8. Wajir
(32, 'cde.wajir@kemis.go.ke', 'Ibrahim Abdi Yussuf', '+254700000032', 'Password@123', 'County Director of Education (CDE)', '20000032', 'Wajir', 'Wajir East', 'Wajir East', '2026-01-01T08:00:00Z', 'active', NULL),
-- 9. Mandera
(33, 'cde.mandera@kemis.go.ke', 'Mohamed Ali Hassan', '+254700000033', 'Password@123', 'County Director of Education (CDE)', '20000033', 'Mandera', 'Mandera East', 'Mandera East', '2026-01-01T08:00:00Z', 'active', NULL),
-- 10. Marsabit
(34, 'cde.marsabit@kemis.go.ke', 'Boru Guyo Halake', '+254700000034', 'Password@123', 'County Director of Education (CDE)', '20000034', 'Marsabit', 'Saku', 'Saku', '2026-01-01T08:00:00Z', 'active', NULL),
-- 11. Isiolo
(35, 'cde.isiolo@kemis.go.ke', 'Halima Adan Ibrahim', '+254700000035', 'Password@123', 'County Director of Education (CDE)', '20000035', 'Isiolo', 'Isiolo Central', 'Isiolo North', '2026-01-01T08:00:00Z', 'active', NULL),
-- 12. Meru
(36, 'cde.meru@kemis.go.ke', 'Mwenda Kithinji Mutua', '+254700000036', 'Password@123', 'County Director of Education (CDE)', '20000036', 'Meru', 'Imenti Central', 'Imenti Central', '2026-01-01T08:00:00Z', 'active', NULL),
-- 13. Tharaka-Nithi
(37, 'cde.tharakanithi@kemis.go.ke', 'Kariuki Njoka Mwaniki', '+254700000037', 'Password@123', 'County Director of Education (CDE)', '20000037', 'Tharaka-Nithi', 'Chuka', 'Chuka', '2026-01-01T08:00:00Z', 'active', NULL),
-- 14. Embu
(38, 'cde.embu@kemis.go.ke', 'Nthiga Muriithi Kariuki', '+254700000038', 'Password@123', 'County Director of Education (CDE)', '20000038', 'Embu', 'Embu Central', 'Manyatta', '2026-01-01T08:00:00Z', 'active', NULL),
-- 15. Kitui
(39, 'cde.kitui@kemis.go.ke', 'Mutua Musyoka Nzoka', '+254700000039', 'Password@123', 'County Director of Education (CDE)', '20000039', 'Kitui', 'Kitui Central', 'Kitui Central', '2026-01-01T08:00:00Z', 'active', NULL),
-- 16. Machakos
(40, 'cde.machakos@kemis.go.ke', 'Mwikali Nzioka Mutinda', '+254700000040', 'Password@123', 'County Director of Education (CDE)', '20000040', 'Machakos', 'Machakos Central', 'Machakos Town', '2026-01-01T08:00:00Z', 'active', NULL),
-- 17. Makueni
(41, 'cde.makueni@kemis.go.ke', 'Kilonzo Musyimi Muthoka', '+254700000041', 'Password@123', 'County Director of Education (CDE)', '20000041', 'Makueni', 'Wote', 'Makueni', '2026-01-01T08:00:00Z', 'active', NULL),
-- 18. Nyandarua
(42, 'cde.nyandarua@kemis.go.ke', 'Njoroge Kamau Mwangi', '+254700000042', 'Password@123', 'County Director of Education (CDE)', '20000042', 'Nyandarua', 'Ol Kalou', 'Ol Kalou', '2026-01-01T08:00:00Z', 'active', NULL),
-- 19. Nyeri
(43, 'cde.nyeri@kemis.go.ke', 'Wanjiku Wambugu Gichuru', '+254700000043', 'Password@123', 'County Director of Education (CDE)', '20000043', 'Nyeri', 'Nyeri Central', 'Nyeri Town', '2026-01-01T08:00:00Z', 'active', NULL),
-- 20. Kirinyaga
(44, 'cde.kirinyaga@kemis.go.ke', 'Mwangi Kariuki Githinji', '+254700000044', 'Password@123', 'County Director of Education (CDE)', '20000044', 'Kirinyaga', 'Kirinyaga Central', 'Kirinyaga Central', '2026-01-01T08:00:00Z', 'active', NULL),
-- 21. Murang'a
(45, 'cde.muranga@kemis.go.ke', 'Wairimu Karanja Maina', '+254700000045', 'Password@123', 'County Director of Education (CDE)', '20000045', 'Murang''a', 'Murang''a South', 'Kiharu', '2026-01-01T08:00:00Z', 'active', NULL),
-- 22. Kiambu
(46, 'cde.kiambu@kemis.go.ke', 'Kamau Ngige Koinange', '+254700000046', 'Password@123', 'County Director of Education (CDE)', '20000046', 'Kiambu', 'Kiambu Central', 'Kiambaa', '2026-01-01T08:00:00Z', 'active', NULL),
-- 23. Turkana
(47, 'cde.turkana@kemis.go.ke', 'Ekiru Lokwang Lomuria', '+254700000047', 'Password@123', 'County Director of Education (CDE)', '20000047', 'Turkana', 'Turkana Central', 'Turkana Central', '2026-01-01T08:00:00Z', 'active', NULL),
-- 24. West Pokot
(48, 'cde.westpokot@kemis.go.ke', 'Cheruiyot Kipchumba Lotim', '+254700000048', 'Password@123', 'County Director of Education (CDE)', '20000048', 'West Pokot', 'Kapenguria', 'Kapenguria', '2026-01-01T08:00:00Z', 'active', NULL),
-- 25. Samburu
(49, 'cde.samburu@kemis.go.ke', 'Lempirik Anyika Lenkoko', '+254700000049', 'Password@123', 'County Director of Education (CDE)', '20000049', 'Samburu', 'Samburu Central', 'Samburu East', '2026-01-01T08:00:00Z', 'active', NULL),
-- 26. Trans-Nzoia
(50, 'cde.transnzoia@kemis.go.ke', 'Wekesa Barasa Wanyama', '+254700000050', 'Password@123', 'County Director of Education (CDE)', '20000050', 'Trans-Nzoia', 'Kitale', 'Saboti', '2026-01-01T08:00:00Z', 'active', NULL),
-- 27. Uasin Gishu
(51, 'cde.udingishu@kemis.go.ke', 'Kiprop Kipchirchir Ruto', '+254700000051', 'Password@123', 'County Director of Education (CDE)', '20000051', 'Uasin Gishu', 'Eldoret', 'Ainabkoi', '2026-01-01T08:00:00Z', 'active', NULL),
-- 28. Elgeyo-Marakwet
(52, 'cde.elgeyomarakwet@kemis.go.ke', 'Kigen Chepkonga Kipruto', '+254700000052', 'Password@123', 'County Director of Education (CDE)', '20000052', 'Elgeyo-Marakwet', 'Iten', 'Keiyo North', '2026-01-01T08:00:00Z', 'active', NULL),
-- 29. Nandi
(53, 'cde.nandi@kemis.go.ke', 'Kibet Kiplagat Arap Rono', '+254700000053', 'Password@123', 'County Director of Education (CDE)', '20000053', 'Nandi', 'Kapsabet', 'Emgwen', '2026-01-01T08:00:00Z', 'active', NULL),
-- 30. Baringo
(54, 'cde.baringo@kemis.go.ke', 'Kipchumba Chebet Kimining', '+254700000054', 'Password@123', 'County Director of Education (CDE)', '20000054', 'Baringo', 'Kabarnet', 'Baringo Central', '2026-01-01T08:00:00Z', 'active', NULL),
-- 31. Laikipia
(55, 'cde.laikipia@kemis.go.ke', 'Wangui Mbugua Njoroge', '+254700000055', 'Password@123', 'County Director of Education (CDE)', '20000055', 'Laikipia', 'Nanyuki', 'Laikipia East', '2026-01-01T08:00:00Z', 'active', NULL),
-- 32. Nakuru
(56, 'cde.nakuru@kemis.go.ke', 'Wambui Mwaura Karanja', '+254700000056', 'Password@123', 'County Director of Education (CDE)', '20000056', 'Nakuru', 'Nakuru Central', 'Nakuru Town East', '2026-01-01T08:00:00Z', 'active', NULL),
-- 33. Narok
(57, 'cde.narok@kemis.go.ke', 'Ole Saitoti Kipury', '+254700000057', 'Password@123', 'County Director of Education (CDE)', '20000057', 'Narok', 'Narok Central', 'Narok North', '2026-01-01T08:00:00Z', 'active', NULL),
-- 34. Kajiado
(58, 'cde.kajiado@kemis.go.ke', 'Sankale Ole Ntutu', '+254700000058', 'Password@123', 'County Director of Education (CDE)', '20000058', 'Kajiado', 'Kajiado Central', 'Kajiado Central', '2026-01-01T08:00:00Z', 'active', NULL),
-- 35. Kericho
(59, 'cde.kericho@kemis.go.ke', 'Kiprotich Cheruiyot Rotich', '+254700000059', 'Password@123', 'County Director of Education (CDE)', '20000059', 'Kericho', 'Kericho Central', 'Ainamoi', '2026-01-01T08:00:00Z', 'active', NULL),
-- 36. Bomet
(60, 'cde.bomet@kemis.go.ke', 'Kirui Chepkwony Bii', '+254700000060', 'Password@123', 'County Director of Education (CDE)', '20000060', 'Bomet', 'Bomet Central', 'Bomet Central', '2026-01-01T08:00:00Z', 'active', NULL),
-- 37. Kakamega
(61, 'cde.kakamega@kemis.go.ke', 'Omusula Wafula Wamalwa', '+254700000061', 'Password@123', 'County Director of Education (CDE)', '20000061', 'Kakamega', 'Lurambi', 'Lurambi', '2026-01-01T08:00:00Z', 'active', NULL),
-- 38. Vihiga
(62, 'cde.vihiga@kemis.go.ke', 'Alusa Mudavadi Amugune', '+254700000062', 'Password@123', 'County Director of Education (CDE)', '20000062', 'Vihiga', 'Mbale', 'Sabatia', '2026-01-01T08:00:00Z', 'active', NULL),
-- 39. Bungoma
(63, 'cde.bungoma@kemis.go.ke', 'Simiyu Wekesa Barasa', '+254700000063', 'Password@123', 'County Director of Education (CDE)', '20000063', 'Bungoma', 'Kanduyi', 'Kanduyi', '2026-01-01T08:00:00Z', 'active', NULL),
-- 40. Busia
(64, 'cde.busia@kemis.go.ke', 'Ouma Ojiambo Wandera', '+254700000064', 'Password@123', 'County Director of Education (CDE)', '20000064', 'Busia', 'Busia Town', 'Matayos', '2026-01-01T08:00:00Z', 'active', NULL),
-- 41. Siaya
(65, 'cde.siaya@kemis.go.ke', 'Otieno Oduor Omollo', '+254700000065', 'Password@123', 'County Director of Education (CDE)', '20000065', 'Siaya', 'Siaya Central', 'Alego Usonga', '2026-01-01T08:00:00Z', 'active', NULL),
-- 42. Kisumu
(66, 'cde.kisumu@kemis.go.ke', 'Achieng Odinga Owino', '+254700000066', 'Password@123', 'County Director of Education (CDE)', '20000066', 'Kisumu', 'Kisumu Central', 'Kisumu Central', '2026-01-01T08:00:00Z', 'active', NULL),
-- 43. Homa Bay
(67, 'cde.homabay@kemis.go.ke', 'Ochieng Mwai Nyakwar', '+254700000067', 'Password@123', 'County Director of Education (CDE)', '20000067', 'Homa Bay', 'Homa Bay Town', 'Homa Bay Town', '2026-01-01T08:00:00Z', 'active', NULL),
-- 44. Migori
(68, 'cde.migori@kemis.go.ke', 'Omondi Oyugi Ouma', '+254700000068', 'Password@123', 'County Director of Education (CDE)', '20000068', 'Migori', 'Migori Central', 'Suna East', '2026-01-01T08:00:00Z', 'active', NULL),
-- 45. Kisii
(69, 'cde.kisii@kemis.go.ke', 'Nyaboke Ondieki Nyamweya', '+254700000069', 'Password@123', 'County Director of Education (CDE)', '20000069', 'Kisii', 'Kisii Central', 'Kitutu Chache North', '2026-01-01T08:00:00Z', 'active', NULL),
-- 46. Nyamira
(70, 'cde.nyamira@kemis.go.ke', 'Bosire Omwanza Momanyi', '+254700000070', 'Password@123', 'County Director of Education (CDE)', '20000070', 'Nyamira', 'Nyamira South', 'Borabu', '2026-01-01T08:00:00Z', 'active', NULL)
ON CONFLICT ("emailId") DO NOTHING;