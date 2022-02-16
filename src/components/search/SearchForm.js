import {useState, useCallback} from "react";
import InfoStep from "./InfoStep";
import PreferencesStep from "./PreferencesStep";
import Error from "../error/Error";

const SearchForm = (callback, deps) => {

    const FormTitles = ['Personal Info', 'Preferences'];

    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        height: null,
        weight: null,
        size: null,
        skill: null,
        ride: null
    })

    const PageDisplay = () => {
        switch (page) {
            case 0:
                return <InfoStep formData={formData} setFormData={setFormData}/>
            case 1:
                return <PreferencesStep formData={formData} setFormData={setFormData}/>
            default:
                return <Error/>
        }
    }

    const submit = useCallback(formData => {
        // fetch()
        alert(JSON.stringify(formData))
    })

    return (
        <div className='search-form'>
            <div className="progress-bar"/>
            <div className="form-container">
                <div className="header">
                    <h1>{FormTitles[page]}</h1>
                </div>
                <div className="body">
                    <form className="form-horizontal" action="" method="POST" name="" id="">
                        {PageDisplay()}
                    </form>
                </div>
                <div className="footer">
                    <button type="button" className="btn btn-outline-light" onClick={() => setPage(page - 1)}
                            disabled={page === 0}>Prev
                    </button>
                    <button type="button" className="btn btn-outline-light" onClick={() =>
                        page === FormTitles.length - 1 ?
                            submit(formData) :
                            setPage(page + 1)
                    }>{page === FormTitles.length - 1 ? "Submit" : "Next"}
                    </button>

                </div>
            </div>
        </div>
    )
}
export default SearchForm;
