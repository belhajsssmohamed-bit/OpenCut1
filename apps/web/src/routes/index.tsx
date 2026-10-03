import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold">My OpenCut</h1>

        <p className="text-zinc-400">
          OpenCut development environment is working.
        </p>

        <button
          type="button"
          className="rounded-lg bg-white px-6 py-3 font-semibold text-black"
        >
          Start Editing
        </button>
      </div>
    </main>
  );
}
