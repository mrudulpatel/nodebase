import { requireAuth } from '@/lib/auth-utils';
import React from 'react';


const ExecutionIdPage = async () => {
  await requireAuth();

  return (
    <div>Executions</div>
  )
}

export default ExecutionIdPage;