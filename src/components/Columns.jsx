import { useMemo } from "react"

export const UseColumns = () => {
    const columns = useMemo(
        () => [
            {
              
                        Header: 'Title',
                        accessor: 'title',
                  
            },
            {
                        Header: "Picture",
                        accessor: "url"
            }
        ],
        []
    )

    
    return { columns };
}