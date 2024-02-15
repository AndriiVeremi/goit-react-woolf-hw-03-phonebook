import PropTypes from 'prop-types';
import { RiUserUnfollowLine } from "react-icons/ri";
import { Item, Name, Number, Button } from "./ContactItem.styled";

export const ContactItem = ({id, name, number, deletContacts}) => {
  return (
    <Item>
      <Name>{name}:</Name>
      <Number>{number}</Number>
      <Button type="button" onClick={() => deletContacts(id)}><RiUserUnfollowLine style={{width:'18px', height:'18px'}} />Delete</Button>
    </Item>
  );
};

ContactItem.protoTypes = {
  id: PropTypes.number.isRequired, 
  name: PropTypes.string.isRequired, 
  number: PropTypes.string.isRequired,
  deletContacts: PropTypes.func.isRequired
}