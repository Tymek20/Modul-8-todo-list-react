import styled, { css } from "styled-components";

export const NewTasks = styled.ul`
    padding: 10px 30px;

    @media (max-width: ${({theme}) => theme.breakpoint.mobile}px){
        padding: 10px 0px;
    }
`;

export const DoneButton = styled.button` 
    height: 30px;
    width: 30px;
    border: none;
    background-color: ${({ theme }) => theme.colors.japaneseLaurel};
    color: ${({ theme }) => theme.colors.white};
    align-self: center;
    justify-self: center;
    cursor: pointer;
    font-size: x-large;
    transition: 2s;

    &:hover{
        filter: brightness(130%)
    }
`;

export const RemoveButton = styled(DoneButton)`
    background-color: ${({ theme }) => theme.colors.milanoRed};
 
    &:hover {
        background-color: ${({ theme }) => theme.colors.red};
    }

    &:active {
        background-color: ${({theme}) => theme.colors.lightRed};
    }
`;

export const StyledList = styled.li`
    display: grid;
    grid-template-columns: 50px 1fr 50px;
    padding: 10px 10px;
    max-width: 100%;
    grid-template-areas:
        "bt tx re";
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};;

    ${({ hidden }) => hidden && css`
    display: none;
    `};
`;

export const StyledTask = styled.div`
    ${({ lineThrough }) => lineThrough && css`
        text-decoration: line-through;
    `};
`;