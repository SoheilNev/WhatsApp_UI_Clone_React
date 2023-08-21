import React, { useState } from 'react'

function SearchSearch() {

  const [iconChange, setIconChange] = useState("search")

  return (
    <div className="relative flex w-full h-12 items-center bg-main">
			<div className="relative flex content-center w-full box-border px-3 py-2 shadow-md shadow-[#0b141a14] bg-main ">
				<div className="relative flex w-full h-10 items-center rounded-xl box-border border-green bg-headers">
					<button className="absolute inline-flex w-6 h-6 mx-3 items-center rounded-md cursor-pointer">
						<div className="inline-flex justify-center items-center rounded-md">
							{
								iconChange == "arrow" &&
								<div className="text-green hover:cursor-pointer">
									<svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24" xmlSpace="preserve"><path fill="currentColor" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path></svg>
								</div>
							}
							{
								iconChange == "search" && 
								<div className="text-sm text-[#5c6e72] font-light hover:cursor-pointer">
									<svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24" xmlSpace="preserve"><path fill="currentColor" d="M15.009,13.805h-0.636l-0.22-0.219c0.781-0.911,1.256-2.092,1.256-3.386 c0-2.876-2.332-5.207-5.207-5.207c-2.876,0-5.208,2.331-5.208,5.207s2.331,5.208,5.208,5.208c1.293,0,2.474-0.474,3.385-1.255 l0.221,0.22v0.635l4.004,3.999l1.194-1.195L15.009,13.805z M10.201,13.805c-1.991,0-3.605-1.614-3.605-3.605 s1.614-3.605,3.605-3.605s3.605,1.614,3.605,3.605S12.192,13.805,10.201,13.805z"></path></svg>
								</div>
							}
						</div>
					</button>
					<input onFocus={() => setIconChange("arrow")} onBlur={() => setIconChange("search")} className="text-base w-11/12 h-7 pl-16 pr-8 box-border focus:outline-none text-[#918AB0] bg-headers border-left-search-cont-input"  type="text" placeholder="Search contacts" />
				</div>
			</div>
		</div>
  )
}

export default SearchSearch