import { Component } from 'react';
import { nanoid } from 'nanoid';
import { RiContactsBookFill } from 'react-icons/ri';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { ContactFilter } from '../ContactFilter/ContactFilter';
import { Container, Title, Span, SubTitle, Text } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContacts = data => {
    const { contacts } = this.state;

    const newContact = {
      id: nanoid(),
      ...data,
    };

    if (
      contacts.find(
        contact =>
          contact.name.toLocaleLowerCase() ===
          newContact.name.toLocaleLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));

    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  };

  findContacts = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  deleteContacts = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(item => item.id !== id),
    }));
  };

  viewContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  componentDidMount() {
    this.setState({
      contacts: JSON.parse(localStorage.getItem('contacts')) || []
    });
  }

  componentDidUpdate(prevProps, prevStage) {
    if (this.state.contacts !== prevStage.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const visibleContacts = this.viewContacts();

    return (
      <Container>
        <RiContactsBookFill
          style={{ width: '100px', height: '100px', color: '#3373e2' }}
        />
        <Title>
          Phone<Span>book</Span>
        </Title>
        <ContactForm setContacts={this.addContacts} />
        <SubTitle>Contacts List</SubTitle>
        <ContactFilter
          value={this.state.filter}
          findContacts={this.findContacts}
        />

        {visibleContacts.length === 0 ? (
          <Text>Sorry, you don't have any contacts.</Text>
        ) : (
          <ContactList
            data={visibleContacts}
            deleteContacts={this.deleteContacts}
          />
        )}
      </Container>
    );
  }
}