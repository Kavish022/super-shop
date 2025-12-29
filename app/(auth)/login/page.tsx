'use client';

import { SignIn } from '@clerk/nextjs';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <SignIn />
      </div>
    </div>
  );
};

export default LoginPage;