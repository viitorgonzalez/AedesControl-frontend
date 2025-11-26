import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
}
