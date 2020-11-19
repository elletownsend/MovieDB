import React from 'react';

// Functional Component

const Pagination = (props) => {
    return (
        <div className="pagination_container">
            <ul className="pagination">
                {props.currentPage > 1 ? <li className={'pagination_link'} onClick={() => props.nextPage(props.currentPage - 1)}><a href="#"><i className="fas fa-arrow-left"></i></a></li> : ''}
                <li className={'pagination_link'}>{props.currentPage}</li>
                {props.currentPage < props.pages + 1 ? <li className={'pagination_link'} onClick={() => props.nextPage(props.currentPage + 1)}><a href="#"><i className="fas fa-arrow-right"></i></a></li> : ''}
            </ul>
        </div>
    )
}

export default Pagination;