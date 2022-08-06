import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

export default function Ranking(){
    
    const [ ranking, setRanking ] = useState([]);

    useEffect(() => {

        const url = "https://projeto16-shortly-farias-77.herokuapp.com/ranking";

        const promise = axios.get(url);
        
        promise.then((response) =>{
            setRanking(response.data);
        });

        promise.catch(() => {
            console.log("Erro interno no servidor, por favor aguarde.");
        })

    }, []);

    return (
        <Container>
            <Title>
                <ion-icon name="trophy"></ion-icon>
                <h3>Ranking</h3>
            </Title>
            <RankingBox>
                { ranking.length > 0 ? 
                ranking.map((user,index) => <h5><strong>{index}. {user.name}</strong> - {user.linksCount} links - {user.visitCount} visualizações</h5>)
                :    
                "Não encontramos nenhum registro :("
                }
            </RankingBox>
            <h4>Crie sua conta para usar nosso serviço!</h4>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 60px;

    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    h4{
        font-weight: 700;
        font-size: 36px;
        line-height: 45px;
        color: #000000;
        margin-top: 60px;
    }
`;

const Title = styled.div`
    display: flex;
    align-items: center;
    
    ion-icon{
        color: #FFD233;
        font-size: 80px;
    }

    h3{
        font-weight: 700;
        font-size: 36px;
        line-height: 45px;
        color: #000000;
        margin-left: 20px;
    }
`;

const RankingBox = styled.div`
    margin-top: 50px;
    
    width: 50%;

    padding-top: 20px;
    padding-left: 2%;

    background: #FFFFFF;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 24px 24px 0px 0px;

    font-size: 22px;
    line-height: 28px;
    color: #000000;

    h5{
        margin-bottom: 15px;
    }
`;