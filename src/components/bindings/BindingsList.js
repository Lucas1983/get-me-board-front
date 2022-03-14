import {useEffect, useState} from "react";

const BindingsList = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }
        fetch('http://localhost:9999/bindings', requestOptions)
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
                <div className='h1'>BINDING LIST</div>
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
                            <th>TYPE</th>
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
                                    <td>{value.type}</td>
                                </tr>
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </>
    )
}

export default BindingsList;