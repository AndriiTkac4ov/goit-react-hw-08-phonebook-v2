import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "redux/auth/auth-operations";
// import { selectAuthStatus } from "redux/auth/auth.selector";
// import { toast } from "react-toastify";
// import Loader from "components/Loader/Loader";
import {
    RegisterGroup,
    RegisterTitle,
    Form,
    LabelField,
    InputField,
    ButtonAdding,
} from "./Login.styled";

const LoginPage = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [isPassword, setIsPassword] = useState(true);

    const handleInputChange = ({ target: { name, value }}) => {
        switch (name) {
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

        dispatch(authOperations.logIn({ email, password }));

        console.log(email, password);

        // try {
        //     await dispatch(authLoginThunk(values)).unwrap();
        //     toast.success('Finally! We missed you.');
        // } catch (error) {
        //     console.log(error);
        //     toast.error('Do not hurry! Something is wrong with your email or password.');
        // }

        setEmail('');
        setPassword('');
    }

    return (
        <RegisterGroup>
            <RegisterTitle>Please Log in Your Phonebook</RegisterTitle>

            <Form onSubmit={handleSubmit}>
                <LabelField>
                    Email
                    <InputField
                        type="email"
                        name="email"
                        required
                        autoComplete="on"
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
                <ButtonAdding type="submit">Log in</ButtonAdding>
            </Form>
        </RegisterGroup>
    )
}

export default LoginPage;