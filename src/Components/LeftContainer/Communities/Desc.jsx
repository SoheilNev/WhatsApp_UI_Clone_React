import React from 'react'

function Desc() {
  return (
    <div className="flex flex-col content-center w-full h-[calc(100% - 170px)]">
			<div className="flex flex-col w-full mb-2.5 border-[#eee] bg-main">
				<div className="flex flex-col text-lg font-semibold w-full text-[#000]">
					<h1 className="text-lg justify-center w-auto h-auto mx-auto mt-4 font-bold border border-main text-[#000]">
						Stay connected with a community
					</h1>
					<div className="font-extralight justify-center mt-2 mx-8 w-80 h-20 border-[#eee] bg-main">
						<p className="text-xs w-fit h-fit mx-auto my-auto text-left-header-community-text">
							Communities bring members together in topic-based groups, and make it easy to get admin
							announcements. Any community you're added to will appear here.
						</p>
					</div>
					<div className="text-xs grid place-items-center">
						<button className="px-6 py-2.5 text-sm text-main bg-left-header-profile font-semibold rounded-full border" type="button">
							<div className="">
								Start your community
							</div>
						</button>
					</div>
				</div>
			</div>
		</div>
  )
}

export default Desc