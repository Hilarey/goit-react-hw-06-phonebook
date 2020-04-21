import { createAction } from "@reduxjs/toolkit";
import shortid from "shortid";

const handleAddContact = createAction("contact/add", (name, number) => ({
  payload: {
    contact: {
      id: shortid.generate(),
      name,
      number,
    },
  },
}));

const handleRemoveContact = createAction("contact/remove");
const handleFilterChange = createAction("contacts/handleFilterChange");
const handlModeToggle = createAction("phoneBook/nightRegimeToggler");

export default {
  handleAddContact,
  handleRemoveContact,
  handleFilterChange,
  handlModeToggle,
};
