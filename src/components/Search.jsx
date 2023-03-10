import { StyledSearchForm, StyledSearchWrapper } from "../styles/Sections.styles";
import { IconButton } from "./Buttons";
import { FiArrowRight } from "react-icons/fi"
import { getRandomPrompt } from "../utils";
import { useState } from "react";

export default function Search() {

    const [form, setForm] = useState({
        name: '',
        prompt: '',
        photo: ''
    })

    const SearchSubmit = (el)=> {
        el.preventDefault();
        console.log(form)
    };

    const handleChange = (el)=> {
        setForm({...form, prompt: el.target.value})
    }

  return (
    <StyledSearchWrapper>
        <StyledSearchForm
            onSubmit={SearchSubmit}
        >
            <input 
            type={'text'} 
            placeholder="Type your imagination" 
            value={form.prompt}
            onChange={handleChange}
            />

            <IconButton>
                <FiArrowRight />
            </IconButton>

        </StyledSearchForm>
    </StyledSearchWrapper>
  )
}
