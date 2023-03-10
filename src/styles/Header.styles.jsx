
import styled from "styled-components";

const StyledHeader = styled.header`
    position: relative;
    display: block;
    width: 100%;
    height: auto;
    padding-block: 2rem;
`;

const StyledNavWrapper = styled.nav`
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const StyledNavLink = styled.a`
    position: relative;
    display: block;
    width: auto;
    height: 2rem;

    @media only screen and (max-width: 767px){
        height: 1.25rem;
    }

    img{
        position: relative;
        display: block;
        width: auto;
        height: 100%;
    }
`;

const StyledNavTitle = styled.div`
    position: relative;
    display: flex;
    width: auto;
    align-items: center;
    grid-gap: 1.25rem;

    h2{
        position: relative;
        display: block;
        margin: 0;
        font-size: 1.25rem;
        text-transform: uppercase;

        span{
            color: var(--primary-color);
        }
    }
`;

export {StyledHeader, StyledNavLink, StyledNavWrapper, StyledNavTitle};