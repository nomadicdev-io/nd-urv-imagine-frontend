import { StyledSearchForm, StyledSearchWrapper } from "../styles/Sections.styles";
import { IconButton } from "./Buttons";
import { FiArrowRight } from "react-icons/fi"
import { getRandomPrompt } from "../utils";
import { useState } from "react";
import Loader from './Loader';
import ImagePlaceholder from "./ImagePlaceholder";

export default function Search() {

    const [form, setForm] = useState({
        name: '',
        prompt: '',
        photo: ''
    })

    const [isLoading, setIsLoading] = useState(false);

    const SearchSubmit = async (el)=> {
        el.preventDefault();

        if(form.prompt) {
            try {
                
                setIsLoading(true);
                const response = await fetch('http://localhost:8080/api/v1/dalle', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({prompt: form.prompt})
                });

                const data = await response.json();

                setForm({...form, photo: `data:image/jpeg;base64, ${data.photo}`})

            } catch(error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }

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

        {
            isLoading && <Loader />
        }

        {
            form.photo && <ImagePlaceholder url={form.photo}/>
        }
        

    </StyledSearchWrapper>
  )
}
