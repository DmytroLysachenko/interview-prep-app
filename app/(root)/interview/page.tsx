import Agent from "@/components/Agent";
import React from "react";

const Page = () => {
  return (
    <>
      <h3>Interview Generation</h3>

      <Agent
        userName="John Doe"
        userId="12312"
        type="generate"
      />
    </>
  );
};

export default Page;
