export interface IStudentAnswer {
    id?: string;
    assessmentId: string;
    studentId: string;
    studentName: string;
    studentSurname: string;
    answers: any[];
    submittedAt: string; // Assuming this is a string in ISO 8601 format (e.g., "2024-03-20T12:30:00Z")
    fileUrl: string;
    file: number;
  }