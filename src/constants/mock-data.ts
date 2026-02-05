import { Subject } from "@/types";

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    name: "Introduction to Computer Science",
    code: "CS-101",
    department: "Computer Science",
    description: "Fundamental concepts of computer science including algorithms, data structures, and programming paradigms.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    name: "Calculus II",
    code: "MATH-201",
    department: "Mathematics",
    description: "Advanced calculus covering integration techniques, series, sequences, and applications of integration in engineering.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    name: "Physics for Engineers",
    code: "PHYS-150",
    department: "Physics",
    description: "Practical physics applications including mechanics, thermodynamics, and wave motion relevant to engineering disciplines.",
    createdAt: new Date().toISOString(),
  },
];