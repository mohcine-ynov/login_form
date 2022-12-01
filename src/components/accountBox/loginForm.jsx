import React, { useContext, useState } from "react";
import axios from "axios"
import {
    BoldLink,
    BoxContainer,
    FormContainer,
    Input,
    MutedLink,
    SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function LoginForm(props) {
    const { switchToSignup } = useContext(AccountContext);
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const handleChange = ({ currentTarget }) => {
        const { name, value } = currentTarget;
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(user)
        axios.post('https://reqres.in/api/login', user)
            .then(result => {
                console.log(result.data)
                alert('UTILISATEUR CONNECTEE')
            })
            .catch(error => {
                alert('CONNEXION ECHOUE')
                console.log(error)
            })
    }

    return (
        <BoxContainer>
            <form onSubmit={handleSubmit}>
                <Input type="email" placeholder="Email" name="email" onChange={handleChange} />
                <Input type="password" placeholder="Password" name="password" onChange={handleChange} />
                <Marginer direction="vertical" margin={10} />
                <MutedLink href="#">Forget your password?</MutedLink>
                <Marginer direction="vertical" margin="1.6em" />
                <SubmitButton type="submit">Signin</SubmitButton>
            </form>
            <Marginer direction="vertical" margin="1em" />
            <MutedLink href="#">
                Don't have an accoun?{" "}
                <BoldLink href="#" onClick={switchToSignup}>
                    Signup
                </BoldLink>
            </MutedLink>
        </BoxContainer>
    );
}