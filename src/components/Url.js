import styled from "styled-components";
import axios from "axios";

export default function Url({ url }){    
    
    function deleteUrl(){
        const requestUrl = `https://projeto16-shortly-farias-77.herokuapp.com/urls/${url.id}`;
        const token = localStorage.getItem("token");
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }    
        const promise = axios.delete(requestUrl, config);

        promise.then((res) => {
            window.location.reload();
        });

        promise.catch((res) => {
            alert(res.data);
        });
    }

    function openUrl(){
        const requestUrl = `https://projeto16-shortly-farias-77.herokuapp.com/urls/open/${url.shortUrl}`;
        window.open(url.url);
           
        const promise = axios.get(requestUrl);
        
        promise.then(() => {
            window.location.reload();
        });
        promise.catch(() => {
            window.location.reload();
        });
    }
    
    return(
        <UrlCard>
            <UrlInfo>
                <div><h3 onClick={openUrl}>{url.url.length > 25 ? `${url.url.slice(0,25)}...` : url.url}</h3></div>
                <div><h3 onClick={openUrl}>{url.shortUrl}</h3></div>
                <div><h3>Quantidade de visitantes: {url.visitCount}</h3></div>
            </UrlInfo>
            <Delete onClick={deleteUrl}>
                <ion-icon name="trash"></ion-icon>
            </Delete>
        </UrlCard>
    )
}

const UrlCard = styled.div`
    width: 63%;
    height: 60px;

    display: flex;

    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.15);
    border-radius: 12px 12px 12px 12px;
    border: 1px solid lightgrey;

    margin-bottom: 50px;
`;

const UrlInfo = styled.div`
    width: 88%;
    background-color: #80CC74;
    
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 12px 0px 0px 12px;

    > div{
        display: flex;
        justify-content: center;
        width: 33%;
    }

    h3{
        font-weight: 400;
        font-size: 16px;
        line-height: 18px;
        color: #FFFFFF;  
    }

    h3:first-child, h3:nth-child(2){
        cursor: pointer;
    }
`;

const Delete = styled.div`
    width: 12%;
    background-color: #FFFFFF;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 0px 12px 12px 0px;

    cursor: pointer;
    
    ion-icon{
        color: #EA4F4F;
        font-size: 30px;
    }
`;