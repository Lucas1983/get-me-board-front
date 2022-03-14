import {useEffect, useState} from "react";

const BoardList = () => {

    const [data, setData] = useState([]);

    useEffect(async () => {
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }
        await fetch('http://localhost:9999/board', requestOptions)
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
                <div className='h1'>BOARDS LIST</div>
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
                            <th>LENGTH</th>
                            <th>CLASSIFICATION</th>
                            <th>PROFILE</th>
                            <th>SHAPE</th>
                            <th>CORE</th>
                            <th>BASE</th>
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
                                    <td>{value.length}</td>
                                    <td>{value.classification}</td>
                                    <td>{value.profile}</td>
                                    <td>{value.shape}</td>
                                    <td>{value.core}</td>
                                    <td>{value.base}</td>
                                </tr>
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </>
    )
}

export default BoardList;