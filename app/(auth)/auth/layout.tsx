import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}
const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div>
      logo
      {children}
      logo bitiş
    </div>
  );
};

export default AuthLayout;
