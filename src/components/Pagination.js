import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = (props) => {
    return (
        <div className="pagination_container">
            <ul className="pagination">
                {
                    props.currentPage > 1 ?
                        <li className={'pagination_link'} onClick={() => props.nextPage(props.currentPage - 1)}><Link to="#"><i className="fas fa-arrow-left"></i></Link></li>
                        :
                        ''
                }
                <li className={'pagination_link'}>{props.currentPage}</li>
                {
                    props.currentPage < props.pages + 1 ?
                        <li className={'pagination_link'} onClick={() => props.nextPage(props.currentPage + 1)}><Link href="#"><i className="fas fa-arrow-right"></i></Link></li>
                        :
                        ''
                }
            </ul>
        </div>
    )
}

export default Pagination;