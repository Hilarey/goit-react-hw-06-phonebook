import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import withTheme from "../../HOC/withTheme";
import ContactListItem from "./ContactListItem";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, night }) => {
  if (contacts.length > 0) {
    return (
      <div>
        <h2 className={night ? styles.night : null}>Contacts</h2>
        <ul className={styles.list}>
          {contacts.map(({ id }) => (
            <ContactListItem key={id} id={id} />
          ))}
        </ul>
      </div>
    );
  }
  return null;
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const mapStateToProps = (state) => {
  const { contacts, filter } = state.phonebook;
  const normalizedFilter = filter.toLowerCase();

  const handleVisibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return { contacts: handleVisibleContacts };
};

export default connect(mapStateToProps)(withTheme(ContactList));
