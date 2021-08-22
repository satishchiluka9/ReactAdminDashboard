import { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { setupInterceptors } from "./http"

const InjectAxiosInterceptors = () => {
    const history = useHistory()

    useEffect(() => {
        console.log('this effect is called once')
        setupInterceptors(history)
    }, [history])

    // not rendering anything
    return null
}

export default InjectAxiosInterceptors;