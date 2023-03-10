import { StyledHeader, StyledNavLink, StyledNavTitle, StyledNavWrapper } from "../styles/Header.styles";
import logo from '../assets/images/logo.svg';
import { StyledContainer } from "../styles/Global.styles";
import { IconButtonLink } from "./Buttons";
import { FiImage } from "react-icons/fi";

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

                    <IconButtonLink size={'sm'} to={'/gallery'}>
                        <FiImage />
                    </IconButtonLink>
                </StyledNavTitle>

            </StyledNavWrapper>
        </StyledContainer>
    </StyledHeader>
  )
}
