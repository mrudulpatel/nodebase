import {
  defaultShouldDehydrateQuery,
  QueryClient,
} from "@tanstack/react-query";
// import superjson from "superjson";

export function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 30,
      },
      dehydrate: {
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) && query.state.status === "pending",
      },
      hydrate: {
        // 
      },
       
    },
  });
}
