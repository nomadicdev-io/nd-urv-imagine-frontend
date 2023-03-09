import { StyledSearchForm, StyledSearchWrapper } from "../styles/Sections.styles";
import { IconButton } from "./Buttons";
import { FiArrowRight } from "react-icons/fi";

export default function Search() {

    const SearchSubmit = (el)=> {
        el.preventDefault();
        console.log('Search Works')
    };

  return (
    <StyledSearchWrapper>
        <StyledSearchForm
            onSubmit={SearchSubmit}
        >
            <input type={'text'} placeholder="Type your imagination" />

            <IconButton>
                <FiArrowRight />
            </IconButton>

        </StyledSearchForm>
    </StyledSearchWrapper>
  )
}
