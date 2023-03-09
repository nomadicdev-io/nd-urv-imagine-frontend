import { StyledBrandBg } from "../styles/Global.styles";
import bgImage from '../../public/bg.png';

export default function BrandBG() {
  return (
    <StyledBrandBg>
        <img src={bgImage} alt="Brand BG" />
    </StyledBrandBg>
  )
}
