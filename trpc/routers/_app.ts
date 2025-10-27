import { workflowsRouter } from "@/features/workflows/server/routers";
import {
  createTRPCRouter
} from "../init";

export const appRouter = createTRPCRouter({
  // workflows router
  workflows: workflowsRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
