import React from "react";
import { connect } from "react-redux";
import contactsActions from "../../redux/phonebook/phonebookActions";
import styles from "./ContactList.module.css";

const ContactListItem = ({ name, number, onRemoveContact, night }) => {
  return (
    <li className={styles.item}>
      <p className={night ? styles.night : null}>
        {name}: {number}
        <button className={styles.button} onClick={onRemoveContact}>
          Delete Contact
        </button>
      </p>
    </li>
  );
};

const mapStateToProps = ({ phonebook }, ownProps) => {
  const contact = phonebook.contacts.find(({ id }) => id === ownProps.id);
  return { ...contact };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemoveContact: () =>
    dispatch(contactsActions.handleRemoveContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
