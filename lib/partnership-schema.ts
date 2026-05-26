import { z } from "zod"
import { digitsOnly, isValidEmail, isValidUSPhone, normalizeEmail } from "@/lib/form-formatters"

export const partnershipSchema = z.object({
  institutionName: z.string().trim().min(2, "Institution name is required"),
  contactName: z.string().trim().min(2, "Contact name is required"),
  role: z.string().trim().min(2, "Role / title is required"),
  email: z
    .string()
    .transform(normalizeEmail)
    .pipe(z.string().min(1, "Email is required").refine(isValidEmail, "Please enter a valid email address")),
  phone: z
    .string()
    .optional()
    .transform((value) => (value?.trim() ? value.trim() : ""))
    .refine(isValidUSPhone, "Enter a valid 10-digit US phone number"),
  supplyTypes: z.string().trim().min(5, "Please briefly describe available supplies"),
  frequency: z.string().min(1, "Please select a frequency"),
  message: z.string().optional(),
})

export type PartnershipFormData = z.infer<typeof partnershipSchema>
