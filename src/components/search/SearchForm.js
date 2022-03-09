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
        ride: null,
        sex: null
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
        <div className="d-flex flex-column">
            <div className="header row h-25 align-items-center">
                <div className="display-3 text-center">{FormTitles[page]}</div>
            </div>
            <div className="body row h-50 h4 justify-content-center">
                <div className="col-4"/>
                <div className="col-4">
                    <form className="search-form text-center" action="" method="POST" name="" id="">
                        {PageDisplay()}
                    </form>
                </div>
                <div className="col-4"/>
            </div>
            <div className="footer row h-25 d-inline-flex g-1 mt-3">
                <div className="col text-end">
                    <button type="button" className="btn-lg btn-dark"
                            onClick={() =>
                                setPage(page - 1)
                            } disabled={page === 0}>
                        Prev
                    </button>
                </div>
                <div className="col text-start">
                    <button type="button" className="btn-lg btn-dark"
                            onClick={() =>
                                page === FormTitles.length - 1 ?
                                    submit(formData) :
                                    setPage(page + 1)
                            }>
                        {page === FormTitles.length - 1 ? "Submit" : "Next"}
                    </button>
                </div>
            </div>
        </div>
    )
}
export default SearchForm;
