import React from 'react'
import HeaderStatus from './HeaderStatus'
import StatusList from './StatusList'
import conatctStatusList, {conatctStatusListViewed} from "./conatctStatusList"

function StatusLeft() {
  
  return (
    <div className="relative flex flex-col w-[30%] h-full bg-status-left">
      <HeaderStatus />
      
      <div className="flex-col h-full overflow-y-scroll">
        <div className="flex flex-col px-[15px]">
          <hr className="block w-full mt-4 mb-2 overflow-hidden border-status-left-line" />
          <div className="flex flex-row justify-between text-xs text-status-left-text">
            <span>RECENT</span>
          </div>
        </div>
        {conatctStatusList.map((v, i) =>{
          return <StatusList image={v.image} name={v.name} time={v.time} key={i} />
        })
        }
        <div className="flex flex-col px-[15px]">
          <hr className="block w-full mt-4 mb-2 overflow-hidden border-status-left-line" />
          <div className="flex flex-row justify-between text-xs text-status-left-text">
            <span>VIEWED</span>
          </div>
        </div>
        {conatctStatusListViewed.map((v, i) =>{
          return <StatusList image={v.image} name={v.name} time={v.time} key={i} />
        })
        }
      </div>
      
    </div>
  )
}

export default StatusLeft