import { prefetchWorkflows } from '@/features/workflows/server/prefetch';
import { requireAuth } from '@/lib/auth-utils'
import { HydrateClient } from '@/trpc/server';
import { ErrorBoundary } from 'react-error-boundary';
import React, { Suspense } from 'react'
import { WorkflowsContainer, WorkflowsList } from '@/features/workflows/components/workflows';
import { SearchParams } from 'nuqs';
import { workflowParamsLoader } from '@/features/workflows/server/params-loader';

type Props = {
  searchParams: Promise<SearchParams>;
}

const WorkflowsPage = async ({ searchParams }: Props) => {
  await requireAuth();

  const params = await workflowParamsLoader(searchParams);

  prefetchWorkflows(params);

  return (
    <WorkflowsContainer>
      <HydrateClient>
        <ErrorBoundary fallback={<p>Something went wrong loading workflows.</p>}>
          <Suspense fallback={<p>Loading...</p>}>
            <WorkflowsList />
          </Suspense>
        </ErrorBoundary>
      </HydrateClient>
    </WorkflowsContainer>
  )
}

export default WorkflowsPage