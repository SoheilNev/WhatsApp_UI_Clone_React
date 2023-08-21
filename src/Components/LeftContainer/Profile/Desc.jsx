import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

function Desc({name, about}) {
  return (
    <div className="flex flex-col content-center w-full h-[calc(100% - 170px)]">
			<div className="flex flex-col w-full mb-2.5 border-[#eee] bg-main">
				<div className="text-sm">
					<span className="text-sm w-auto h-auto ml-3 text-left-header-profile">Your Name</span>
				</div>
				<div className="flex flex-row text-lg font-semibold w-full pt-2 pr-1 text-[#000]">
					<div className="font-semibold ml-3 pr-1 border border-main">
						<h3 className="text-lg w-auto h-auto font-semibold text-[#000]">{name}</h3>
					</div>
					<button className="text-lg w-auto h-auto ml-auto font-semibold text-[#000]" type="button">
						<FontAwesomeIcon className="hover:cursor-pointer text-left-header-profile-icons" icon={faPen} size="sm" />
					</button>
				</div>
			</div>

			<div className="relative flex justify-center items-center overflow-hidden w-full mt-auto mr-5 mb-7 ml-7.5 pt-3 pr-5 pb-7 pl-4 border-[#eee] bg-headers">
				<p className="text-sm w-auto h-auto ml-3 text-left-header-profile">
					This is not your username or pin. This name will be visible to your WhatsApp contacts.
				</p>
			</div>

			<div className="flex flex-col w-full mb-2.5 border-[#eee] bg-main">
				<div className="text-sm">
					<span className="text-sm w-auto h-auto ml-3 text-left-header-profile">About</span>
				</div>
				<div className="flex flex-row text-lg font-semibold w-full pt-2 pr-1 text-[#000]">
					<div className="font-semibold ml-3 pr-1 border border-main">
						<h3 className="text-lg w-auto h-auto font-semibold text-[#000]">{about}</h3>
					</div>
					<button className="text-lg w-auto h-auto ml-auto font-semibold text-[#000]" type="button">
						<FontAwesomeIcon className="hover:cursor-pointer text-left-header-profile-icons" icon={faPen} size="sm" />
					</button>
				</div>
			</div>
		</div>
  )
}

export default Desc


{/*  */}