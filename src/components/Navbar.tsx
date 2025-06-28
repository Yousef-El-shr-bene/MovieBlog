export function Navbar() {
  return (
    <nav className="bg-white shadow py-4 px-6 flex justify-between">
      <span className="text-xl font-semibold">🎬 Scope Loop</span>
      <div className="space-x-4">
        <a href="/" className="hover:underline">Home</a>
        <a href="/search" className="hover:underline">Search</a>
      </div>
    </nav>
  );
}