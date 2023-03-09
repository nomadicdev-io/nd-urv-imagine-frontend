import { StyledButtonIcon } from "../styles/Global.styles";

const IconButton = ({children})=> {
  return (
    <StyledButtonIcon type="submit">
        {children}
    </StyledButtonIcon>
  )
}

export {IconButton};
