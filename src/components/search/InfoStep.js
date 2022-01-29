import 'bootstrap/dist/css/bootstrap.min.css';

const InfoStep = ({formData, setFormData}) => {

    return (
        <div className="info-container">
            <div className="form-group row">
                <label htmlFor="height" className="control-label">Height</label>
                <div className="input-group mb-1">
                    <input id="height" type="text" className="form-control" value={formData.height}
                           onChange={event => setFormData({...formData, height: event.target.value})}/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="weight" className="control-label">Weight</label>
                <div className="input-group mb-1">
                    <input id="weight" type="text" className="form-control" value={formData.weight}
                           onChange={event => setFormData({...formData, weight: event.target.value})}/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="size" className="control-label">Boot Size</label>
                <div className="input-group mb-1">
                    <input id="size" type="text" className="form-control" value={formData.size}
                           onChange={event => setFormData({...formData, size: event.target.value})}/>
                </div>
            </div>
        </div>
    )
}
export default InfoStep
