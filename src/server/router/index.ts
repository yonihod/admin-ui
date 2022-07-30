// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { spacesRouter } from "./spaces";
import { appsRouter } from "./apps";
import { protectedExampleRouter } from "./protected-example-router";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("spaces.", spacesRouter)
  .merge("apps.", appsRouter)
  .merge("question.", protectedExampleRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
