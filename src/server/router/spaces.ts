import { createRouter } from "./context";
import { z } from "zod";

const spaceSchema =
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
    vendor: z.enum(["AWS", "GCP", "AZURE"]),
  }),
});



export const spacesRouter = createRouter()
  .query("spaces", {
    async resolve() {
    try {
      const result = await fetch("http://localhost:3000/repos");
      const json = await result.json()
      return await z.array(spaceSchema).parse(json);
    } catch (error) {
      console.log(error);
    }
  }})
  .query("get-space-by-id", {
    input: z.object(
      {
        id: z.string(),
      }
    ),
    async resolve({ input }) {
      const {id} = input;
      const res = await fetch(`http://localhost:3000/repos/${id}`);
      return spaceSchema.parse( await res.json() );
    }
  }
  )
  .query("apps", {
    async resolve() {
      try {
        const result = await fetch("http://localhost:3000/apps");
        const json = await result.json()
        return await z.array(spaceSchema).parse(json);
      } catch (error) {
        console.log(error);
      }
    }
  });
