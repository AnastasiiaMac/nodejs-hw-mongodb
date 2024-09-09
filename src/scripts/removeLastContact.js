import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    let contacts = JSON.parse(data);
    if (contacts.length > 0) {
      contacts.pop();
      await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
      console.log('Останній контакт успішно видалено!');
    } else {
      console.log('Масив контактів порожній. Немає чого видаляти.');
    }
  } catch (err) {
    console.error('Помилка при видаленні останнього контакту:', err);
  }
};

removeLastContact();
