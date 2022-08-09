import { useSelector, useDispatch } from 'react-redux';
import {
  deleteContact,
  getFilter,
  getContacts,
} from 'store/contacts-slice/contacts-slice';
import Contact from './Contact/Contact';
import { ContactsItem } from './Contacts.style';

function Contacts() {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const deleteSelectedContact = contactId => dispatch(deleteContact(contactId));

  const filtredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContactList = filtredContacts();

  return (
    <ul>
      {filteredContactList.map(({ id, name, number }) => {
        return (
          <ContactsItem key={id}>
            <Contact
              name={name}
              number={number}
              onDeleteContact={() => deleteSelectedContact(id)}
              contactId={id}
            />
          </ContactsItem>
        );
      })}
    </ul>
  );
}
export default Contacts;
