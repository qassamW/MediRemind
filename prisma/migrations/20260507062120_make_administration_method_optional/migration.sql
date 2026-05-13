-- AlterTable
ALTER TABLE "Medicine" ALTER COLUMN "administrationMethod" DROP NOT NULL;

-- AlterTable
ALTER TABLE "MedicineAssignment" ALTER COLUMN "administrationMethodOverride" DROP NOT NULL;
