import React from 'react'

function InfoProfile({image,name}) {
  return (
    <div className="relative flex flex-col justify-center content-center items-center grow basis-0 overflow-x-hidden overflow-y-auto opacity-100 ">
			<div className="block grow-0 shrink-0 basis-auto pb-8">
				<div className="relative px-[30px] pt-7 pb-[19px] mb-2.5">
					<div className="flex flex-col flex-nowrap justify-start items-center">
						<div className="flex flex-row flex-nowrap items-start justify-center mb-1 mt-2"></div>
					</div>
					<div className="relative h-[200px] w-[200px] rounded-b-[50%] rounded-t-[50%] opacity-100 cursor-pointer">
						<img className="relative w-full h-full block rounded-b-[50%] rounded-t-[50%] overflow-hidden opacity-100" src={image} alt="profilePic" />
					</div>
					<div className="flex flex-col flex-nowrap items-center justify-start leading-6">
						<h2 className="inline-block visible text-center text-base break font-normal">{name}</h2>
						<p className="mt-1 visible text-left-header-profile-icons">+911 786 429 5478</p>
					</div>
				</div>
			</div>
    </div>
  )
}

export default InfoProfile