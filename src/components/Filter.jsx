import React from 'react';
import './css/Filter.css';

const FilterBtn = ({ keyword, isActive, onClick }) => {
    return(
        isActive === keyword ?
            <button className="filter-btn-active" onClick={ onClick }>{ keyword }</button>
            :
            <button className="filter-btn" onClick={ onClick }>{ keyword }</button>
    );
}

const Filter = ({ isActive, onClick, count }) => {
    return(
        <div className='filter-container'>
            <div className='filter'>
                <FilterBtn isActive={ isActive } onClick={ onClick } keyword="front end"></FilterBtn>
                <FilterBtn isActive={ isActive } onClick={ onClick } keyword="full stack"></FilterBtn>
                <FilterBtn isActive={ isActive } onClick={ onClick } keyword="misc"></FilterBtn>
                <FilterBtn isActive={ isActive } onClick={ onClick } keyword="react.js"></FilterBtn>
                <FilterBtn isActive={ isActive } onClick={ onClick } keyword="node.js"></FilterBtn>
            </div>
            { isActive ? <p>Active Filter: <strong>{ isActive }</strong></p> : <p>Active Filter: none</p> }
            { <div>{ count } projects found</div> }
        </div>
    );
}

export default Filter;