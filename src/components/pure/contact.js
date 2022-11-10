

import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class.js'

const  ContactComponent =({contact}) => {
  return (
    <div>
      <h2>Nombre: {contact.name}</h2>
      <h2>Apellido: {contact.lastName}</h2>
      <h3>Email: {contact.email}</h3>
      <h4>El contacto está: {contact.conectado ? 'DISPONIBLE':'CONTACTO NO DISPONIBLE'}</h4>
    </div>
  )
}

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact)
}

export default ContactComponent
