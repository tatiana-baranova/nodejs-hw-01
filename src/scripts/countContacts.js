import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
    const number = await readContacts();
    return number.length;
};

console.log(await countContacts());
