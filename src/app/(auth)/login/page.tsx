import React, { useState } from 'react'
import SignInWithGoogleButton from '../components/Login';

const page = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="flex items-center justify-center text-2xl font-bold mb-4">Sign In</h1>
          <div className="mt-6">
            <SignInWithGoogleButton />
          </div>
        </div>
      </div>
    );
}

export default page
