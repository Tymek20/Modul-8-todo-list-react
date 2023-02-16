import styled, { css } from "styled-components";

export const NewTasks = styled.ul`
    padding: 10px 30px;

    @media (max-width: 767px){
        padding: 10px 0px;
    }
`;

export const DoneButton = styled.button` 
    height: 30px;
    width: 30px;
    border: none;
    background-color: rgb(24, 128, 5);
    color: white;
    align-self: center;
    justify-self: center;
    cursor: pointer;
    font-size: x-large;
    transition: 2s;

    &:hover{
        background-color: hsl(111, 92%, 36%);
    }
`;

export const RemoveButton = styled(DoneButton)`
    background-color: hsl(0, 94%, 38%);
 
    &:hover {
    background-color: hsl(0, 92%, 47%);
    }

    &:active {
    background-color: hsl(0, 100%, 50%);
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
    border-bottom: 1px solid #dbc7c7;

    ${({ hidden }) => hidden && css`
    display: none;
    `};
`;

export const StyledTask = styled.div`
    
    ${({ lineThrough }) => lineThrough && css`
        text-decoration: line-through;
    `};
`;