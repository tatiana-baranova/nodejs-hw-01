import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
    const numberList = await readContacts();
    numberList.pop();
    await writeContacts(numberList);
};


removeLastContact();
