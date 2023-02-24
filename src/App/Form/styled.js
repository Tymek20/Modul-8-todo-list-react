import styled from "styled-components";

export const FormInput = styled.form` 
    background-color: ${({ theme }) => theme.colors.white};
    display: flex;
    padding: 10px;

    @media (max-width: ${({theme}) => theme.breakpoint.mobile}px) {
        flex-wrap: wrap;
    }
`;

export const NewTask = styled.input`
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.alto};
    cursor: text;
    flex-basis: 78%;
    padding: 10px;
    line-height: normal;

    @media (max-width: ${({theme}) => theme.breakpoint.mobile}px) {
        flex-basis: 100%;
    }
`;

export const AddButton = styled.button`
    margin-left: 20px;
    cursor: pointer;
    border: none;
    background-color: ${({ theme }) => theme.colors.fiord};
    color:  ${({ theme }) => theme.colors.twilightBlue};
    transition: 0.5s;

    &:hover {
        transform: scale(1.10);
    }

@media (max-width: ${({theme}) => theme.breakpoint.mobile}px){
    flex-basis: 100%;
    margin: 10px 0;
    padding: 10px;
    }
`;