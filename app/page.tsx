import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link
        href="/pokemon"
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-150 ease-in-out"
      >
        Server Side Rendering
      </Link>
      <Link
        href="/pokemon2"
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-150 ease-in-out"
      >
        Client Side Rendering
      </Link>
    </main>
  );
}
