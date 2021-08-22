import axios from "axios";

const http = axios.create({
    baseURL: 'https://url'
})

/**
 * @param {import('history').History} history - from useHistory() hook
 */
export const setupInterceptors = (history: any) => {
    http.interceptors.response.use(res => {
        // success
        return res
    }, err => {
        const { status } = err.response

        if (status === 401) {
            // here we have access of the useHistory() from current Router
            history.push('/login')
        }

        return Promise.reject(err)
    })
}

export default http