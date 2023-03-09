
import styled from "styled-components";

const StyledContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 1280px;
    min-width: 1280px;
    padding-inline: 15px;
    margin-inline: auto;

    @media only screen and (max-width: 1360px){
        max-width: 1024px;
        min-width: 1024px;
    }

    @media only screen and (min-width: 768px) and (max-width: 1200px) and (orientation: portrait) {
        max-width: 90%;
        min-width: 90%;
    }

    @media only screen and(max-width: 767px){
        max-width: 100%;
        min-width: 100%;
    }

`;

const StyledBrandBg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    opacity: 0.2;
    pointer-events: none;
    img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const StyledButtonIcon = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 0.5rem;
    background-color: var(--primary-color);
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.3s ease;

    svg{
        display: block;
        width: 1.75rem;
        height: auto;
    }

    &:hover{
        box-shadow: -1px 4px 8px 1px #00f38a7e;
    }
`

export {StyledContainer, StyledBrandBg, StyledButtonIcon};