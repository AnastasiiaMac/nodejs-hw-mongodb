import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';

export const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    let existingContacts = [];
    if (data.length > 0) {
      existingContacts = JSON.parse(data);
    }
    const newContacts = [];
    newContacts.push(createFakeContact());

    const allContacts = [...existingContacts, ...newContacts];
    await fs.writeFile(PATH_DB, JSON.stringify(allContacts, null, 2), 'utf8');
  } catch (err) {
    console.error('Помилка читання файлу:', err);
  }
};

addOneContact();
