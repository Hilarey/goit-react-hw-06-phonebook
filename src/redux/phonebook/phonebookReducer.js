import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import phonebookActions from "./phonebookActions";

const addContact = (state, action) => {
  if (state.find((contact) => contact.name === action.payload.contact.name)) {
    alert(`${action.payload.contact.name} is already in contacts`);
    return state;
  }
  return [...state, action.payload.contact];
};

const removeContact = (state, action) => {
  return state.filter(({ id }) => id !== action.payload);
};

const contacts = createReducer([], {
  [phonebookActions.handleAddContact]: addContact,
  [phonebookActions.handleRemoveContact]: removeContact,
});

const filter = createReducer("", {
  [phonebookActions.handleFilterChange]: (state, action) => action.payload,
});

const nightMode = createReducer(true, {
  [phonebookActions.handlModeToggle]: (state) => !state,
});

export default combineReducers({
  contacts,
  filter,
  nightMode,
});

// componentDidMount() {
//   const persistedContacts = localStorage.getItem("contacts");

//   if (persistedContacts) {
//     this.setState({
//       contacts: JSON.parse(persistedContacts),
//     });
//   }
// }

// componentDidUpdate(prevProps, prevState) {
//   if (prevState.contacts !== this.state.contacts) {
//     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//   }
// }
