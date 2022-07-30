import { createRouter } from "./context";
import { z } from "zod";
import type { App } from "@/types/app";

const appsSchema = z.object({
  id: z.string(),
  name: z.string(),
  version: z.string(),
  title: z.string(),
  subtitle: z.string(),
  description: z.string(),
  vendor: z.string(),
  icon: z.string(),
  color: z.string(),
  link: z.string().nullish(),
  tags: z.object({
    note: z.string(),
    note1: z.string().nullish(),
    sdk: z.string(),
    category: z.string().nullish(),
    type: z.string().nullish(),
    bundle: z.string().nullish(),
  }),
  config: z.object({
    '!prediction-data': z.string().nullish(),
    'geo-features': z.string().nullish(),
    'geo-areas': z.string().nullish(),
    '!private': z.boolean().nullish(),
  }),
  deployed: z.string(),
  created_by: z.object({
    id: z.string(),
    name: z.string(),
  }),
  modified: z.string().nullish(),
  modified_by: z.object({
    id: z.string(),
    name: z.string(),
  }).nullish(),
}
);





export const appsRouter = createRouter()
  .query("apps", {
    async resolve() {
      try {
        const result = await fetch("http://localhost:3000/apps");
        const json = await result.json()
        return await z.array(appsSchema).parse(json);
      } catch (error) {
        console.log(error);
      }
    }
  });
