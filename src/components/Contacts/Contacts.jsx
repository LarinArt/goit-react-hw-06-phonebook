import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getFilter, getContacts } from 'store/contacts-slice';
import Contact from './Contact/Contact';
import { ContactsItem } from './Contacts.style';
import { Message } from 'components/ui/Message/Message';

const Contacts = () => {
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

  if (contacts.length > 0) {
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
  } else {
    return <Message />;
  }
};

export default Contacts;
