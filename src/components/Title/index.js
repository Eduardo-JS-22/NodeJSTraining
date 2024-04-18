import styled from "styled-components";

export const TitleContainer = styled.h2`
    background-color: #fff;
    font-size: ${props => props.fontSize || "18px"};
    text-align: ${props => props.alignText || "center"};
    width: 100%;
    padding: 30px 0;
    color: ${props => props.color || "#000"};
    margin: 0;
`