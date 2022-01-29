import "bootstrap/dist/css/bootstrap.min.css"

const PreferencesStep = ({formData, setFormData}) => {

    return (
        <div className="preferences-container">
            <div className="form-group row">
                <label htmlFor="skill" className="control-label">What are your skills ?</label>
                <div className="input-group mb-1">
                    <input id="skill" type="text" className="form-control" value={formData.skill}
                           onChange={event => setFormData({...formData, skill: event.target.value})}/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="ride" className="control-label">Where you plan to ride ?</label>
                <div className="input-group mb-1">
                    <input id="ride" type="text" className="form-control" value={formData.ride}
                           onChange={event => setFormData({...formData, ride: event.target.value})}/>
                </div>
            </div>
        </div>
    )
}
export default PreferencesStep
