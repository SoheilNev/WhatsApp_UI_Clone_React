import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBellSlash, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { closeNotifBox } from '../../Redux/reducer'

function NotifBox() {

  const dispatch = useDispatch()

  return (
    <div className="relative flex w-full h-24 bg-left-notif-box items-center text-xs">
			<FontAwesomeIcon className="m-3 left-3 p-2.5 w-auto text-xl rounded-full bg-main text-left-notif-box hover:cursor-pointer" icon={faBellSlash} size="lg" />
        <div className="my-6">
          <p className="text-base">Get notified of New messages</p>
          <a href="#">Turn on Desktop Notifications ›</a>
        </div>
			<FontAwesomeIcon onClick={() => dispatch(closeNotifBox())} className="m-3 ml-auto p-2.5 w-auto text-xl rounded-full text-center text-main bg-left-notif-box hover:cursor-pointer" icon={faXmark} size="lg" />
    </div>
  )
}

export default NotifBox