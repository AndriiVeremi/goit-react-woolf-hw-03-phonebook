import { ContactItem } from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';
import { List } from './ContactList.styled';

export const ContactList = ({ data, deletContacts }) => {
  return (
    <List>
      {data.map(item => (
        <ContactItem
          key={item.id}
          id={item.id}
          name={item.name}
          number={item.number}
          deletContacts={deletContacts}
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
  deletContacts: PropTypes.func.isRequired,
};
