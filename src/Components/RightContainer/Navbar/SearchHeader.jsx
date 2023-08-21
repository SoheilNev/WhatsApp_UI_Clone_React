import React from 'react'
import { useDispatch } from 'react-redux'
import { showSearchPanel } from '../../../Redux/reducer'

function SearchHeader() {

  const dispatch = useDispatch()

  return (
    <div className="relative flex flex-col items-center box-border w-full h-[67px] pl-6 pr-5 bg-headers">
      <div className="relative flex font-normal top-4 w-full py-1 items-center text-left-header-community-text">
        <div className="block w-14">
          <div onClick={() => {dispatch(showSearchPanel())}} className="w-fit align-top text-status-right-icon cursor-pointer">
            <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" fill="currentColor" enableBackground="new 0 0 24 24" xmlSpace="preserve"><path d="M19.6004 17.2L14.3004 11.9L19.6004 6.60005L17.8004 4.80005L12.5004 10.2L7.20039 4.90005L5.40039 6.60005L10.7004 11.9L5.40039 17.2L7.20039 19L12.5004 13.7L17.8004 19L19.6004 17.2Z"></path></svg>
          </div>
        </div>
        <div className="flex-grow -mt-1 overflow-hidden break-words">
          <h1>Search Messages</h1>
        </div>
      </div>
    </div>
  )
}

export default SearchHeader