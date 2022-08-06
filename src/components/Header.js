import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";

export default function Header(){    
    
    const location = useLocation();
    const green = "#5D9040";
    const grey = "#9C9C9C";


    return (
        <Container>
            <Menu>
                { !!localStorage.getItem("token") ? 
                    <div>
                        <ItemMenu color="#9C9C9C"><Link to="/home">Home</Link></ItemMenu>
                        <ItemMenu color="#9C9C9C"><Link to="/ranking">Ranking</Link></ItemMenu>
                        <ItemMenu color="#9C9C9C"><Link to="/signin">Sair</Link></ItemMenu>
                    </div>
                :
                    <div>
                        <ItemMenu color= {location.pathname === "/signin" ? green : grey } ><Link to="/signin">Entrar</Link></ItemMenu>
                        <ItemMenu color= {location.pathname === "/signup" ? green : grey } ><Link to="/signup">Cadastrar-se</Link></ItemMenu>
                    </div>
                }
            </Menu>
            <Logo>
                <h1>Shortly</h1>
                <img src={logo} alt="logo" />
            </Logo>
        </Container>
    )
}

const Container =  styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    
    img{
        width: 100px;
    }

    margin-top: 60px;
`;

const Menu = styled.div`
    width: 100%;
    height: 20px;
    
    display: flex;
    justify-content: flex-end;

    a{
        margin-right: 15px;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;

        cursor: pointer;
    }

    > div{
        display: flex;
        margin-right: 60px;
    }   
`;

const Logo = styled.div`
    width: 100%;
    
    display: flex;
    justify-content: center;
    align-items: flex-start;

    font-weight: 300;
    font-size: 64px;
    line-height: 80px;
    color: #000000;
`;

const ItemMenu = styled.div`
    a{
        color: ${props => props.color}
    }
`;
