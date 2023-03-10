
import styled from "styled-components";
import { Link } from "react-router-dom";

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

    @media only screen and (max-width: 767px){
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

const StyledMain = styled.main`
    position: relative;
    display: block;
    width: 100%;
    height: auto;
    overflow: hidden;
`

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

const StyledButtonIconLink = styled(Link)`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${(props)=> props.size == 'sm' ? '2.5rem' : '3.5rem'};
    height: ${(props)=> props.size == 'sm' ? '2.5rem' : '3.5rem'};
    border-radius: 0.5rem;
    background-color: var(--primary-color);
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.3s ease;

    svg{
        display: block;
        width: ${(props)=> props.size == 'sm' ? '1.25rem' : '1.75rem'};
        height: auto;
        color: var(--bg-color);
    }

    &:hover{
        box-shadow: -1px 4px 8px 1px #00f38a7e;
    }
`

const StyledLoader = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    z-index: 9;
    
    &:before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.7;
        background-color: var(--bg-color);
    }

    .loader_block{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 4rem;
        height: 4rem;
        background-color: var(--primary-color);
        border-radius: 0.5rem;

        svg{
            width: 60%;
            height: auto;
            display: block;

            path{
                fill: var(--bg-color);
            }
        }
    }
`

const StyledImagePlaceholder = styled.div`
    position: relative;
    display: block;
    width: 100%;
    height: auto;
    margin-top: 2.5rem;
`

const StyledImageBox = styled.div`
    position: relative;
    display: block;
    width: 50%;
    height: auto;
    border-radius: 1.25rem;
    overflow: hidden;
    margin: 0 auto;
    background-color: rgb(32 32 32);
    border: 2px solid rgb(32 32 32);
    
    img{
        position: relative;
        display: block;
        width: 100%;
        height: auto;
        object-fit: contain;
    }
`

export {
    StyledContainer, 
    StyledBrandBg, 
    StyledButtonIcon, 
    StyledButtonIconLink, 
    StyledMain,
    StyledLoader,
    StyledImagePlaceholder,
    StyledImageBox
};