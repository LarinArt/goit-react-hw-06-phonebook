import { useState } from 'react';
import ContactsForm from 'components/ContactsForm/ContactsForm';
import { Button } from 'components/ui';
import Modal from 'components/ui/Modal/Modal';

const ContactsSection = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);
  return (
    <>
      <Button type="button" onClick={toggleModal}>
        Add new contact
      </Button>
      ;
      {showModal && (
        <Modal onClose={toggleModal} title="Add contact">
          <ContactsForm onClose={toggleModal} />
        </Modal>
      )}
    </>
  );
};

export default ContactsSection;
