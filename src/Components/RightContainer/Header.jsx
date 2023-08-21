import React from 'react'
import { useDispatch } from 'react-redux';
import { showChatMenu, showInfoPanel, showSearchPanel } from '../../Redux/reducer';

function Header({image,name,line}) {

  const dispatch = useDispatch()

  return (
    <div onClick={() => {dispatch(showInfoPanel())}} className="relative flex w-full h-16 py-2.5 px-4 justify-between items-center content-center bg-headers border border-[#d1d7db] hover:bg-headers">
      <div className="relative flex mr-auto justify-center items-center cursor-pointer">
        <img className="relative left-0 w-10 h-10 rounded-b-[50%] rounded-t-[50%] overflow-hidden object-cover hover:cursor-pointer" src={image} alt="" />
        <h4 className="text-lg font-normal leading-5 ml-4">
          {name}<br/>
          <span className="text-xs text-[#555]">
            {line}
          </span>
        </h4>
      </div>
      <div className="relative flex flex-row ml-5 mr-0">
        <div onClick={(e) => {e.stopPropagation();dispatch(showSearchPanel())}} className="flex items-center justify-center rounded-full text-left-header-nav-icons hover:cursor-pointer">
          <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24" xmlSpace="preserve"><path fill="currentColor" d="M15.9,14.3H15L14.7,14c1-1.1,1.6-2.7,1.6-4.3c0-3.7-3-6.7-6.7-6.7S3,6,3,9.7 s3,6.7,6.7,6.7c1.6,0,3.2-0.6,4.3-1.6l0.3,0.3v0.8l5.1,5.1l1.5-1.5L15.9,14.3z M9.7,14.3c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6 s4.6,2.1,4.6,4.6S12.3,14.3,9.7,14.3z"></path></svg>
        </div>
        <div onClick={(e) => {e.stopPropagation();dispatch(showChatMenu())}} className="flex items-center justify-center w-10 h-10 m-3 rounded-full text-left-header-nav-icons hover:cursor-pointer hover:bg-left-header-nav-icons-hover">
          <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24" xmlSpace="preserve"><path fill="currentColor" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path></svg>
        </div>
      </div>
    </div>
  )
}

export default Header