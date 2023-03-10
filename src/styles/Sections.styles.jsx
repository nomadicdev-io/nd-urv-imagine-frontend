import styled from "styled-components";

const StyledIntro = styled.section`
    position: relative;
    display: block;
    width: 100%;
    height: auto;
    padding-top: 5rem;
    padding-bottom: 3rem;
    overflow: hidden;
`;

const StyledIntroText = styled.div`
    position: relative;
    display: block;
    width: 100%;
    text-align: center;

    h1{
        position: relative;
        display: block;
        font-size: 3.5rem;
        margin: 0;
        line-height: 1.75;

        @media only screen and (max-width: 767px){
            font-size: 2.75rem;
        }

        strong{
            color: var(--primary-color);
        }
    }

    p{
        position: relative;
        display: block;
        line-height: 1.75;
        font-size: 1.25rem;
        width: 80%;
        margin-inline: auto;

        @media only screen and (max-width: 1200px){
            width: 100%;
        }
    }
`

const StyledSearchWrapper = styled.div`
    position: relative;
    width: 100%;
    margin-top: 2.5em;
    display: block;
    padding: 0 5%;

    @media only screen and (max-width: 767px){
        padding: 0;
    }
`;

const StyledSearchForm = styled.form`
    position: relative;
    display: flex;
    grid-gap: 1.25em;
    align-items: center;
    width: 100%;

    input{
        position: relative;
        display: block;
        width: 100%;
        box-sizing: border-box;
        border-radius: 0.5rem;
        height: 3.5rem;
        outline: none;
        padding: 0 1em;
        background-color: rgb(32 32 32);
        border: none;
        font-size: 1rem;
        font-weight: 500;
        color: var(--text-color);

        &::-webkit-input-placeholder { 
            color: #5f5f5f;
        }

        &:-ms-input-placeholder { 
            color: #5f5f5f;
        }

        &::placeholder {
            color: #5f5f5f;
        }
    }
`

export {StyledIntro, StyledIntroText, StyledSearchWrapper, StyledSearchForm};