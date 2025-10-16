import { RegisterForm } from '@/features/auth/components/register-form'
import { requireUnAuth } from '@/lib/auth-utils';
import React from 'react'

const SignUpPage = async () => {
  await requireUnAuth();
  return (
    <div><RegisterForm /></div>
  )
}

export default SignUpPage