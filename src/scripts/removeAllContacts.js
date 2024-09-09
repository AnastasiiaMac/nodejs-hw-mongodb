import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, '[]', 'utf8');
    console.log('Усі контакти успішно видалено!');
  } catch (err) {
    console.error('Помилка при видаленні контактів:', err);
  }
};

removeAllContacts();
