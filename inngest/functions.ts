import prisma from "@/lib/db";
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "5s");
    await step.sleep("wait-a-moment", "5s");
    await step.sleep("wait-a-moment", "5s");
    await step.run("create-workflow", async () => {
      return prisma.workflow.create({
        data: {
          name: "New Workflow",
        },
      });
    });

    return { success: true, message: "Job queued" };
  }
);
