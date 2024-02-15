import { ContactItem } from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';
import { List } from './ContactList.styled';

export const ContactList = ({ data, deleteContacts }) => {
  return (
    <List>
      {data.map(item => (
        <ContactItem
          key={item.id}
          id={item.id}
          name={item.name}
          number={item.number}
          deletContacts={deleteContacts}
        />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  deleteContacts: PropTypes.func.isRequired,
};
