'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AuthForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentMode = searchParams.get('mode') as 'login' | 'signup';
  const [isLogin, setIsLogin] = useState(
    currentMode === 'login' || !currentMode
  );

  const toggleForm = (showLogin: boolean) => {
    setIsLogin(showLogin);
    router.push(`/auth?mode=${showLogin ? 'login' : 'signup'}`);
  };

  useEffect(() => {
    setIsLogin(currentMode === 'login' || !currentMode);
  }, [currentMode]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="min-h-[700px] w-full"
    >
      <div className="h-full flex flex-col">
        {isLogin ? <Login /> : <SignUp />}
        <p className="mt-auto pb-6 text-center">
          {isLogin ? (
            <>
              Don&apos;t have an account?
              <button
                onClick={() => toggleForm(false)}
                className="text-black hover:underline"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?  
              <button
                onClick={() => toggleForm(true)}
                className="text-black hover:underline"
              >
                Login
              </button>
            </>
          )}
        </p>
      </div>
    </motion.div>
  );
}

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="flex-1 max-w-md w-full mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-center mb-2">Login</h1>
      <p className="text-center text-gray-600 mb-8">
        Welcome back! Please log in to access your account.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your Email"
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 mb-2">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Enter your Password"
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </button>
          </div>
          <div className="flex justify-end mt-1">
            <Link
              href="/forgot-password"
              className="text-gray-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
        </div>

        <div className="mb-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="rounded border-gray-300"
              checked={formData.rememberMe}
              onChange={(e) =>
                setFormData({ ...formData, rememberMe: e.target.checked })
              }
            />
            <span className="ml-2 text-gray-700">Remember Me</span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors cursor-pointer"
        >
          Login
        </button>

        <div className="my-6 flex items-center">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-4 text-gray-500">OR</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <button
          type="button"
          className="w-full bg-gray-50 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <FcGoogle />
          Login with Google
        </button>
      </form>
    </motion.div>
  );
}

export function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    agreeToTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="flex-1 max-w-md w-full mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-center mb-2">Sign Up</h1>
      <p className="text-center text-gray-600 mb-8">
        Create an account to unlock exclusive features.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter your Name"
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your Email"
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 mb-2">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Enter your Password"
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </button>
          </div>
        </div>

        <div className="mb-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="rounded border-gray-300"
              checked={formData.agreeToTerms}
              onChange={(e) =>
                setFormData({ ...formData, agreeToTerms: e.target.checked })
              }
            />
            <span className="ml-2 text-gray-700">
              I agree with{' '}
              <Link href="/terms" className="text-black hover:underline">
                Terms of Use
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="text-black hover:underline">
                Privacy Policy
              </Link>
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors cursor-pointer"
        >
          Sign Up
        </button>

        <div className="my-6 flex items-center">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-4 text-gray-500">OR</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <button
          type="button"
          className="w-full bg-gray-50 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <FcGoogle />
          Sign Up with Google
        </button>
      </form>
    </motion.div>
  );
}
