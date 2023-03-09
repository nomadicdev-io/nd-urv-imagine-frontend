import { StyledHeader, StyledNavLink, StyledNavTitle, StyledNavWrapper } from "../styles/Header.styles";
import logo from '../../public/logo.svg';
import { StyledContainer } from "../styles/Global.styles";

export default function Header() {
  return (
    <StyledHeader>
        <StyledContainer>
            <StyledNavWrapper>

                <StyledNavLink href="#" title="UrbanVyali">
                    <img src={logo} alt="URV" />
                </StyledNavLink>

                <StyledNavTitle>
                    <h2><span>AI</span> Imagine</h2>
                </StyledNavTitle>

            </StyledNavWrapper>
        </StyledContainer>
    </StyledHeader>
  )
}
