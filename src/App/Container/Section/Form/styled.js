import styled from "styled-components";


export const theme = {
    colors: {
        primaryColor: "rgb(254, 255, 255)",
        borderColor: "lightgray",
    }
};

export const FormInput = styled.form` 
    background-color: white;
    display: flex;
    padding: 10px;

    @media (max-width: 767px) {
        flex-wrap: wrap;
    }
`;

export const NewTask = styled.input`
    background-color: rgb(255, 255, 255);
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    cursor: text;
    flex-basis: 78%;
    padding: 10px;

    @media (max-width: 767px) {
        flex-basis: 100%;
    }
`;

export const AddButton = styled.button`
    margin-left: 20px;
    cursor: pointer;
    border: none;
    background-color: rgb(62 92 106);
    color:  ${({ theme }) => theme.colors.primaryColor};
    transition: 0.5s;

    &:hover {
        transform: scale(1.10);
    }

@media (max-width: 767px){
    flex-basis: 100%;
    margin: 10px 0;
    padding: 10px;
    }
`;