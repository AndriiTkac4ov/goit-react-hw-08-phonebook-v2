import ContactForm from "components/ContactForm/ContactForm";
import Filter from "components/Filter/Filter";
import ContactList from "components/ContactList/ContactList";
import Loader from "components/Loader/Loader";
import { selectIsLoading} from "redux/contacts/selectors";
import { useSelector } from "react-redux";
import {
    ContactsGroup,
    AppTitle,
    ContactsTitle,
} from "./Contacts.styled";

const ContactsPage = () => {
    const isLoading = useSelector(selectIsLoading);

    return (
        <main style={{height: "100%"}}>
            <ContactsGroup>
                <AppTitle>Phonebook</AppTitle>
                <ContactForm />
                <ContactsTitle>Contacts</ContactsTitle>
                <Filter />
                {isLoading && <Loader />}
                <ContactList />
            </ContactsGroup>
        </main>
    )
}

export default ContactsPage;