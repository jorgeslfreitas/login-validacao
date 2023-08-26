import { Link } from "react-router-dom";
import { Container, Box } from "./styles";

const LoginAutenticado = () => {
    return (
        <Container>
            <Box>
                <h1>Bem vindo</h1>
                <Link to={"/"}>Voltar</Link>
            </Box>
        </Container>
    )
}

export { LoginAutenticado }