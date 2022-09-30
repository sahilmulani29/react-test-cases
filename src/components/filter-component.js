import { Fragment, useState } from "react"

const FilterComponent = ({getQuery}) => {

    const onSearch = (evt) => {
        getQuery(evt.target.value)
    }

    return (
        <div className="filter-container">
            <div className="search-row">
                <input className="search-box" placeholder="Search.." type="text" onChange={(evt)=>onSearch(evt)}/>
            </div>
        </div>
    )
}

export default FilterComponent;