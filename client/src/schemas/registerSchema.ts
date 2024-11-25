import { z } from "zod";

export const roleSelectionSchema = z.object({
    role: z.enum(["driver", "passenger"]),
});

export const contactInfoSchema = z.object({
    phoneNumber: z.string().min(10,{message:"at least 10 numbers"}),
});

export const createAccountSchema = z.object({
    name: z.string({ message: "Don't use numbers" }),
    email: z.string().email({ message: "Email is not valid" }),
    password: z
        .string()
        .min(8, { message: "Password should be at least 8 characters" }),
});




// Merge the schemas into a single schema
const registerSchema = roleSelectionSchema
    .merge(contactInfoSchema)
    .merge(createAccountSchema);

export type RegisterFormFields = z.infer<typeof registerSchema>;
export type PartialRegisterFormFields = Partial<RegisterFormFields>;

export { registerSchema };

