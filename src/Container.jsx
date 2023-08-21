import React, { useState } from 'react'
import LeftContainer from './Components/LeftContainer'
import RightContainer from './Components/RightContainer'
import StatusContainer from './Components/StatusContainer'
import LandingContainer from './Components/LandingContainer'
import { useDispatch, useSelector } from 'react-redux'
import { mainClick } from './Redux/reducer'

function Container() {
	const pageChange = useSelector(state => state.appSlice.pageChange)
	const selectiveChat = useSelector(state => state.appSlice.selectiveChat)
	const dispatch = useDispatch()

  return (
    <div onClick={() => {dispatch(mainClick())}} className="flex justify-center content-center max-h-screen min-h-screen bg-body">
			{
				(pageChange == "Main"|| pageChange == "Profile" || pageChange == "Communities"|| pageChange == "Contacts") && 
			<>
				<div className="absolute top-0 w-full h-1/5 bg-green"></div>
				<div className='w-full max-h-screen'>
					<div className="flex flex-row mx-auto 2xl:m-6 xl:max-w-full xl:max-h-full min-w-[1200px] min-h-[600px] h-screen bg-main shadow-xl shadow-green">
						<LeftContainer />
						{
							selectiveChat == undefined &&
							<LandingContainer />
						}
						{
							selectiveChat !== undefined &&
								<RightContainer />
						}
					</div>
				</div>
			</>
			}
			{
				pageChange == "Status" &&
				<StatusContainer />
			}
		</div>
  )
}

export default Container