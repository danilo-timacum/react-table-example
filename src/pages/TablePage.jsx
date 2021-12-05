import { useFetchData } from "../hooks/useFetchData";
import Table from "../components/Table";
import { UseColumns } from "../components/Columns";

const TablePage = () => {

    const {data: photos, isPending, error} = useFetchData(0, 10);
    const { columns } = UseColumns();
    console.log({columns})

    console.log(photos);

    return (
        <div>
            {isPending ? 'loading...' : ''}
            {error}
            dftgds
            { !isPending && photos && columns ? <Table columns={columns} data={photos}/> : '' }
        </div>
    );
}

export default TablePage;