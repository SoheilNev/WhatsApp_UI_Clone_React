import React from 'react'

function StatusList({image, name, time}) {
  return (
    <div className="relative h-[calc(100% - 170px)] overflow-y-auto">
      <div className="relative flex w-full items-center p-4 cursor-pointer hover:bg-status-contact-hover">
        <div className="flex items-center -mt-[1px] pl-2 pr-[15px]">
          <div className="block">
            <div className="relative block w-[49px] h-[49px] rounded-b-[50%] rounded-t-[50%] bg-green p-0.5">
              <img className="relative block w-full h-full visible overflow-hidden rounded-b-[50%] rounded-t-[50%] border-status-left border-2  opacity-100" src={image} alt="user-img1" />
            </div>
          </div>
        </div>
        <div className="w-full ml-2.5">
          <div className="flex justify-between items-center mb-0.5">
            <h4 className="text-lg font-semibold text-main">{name}</h4>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm overflow-hidden text-status-time">{time}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatusList