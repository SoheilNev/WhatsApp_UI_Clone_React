import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup, faUsersLine } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <div className="relative flex-col h-[calc(100% - 170px)] overflow-y-auto">
      <div className="relative flex w-full items-center p-4 cursor-pointer border border-[#eee] hover:bg-headers">
        <div className="relative flex w-12 h-12 items-center rounded-full">
          <div className="relative flex w-12 h-12 items-center rounded-full border border-[#eee] bg-green cursor-pointer">
            <FontAwesomeIcon className="items-center w-auto h-auto m-2.5 text-main hover:cursor-pointer" icon={faUserGroup} size="lg" />
          </div>
        </div>
        <div className="relative flex w-full items-center p-4 cursor-pointer border-[#eee] hover:bg-headers">
          <div className="w-full ml-2.5">
            <div className="flex justify-between items-center mb-0.5">
              <h4 className="text-lg font-normal text-[#000]">New Group</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex w-full items-center p-4 cursor-pointer border border-[#eee] hover:bg-headers">
        <div className="relative flex w-12 h-12 items-center rounded-full">
          <div className="relative flex w-12 h-12 items-center rounded-full border border-[#eee] bg-green cursor-pointer">
            <FontAwesomeIcon className="items-center w-auto h-auto m-2.5 text-main hover:cursor-pointer" icon={faUsersLine} size="lg" />
          </div>
        </div>
        <div className="relative flex w-full items-center p-4 cursor-pointer border-[#eee] hover:bg-headers">
          <div className="w-full ml-2.5">
            <div className="flex justify-between items-center mb-0.5">
              <h4 className="text-lg font-normal text-[#000]">New Community</h4>
            </div>
          </div>
        </div>
      </div>
      <p>
        
      </p>
    </div>
  )
}

export default Contact