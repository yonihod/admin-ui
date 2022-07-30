import { createRouter } from "./context";
import { z } from "zod";

const spaceSchema = z.array(
  z.object({
  id: z.string(),
  name: z.string(),
  created: z.string(),
  created_by: z.object({
    id: z.string(),
    email: z.string().nullish(),
    name: z.string(),
  }),
  modified: z.string().nullish(),
  modified_by: z.object({
    id: z.string(),
    email: z.string(),
    name: z.string(),
  }).nullish(),
  provider: z.object({
    vendor: z.string(),
  }),
}));


export const exampleRouter = createRouter()
  .query("hello", {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    },
  })
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.example.findMany();
  }
  }).
  query("spaces", {
    async resolve() {
    try {
      const result = await fetch("http://localhost:3000/repos");
      const json = await result.json()
      return await spaceSchema.parse(json);
    } catch (error) {
      console.log(error);
    }
  }})
