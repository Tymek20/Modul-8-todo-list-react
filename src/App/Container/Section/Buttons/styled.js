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
    color:  teal
    padding 0 10px;

    &:hover {
    color: hwb(0 17% 30%);
    }

    &:disabled {
    color: #ccc
    }

    @media (max-width: 767px){
        padding-top: 20px;
    }
`