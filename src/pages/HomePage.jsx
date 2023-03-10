import { useState } from "react"
import Loader from "../components/Loader"
import Intro from "../sections/Intro"

const HomePage = () => {

    const [isLoading, setIsLoading] = useState(false)

  return (
    <>
        <Intro />
        {
            isLoading && <Loader />
        }
    </>
  )
}

export default HomePage