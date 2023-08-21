import React from 'react';

function ChatContainer() {
  const messages = [
    { content: "I've been waiting to see that show asap!", time: "07:43", isMyMessage: true },
    { content: "Ahh, I can't believe you do too!", time: "07:45", isMyMessage: false },
    { content: "The trailer looks good", time: "07:45", isMyMessage: false },
    { content: "I've been waiting to watch it!!", time: "07:45", isMyMessage: false },
    { content: "😐😐😐", time: "07:46", isMyMessage: true },
    { content: "Mee too! 😊", time: "07:46", isMyMessage: true },
    { content: "We should video chat to discuss, if you're up for it!", time: "07:48", isMyMessage: false },
    { content: "Sure", time: "07:48", isMyMessage: true },
    { content: "I'm free now!", time: "07:48", isMyMessage: true },
    { content: "Awesome! I'll start a video chat with you in a few.", time: "07:49", isMyMessage: false },
  ];

  return (
    <div className="relative w-full h-[calc(100%-120px)] p-12 overflow-y-auto rounded-lg">
      {messages.map((m, i) => (
        <div key={i} className={`relative flex w-full -right-3 h-18 items-end justify-${m.isMyMessage ? 'end' : 'start'} mb-2`}>
          <div className={`relative flex w-fit mx-1.5 p-2 rounded-lg ${m.isMyMessage ? 'self-end bg-right-chatcontainer' : 'self-end bg-main'} ${m.isMyMessage ? 'ml-auto justify-end' : 'mr-auto'}`}>
            <p className={`text-sm ${m.isMyMessage ? 'text-white' : 'text-gray-800'}`}>
              {m.content}<br /><span className="flex mt-1 text-xs opacity-50 w-full mx-2 p-2 rounded-lg self-end justify-end">{m.time}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatContainer;
