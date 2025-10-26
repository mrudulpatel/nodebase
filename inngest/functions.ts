import prisma from "@/lib/db";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { createOpenAI } from "@ai-sdk/openai";
import { createAnthropic } from "@ai-sdk/anthropic";
import { generateText } from "ai";
import { inngest } from "./client";

const google = createGoogleGenerativeAI();
const openai = createOpenAI();
const anthropic = createAnthropic();

export const execute = inngest.createFunction(
  { id: "execute" },
  { event: "execute/ai" },
  async ({ step }) => {
    await step.sleep("pretend", "5s");
    const { steps: geminiSteps } = await step.ai.wrap("gemini-generate-text", generateText, {
      system: "You are a helpful assistant that writes short stories.",
      prompt: `What is 2+2? Write a short story about it.`,
      model: google("gemini-2.5-flash"),
      experimental_telemetry: {
        isEnabled: true,
        recordInputs: true,
        recordOutputs: true,
      }
    });

    const { steps: openaiSteps } = await step.ai.wrap("openai-generate-text", generateText, {
      system: "You are a helpful assistant that writes short stories.",
      prompt: `What is 2+2? Write a short story about it.`,
      model: openai("gpt-4"),
    });

    const { steps: anthropicSteps } = await step.ai.wrap("anthropic-generate-text", generateText, {
      system: "You are a helpful assistant that writes short stories.",
      prompt: `What is 2+2? Write a short story about it.`,
      model: anthropic("claude-sonnet-4-5"),
    });

    return {
      geminiSteps,
      openaiSteps,
      anthropicSteps,
    };
  }
);
