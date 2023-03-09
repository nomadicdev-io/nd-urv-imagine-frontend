import Search from "../components/Search";
import { StyledContainer } from "../styles/Global.styles";
import { StyledIntro, StyledIntroText } from "../styles/Sections.styles";

export default function Intro() {
  return (
    <StyledIntro>
        <StyledContainer>
            <StyledIntroText>
                <h1>Type it, See Your <strong>Imagination</strong></h1>
                <p>URV Imagine is an AI system that can create realistic images and art from a description in natural language. Powered by DALL.E 2. URV Imagine can create original, realistic images and art from a text description. It can combine concepts, attributes, and styles.</p>
            </StyledIntroText>

            <Search />

            
            
        </StyledContainer>
    </StyledIntro>
  )
}
