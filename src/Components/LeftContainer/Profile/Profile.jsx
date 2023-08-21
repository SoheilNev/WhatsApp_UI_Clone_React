import React from 'react'
import HeaderProfile from './HeaderProfile'
import Avatar from './Avatar'
import Desc from './Desc'

function Profile(props) {
  const contentDesc = [{
    name: "Jennifer",
    about: "Hey there I am using whatsApp",
  }]
  return (
    <div className="relative flex flex-col h-full bg-main ">
      <HeaderProfile />
      <div className="flex flex-col h-full overflow-y-scroll">
        <Avatar />
        {contentDesc.map((v, i) =>{
          return <Desc name={v.name} about={v.about} key={i} />
        })
        }
      </div>
    </div>
  )
}

export default Profile