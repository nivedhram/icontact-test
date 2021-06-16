import { useEffect, useState, usePrevious } from "react";
import firebase from '../firebase';
import ContactCard from "./contactCard";
import "../App.css";





function ContactList() {

  const [contact, setContact] = useState([]);

  const prevContact = usePrevious(contact);
  const ref = firebase.firestore().collection('contactinfo');

  const getContactList = () => {
    ref.onSnapshot((querySnapshot) => {
      const list = [];
      querySnapshot.forEach((doc) => {
        list.push(doc.data());
      });
      setContact(list);
    });
  };



  const deleteContact = (id) => {
    console.log(id);
    ref
      .doc(id)
      .delete()
      .catch((err) => {
        console.error(err);
      });
  };

 


  useEffect(() => {
    getContactList();
    // eslint-disable-next-line
    if(contact && Object.entries(contact).length > 0){

      setContact({...prevContact,
        firstname: contact.firstname,
         phone: contact.phone});
}
  }, [contact]);
  


  return (
    <div className="contact-content-wrapper">

  {contact.map((c) => (
    <ContactCard key={c.id} data={c} deleteCard={() => deleteContact(c.id)} />
  ))
}
    </div>
  );
}

export default ContactList;
