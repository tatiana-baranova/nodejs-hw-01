import { createFakeContact } from '../../src/utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
const generateContacts = async (number) => {
    const numberList = await readContacts();
    // console.log(numberList);
    const newNumberList = Array(number).fill(0).map(createFakeContact);
    await writeContacts([...numberList, ...newNumberList]);
};

generateContacts(5);
