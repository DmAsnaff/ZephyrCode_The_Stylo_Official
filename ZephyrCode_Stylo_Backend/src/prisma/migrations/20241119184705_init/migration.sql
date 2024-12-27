/*
  Warnings:

  - You are about to drop the `faceimage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `hairstyletryon` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `socialforumpost` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userpreference` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `verbalexplanation_product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wholehairstylecollection` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `faceimage` DROP FOREIGN KEY `FaceImage_UserID_fkey`;

-- DropForeignKey
ALTER TABLE `hairstyletryon` DROP FOREIGN KEY `HairstyleTryOn_SelectionID_fkey`;

-- DropForeignKey
ALTER TABLE `socialforumpost` DROP FOREIGN KEY `SocialForumPost_email_fkey`;

-- DropForeignKey
ALTER TABLE `userpreference` DROP FOREIGN KEY `UserPreference_HairstyleID_fkey`;

-- DropForeignKey
ALTER TABLE `userpreference` DROP FOREIGN KEY `UserPreference_UserID_fkey`;

-- DropForeignKey
ALTER TABLE `verbalexplanation_product` DROP FOREIGN KEY `VerbalExplanation_Product_HairstyleID_fkey`;

-- DropTable
DROP TABLE `faceimage`;

-- DropTable
DROP TABLE `hairstyletryon`;

-- DropTable
DROP TABLE `socialforumpost`;

-- DropTable
DROP TABLE `userpreference`;

-- DropTable
DROP TABLE `verbalexplanation_product`;

-- DropTable
DROP TABLE `wholehairstylecollection`;
