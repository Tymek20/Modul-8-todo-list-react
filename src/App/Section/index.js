import { StyledSection, StyledHeader, StyledTitle, StyledParagraph } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <StyledSection>
        <StyledHeader>
            <StyledTitle>{title}</StyledTitle>
            {extraHeaderContent}
        </StyledHeader>
        <StyledParagraph>
            {body}
        </StyledParagraph>
    </StyledSection>
);

export default Section;