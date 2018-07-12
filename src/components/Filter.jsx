import React from 'react';
import './css/Filter.css';

const FilterBtn = (props) => {
    
    const { keyword, isActive, onClick } = props;
    
    return(
        isActive === keyword ?
            <button className="filter-btn-active" onClick={ onClick }>{ keyword }</button>
            :
            <button className="filter-btn" onClick={ onClick }>{ keyword }</button>
    );
}

const Filter = (props) => {
    
    const { isActive, onClick } = props;
    
    return(
        <div className='filter-container'>
            <div className='filter'>
                <FilterBtn isActive={ isActive } onClick={ onClick } keyword="Website"></FilterBtn>
                <FilterBtn isActive={ isActive } onClick={ onClick } keyword="Full-Stack"></FilterBtn>
                <FilterBtn isActive={ isActive } onClick={ onClick } keyword="React.js"></FilterBtn>
                <FilterBtn isActive={ isActive } onClick={ onClick } keyword="jQuery"></FilterBtn>
                <FilterBtn isActive={ isActive } onClick={ onClick } keyword="d3.js"></FilterBtn>
            </div>
            { isActive ? <p>Active Filter: <strong>{ isActive }</strong></p> : <p>Active Filter: none</p> }
        </div>
    );
}

export default Filter;