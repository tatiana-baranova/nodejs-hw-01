import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';


export const addOneContact = async () => {
    const numberList = await readContacts();
    const newNumber = createFakeContact();
    writeContacts([...numberList, newNumber] );
};

addOneContact();
