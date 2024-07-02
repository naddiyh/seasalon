"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { FirebaseError } from "firebase/app";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { login, logout, signInWithGoogle, signup } from "./service";
import { getFirebaseErrorMessage } from "@/utils/getFirebaseError";
import { IUser } from "@/interface/user";
import { TLoginForm, TSingUpForm } from "./types";
import { DEFAULT_ERROR } from "@/constant/error";

export const useAuth = () => {
  const router = useRouter();
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoadingLogin, setIsLoadingLogin] = useState(false);
  const [isLoadingSignup, setIsLoadingSignup] = useState(false);

  useEffect(() => {
    const storedUser = Cookies.get("customer");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const { mutateAsync: mutateLogin } = useMutation<
    IUser,
    FirebaseError,
    TLoginForm
  >({
    mutationFn: (data) => login(data, data.role),
    retry: 0,
    onSuccess: (data) => {
      Cookies.set("customer", JSON.stringify(data));
      setUser(data);
      toast.dismiss();
      toast.success("Account has been successfully logged in");
      if (data.role === "admin") router.push("/admin");
      else router.push("/");
    },
    onError: (error) => {
      toast.dismiss();
      toast.error(getFirebaseErrorMessage(error.code));
    },
    onMutate: () => {
      setIsLoadingLogin(true);
      toast.loading("Logging in");
    },
    onSettled: () => {
      setIsLoadingLogin(false);
    },
  });

  const { mutateAsync: mutateSignup } = useMutation<
    IUser,
    FirebaseError,
    TSingUpForm
  >({
    mutationFn: signup,
    retry: 0,
    onSuccess: (data) => {
      Cookies.set("customer", JSON.stringify(data));
      setUser(data);
      toast.dismiss();
      toast.success("Account has been successfully created");
      router.push("/#home");
    },
    onError: (error) => {
      toast.dismiss();
      toast.error(getFirebaseErrorMessage(error.code));
    },
    onMutate: () => {
      setIsLoadingSignup(true);
      toast.loading("Signing Up");
    },
    onSettled: () => {
      setIsLoadingSignup(false);
    },
  });

  const handleSigninWithGoogle = async () => {
    try {
      const user = await signInWithGoogle();
      Cookies.set("customer", JSON.stringify(user));
      setUser(user);
      toast.success("Account has been successfully logged in");
      router.push("/#home");
    } catch (error) {
      toast.error(DEFAULT_ERROR);
    }
  };

  const handleLogOut = async () => {
    try {
      await logout();
      Cookies.remove("customer");
      setUser(null);
      toast.success("Account has been successfully logged out");
      router.push("/#home");
    } catch (error) {
      toast.error(DEFAULT_ERROR);
    }
  };

  return {
    user,
    setUser,
    login: {
      isLoading: isLoadingLogin,
      mutateAsync: mutateLogin,
    },
    signup: {
      isLoading: isLoadingSignup,
      mutateAsync: mutateSignup,
    },
    handleSigninWithGoogle,
    handleLogOut,
  };
};
