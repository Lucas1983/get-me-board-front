function Result({resultData}) {

    return (
        (resultData === null || resultData === undefined) ?
            <div>
                <div className="h1">NO DATA FOUND</div>
            </div> :
            <>
                <div>
                    <label>Size</label>
                    {resultData.size}
                </div>
                <div>
                    <label>Type</label>
                    {resultData.type}
                </div>
            </>
    )
}

export default Result;