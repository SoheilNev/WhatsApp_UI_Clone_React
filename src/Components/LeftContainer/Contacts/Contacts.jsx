import React from 'react'
import HeaderContacts from "./HeaderContacts"
import SearchContacts from './SearchContacts'
import Contact from './Contact'

function Contacts() {
  return (
    <div className="relative flex flex-col h-full bg-main">
      <HeaderContacts />
      <div className="flex flex-col h-full "> {/*overflow-y-scroll */}
        <SearchContacts />
        <Contact />
      </div>
    </div>
  )
}

export default Contacts