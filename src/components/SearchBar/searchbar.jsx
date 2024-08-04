import { useState } from 'react';
import './searchbar.scss'
import { Link } from "react-router-dom"

const types = ["buy","rent"]

function SearchBar(){
    const [query,setQuery] = useState({
        type:"buy",
        city:"",
        minprice:0,
        maxprice:0
    });

    const switchType = (val)=>{
        setQuery((prev)=>({...prev,type:val}))
    };

    const handleChange = e =>{
        setQuery((prev)=>({...prev, [e.target.name]: e.target.value}))
    }

    return(
        <div className='searchbar'>
            <div className='type'>
                {types.map((type)=>(
                    <button key={type} onClick={()=>switchType(type)} className= {query.type === type ? "active":"" }>{type}</button>
                ))}
            </div>
            <form>
                <input type="text" name="city" placeholder='City' onChange={handleChange}/>
                <input type="number" name='bedroom' placeholder='BHK' onChange={handleChange}/>
                {/* <input type="number" name="minprice" min={0} max={10000000} placeholder='Min Price'/>
                <input type="number" name="maxprice" min={0} max={10000000} placeholder='Max Price'/> */}

                <Link to={`/list?type=${query.type}&city=${query.city}&bedroom=${query.bedroom}`}>
                <button>
                    <img src="search.png" alt=""/>
                </button>
                </Link>
            </form>
        </div>
    )
}

export default SearchBar