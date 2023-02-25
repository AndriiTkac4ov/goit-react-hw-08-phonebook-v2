import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import * as contactsOperations from "redux/contacts/contactsOperations";
import {
    ContactsItem,
    ContactName,
    ButtonDeleting,
    DeleteIcon,
} from "./ContactItem.styled";

export default function ContactItem({ id, name, number }) {
    const dispatch = useDispatch();

    return (
        <ContactsItem>
            <ContactName>{name}: {number}</ContactName>
            <DeleteIcon size={24} onClick={() => dispatch(contactsOperations.deleteContact(id))}/>
            <ButtonDeleting type="button" onClick={() => dispatch(contactsOperations.deleteContact(id))}>Delete</ButtonDeleting>
        </ContactsItem>
    )
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}