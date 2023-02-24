import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: ${({ theme }) => theme.colors.white};
`;

export const StyledHeader = styled.header`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 5px;
    font-size: x-large;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
    justify-content: space-between;
    padding: 10px;  
    
    @media (max-width: ${({theme}) => theme.breakpoint.mobile}px){
        flex-direction: column;
        padding-left: 0px;
    }
`;

export const StyledTitle = styled.div`
    font-weight: 700;

    @media (max-width: ${({theme}) => theme.breakpoint.mobile}px){
        align-self: flex-start;
        padding-left: 10px;
        }
   `;

export const StyledParagraph = styled.div`
    padding: 10px;
`;