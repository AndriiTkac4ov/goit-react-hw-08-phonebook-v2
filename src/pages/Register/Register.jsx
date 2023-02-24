import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "redux/auth/auth-operations";
import {
    RegisterGroup,
    RegisterTitle,
    Form,
    LabelField,
    InputField,
    ButtonAdding,
} from "./Register.styled";

const RegisterPage = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [isPassword, setIsPassword] = useState(true);

    const handleInputChange = ({ target: { name, value }}) => {
        switch (name) {
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            
            default:
                return;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        dispatch(authOperations.register({ name, email, password }));

        setName('');
        setEmail('');
        setPassword('');
    }

    return (
        <RegisterGroup>
            <RegisterTitle>Please Sign in Your Phonebook</RegisterTitle>

            <Form onSubmit={handleSubmit}>
                <LabelField>
                    Name
                    <InputField
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        autoComplete="off"
                        placeholder="Name"
                        value={name}
                        onChange={handleInputChange}
                    />
                </LabelField>

                <LabelField>
                    Email
                    <InputField
                        type="email"
                        name="email"
                        required
                        autoComplete="off"
                        placeholder="name@email.com"
                        value={email}
                        onChange={handleInputChange}
                    />
                </LabelField>

                <LabelField>
                    Password
                    <InputField
                        // type={isPassword ? "password" : "text"}
                        type="password"
                        name="password"
                        required
                        autoComplete="off"
                        placeholder="Name123456"
                        value={password}
                        onChange={handleInputChange}
                    />
                </LabelField>

                {/* <ButtonAdding type="button" onClick={() => setIsPassword(prev => !prev)}>Show Password</ButtonAdding> */}
                <ButtonAdding type="submit">Sign In</ButtonAdding>
            </Form>
        </RegisterGroup>
    )
}

export default RegisterPage;