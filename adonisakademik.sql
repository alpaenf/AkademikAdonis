-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 22, 2025 at 11:52 AM
-- Server version: 8.0.30
-- PHP Version: 8.3.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `adonisakademik`
--

-- --------------------------------------------------------

--
-- Table structure for table `add_dosen_semester_to_matakuliahs`
--

CREATE TABLE `add_dosen_semester_to_matakuliahs` (
  `id` int UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `adonis_schema`
--

CREATE TABLE `adonis_schema` (
  `id` int UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `batch` int NOT NULL,
  `migration_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `adonis_schema`
--

INSERT INTO `adonis_schema` (`id`, `name`, `batch`, `migration_time`) VALUES
(37, 'database/migrations/1750417843279_create_users_table', 1, '2025-06-21 01:55:50'),
(38, 'database/migrations/1750418508480_create_fakultas_table', 1, '2025-06-21 01:55:50'),
(39, 'database/migrations/1750418615237_create_prodi_table', 1, '2025-06-21 01:55:50'),
(40, 'database/migrations/1750418615238_create_create_mahasiswa_table', 1, '2025-06-21 01:55:50'),
(41, 'database/migrations/1750418967173_create_matakuliahs_table', 1, '2025-06-21 01:55:50'),
(42, 'database/migrations/1750420307446_create_krs_table', 1, '2025-06-21 01:55:50'),
(43, 'database/migrations/1750482378375_create_add_dosen_semester_to_matakuliahs_table', 2, '2025-06-21 05:06:57'),
(44, 'database/migrations/1750482390550_create_add_dosen_semester_to_matakuliahs_table', 2, '2025-06-21 05:06:57'),
(45, 'database/migrations/1750482714490_create_add_status_to_matakuliahs_table', 3, '2025-06-21 05:12:18'),
(46, 'database/migrations/1750489292356_create_add_fakultas_to_mahasiswas_table', 4, '2025-06-21 07:03:15'),
(47, 'database/migrations/1750567375176_create_add_gambar_to_fakultas_table', 5, '2025-06-22 04:43:21'),
(48, 'database/migrations/1750581791770_create_add_foto_to_mahasiswas_table', 6, '2025-06-22 08:44:03');

-- --------------------------------------------------------

--
-- Table structure for table `adonis_schema_versions`
--

CREATE TABLE `adonis_schema_versions` (
  `version` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `adonis_schema_versions`
--

INSERT INTO `adonis_schema_versions` (`version`) VALUES
(2);

-- --------------------------------------------------------

--
-- Table structure for table `fakultas`
--

CREATE TABLE `fakultas` (
  `id` int UNSIGNED NOT NULL,
  `nama` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `gambar` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `fakultas`
--

INSERT INTO `fakultas` (`id`, `nama`, `created_at`, `updated_at`, `gambar`) VALUES
(1, 'Fakultas Teknik', '2025-06-21 05:02:20', '2025-06-22 04:51:04', '/uploads/fakultas/eff4ada2-7b20-4d52-ac19-e36b19888b9b.jpg'),
(2, 'Fakultas Ilmu Seni Budaya', '2025-06-21 06:46:49', '2025-06-22 04:55:07', '/uploads/fakultas/312c2dc5-5c32-43e3-880d-00616414733c.png'),
(3, 'Fakultas Kedokteran ', '2025-06-21 06:47:10', '2025-06-22 04:56:22', '/uploads/fakultas/c3472527-4a6f-4305-b260-85db03b5d9f5.jpg'),
(4, 'Fakultas Peternakan', '2025-06-21 06:53:10', '2025-06-22 04:57:06', '/uploads/fakultas/67fa03eb-5867-4f69-8eef-ae59f01f4d4f.jpg'),
(5, 'Fakultas Hukum', '2025-06-22 08:37:27', '2025-06-22 08:37:27', '/uploads/fakultas/7275f832-7102-4d36-b44f-6018f26aa3a0.jpg'),
(6, 'Fakultas Pertanian', '2025-06-22 08:38:38', '2025-06-22 08:38:38', '/uploads/fakultas/9050df3e-70d6-47c6-a4ea-3225080ed857.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `krs`
--

CREATE TABLE `krs` (
  `id` int UNSIGNED NOT NULL,
  `mahasiswa_id` int UNSIGNED DEFAULT NULL,
  `matakuliah_id` int UNSIGNED DEFAULT NULL,
  `semester` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `krs`
--

INSERT INTO `krs` (`id`, `mahasiswa_id`, `matakuliah_id`, `semester`, `created_at`, `updated_at`) VALUES
(2, 1, 2, 4, '2025-06-21 05:48:10', '2025-06-21 05:48:10');

-- --------------------------------------------------------

--
-- Table structure for table `mahasiswa`
--

CREATE TABLE `mahasiswa` (
  `id` int UNSIGNED NOT NULL,
  `nim` varchar(255) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `prodi` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `fakultas` varchar(255) DEFAULT NULL,
  `foto` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `mahasiswa`
--

INSERT INTO `mahasiswa` (`id`, `nim`, `nama`, `email`, `prodi`, `created_at`, `updated_at`, `fakultas`, `foto`) VALUES
(1, '1', 'Dimas', 'dimas@gmail.com', 'Elektro', '2025-06-21 04:07:35', '2025-06-22 08:47:46', 'Fakultas Teknik', '/uploads/mahasiswa/4ed27312-ba69-42e2-a2cd-8ed3c7ff7bd2.jpg'),
(2, '2', 'Fina', 'Fina@mhs.unsoed.ac.id', 'Pendidikan Dokter Gigi', '2025-06-21 04:19:14', '2025-06-21 07:15:04', 'Fakultas Kedokteran ', NULL),
(4, '3', 'Edwi', 'edwi@mhs.unsoed.ac.id', 'Pendidikan Dokter', '2025-06-21 04:30:47', '2025-06-22 09:27:24', 'Fakultas Kedokteran ', '/uploads/mahasiswa/ef86ec73-fced-4414-8890-ddd61517c45d.jpeg'),
(5, '4', 'Kafah', 'Kafah@mhs.unsoed.ac.id', 'Sastra Inggris', '2025-06-21 06:59:35', '2025-06-22 09:28:05', 'Fakultas Ilmu Seni Budaya', '/uploads/mahasiswa/18e87155-8321-4c04-9d57-f59af4d8bdc8.jpg'),
(7, '5', 'Renggo', 'Renggo@mhs.unsoed.ac.id', 'Elektro', '2025-06-21 07:13:20', '2025-06-21 07:13:20', 'Fakultas Teknik', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `matakuliah`
--

CREATE TABLE `matakuliah` (
  `id` int UNSIGNED NOT NULL,
  `kode` varchar(255) DEFAULT NULL,
  `nama_matakuliah` varchar(255) DEFAULT NULL,
  `sks` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `dosen` varchar(255) DEFAULT NULL,
  `semester` int DEFAULT NULL,
  `status` varchar(255) DEFAULT 'Aktif'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `matakuliah`
--

INSERT INTO `matakuliah` (`id`, `kode`, `nama_matakuliah`, `sks`, `created_at`, `updated_at`, `dosen`, `semester`, `status`) VALUES
(2, 'MK001', 'Analisis Data System', 3, '2025-06-21 05:10:07', '2025-06-22 10:05:39', 'edwi', 4, 'Aktif'),
(3, 'MK002', 'Pendidikan Agama Islam', 2, '2025-06-22 10:05:31', '2025-06-22 10:06:30', 'Dimas ', 3, 'Aktif'),
(4, 'MK003', 'Bahasa Inggris', 2, '2025-06-22 10:06:20', '2025-06-22 10:06:20', 'Kafah', 2, 'Aktif');

-- --------------------------------------------------------

--
-- Table structure for table `prodi`
--

CREATE TABLE `prodi` (
  `id` int UNSIGNED NOT NULL,
  `nama` varchar(255) NOT NULL,
  `fakultas_id` int UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `prodi`
--

INSERT INTO `prodi` (`id`, `nama`, `fakultas_id`, `created_at`, `updated_at`) VALUES
(1, 'Elektro', 1, '2025-06-21 05:35:58', '2025-06-21 05:35:58'),
(2, 'Sastra Inggris', 2, '2025-06-21 06:51:03', '2025-06-21 06:51:03'),
(3, 'Pendidikan Dokter', 3, '2025-06-21 06:51:16', '2025-06-21 06:51:40'),
(4, 'Pendidikan Dokter Gigi', 3, '2025-06-21 06:52:28', '2025-06-21 06:52:28');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int UNSIGNED NOT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `email` varchar(254) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `full_name`, `email`, `password`, `created_at`, `updated_at`) VALUES
(1, 'Administrator', 'admin@example.com', '$scrypt$n=16384,r=8,p=1$3UWtdbzbPNdgNVnv92kLcQ$FfRMZFlITYNJcBEcXG/0C12ftG0LuYv3ZMaGW4PXLbBcgEQNMvy+JAcvfJ6NxIyjYb/tNjkXS64EG1+fR0wEbg', '2025-06-21 02:00:56', '2025-06-21 02:00:56'),
(2, 'Fina Julianti', 'FinaJulianti@gmail.com', '$scrypt$n=16384,r=8,p=1$IIU/YGxX4Ge6TxzxHdf5Pg$r23e2pJwXAs+qNv0rxjlZ+OVRIblyGj35JFGrqGJJ9+pb+EKKgv4mzOee1V2T6nxkTJZmv63ghLSGGFIu2ky7w', '2025-06-21 06:44:38', '2025-06-21 07:23:16'),
(3, 'Mukhammad Alfaen Fadillah', 'alfaenf23@gmail.com', '$scrypt$n=16384,r=8,p=1$768Dozk0pTA7cEBERe1ddA$kHZ8Dy4Yvzr15Ry6S0zQeMkk2+lTw8yoWmxM9MKNDku3dxlztRP2goU5hRXTL0yxssXO/Txn+x8r4p7qKrehZQ', '2025-06-22 04:41:05', '2025-06-22 04:41:05');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `add_dosen_semester_to_matakuliahs`
--
ALTER TABLE `add_dosen_semester_to_matakuliahs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `adonis_schema`
--
ALTER TABLE `adonis_schema`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `adonis_schema_versions`
--
ALTER TABLE `adonis_schema_versions`
  ADD PRIMARY KEY (`version`);

--
-- Indexes for table `fakultas`
--
ALTER TABLE `fakultas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `krs`
--
ALTER TABLE `krs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `krs_mahasiswa_id_foreign` (`mahasiswa_id`),
  ADD KEY `krs_matakuliah_id_foreign` (`matakuliah_id`);

--
-- Indexes for table `mahasiswa`
--
ALTER TABLE `mahasiswa`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `mahasiswa_nim_unique` (`nim`);

--
-- Indexes for table `matakuliah`
--
ALTER TABLE `matakuliah`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `prodi`
--
ALTER TABLE `prodi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `prodi_fakultas_id_foreign` (`fakultas_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `add_dosen_semester_to_matakuliahs`
--
ALTER TABLE `add_dosen_semester_to_matakuliahs`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `adonis_schema`
--
ALTER TABLE `adonis_schema`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `fakultas`
--
ALTER TABLE `fakultas`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `krs`
--
ALTER TABLE `krs`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `mahasiswa`
--
ALTER TABLE `mahasiswa`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `matakuliah`
--
ALTER TABLE `matakuliah`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `prodi`
--
ALTER TABLE `prodi`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `krs`
--
ALTER TABLE `krs`
  ADD CONSTRAINT `krs_mahasiswa_id_foreign` FOREIGN KEY (`mahasiswa_id`) REFERENCES `mahasiswa` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `krs_matakuliah_id_foreign` FOREIGN KEY (`matakuliah_id`) REFERENCES `matakuliah` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `prodi`
--
ALTER TABLE `prodi`
  ADD CONSTRAINT `prodi_fakultas_id_foreign` FOREIGN KEY (`fakultas_id`) REFERENCES `fakultas` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
