import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchData = (page=0, limit=10) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const cancelTokenSource = axios.CancelToken.source();

        const fetchData = async () => {
            setIsPending(true)

            try {

                console.log("inside try - Fetch");

                const res = await axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`, {
                    cancelToken: cancelTokenSource.token
                    })

                    console.log(res);
                // if (!res.ok) {
                //     throw new Error(res.statusText)
                // }
                const data = res.data;

                setIsPending(false)
                setData(data)
                setError(null)
            } catch (err) {
                if (err.name === "AbortError") {
                    console.log("the fetch was aborted")
                } else {
                    console.log(err);
                    setIsPending(false)
                    setError('Could not fetch the data')
                }
            }
        }

        fetchData()

        return () => {
            cancelTokenSource.cancel();
        }

    }, [page, limit])

    // console.log(data)
    // console.log(isPending)

    return { data, isPending, error }
}