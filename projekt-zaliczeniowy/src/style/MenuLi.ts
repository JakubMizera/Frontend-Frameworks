import styled from "styled-components";

const MenuLi = styled.li`
    font-size: 30px;
    font-weight: 800;
    padding: 20px 10px;
    & > a {
        text-decoration: none;
        color: black;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
    }
    & > a:hover {
        color: #113f67;
    }
`;

export default MenuLi;