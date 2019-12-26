import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Spinner from './Spinner';

const Country = (props) => {

    const [holiday, setHoliday] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=> {
        const fetchHolidays = async () => {
            setLoading(true);
            const res = await axios.get(`https://calendarific.com/api/v2/holidays?
            &api_key=76189d7d99947c4db175d77f2bec63c640db7b8f&country=${props.match.params.code}&year=2019`)
            setHoliday(res.data.response.holidays);
            setLoading(false);
        }

        fetchHolidays();
    }, []);

    console.log(holiday);

    if(loading){
        return <Spinner />
    }

    return (
        <div className="container mt-3">
            <div className="row border bg-success text-white pb-1 pt-1">
                <div className="col-md-2">Name of Holiday</div>
                <div className="col-md-5">Description</div>
                <div className="col-md-3">Date</div>
                <div className="col-md-2">State</div>
            </div>
            {
                holiday.map((day, index) => {
                    let stateInfo = [];
                    let stateName = '';
                    const {name, description, date, states} = day;
                    if(states === 'All'){
                        stateName = "All States"
                    }
                    else{
                        states.map(state => {
                            return stateInfo.push(state.name);
                        }) 
                        stateName = stateInfo.join(', ')                  
                     }
                    return <div key={index} className="row border border-success">
                        <div className="col-md-2">{name}</div>
                        <div className="col-md-5">{description}</div>
                        <div className="col-md-3">{date.iso}</div>
                        <div className="col-md-2">{stateName}</div>

                    </div>
                })
            }
            <br/>
        </div>
    )
}

export default Country
