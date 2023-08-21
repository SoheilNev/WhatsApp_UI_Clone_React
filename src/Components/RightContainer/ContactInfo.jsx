import React from 'react'
import InfoHeader from './ContactInfo/InfoHeader'
import InfoProfile from './ContactInfo/InfoProfile'

function ContactInfo({image,name}) {

  return (
    <div>
      <InfoHeader />
			<InfoProfile image={image} name={name} />
    </div>
  )
}

export default ContactInfo