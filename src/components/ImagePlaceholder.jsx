import React from 'react'
import { StyledImageBox, StyledImagePlaceholder } from '../styles/Global.styles'

const ImagePlaceholder = ({url}) => {
  return (
    <StyledImagePlaceholder>
        <StyledImageBox>
            <img src={url} />
        </StyledImageBox>
    </StyledImagePlaceholder>
  )
}

export default ImagePlaceholder