const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

const argv = require("yargs").argv;

// TODO: рефакторить
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contactsList = await listContacts();
      return console.log(contactsList);
      break;

    case "get":
      const getContacts = await getContactById(id);
      return console.log(getContacts);
      break;

    case "add":
      const addContacts = await addContact({ name, email, phone });
      return console.log(addContacts);
      break;

    case "remove":
      const removeContacts = await removeContact(id);
      return console.log(removeContacts);

      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
