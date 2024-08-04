import { useSearchParams } from 'react-router-dom' 
import './filter.scss';
import { useState } from 'react';

function Filter(){

    const [searchParams, setSearchParams] = useSearchParams()
    const [query, setQuery] = useState({
        type: searchParams.get("type") || "",
        city: searchParams.get("city") || "",
        property: searchParams.get("property") || "",
        bedroom: searchParams.get("bedroom") || 1
    })
    
    const handleChange = e =>{
        setQuery({
            ...query,
            [e.target.name]:e.target.value
        })
    }

    const handleFilter = () =>{
        setSearchParams(query)
    }

    return(
        <div className='filter'>
            <h1>Search Results For <b>{searchParams.get("city")}</b></h1>
            <div className="top">
                <div className="item">
                    <label htmlFor='city'>Location</label>
                    <input type='text' name='city' id='city' placeholder='City Location' onChange={handleChange} defaultValue={query.city}/>
                </div>
        </div>
            <div className="bottom">
            <div className="item">
                    <label htmlFor='type'>Type</label>
                    <select name='type' id='type' onChange={handleChange} defaultValue={query.type}>
                        <option value="">any</option>
                        <option value="buy">Buy</option>
                        <option value="rent">Rent</option>
                    </select>
            </div>
            <div className="item">
                    <label htmlFor='property'>Property</label>
                    <select name='property' id='property' onChange={handleChange} defaultValue={query.property}>
                        <option value="">any</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="land">Land</option>
                        <option value="condo">Condo</option>
                    </select>
            </div>
            {/* <div className="item">
                    <label htmlFor='minprice'>Min Price</label>
                    <input type='number' name='minprice' id='minprice' placeholder='any'/>
            </div>
            <div className="item">
                    <label htmlFor='maxprice'>Max Price</label>
                    <input type='number' name='maxprice' id='maxprice' placeholder='any'/>
            </div> */}
            <div className="item">
                    <label htmlFor='bhk'>BHK</label>
                    <input type='text' name='bedroom' id='bhk' placeholder='any' onChange={handleChange} defaultValue={query.bedroom}/>
            </div>
            <button onClick={handleFilter}>
                <img src="/search.png" alt=""/>
            </button>
        </div>
        </div>
    )
}

export default Filter; 