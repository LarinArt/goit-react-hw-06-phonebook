import { Filter } from './components/Filter/Filter';
import { Container } from './components/ui/Container';
import { MainTitle, SecondTitle, Section } from './components/ui';
import Contacts from 'components/Contacts/Contacts';
import ContactsSection from 'components/Contacts/ContactsSection/ContactsSection';

function App() {
  return (
    <Container>
      <Section>
        <MainTitle>Phonebook</MainTitle>
        <ContactsSection />
        <SecondTitle>Contacts</SecondTitle>
        <Filter />
        <Contacts />
      </Section>
    </Container>
  );
}

export default App;
