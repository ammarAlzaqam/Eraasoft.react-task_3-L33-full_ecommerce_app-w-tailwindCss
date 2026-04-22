import z from "zod";

export const productSchema = z.object({
  name: z
    .string()
    .min(1, "Product name is required")
    .min(3, "At least 3 characters"),
  price: z
    .number({ invalid_type_error: "Price must be a number" })
    .min(1, "Price must be greater than 0"),
  category: z.string().min(1, "Please select a category"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  mainImg: z
    .string()
    .min(1, "Main image is required")
    .url("Must be a valid URL"),

  gallery1: z
    .string()
    .min(1, "Gallery image is required")
    .url("Must be a valid URL"),

  gallery2: z
    .string()
    .min(1, "Gallery image is required")
    .url("Must be a valid URL"),

  gallery3: z
    .string()
    .min(1, "Gallery image is required")
    .url("Must be a valid URL"),
});
