export default function Nav() {
    return (
      <nav className="w-full flex items-center justify-between p-4 bg-white shadow-md">
        <div className="text-xl font-bold">
          <img src="/logo.webp" alt="Logo" className="h-8 w-auto" />
        </div>
        <ul className="flex gap-6">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/about" className="hover:underline">About</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    );
  }
  