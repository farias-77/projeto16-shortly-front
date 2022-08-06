import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

export default function SignIn(){

    const navigate = useNavigate();
    const [ userInfo, setUserInfo ] = useState({
        email: "",
        password: ""
    });
    
    
    function submitSignIn(e){
        e.preventDefault();
        
        const url = "https://projeto16-shortly-farias-77.herokuapp.com/signin";

        const promise = axios.post(url, userInfo);
        promise.then(() => {
            navigate("/home");
        });

        promise.catch((res) => {
            alert(res.response.data);
        })
    }

    return (
        <Container>
            <Form>
                <form onSubmit={submitSignIn}>
                    <input type="email" placeholder="E-mail" onChange={e => setUserInfo( { ...userInfo, email: e.target.value } ) } />
                    <input type="password" placeholder="Senha" onChange={e => setUserInfo( { ...userInfo, password: e.target.value } ) } />
                    <button type="submit">Entrar</button>
                </form>
            </Form>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    
    margin-top: 60px;
    
    display: flex;
    justify-content: center;


`;

const Form = styled.div`
    width: 100%;
    
    form{
        display: flex;
        flex-direction: column;
        align-items: center;

        input{
            width: 50%;
            height: 60px;
            
            margin-bottom: 25px;
            padding-left: 20px;

            background: #FFFFFF;
            border: 1px solid rgba(120, 177, 89, 0.25);
            box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
            border-radius: 12px;

            font-size: 18px;
            line-height: 18px;  

            ::placeholder{
                color: #9C9C9C;
            }
        }

        button{
            width: 182px;
            height: 60px;

            border-radius: 12px;
            
            background: #5D9040;
            font-weight: 700;
            font-size: 14px;
            line-height: 18px;
            color: #FFFFFF;

            cursor: pointer;
        }
    }
`;