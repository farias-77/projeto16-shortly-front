import { useEffect, useState } from "react";
import styled from "styled-components";
import Url from "./Url.js";
import axios from "axios";

export default function Home({ user, setUser }){
    const [ url, setUrl ] = useState("");

    useEffect(() => {
        const url = "https://projeto16-shortly-farias-77.herokuapp.com/users/me";
        const token = localStorage.getItem("token");
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        const promise = axios.get(url, config);

        promise.then((res) => {
            setUser(res.data);
        });
    }, []);
    
    function submitShortUrl(e){
        e.preventDefault();

        const requestUrl = `https://projeto16-shortly-farias-77.herokuapp.com/urls/shorten`;
        
        const token = localStorage.getItem("token");
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const body = {
            url
        }
        const promise = axios.post(requestUrl, body, config);

        promise.then(() => {
            window.location.reload();
        });

        promise.catch((res) => {
            alert(res.data);
        });
    }

    function renderUrls(){
        const urls = user.shortenedUrls;
        
        return urls.map((url, index) => {return <Url key={index} url={url}/>})
    }

    return (
        <Container>
            <UrlInput>
                <form onSubmit={submitShortUrl}>
                    <input placeholder="Links que cabem no bolso" onChange={e => setUrl(e.target.value)}/>
                    <button type="submit">Encurtar link</button>
                </form>
            </UrlInput>
            <UrlsContainer>
                {user ? renderUrls() : <></> }
            </UrlsContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const UrlInput = styled.div`
    width: 100%;
    margin-top: 150px;
    margin-bottom: 60px;

    display: flex;
    justify-content: center;
    
    form{
        width: 63%;
        
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    input{
        width: 78%;
        height: 60px;

        background: #FFFFFF;
        border: 1px solid rgba(120, 177, 89, 0.25);
        box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
        border-radius: 12px;

        font-family: 'Lexend Deca', sans-serif;
        padding-left: 20px;
        line-height: 18px;
        font-weight: 400;
        font-size: 14px;
        color: #000000;

        ::placeholder{
            color: #9C9C9C;
        }
    }

    button{
        width: 182px;
        height: 60px;

        background: #5D9040;
        border-radius: 12px;

        display: flex;
        justify-content: center;
        align-items: center;
        
        
        font-weight: 700;
        font-size: 14px;
        line-height: 18px;
        color: #FFFFFF;

        cursor: pointer;
    }
`;

const UrlsContainer = styled.div`
   width: 100%;
   
   display: flex;
   flex-direction: column;
   align-items: center;
`;