import { StyledButtonIcon, StyledButtonIconLink } from "../styles/Global.styles";

const IconButton = ({children})=> {
  return (
    <StyledButtonIcon type="submit">
        {children}
    </StyledButtonIcon>
  )
}

const IconButtonLink = ({children, size, to})=> {
  return (
    <StyledButtonIconLink size={size} to={to}>
      {children}
    </StyledButtonIconLink>
  )
}

export {IconButton, IconButtonLink};
