import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: white;
`;

export const StyledHeader = styled.header`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 5px;
    font-size: x-large;
    border-bottom: 1px solid hsl(0, 21%, 90%);
    justify-content: space-between;
    padding: 10px;  
    
    @media (max-width: 767px){
        flex-direction: column;
        padding-left: 0px;
    }
`;

export const StyledTitle = styled.div`
    font-weight: 700;

    @media (max-width: 767px){
        align-self: flex-start;
        padding-left: 10px;
        }
   `;

export const StyledParagraph = styled.div`
    padding: 10px;
`;