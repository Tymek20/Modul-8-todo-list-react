import styled from "styled-components";

export const MainContainer = styled.main`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.ebb};
`;