import React from 'react'
import HeaderCommunities from "./HeaderCommunities"
import Picture from './Picture'
import Desc from './Desc'

function Communities(props) {
  return (
    <div className="relative flex flex-col h-full bg-main">
      <HeaderCommunities />
      <div className="flex flex-col h-full overflow-y-scroll">
        <Picture />
        <Desc />
      </div>
    </div>
  )
}

export default Communities