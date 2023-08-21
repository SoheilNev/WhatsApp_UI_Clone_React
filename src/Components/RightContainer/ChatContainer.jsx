import React from 'react';

function ChatContainer(props) {
  

  return (
    <div className="relative w-full h-[calc(100%-120px)] p-12 overflow-y-auto rounded-lg">
      {props.messages.map((m, i) => (
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
