import React from 'react'
import Spinner from './Spinner';
import { Link } from 'react-router-dom';

const Countries = ({ countries, loading}) => {
    console.log(countries)
    if(loading){
        return <Spinner />
    }
    else{

    return (
        <div>
            <div className="row border bg-success text-white mt-4 ml-3">
                <div className="col-md-4">Country Name</div>
                <div className="col-md-4">Total Holidays</div>
                <div className="col-md-4">Supported Languages</div>
            </div>
            {countries.map(country => {
                const {country_name, total_holidays, supported_languages, "iso-3166" : countryCode} = country;
                return( 
                <div key={country.uuid} className="row border border-success ml-3 pb-1 pt-1">
                       <div className="col-md-4"><Link className="text-success" to={`/${countryCode}`}><strong>{country_name}</strong></Link></div>
                       <div className="col-md-4">{total_holidays}</div>
                       <div className="col-md-4">{supported_languages}</div>

                </div>)
            })}    
        </div>
    )
    }
}


export default Countries;