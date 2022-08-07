import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";

export default function Header({ user }){    
    
    const location = useLocation();
    const navigate = useNavigate();
    const green = "#5D9040";
    const grey = "#9C9C9C";

    function exit(){
        localStorage.removeItem("token");
        navigate("/");
        window.location.reload();
    }

    return (
        <Container>
            <Menu>
                { !!localStorage.getItem("token") ? 
                    <MenuLogged>
                        <div>
                            <ItemMenu color={green}><p>{location.pathname === "/home" && user ? `Seja bem-vindo(a), ${user.name}!` : <></> }</p></ItemMenu>
                        </div>
                        <div>
                            <ItemMenu color={grey}><Link to="/home">Home</Link></ItemMenu>
                            <ItemMenu color={grey}><Link to="/">Ranking</Link></ItemMenu>
                            <ItemMenu color={grey} onClick={exit}><p>Sair</p></ItemMenu>
                        </div>
                    </MenuLogged>
                :
                    <div>
                        <ItemMenu color= {location.pathname === "/signin" || location.pathname === "/" ? green : grey } ><Link to="/signin">Entrar</Link></ItemMenu>
                        <ItemMenu color= {location.pathname === "/signup" ? green : grey } ><Link to="/signup">Cadastrar-se</Link></ItemMenu>
                    </div>
                }
            </Menu>
            <Link to="/"><Logo>
                <h1>Shortly</h1>
                <img src={logo} alt="logo" />
                </Logo>
            </Link>
        </Container>
    )
}

const Container =  styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    img{
        width: 100px;
    }

    margin-top: 60px;
`;

const Menu = styled.div`
    width: 90%;
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
        padding: 0 60px;
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
        color: ${props => props.color};
        cursor: pointer;
    }

    p{
        color: ${props => props.color};
        margin-right: 15px;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;

        cursor: pointer;
    }
`;

const MenuLogged = styled.div`
    width: 100%;
    padding:0 60px;
    
    justify-content: space-between;

    > div:last-child{
        display: flex;
    }
`;