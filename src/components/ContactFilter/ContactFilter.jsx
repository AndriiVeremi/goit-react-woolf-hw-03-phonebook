import PropTypes from 'prop-types';
import { RiSearchLine } from "react-icons/ri";
import { Input, Label } from "./ContactFilter.styled";

export const ContactFilter = ({ value, findContacts }) => {

    return (
      <Label>
        <RiSearchLine style={{color:'#3373e2'}} />
        Find contacts by name:
        <Input
          type="text"
          name="filter"
          value={value}
          onChange={findContacts}
          pattern="^[a-zA-Zа-яА-Я]+(([' ][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
    );
  
}

ContactFilter.propTypes = {
    value: PropTypes.string.isRequired,
    findContacts: PropTypes.func.isRequired,
}