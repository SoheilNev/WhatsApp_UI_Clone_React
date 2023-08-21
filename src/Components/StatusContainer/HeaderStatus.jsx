import React from 'react'

function HeaderStatus() {
  return (
    <div className="relative flex flex-row basis-auto w-full h-20 justify-between items-center content-center mt-8 mb-8 pl-0.5">
      <div className="relative flex content-center box-border w-full h-[calc(100%-81%)] pr-1 pl-3 bg-status-navbar">
        <div className="flex content-center text-start pb-0.5 bg-status-navbar">
          <img className="relative w-16 h-10 rounded-full overflow-hidden" src="/src/assets/soheil.jpg" alt="user-img1" />
          <div className="w-full ml-2.5">
            <div className="flex justify-between items-center mb-0.5">
              <h4 className="text-lg font-semibold text-main">My Status</h4>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm overflow-hidden text-status-time">No updates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderStatus