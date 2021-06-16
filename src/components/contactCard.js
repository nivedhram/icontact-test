import React from 'react';


function ContactCard(props) {

  const {firstname, lastname, email, phone, address} = props.data;


  return (

    <div className="card">
    <div className="card__content">
      <h3 className="card__header">{firstname}</h3>
      <p className="card__info">{lastname}</p>
      <p className="card__info">{email}</p>
      <p className="card__info">{phone}</p>
      <p className="card__info">{address}</p>
      <button className="card__button" onClick={props.editCard}>Edit</button>
      <button className="card__button"  onClick={props.deleteCard}>Delete</button>
    </div>
  </div>

  );
}

export default ContactCard;
