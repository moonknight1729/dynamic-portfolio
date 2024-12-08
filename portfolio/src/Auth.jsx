import React from 'react';

const AuthPage = () => {
  return (
    <div className="container mx-auto h-full md:h-screen px-8 md:px-60 text-white pt-8 bg-[#0D1317]">
    <div className="min-h-screen flex items-center justify-center bg-dark text-textLight">
      <div className="bg-[#1c1c1c] p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-3xl font-bold text-center text-primary mb-4">Welcome Back!</h1>
        <p className="text-center text-gray-400 mb-6">
          Log in to your account to access your dashboard.
        </p>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm mb-1">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded bg-[#2d2d2d] border border-gray-700 text-white focus:outline-none focus:border-primary"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm mb-1">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-3 rounded bg-[#2d2d2d] border border-gray-700 text-white focus:outline-none focus:border-primary"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-dark py-2 rounded hover:bg-green-700 transition"
          >
            Log In
          </button>
        </form>
        <div className="text-center text-sm text-gray-400 mt-4">
          Don't have an account? <a href="/register" className="text-primary">Sign Up</a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AuthPage;
