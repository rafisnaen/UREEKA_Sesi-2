import { FloatingNav } from "@/components/ui/floating-navbar";

export default function Home() {
  const navItems = [
    { name: "Home", link: "/", icon: null },
    { name: "About", link: "/about", icon: null },
    { name: "Contact", link: "/contact", icon: null },
    { name: "Experience", link: "/experience", icon: null },
    { name: "Resume", link: "/resume", icon: null },
  ];
  return (
    <>
      <FloatingNav navItems={navItems} />
      <div className="pt-28 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="pt-25 text-4xl font-bold text-center">
          Welcome to <span className="text-blue-500">Sesi 2</span>
        </h1>
      </div>
    </>
  );
}
