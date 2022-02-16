import "bootstrap/dist/css/bootstrap.min.css"

const PreferencesStep = ({formData, setFormData}) => {

    return (
        <div className="preferences-container">
            <div className="form-group row">
                <label htmlFor="skill" className="control-label">What are your skills ?</label>
                <div className="input-group mb-1">
                    <select id="skill" className="form-control" value={formData.skill} defaultValue="default"
                            onChange={event => setFormData({...formData, skill: event.target.value})}>
                        <option value="default">-- select an option --</option>
                        <option value="beginner">BEGINNER</option>
                        <option value="intermediate">INTERMEDIATE</option>
                        <option value="advanced">ADVANCED</option>
                        <option value="expert">EXPERT</option>
                    </select>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="ride" className="control-label">Where you plan to ride ?</label>
                <div className="input-group mb-1">
                    <select id="ride" className="form-control" value={formData.ride} defaultValue="default"
                            onChange={event => setFormData({...formData, ride: event.target.value})}>
                        <option value="default">-- select an option --</option>
                        <option value="all_mountain">ALL MOUNTAIN</option>
                        <option value="freestyle">FREESTYLE</option>
                        <option value="freeride">FREERIDE</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
export default PreferencesStep
