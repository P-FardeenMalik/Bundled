import { useFormik } from 'formik';
import React, { useContext, useState, useEffect } from 'react';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/contexts/AuthContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import GoogleButton from '@/components/GoogleButton';
import Image from 'next/image';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useIsIFrame } from '@/hooks/useIsIFrame';
import Head from 'next/head';

const LoginPage = () => {
  const router = useRouter();
  const { initializing, signIn } = useContext(AuthContext);
  const [showPw, setShowPw] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { isIframe } = useIsIFrame();
  const { toast } = useToast();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { email, password } = formik.values;
      await signIn(email, password);
      router.push('/dashboard');
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Login failed",
        description: "Please check your credentials and try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(4, "Must be at least 4 characters")
      .max(40, "Must not exceed 40 characters"),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: handleLogin,
  });

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleLogin(e);
    }
  };

  return (
    <>
      <Head>
        <title>Login - Bundled</title>
        <meta name="description" content="Login to your Bundled account to access your crypto marketing dashboard." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 w-full max-w-md">
          {/* Company Branding */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4 cursor-pointer" onClick={() => router.push("/")}>
              <Image
                src="/images/logo.jpg"
                alt="Bundled Logo"
                width={48}
                height={48}
                className="rounded-xl"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Bundled
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Next-Generation Crypto Marketing Agency
            </p>
          </div>

          <Card className="bg-gray-900/50 border-white/10 backdrop-blur-sm" onKeyDown={handleKeyPress}>
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Welcome Back
              </CardTitle>
              <p className="text-gray-400 text-sm mt-2">
                Sign in to access your marketing dashboard
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <GoogleButton />
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/magic-link-login');
                  }}
                  variant="outline"
                  className="w-full border-white/20 text-white hover:bg-white/10 rounded-xl h-12"
                >
                  Continue with Magic Link
                </Button>
              </div>

              <div className="flex items-center w-full">
                <Separator className="flex-1 bg-white/20" />
                <span className="mx-4 text-gray-400 text-sm font-medium whitespace-nowrap">or</span>
                <Separator className="flex-1 bg-white/20" />
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300 font-medium">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="bg-black/50 border-white/20 text-white h-12 rounded-xl focus:border-yellow-400 transition-colors placeholder:text-gray-500"
                    />
                    {formik.touched.email && formik.errors.email && (
                      <p className="text-red-400 text-xs">{formik.errors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-gray-300 font-medium">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        name="password"
                        type={showPw ? 'text' : 'password'}
                        placeholder="Enter your password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="bg-black/50 border-white/20 text-white h-12 rounded-xl focus:border-yellow-400 transition-colors placeholder:text-gray-500 pr-12"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
                        onClick={() => setShowPw(!showPw)}
                      >
                        {showPw
                          ? <FaEye className="w-4 h-4" />
                          : <FaEyeSlash className="w-4 h-4" />
                        }
                      </Button>
                    </div>
                    {formik.touched.password && formik.errors.password && (
                      <p className="text-red-400 text-xs">{formik.errors.password}</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
                  <div className="flex items-center gap-1.5 text-gray-400">
                    <span>Need an account?</span>
                    <Button
                      type="button"
                      variant="link"
                      className="p-0 h-auto text-yellow-400 hover:text-yellow-300"
                      onClick={() => router.push('/signup')}
                    >
                      Sign up
                    </Button>
                  </div>
                  <Button
                    type="button"
                    variant="link"
                    className="p-0 h-auto text-yellow-400 hover:text-yellow-300"
                    onClick={() => router.push('/forgot-password')}
                  >
                    Forgot password?
                  </Button>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold h-12 rounded-xl transition-all duration-300 transform hover:scale-105"
                  disabled={isLoading || initializing || !formik.values.email || !formik.values.password || !formik.isValid}
                  onClick={handleLogin}
                >
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="text-center mt-6">
            <p className="text-gray-400 text-xs">
              © 2025 Bundled. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;