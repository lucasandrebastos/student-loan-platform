import { Outlet } from "react-router";
import NavigationSection from "./components/NavBar";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationSection />

      <div className="ml-64 p-8">
        <Outlet />
      </div>
    </div>
  );
}
