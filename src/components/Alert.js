import React from 'react'

const Alert = () => {
    return (
        <div className="alert alert-success alert-dismissible fade show ml-4 mt-3 text-center" role="alert">
        Following are the list of countries with the total number of holidays. Click on a 
        country to view the detailed list of holidays
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
</div>
    )
}

export default Alert
