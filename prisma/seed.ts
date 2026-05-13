import "dotenv/config";
import {
  PrismaClient,
  UserRole,
  DepartmentStatus,
  RoomStatus,
  Gender,
  PatientStatus,
  MedicineType,
  BoxStatus,
  AssignmentStatus,
  AdministrationStatus,
} from "@/app/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import { hash } from "bcryptjs";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

const daysAgo = (n: number) => {
  const d = new Date();
  d.setDate(d.getDate() - n);
  d.setHours(0, 0, 0, 0);
  return d;
};

const daysFromNow = (n: number) => {
  const d = new Date();
  d.setDate(d.getDate() + n);
  d.setHours(0, 0, 0, 0);
  return d;
};

const todayAt = (hh: number, mm: number) => {
  const d = new Date();
  d.setHours(hh, mm, 0, 0);
  return d;
};

async function main() {
  console.log("🌱 Seeding database...");

  // ── 1. Departments ────────────────────────────────────────────────
  const cardiology = await prisma.department.upsert({
    where: { id: "dept-cardiology" },
    update: {},
    create: {
      id: "dept-cardiology",
      name: "Cardiology",
      description: "Heart and cardiovascular care unit",
      head: "Dr. Khalid Mansour",
      status: DepartmentStatus.ACTIVE,
    },
  });

  const orthopedics = await prisma.department.upsert({
    where: { id: "dept-orthopedics" },
    update: {},
    create: {
      id: "dept-orthopedics",
      name: "Orthopedics",
      description: "Bone, joint, and muscle care unit",
      head: "Dr. Rania Haddad",
      status: DepartmentStatus.ACTIVE,
    },
  });

  console.log("✅ Departments created");

  // ── 2. Rooms ──────────────────────────────────────────────────────
  await prisma.room.upsert({
    where: { id: "room-101" },
    update: {},
    create: { id: "room-101", roomNumber: "101", capacity: 4, status: RoomStatus.AVAILABLE, departmentId: cardiology.id },
  });
  await prisma.room.upsert({
    where: { id: "room-102" },
    update: {},
    create: { id: "room-102", roomNumber: "102", capacity: 2, status: RoomStatus.FULL, departmentId: cardiology.id },
  });
  await prisma.room.upsert({
    where: { id: "room-201" },
    update: {},
    create: { id: "room-201", roomNumber: "201", capacity: 3, status: RoomStatus.AVAILABLE, departmentId: orthopedics.id },
  });

  console.log("✅ Rooms created");

  // ── 3. Users ──────────────────────────────────────────────────────
  const staffPassword = await hash("staff123", 10);
  const adminPassword = await hash("admin123", 10);

  const staffUser = await prisma.user.upsert({
    where: { email: "staff@mediremind.com" },
    update: {},
    create: { name: "Sara Nurse", email: "staff@mediremind.com", passwordHash: staffPassword, role: UserRole.STAFF },
  });

  await prisma.user.upsert({
    where: { email: "admin@mediremind.com" },
    update: {},
    create: { name: "Dr. Ahmad", email: "admin@mediremind.com", passwordHash: adminPassword, role: UserRole.ADMIN },
  });

  console.log("✅ Users created");

  // ── 4. Patients ───────────────────────────────────────────────────
  const khalid = await prisma.patient.upsert({
    where: { nationalId: "PAT-001" },
    update: {},
    create: {
      name: "Khalid Hassan",
      age: 45,
      gender: Gender.MALE,
      nationalId: "PAT-001",
      departmentId: cardiology.id,
      room: "101",
      allergies: ["Penicillin"],
      status: PatientStatus.ADMITTED,
    },
  });

  const layla = await prisma.patient.upsert({
    where: { nationalId: "PAT-002" },
    update: {},
    create: {
      name: "Layla Mahmoud",
      age: 62,
      gender: Gender.FEMALE,
      nationalId: "PAT-002",
      departmentId: cardiology.id,
      room: "102",
      allergies: ["Aspirin", "Sulfa"],
      status: PatientStatus.ADMITTED,
    },
  });

  const omar = await prisma.patient.upsert({
    where: { nationalId: "PAT-003" },
    update: {},
    create: {
      name: "Omar Saeed",
      age: 38,
      gender: Gender.MALE,
      nationalId: "PAT-003",
      departmentId: orthopedics.id,
      room: "201",
      allergies: [],
      status: PatientStatus.ADMITTED,
    },
  });

  await prisma.patient.upsert({
    where: { nationalId: "PAT-004" },
    update: {},
    create: {
      name: "Fatima Noor",
      age: 71,
      gender: Gender.FEMALE,
      nationalId: "PAT-004",
      allergies: ["Codeine"],
      status: PatientStatus.DISCHARGED,
    },
  });

  console.log("✅ Patients created");

  // ── 5. Medicines ──────────────────────────────────────────────────
  const metoprolol = await prisma.medicine.upsert({
    where: { id: "med-metoprolol" },
    update: {},
    create: { id: "med-metoprolol", name: "Metoprolol", type: MedicineType.PILL, administrationMethod: "Give orally with water after meals", defaultDosage: "50mg" },
  });

  const heparin = await prisma.medicine.upsert({
    where: { id: "med-heparin" },
    update: {},
    create: { id: "med-heparin", name: "Heparin", type: MedicineType.INJECTION, administrationMethod: "Inject subcutaneously in abdomen, rotate sites", defaultDosage: "5000 units" },
  });

  const amoxicillin = await prisma.medicine.upsert({
    where: { id: "med-amoxicillin" },
    update: {},
    create: { id: "med-amoxicillin", name: "Amoxicillin", type: MedicineType.PILL, administrationMethod: "Give orally every 8 hours", defaultDosage: "500mg" },
  });

  const ibuprofen = await prisma.medicine.upsert({
    where: { id: "med-ibuprofen" },
    update: {},
    create: { id: "med-ibuprofen", name: "Ibuprofen", type: MedicineType.PILL, administrationMethod: "Give with food, avoid on empty stomach", defaultDosage: "400mg" },
  });

  console.log("✅ Medicines created");

  // ── 6. Boxes ──────────────────────────────────────────────────────
  // box001 → shared by khalid + layla (same cardiology shelf)
  // box002 → idle (no patients assigned — demonstrates new schema)
  const box001 = await prisma.box.upsert({
    where: { boxLabel: "Box-001" },
    update: {},
    create: { boxLabel: "Box-001", location: "Cardiology Shelf A1", status: BoxStatus.ACTIVE },
  });

  await prisma.box.upsert({
    where: { boxLabel: "Box-002" },
    update: {},
    create: { boxLabel: "Box-002", location: "Orthopedics Shelf B1", status: BoxStatus.ACTIVE, notes: "Available for assignment" },
  });

  // Set patient → box links (idempotent)
  await prisma.patient.update({ where: { id: khalid.id }, data: { boxId: box001.id } });
  await prisma.patient.update({ where: { id: layla.id  }, data: { boxId: box001.id } });
  // omar has no box — medicines assigned directly

  console.log("✅ Boxes created");

  // ── 7. Medicine Assignments ───────────────────────────────────────
  const assignment1 = await prisma.medicineAssignment.upsert({
    where: { id: "assign-khalid-metoprolol" },
    update: {},
    create: {
      id: "assign-khalid-metoprolol",
      patientId: khalid.id,
      boxId: box001.id,
      medicineId: metoprolol.id,
      dosage: "50mg",
      administrationMethodOverride: "Give orally with water after meals",
      scheduleTimes: ["08:00", "20:00"],
      startDate: daysAgo(5),
      durationDays: 30,
      endDate: daysFromNow(25),
      repeat: true,
      status: AssignmentStatus.ACTIVE,
    },
  });

  const assignment2 = await prisma.medicineAssignment.upsert({
    where: { id: "assign-khalid-heparin" },
    update: {},
    create: {
      id: "assign-khalid-heparin",
      patientId: khalid.id,
      boxId: box001.id,
      medicineId: heparin.id,
      dosage: "5000 units",
      administrationMethodOverride: "Inject subcutaneously in abdomen, rotate sites",
      scheduleTimes: ["06:00", "14:00", "22:00"],
      startDate: daysAgo(2),
      durationDays: 7,
      endDate: daysFromNow(5),
      repeat: true,
      status: AssignmentStatus.ACTIVE,
    },
  });

  const assignment3 = await prisma.medicineAssignment.upsert({
    where: { id: "assign-layla-amoxicillin" },
    update: {},
    create: {
      id: "assign-layla-amoxicillin",
      patientId: layla.id,
      boxId: box001.id,
      medicineId: amoxicillin.id,
      dosage: "500mg",
      administrationMethodOverride: "Give orally every 8 hours",
      scheduleTimes: ["08:00", "16:00", "00:00"],
      startDate: daysAgo(1),
      durationDays: 10,
      endDate: daysFromNow(9),
      repeat: true,
      status: AssignmentStatus.ACTIVE,
    },
  });

  const assignment4 = await prisma.medicineAssignment.upsert({
    where: { id: "assign-omar-ibuprofen" },
    update: {},
    create: {
      id: "assign-omar-ibuprofen",
      patientId: omar.id,
      boxId: null,
      medicineId: ibuprofen.id,
      dosage: "400mg",
      administrationMethodOverride: "Give with food, avoid on empty stomach",
      scheduleTimes: ["08:00", "13:00", "19:00"],
      startDate: daysAgo(0),
      durationDays: 5,
      endDate: daysFromNow(5),
      repeat: true,
      status: AssignmentStatus.ACTIVE,
    },
  });

  console.log("✅ Assignments created");

  // ── 8. Administration Logs ────────────────────────────────────────
  // These always upsert with today's timestamps so the schedule page
  // shows realistic data no matter when the seed is run.
  await prisma.administrationLog.upsert({
    where: { id: "log-1" },
    update: { scheduledTime: todayAt(8, 0), administeredAt: todayAt(8, 5), status: AdministrationStatus.GIVEN, skipReason: null },
    create: {
      id: "log-1",
      assignmentId: assignment1.id,
      patientId: khalid.id,
      staffId: staffUser.id,
      scheduledTime: todayAt(8, 0),
      administeredAt: todayAt(8, 5),
      status: AdministrationStatus.GIVEN,
    },
  });

  await prisma.administrationLog.upsert({
    where: { id: "log-2" },
    update: { scheduledTime: todayAt(6, 0), administeredAt: todayAt(6, 10), status: AdministrationStatus.GIVEN, skipReason: null },
    create: {
      id: "log-2",
      assignmentId: assignment2.id,
      patientId: khalid.id,
      staffId: staffUser.id,
      scheduledTime: todayAt(6, 0),
      administeredAt: todayAt(6, 10),
      status: AdministrationStatus.GIVEN,
    },
  });

  await prisma.administrationLog.upsert({
    where: { id: "log-3" },
    update: { scheduledTime: todayAt(14, 0), administeredAt: null, status: AdministrationStatus.SKIPPED, skipReason: "Patient refused" },
    create: {
      id: "log-3",
      assignmentId: assignment2.id,
      patientId: khalid.id,
      staffId: staffUser.id,
      scheduledTime: todayAt(14, 0),
      administeredAt: null,
      status: AdministrationStatus.SKIPPED,
      skipReason: "Patient refused",
    },
  });

  await prisma.administrationLog.upsert({
    where: { id: "log-4" },
    update: { scheduledTime: todayAt(8, 0), administeredAt: todayAt(8, 20), status: AdministrationStatus.GIVEN, skipReason: null },
    create: {
      id: "log-4",
      assignmentId: assignment3.id,
      patientId: layla.id,
      staffId: staffUser.id,
      scheduledTime: todayAt(8, 0),
      administeredAt: todayAt(8, 20),
      status: AdministrationStatus.GIVEN,
    },
  });

  await prisma.administrationLog.upsert({
    where: { id: "log-5" },
    update: { scheduledTime: todayAt(8, 0), administeredAt: todayAt(8, 15), status: AdministrationStatus.GIVEN, skipReason: null },
    create: {
      id: "log-5",
      assignmentId: assignment4.id,
      patientId: omar.id,
      staffId: staffUser.id,
      scheduledTime: todayAt(8, 0),
      administeredAt: todayAt(8, 15),
      status: AdministrationStatus.GIVEN,
    },
  });

  console.log("✅ Administration logs created");
  console.log("🎉 Seeding complete!");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });