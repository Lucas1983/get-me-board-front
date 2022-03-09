import 'bootstrap/dist/css/bootstrap.min.css';

const InfoStep = ({formData, setFormData}) => {

    return (
        <>
            <label htmlFor="sex" className="control-label lh-base text-decoration-underline">Sex</label>
            <div>
                <div className="form-check form-check-inline">
                    <label htmlFor="sex_male" className="form-check-label text-decoration-underline">Male</label>
                    <input id="sex_male" type="radio" className="form-check-input " value="MALE"
                           checked={formData.sex === 'MALE'}
                           onChange={event => setFormData({...formData, sex: event.target.value})}/>
                </div>
                <div className="form-check form-check-inline">
                    <label htmlFor="sex_female" className="form-check-label text-decoration-underline">Female</label>
                    <input id="sex_female" type="radio" className="form-check-input" value="FEMALE"
                           checked={formData.sex === 'FEMALE'}
                           onChange={event => setFormData({...formData, sex: event.target.value})}/>
                </div>
            </div>
            <div>
                <label htmlFor="height" className="control-label lh-base text-decoration-underline">Height</label>
                <div className="input-group">
                    <input id="height" type="number" className="form-control" value={formData.height}
                           onChange={event => setFormData({...formData, height: event.target.value})}/>
                </div>
            </div>
            <div>
                <label htmlFor="weight" className="control-label lh-base text-decoration-underline">Weight</label>
                <div className="input-group">
                    <input id="weight" type="number" className="form-control" value={formData.weight}
                           onChange={event => setFormData({...formData, weight: event.target.value})}/>
                </div>
            </div>
            <div>
                <label htmlFor="size" className="control-label lh-base text-decoration-underline">Boot Size</label>
                <div className="input-group">
                    <input id="size" type="number" className="form-control" value={formData.size}
                           onChange={event => setFormData({...formData, size: event.target.value})}/>
                </div>
            </div>
        </>
    )
}
export default InfoStep
