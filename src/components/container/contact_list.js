
import React from 'react'
import { Contact } from '../../models/contact.class.js'
import ContactComponent from '../pure/contact.js';

const ContactListComponent = () =>{

  const defaultContact = new Contact ('Peter', 'Neville', 'neville.peter.2000@gmail.com', false);

  return(
    <div>
      <div>
        <h1>Info de Contactos</h1>
      </div>
      <ContactComponent contact={defaultContact}></ContactComponent>
    </div>
  );
}
export default ContactListComponent