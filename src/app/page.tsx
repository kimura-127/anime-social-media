export default function Home() {
  return (
    <div className="min-h-screen bg-gray-800">
      
      <main className="flex flex-col items-center justify-center flex-1 px-4 py-20">
        <div className="max-w-2xl text-center space-y-8">
          <h1 className="text-4xl font-bold text-white sm:text-6xl">
            ANIME-SOCIAL-MEDIA
          </h1>
          
          <p className="text-xl text-white">
            アニメ検索専用のです。好きなアニメを見つけましょう。
          </p>
          
          <div className="grid gap-4 sm:grid-cols-2 mt-8">
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">ジャンル</h3>
              <p className="text-gray-600 text-sm">ジャンルを選んでください</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">キャラクター</h3>
              <p className="text-gray-600 text-sm">キャラクターを選んでください</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">声優</h3>
              <p className="text-gray-600 text-sm">好きな声優を選んでください</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">視聴媒体</h3>
              <p className="text-gray-600 text-sm">視聴媒体を選んでください</p>
            </div>
          </div>
          
          <div className="mt-12">
            <div className="bg-white rounded-lg border border-gray-300 shadow-sm">
              <textarea
                className="w-full px-4 py-3 rounded-lg border-none resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="メッセージを入力してください..."
                rows={3}
              />
              <div className="flex justify-end px-4 pb-3">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  送信
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
