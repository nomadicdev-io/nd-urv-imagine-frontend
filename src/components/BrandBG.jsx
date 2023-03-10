import { StyledBrandBg } from "../styles/Global.styles";
import bgImage from '../assets/images/bg.png';

export default function BrandBG() {
  return (
    <StyledBrandBg>
        <img src={bgImage} alt="Brand BG" />
    </StyledBrandBg>
  )
}
