import React, { useState } from 'react'
import Header from './LeftContainer/Header'
import NotifBox from './LeftContainer/NotifBox'
import SearchContainer from './LeftContainer/SearchContainer'
import ChatList from './LeftContainer/ChatList'
import Profile from './LeftContainer/Profile/Profile'
import Communities from './LeftContainer/Communities/Communities'
import Contacts from './LeftContainer/Contacts/Contacts'
import chatList from "./LeftContainer/chat-list.js"
import { useDispatch, useSelector } from 'react-redux'
import { selectiveChat } from '../Redux/reducer'

function LeftContainer() {

  const [filter,setFilter] = useState(false)

  const notifBox = useSelector(state => state.appSlice.showNotifBox)
  const dispatch = useDispatch()
  const pageChange = useSelector(state => state.appSlice.pageChange)
  const displayMenu = useSelector(state => state.appSlice.showMenu)

  return (
    <div className="relative w-[30%] h-full flex flex-col bg-main border border-cont-border">
      { 
        pageChange == "Main" &&
        <>
          <div className="relative">
            <Header/>
            {
              displayMenu && 
              <div className="absolute flex flex-col w-48 h-60 right-8 z-[1000] py-[9px] shadow-lg shadow-[#BEBFC2] rounded-md bg-main">
                <div className="relative flex h-10 pl-6 text-sm box-border items-center text-ellipsis overflow-hidden whitespace-nowrap text-left-header-menu-text hover:bg-left-header-menu-text-hover">
                  New group
                </div>
                <div className="relative flex h-10 pl-6 text-sm box-border items-center text-ellipsis overflow-hidden whitespace-nowrap text-left-header-menu-text hover:bg-left-header-menu-text-hover">
                  New community
                </div>
                <div className="relative flex h-10 pl-6 text-sm box-border items-center text-ellipsis overflow-hidden whitespace-nowrap text-left-header-menu-text hover:bg-left-header-menu-text-hover">
                  Starred messages
                </div>
                <div className="relative flex h-10 pl-6 text-sm box-border items-center text-ellipsis overflow-hidden whitespace-nowrap text-left-header-menu-text hover:bg-left-header-menu-text-hover">
                  Select chats
                </div>
                <div className="relative flex h-10 pl-6 text-sm box-border items-center text-ellipsis overflow-hidden whitespace-nowrap text-left-header-menu-text hover:bg-left-header-menu-text-hover">
                  Settings
                </div>
                <div className="relative flex h-10 pl-6 text-sm box-border items-center text-ellipsis overflow-hidden whitespace-nowrap text-left-header-menu-text hover:bg-left-header-menu-text-hover">
                  Log out
                </div>
              </div>
            }
          </div>
          <SearchContainer filter={filter} FilterCallBack={(e) => {setFilter(!filter)}}  />
          {
            notifBox &&
            <NotifBox />
          }
          <div className="overflow-y-scroll border-t-[0.5px] border-cont-border">
            {
            chatList.filter((c) => {
              if(filter) {
                return c.unread != undefined
              }else{
                return true
              }
            }).map((v, i) =>{
              return <div onClick={() => {dispatch(selectiveChat(v))}} key={i}>
                      <ChatList image={v.image} name={v.name} text={v.text} time={v.time} unread={v.unread} />
                    </div>
            })
            }
          </div>
        </>
      }
      {
        pageChange == "Profile" &&
        <Profile />
      }
      {
        pageChange == "Communities" &&
        <Communities />
      }
      {
        pageChange == "Contacts" &&
        <Contacts />
      }
    </div>
  )
}

export default LeftContainer