import { redirect } from "next/navigation";
import React from "react";

import { isAuthenticated } from "@/lib/actions/auth.action";

const AuthLayout = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const isUserAuthenticated = await isAuthenticated();

  if (isUserAuthenticated) redirect("/");

  return <div className="auth-layout">{children}</div>;
};

export default AuthLayout;
