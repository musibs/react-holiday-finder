import React, {useState, useEffect } from 'react';
import axios from 'axios';
import Countries from './Countries';
import Pagination from './Pagination';
import Alert from './Alert';

const Index = () => {

    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurentPage] = useState(1);
    const [countriesPerPage] = useState(10);

    useEffect(() => {
        const fetchCountries = async () => {
            setLoading(true);
            const res = await axios.get(`https://calendarific.com/api/v2/countries?api_key=76189d7d99947c4db175d77f2bec63c640db7b8f`);
            setCountries(res.data.response.countries);
            setLoading(false);
        };

        fetchCountries();
    }, []);

  // Currnet Countries

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry); 

  // Change Page
  const paginate = (pageNumber) => setCurentPage(pageNumber);

  return (
    <div>
     <div className="container">
          <Alert />
          <Countries countries={currentCountries} loading={loading}/>
          <Pagination countriesPerPage={countriesPerPage} totalCountries={countries.length} paginate={paginate} />
     </div>
    </div>
  );
}

export default Index
