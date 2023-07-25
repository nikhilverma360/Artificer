"use client";

import { ImageIcon } from "lucide-react";

import { Heading } from "@/components/heading";

const DashboardPage = () => {
  return (
    <div>
      <Heading
        title="Asset Generation"
        description="Turn your prompt into an game asset"
        icon={ImageIcon}
        iconColor="text-pink-700"
        bgColor="bg-pink-700/10"
      />
    </div>
  );
};

export default DashboardPage;
