import FontSettings from "@/components/Fontsetting";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="ml-16">
      <Navbar />

      <main className="grid grid-cols-[280px_1fr_280px] max-w-[1708px] mx-auto gap-12 px-6">
        {/* Left Sidebar */}
        <div className="bg-red-100 h-[500px]">
          <h1>Left Sidebar</h1>
        </div>

        {/* Main Content */}
        <div className="bg-blue-100 h-[500px]">
          <h1 className="text-2xl font-bold text-[#282E29] mb-4">
            Welcome to Duas & Ruqyah
          </h1>
        </div>

        {/* Right Sidebar */}
        <div className= "h-[500px]">
          <FontSettings />
        </div>
      </main>
    </div>
  );
}
