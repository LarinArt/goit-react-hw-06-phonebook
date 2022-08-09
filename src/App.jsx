import { useSelector } from 'react-redux';
import { useState } from 'react';
import { getContacts } from 'store/contacts-slice/contacts-slice';
import ContactsForm from './components/ContactsForm/ContactsForm';
import { Filter } from './components/Filter/Filter';
import { Message } from './components/Message/Message';
import { Container } from './components/ui/Container';
import { Button, MainTitle, SecondTitle, Section } from './components/ui';
import Contacts from 'components/Contacts/Contacts';
import Modal from 'components/Modal/Modal';

function App() {
  const contacts = useSelector(getContacts);

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);

  return (
    <Container>
      <Section>
        <MainTitle>Phonebook</MainTitle>
        <Button type="button" onClick={toggleModal}>
          Add new contact
        </Button>

        {showModal && (
          <Modal onClose={toggleModal} title="Add contact">
            <ContactsForm onClose={toggleModal} />
          </Modal>
        )}

        <SecondTitle>Contacts</SecondTitle>
        <Filter />
        {contacts.length > 0 ? <Contacts /> : <Message />}
      </Section>
    </Container>
  );
}

export default App;
