import { z } from "zod";

export const interviewGeneratorSchema = z.object({
  role: z.string().min(2),
  experience: z.string().min(2),
  company: z.string().min(2),
  type: z.string().min(2),
  technologies: z.string().min(2),
  questionCount: z.coerce.number().min(3).max(20),
  focus: z.string().min(4)
});

export type InterviewGeneratorInput = z.infer<typeof interviewGeneratorSchema>;
