import React from "react";

import withTheme from "../../HOC/withTheme";
import ToggleTheme from "../ToggleTheme/ToggleTheme.js";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";

const PhoneBook = () => {
  return (
    <>
      <ToggleTheme />
      <ContactForm />
      <Filter />
      <ContactList />
      </>
  );
};

export default withTheme(PhoneBook);
