//ブラウザで実行されるコードであることをNext.jsに伝える
// useStateという機能をReactから借りてくる
'use client';
import { useState } from 'react';

interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function Home() {
  //チャット履歴を保存
  //入力中の文字を保存
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');

  return (
    <div className="min-h-screen bg-gray-800">
      <main className="flex flex-col h-full px-4 py-12">
        {/* チャット表示エリア */}
        <div className="flex-1 overflow-y-auto mb-4">
          <div className="max-w-2xl mx-auto">
            {messages.map((message) => (
              <div key={message.id} className="mb-4">
                <div className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.isUser
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-300 text-black'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* 検索バー（既存の位置を維持） */}
        <div className="max-w-2xl w-full mx-auto">
          <div className="bg-white rounded-lg border border-gray-300 shadow-sm">
            <textarea
              className="w-full px-4 py-3 rounded-lg border-none resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="質問をしてみてください..."
              rows={3}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <div className="flex justify-end px-4 pb-3">
              <button 
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                onClick={() => {
                  if (inputText.trim()) {
                    // ユーザーのメッセージを追加
                    const userMessage: ChatMessage = {
                      id: `user-${Date.now()}`,
                      text: inputText,
                      isUser: true,
                      timestamp: new Date()
                    };
                    
                    // AIの回答を追加
                    const aiMessage: ChatMessage = {
                      id: `ai-${Date.now()}`,
                      text: 'AIの回答',
                      isUser: false,
                      timestamp: new Date()
                    };
                    
                    // 最新5件だけ保持
                    const newMessages = [...messages, userMessage, aiMessage];
                    if (newMessages.length > 10) {
                      setMessages(newMessages.slice(-10));
                    } else {
                      setMessages(newMessages);
                    }
                    
                    // 入力欄をクリア
                    setInputText('');
                  }
                }}
              >
                送信
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}