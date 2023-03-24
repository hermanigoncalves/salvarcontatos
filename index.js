const venom = require('venom-bot');
const fs = require('fs');

venom.create().then((client) => {
  console.log('O bot está pronto para obter contatos.');

  client.getAllContacts().then((contacts) => {
    const contactsData = contacts.map((contact) => {
      return {
        id: contact.id._serialized,
        name: contact.name,
      };
    });

    const contactsDataString = JSON.stringify(contactsData, null, 2);

    fs.writeFile('contatos.json', contactsDataString, (err) => {
      if (err) throw err;
      console.log('Os contatos foram salvos no arquivo contatos.json');
      client.close();
    });
  });
}).catch((err) => {
  console.error(err);
});
