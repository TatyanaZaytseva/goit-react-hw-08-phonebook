import { useSelector } from 'react-redux';

import { ContactItem } from 'components/ContactItem/ContactItem';
import { getFilteredContacts } from 'redux/contacts/selectors';

export const ContactsList = () => {
  const contacts = useSelector(getFilteredContacts);

  return (
    <ul>
      {contacts.map(contact => {
        return (
          <ContactItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        );
      })}
    </ul>
  );
};
