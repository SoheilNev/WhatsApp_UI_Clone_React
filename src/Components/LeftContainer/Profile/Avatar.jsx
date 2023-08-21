import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCameraRetro } from '@fortawesome/free-solid-svg-icons'

function Avatar() {
  return (
    <div className="flex flex-col items-center mb-4 -space-x-2 bg-headers">
      <div className="relative inline-block mx-auto m-6 h-40 w-40 rounded-full ring-white">
        <img
          className="rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
				{/* <FontAwesomeIcon className="m-3 text-background-left-header-nav-icons hover:cursor-pointer" icon={faCameraRetro} size="sm" /> */}
      </div>
    </div>
  )
}

export default Avatar