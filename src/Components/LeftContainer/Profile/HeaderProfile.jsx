import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { pageChange } from '../../../Redux/reducer'

function HeaderProfile(props) {
  const dispatch = useDispatch()
  return (
    <div className="relative flex content-center w-full h-[calc(100%-81%)] p-4 bg-left-header-profile">
      <div className="relative flex content-center pb-0.5 bg-left-header-profile">
        <div onClick={() => {dispatch(pageChange("Main"))}} className="absolute bottom-2 left-1 inline-flex items-center rounded-md bg-gray-800">
          <FontAwesomeIcon className="mr-3 text-main hover:cursor-pointer" icon={faArrowLeft} size="lg" />
        </div>
        <div className="absolute bottom-0 left-16 inline-flex items-center rounded-md bg-gray-800">
          <h1 className="mb-1 left-5 text-xl text-main hover:cursor-pointer">Profile</h1>
        </div>
      </div>
    </div>
  )
}

export default HeaderProfile