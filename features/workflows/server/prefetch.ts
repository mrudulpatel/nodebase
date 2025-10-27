import type { inferInput } from "@trpc/tanstack-react-query";
import {prefetch, trpc} from "@/trpc/server";

type Input = inferInput<typeof trpc.workflows.getMany>;

// Prefetch workflows data for a given input
export const prefetchWorkflows = (params: Input) => {
    return prefetch(trpc.workflows.getMany.queryOptions(params));
}