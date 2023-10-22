const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

const argv = require("yargs").argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contactsList = await listContacts();
      return console.table(contactsList);
      break;

    case "get":
      const getContacts = await getContactById(id);
      return console.table(getContacts);
      break;

    case "add":
      const addContacts = await addContact({ name, email, phone });
      return console.table(addContacts);
      break;

    case "remove":
      const removeContacts = await removeContact(id);
      return console.table(removeContacts);

      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
