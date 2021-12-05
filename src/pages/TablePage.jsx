
import React, { useState, useEffect } from 'react';
import { useFetchData } from "../hooks/useFetchData";
import Table from "../components/Table";
import { UseColumns } from "../components/Columns";

const TablePage = () => {
    
    const [pageIndex, setPageIndex] = useState(1);
    const [pageSize, setPageFetchSize] = useState(10);
    const { data: photos, isPending, error } = useFetchData(pageIndex, pageSize);
    const { columns } = UseColumns();
    console.log({ columns })

    console.log(photos);

    // useEffect(() => {
    //     fetchData({ pageIndex, pageSize })
    // }, [fetchData, pageIndex, pageSize])

    return (
        <div>
            {isPending ? 'loading...' : ''}
            {error}
            dftgds
            {!isPending && photos && columns ?
                <Table 
                    columns={columns} 
                    data={photos} 
                    loading={isPending}
                    pageIndex1={pageIndex}
                    pageSize={pageSize}
                    setPageIndex={setPageIndex}
                    setPageFetchSize={setPageFetchSize}
                />
                : ''}
        </div>
    );
}

export default TablePage;