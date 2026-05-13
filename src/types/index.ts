import type {
    User,
    Patient,
    Medicine,
    Box,
    MedicineAssignment,
    AdministrationLog,
    Department,
    Room,
  } from "@/app/generated/prisma";
  
  // Re-export base types for convenience
  export type {
    User,
    Patient,
    Medicine,
    Box,
    MedicineAssignment,
    AdministrationLog,
    Department,
    Room,
  };
  
  // Composite types used by pages
  
  export type PatientWithRelations = Patient & {
    department: Department | null;
    box: Box | null;
    assignments: MedicineAssignment[];
  };
  
  export type AssignmentWithMedicine = MedicineAssignment & {
    medicine: Medicine;
    patient: Patient;
  };
  
  export type ScheduleItemStatus =
    | "pending"
    | "given"
    | "skipped"
    | "delayed"
    | "overdue";
  
  export type ScheduleItem = {
    assignmentId: string;
    patientId: string;
    patientName: string;
    room: string | null;
    medicineName: string;
    dosage: string;
    administrationMethod: string;
    scheduledTime: string; // HH:mm format
    status: ScheduleItemStatus;
    logId: string | null;
    skipReason: string | null;
  };
  
  export type DashboardStats = {
    admittedCount: number;
    dosesTodayCount: number;
    overdueCount: number;
  };