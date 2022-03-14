import {useEffect, useState} from "react";

const BootsList = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }
        fetch('http://localhost:9999/boots', requestOptions)
            .then(response => response.json())
            .then(data => {
                setData(data)
                console.log(data)
            }).catch(err => console.error(err))
    }, []);

    return (
        (data.length === 0) ?
            <div>
                <div className="h1">NO DATA FOUND</div>
            </div> :
            <>
                <h1>BOOTS LIST</h1>
                <div className='w-100 mh-100 overflow-auto'>
                    <table className="table table-bordered table-hover bg-light bg-opacity-50 overflow-scroll h-75">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>BRAND</th>
                            <th>MODEL</th>
                            <th>YEAR</th>
                            <th>FLEX</th>
                            <th>LEVEL</th>
                            <th>LACING</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            data.map((value, key) => {
                                return <tr key={key}>
                                    <td>{value.id}</td>
                                    <td>{value.brand}</td>
                                    <td>{value.model}</td>
                                    <td>{value.year}</td>
                                    <td>{value.flex}</td>
                                    <td>{value.level}</td>
                                    <td>{value.lacing}</td>
                                </tr>
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </>
    )
}

export default BootsList;