function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-orange-500">
          🍔 QuickBite
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Fast. Fresh. Delivered.
        </p>

        <p className="mt-2 text-sm text-gray-400">
          Version {import.meta.env.VITE_APP_VERSION}
        </p>
      </div>
    </div>
  );
}

export default App;