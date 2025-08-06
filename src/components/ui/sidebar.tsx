"use client";

// import { useIsMobile } from "@/hooks/use-mobile";
import { useIsMobile } from "hooks/use-mobile";

export function Sidebar() {
  const isMobile = useIsMobile();

  return (
    <aside className="bg-gray-100 p-4">
      {isMobile ? "Mobile Sidebar" : "Desktop Sidebar"}
    </aside>
  );
}
