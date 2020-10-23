import React from 'react';

// Functional Component

const Pagination = (props) => {
    const pageLinks = [];

    for (let i = 1; i <= props.pages + 1; i++) {
        let active = props.currentPage === i ? 'active' : ''; // set active value if currentPage == i

        pageLinks.push(<li className={`pagination_link ${active}`} key={i} onClick={() => props.nextPage(i)}><a href="#">{i}</a></li>);
    }


    return (
        <div className="pagination_container">
            <ul className="pagination">
                {props.currentPage > 1 ? <li className={'pagination_link'} onClick={() => props.nextPage(props.currentPage - 1)}><a href="#">Prev</a></li> : ''}
                {pageLinks}
                {props.currentPage < props.pages + 1 ? <li className={'pagination_link'} onClick={() => props.nextPage(props.currentPage + 1)}><a href="#">Next</a></li> : ''}
            </ul>
        </div>
    )
}

export default Pagination;