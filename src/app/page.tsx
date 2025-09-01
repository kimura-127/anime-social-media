export default function Home() {
  return (
    <div className="min-h-screen bg-gray-800">
      <main className="flex flex-col items-center justify-center flex-1 px-4 py-20">
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-lg border border-gray-300 shadow-sm">
            <textarea
              className="w-full px-4 py-3 rounded-lg border-none resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="質問をしてみてください..."
              rows={3}
            />
            <div className="flex justify-end px-4 pb-3">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                送信
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
