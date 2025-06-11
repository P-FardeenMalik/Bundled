import React, { createContext, useState, ReactNode, useContext } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from 'next/router';

interface User {
  id: string;
  email: string | null;
}

interface AuthContextType {
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signInWithMagicLink: (email: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  initializing: boolean;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  signIn: async () => {},
  signUp: async () => {},
  signInWithMagicLink: async () => {},
  signInWithGoogle: async () => {},
  signOut: async () => {},
  resetPassword: async () => {},
  initializing: false
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [initializing] = useState(false);
  const { toast } = useToast();

  const signIn = async (email: string, password: string) => {
    // Implement your own authentication logic here
    toast({
      title: "Not Implemented",
      description: "Authentication has been removed. Please implement your own auth solution.",
      variant: "destructive"
    });
  };

  const signUp = async (email: string, password: string) => {
    // Implement your own sign up logic here
    toast({
      title: "Not Implemented",
      description: "Authentication has been removed. Please implement your own auth solution.",
      variant: "destructive"
    });
  };

  const signInWithMagicLink = async (email: string) => {
    // Implement your own magic link logic here
    toast({
      title: "Not Implemented",
      description: "Authentication has been removed. Please implement your own auth solution.",
      variant: "destructive"
    });
  };

  const signInWithGoogle = async () => {
    // Implement your own Google auth logic here
    toast({
      title: "Not Implemented",
      description: "Authentication has been removed. Please implement your own auth solution.",
      variant: "destructive"
    });
  };

  const signOut = async () => {
    setUser(null);
    router.push('/');
    toast({
      title: "Signed Out",
      description: "You have been signed out successfully"
    });
  };

  const resetPassword = async (email: string) => {
    // Implement your own password reset logic here
    toast({
      title: "Not Implemented",
      description: "Authentication has been removed. Please implement your own auth solution.",
      variant: "destructive"
    });
  };

  return (
    <AuthContext.Provider value={{
      user,
      signIn,
      signUp,
      signInWithMagicLink,
      signInWithGoogle,
      signOut,
      resetPassword,
      initializing
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);