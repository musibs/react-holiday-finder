import React from 'react';
import './Pagination.css';

const Pagination = ({ countriesPerPage, totalCountries, paginate }) => {

    const pageNumbers = [];

    for(let i=1; i<=Math.ceil(totalCountries/countriesPerPage) ; i++){
        pageNumbers.push(i);
    }
    return (
        <nav className="mt-3 ml-3">
            <ul className="pagination">
                {pageNumbers.map(pageNumber => {
                    return <li key={pageNumber} className="page-item">
                        <button onClick={() => paginate(pageNumber)} className="page-link pageItem">{pageNumber}</button>   
                    </li>
                })}
            </ul>
        </nav>
    )
}

export default Pagination;