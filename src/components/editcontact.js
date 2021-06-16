import { useState } from "react";
import firebase from "firebase";
import { v4 as uuidv4 } from "uuid";



function EditContact(props) {
  const [contact, setContact] = useState({
    id: uuidv4(),
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);


  const ref = firebase.firestore().collection("contactinfo");

  const handleOnChange = (userKey, value) => {
    setContact({ ...contact, [userKey]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(contact);
    ref
      .doc(contact.id)
      .set(contact)
      .then(() => {
        setContact({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          address: "",
        });
      })
      .catch((err) => {
        console.error(err);
      });
    setLoading(false);
    props.handleClose();
  };

  

  return (
    <>
      <div className="d-flex goback flex-column">
     

        <h4>Please add your new contact</h4>
      </div>
      <div className="contactadd">
        <form onSubmit={handleSubmit}>
          <input
            type="name"
            value={contact.Name}
            onChange={(e) => handleOnChange("firstname", e.target.value)}
            className="form-control"
            placeholder="First Name"
            id="firstname"
          />

          <input
            type="name"
            value={contact.Name}
            onChange={(e) => handleOnChange("lastname", e.target.value)}
            className="form-control"
            placeholder="Last Name"
            id="lastname"
          />

          <input
            type="number"
            value={contact.Name}
            onChange={(e) => handleOnChange("phone", e.target.value)}
            className="form-control"
            placeholder="Phone"
            id="phone"
          />

          <input
            type="email"
            value={contact.Name}
            onChange={(e) => handleOnChange("email", e.target.value)}
            className="form-control"
            placeholder="Email"
            id="email"
          />

          <input
            type="name"
            value={contact.Name}
            onChange={(e) => handleOnChange("address", e.target.value)}
            className="form-control"
            placeholder="Address"
            id="address"
          />

          <button type="submit" className="btn btn-primary card__button">
            {loading ? (
              <>
                <span
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              </>
            ) : null}
            {!loading ? <>Update</> : null}
          </button>
        </form>
      </div>
    </>
  );
}

export default EditContact;
