import styled from "styled-components";


export const AdditionalButtonSection = styled.div`
    padding: 0 10px;

    @media (max-width: 767px)  { 
        display: grid;
        grid-template-columns: 1fr;
    }
    `;

export const Button = styled.button`
    border: none;
    background: transparent;
    font-size: large;
    cursor: pointer;
    transition: 0.5s;
    color: ${({theme}) => theme.colors.teal};
    padding: 0 10px;

    &:hover {
    color: ${({theme}) => theme.colors.tallPoppy};
    }

    &:disabled {
    color: ${({theme}) => theme.colors.silver};    
    }

    @media (max-width: ${({theme}) => theme.breakpoint.mobile}px){
        padding-top: 20px;
    }
`