import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import StatusLeft from './StatusContainer/StatusLeft'
import StatusRight from './StatusContainer/StatusRight'
import { useDispatch } from 'react-redux'
import { pageChange } from '../Redux/reducer'

function StatusContainer() {
	const dispatch = useDispatch()
  return (
    <div className="flex justify-center w-screen content-center max-h-screen min-h-screen">
			<div className='flex flex-row w-full h-screen'>
				<StatusLeft />
				<StatusRight />
			</div>
			<FontAwesomeIcon onClick={() => {dispatch(pageChange("Main"))}}  className="absolute top-2 right-2 m-3 ml-auto p-2.5 w-auto text-xl rounded-full text-center text-main hover:cursor-pointer" icon={faXmark} size="xl" />
		</div>
  )
}

export default StatusContainer