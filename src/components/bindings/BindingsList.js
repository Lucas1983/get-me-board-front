import {useEffect, useState} from "react";
import sample from "../../bindings.jpg"

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
                <div className="h1 fw-bolder">BINDINGS</div>
                <div className="container-fluid mt-5">
                    <div className="row row-cols-5 justify-content-center">
                        {
                            data.map((value, key) => {
                                return <div className="card m-2 bg-dark bg-opacity-75 text-white" key={key}>
                                    <div className="card-header fs-5 fw-bolder lead">{value.brand} - {value.model}</div>
                                    <img className="card-img opacity-75" src={sample} alt=""/>
                                    <div className="card-body text-start fw-bold">
                                        <div className="card-title">BRAND : {value.brand}</div>
                                        <div className="card-subtitle">MODEL : {value.model}</div>
                                        <div className="card-text">YEAR : {value.year}</div>
                                        <div className="card-text">FLEX : {value.flex}</div>
                                        <div className="card-text">LEVEL : {value.level}</div>
                                        <div className="card-text">TYPE : {value.type}</div>
                                        <button type="button" className="btn-success">More Info</button>
                                    </div>
                                    <div className="card-footer fs-6 fw-bold">ID - {value.id}</div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </>
    )
}

export default BindingsList;
