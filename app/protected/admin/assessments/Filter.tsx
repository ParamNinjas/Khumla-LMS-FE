const Filter = () => {
  return (
    <form className="form-inline">
        <label className="mr-sm-2 form-label"
                >Filter by:</label>
        <input type="text"
                className="form-control search mb-2 mr-sm-2 mb-sm-0"
                id="inlineFormFilterBy"
                placeholder="Search ..."/>

        <label className="sr-only" >Role</label>
        <select id="inlineFormRole"
                className="custom-select mb-2 mr-sm-2 mb-sm-0">
            <option value="All Roles">All Roles</option>
        </select>

        <div className="ml-auto mb-2 mb-sm-0 custom-control-inline mr-0">
            <label className="form-label mb-0"
                    >Active</label>
            <div className="custom-control custom-checkbox-toggle ml-8pt">
                <input
                        type="checkbox"
                        id="active"
                        className="custom-control-input"/>
                <label className="custom-control-label" >Active</label>
            </div>
        </div>

    </form>
)
}

export default Filter