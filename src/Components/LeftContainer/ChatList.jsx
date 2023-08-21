import React from 'react'

function ChatList({image, name, text, time, unread}) {
  return (
    <div className="relative h-[calc(100% - 170px)] overflow-y-auto">
      <div className="relative flex w-full items-center p-2 cursor-pointer border-b-[0.5px] border-[#eee] hover:bg-headers">
        <div className="flex items-center -mt-[1px] pl-[13px] pr-[15px]">
          <div className="block">
            <div className="relative block w-[49px] h-[49px] rounded-b-[50%] rounded-t-[50%]">
              <img className="relative block w-full h-full visible overflow-hidden rounded-b-[50%] rounded-t-[50%] opacity-100" src={image} alt="user-img1" />
            </div>
          </div>
        </div>
        <div className="w-full ml-2.5">
          <div className="flex justify-between items-center mb-0.5">
            <h4 className="text-lg font-semibold text-[#000]">{name}</h4>
            <p className={"text-sm " + (unread === undefined ? " text-left-chatlist-box-details" : "text-left-chatlist-box-message")}>{time}</p>
          </div> 
          <div className="flex justify-between items-center">
            <p className="text-sm overflow-hidden text-left-chatlist-box-details">{text}</p>
            { unread !== undefined &&
              <b className="min-w-20 h-5 rounded-full text-sm font-normal flex justify-center items-center bg-left-chatlist-box-message text-main">{unread}</b>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatList