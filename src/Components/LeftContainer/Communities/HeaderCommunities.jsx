import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { pageChange } from '../../../Redux/reducer'

function HeaderCommunities() {
  const dispatch = useDispatch()
  return (
    <div className="relative flex content-center box-border w-full h-[calc(100%-81%)] pr-5 pl-[23px] bg-left-header-profile">
      <div className="flex content-center text-start pb-0.5 bg-left-header-profile">
        <div className="mr-6 bottom-2 left-1 inline-flex items-center rounded-md bg-gray-800">
          <div onClick={() => {dispatch(pageChange("Main"))}} className="bottom-2 left-1 inline-flex items-center rounded-md bg-gray-800">
            <FontAwesomeIcon className="text-main hover:cursor-pointer" icon={faArrowLeft} size="lg" />
          </div>
        </div>
        <div className="bottom-0 left-16 inline-flex items-center rounded-md bg-gray-800">
          <h1 className="mb-1 font-semibold left-5 text-xl text-main hover:cursor-pointer">Communities</h1>
        </div>
      </div>
    </div>
  )
}

export default HeaderCommunities