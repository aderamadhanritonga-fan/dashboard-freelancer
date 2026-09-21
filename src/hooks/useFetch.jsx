import { useEffect, useState } from "react";

function useFetch(url) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [retryCount, setRetryCount] = useState(0)

    useEffect(() => {
        const controller = new AbortController()

        async function ambilData() {
            setLoading(true)
            setError(null)
            
            try {
                const response = await fetch(url, {
                    signal: controller.signal,
                })

                if(!response.ok) {
                    throw new Error(`Gagal Memuat Data (${response.status})`)
                }

                const json = await response.json()
                setData(json)
            } catch (error) {
                if(error.name !== 'AbortError'){
                    setError(error.message)
                }
            } finally {
                setLoading(false)
            }
        }
        
        ambilData()

        return () => {
            controller.abort()
        }

    },[url, retryCount])

    function retry(){
        setRetryCount((nilaiSebelumnya) => nilaiSebelumnya + 1)
    }

    return {
        data,
        loading,
        error,
        retry,
    }
}

export default useFetch