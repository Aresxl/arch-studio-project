import { defineAction } from "astro:actions";
import { z } from "astro/zod";

export const server = {
  form: defineAction({
    accept: "form",
    input: z.object({
      name: z.preprocess(
        (val) => (val === null ? "" : val),
        z.string().trim().nonempty({ message: `Name can't be empty` })
      ),
      email: z.preprocess(
        (val) => (val === null ? "" : val),
        z
          .string()
          .trim()
          .nonempty({ message: `Email can't be empty` })
          .email({ message: `Please enter a valid email` })
      ),
      textarea: z.preprocess(
        (val) => (val === null ? "" : val),
        z
          .string()
          .trim()
          .nonempty({ message: `Message can't be empty` })
          .min(50, { message: `Must be 50 characters or more` })
      ),
    }),
    handler: async (input) => {
      return { success: true };
    },
  }),
};
