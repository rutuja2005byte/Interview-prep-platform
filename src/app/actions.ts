"use server";

import { interviewGeneratorSchema } from "@/lib/schemas";

export async function generateInterviewPlan(raw: unknown) {
  const input = interviewGeneratorSchema.parse(raw);

  return {
    role: input.role,
    company: input.company,
    difficulty: input.experience.includes("Senior") ? "Advanced" : "Intermediate",
    interviewType: input.type,
    expectedSkills: input.technologies.split(",").map((item) => item.trim()).filter(Boolean),
    estimatedDuration: `${Math.max(25, input.questionCount * 6)} min`,
    questions: Array.from({ length: input.questionCount }, (_, index) => {
      return `${index + 1}. ${input.type} prompt for ${input.role}: evaluate ${input.focus.toLowerCase()} with ${input.technologies}.`;
    })
  };
}
