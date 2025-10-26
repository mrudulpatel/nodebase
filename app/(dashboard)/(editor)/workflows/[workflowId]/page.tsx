import { requireAuth } from '@/lib/auth-utils';
import React from 'react';

interface PageProps {
    params: Promise<{
        workflowId: string;
    }>
}

const WorkflowIdPage = async ({ params }: PageProps) => {
    await requireAuth();
    const { workflowId } = await params;
    return (
        <div>WorkflowIdPage: {workflowId}</div>
    )
}

export default WorkflowIdPage;