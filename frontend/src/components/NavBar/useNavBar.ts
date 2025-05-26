import { useState } from "react";

export default function useNavBar() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return {
    activeTab,
    handleTabChange,
  };
}
