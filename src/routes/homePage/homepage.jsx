import { useContext } from "react"
import SearchBar from "../../components/SearchBar/searchbar"
import "./homepage.scss"
import { AuthContext } from "../../context/AuthContext.jsx"

function HomePage(){
    const {currentUser} = useContext(AuthContext)
    console.log(currentUser)
    return(
        <div className='homePage'>
        <div className='textContainer'>
            <div className="wrapper">
                <h1 className="title">Find Real Estate and Get Your Dream Place</h1>
                <p>
                At DreamHomes, we believe in making dreams come true. Our mission is to provide you with the tools, resources, and expertise needed to find the perfect property. Whether you're a first-time homebuyer, looking to upgrade, or investing in real estate, our dedicated team is here to help you achieve your goals.
                </p>
                <SearchBar/>
                <div className="boxes">
                    <div className="box">
                        <h1>16+</h1>
                        <h2>Years Of Experience</h2>
                    </div>
                    <div className="box">
                        <h1>1200+</h1>
                        <h2>Property ready</h2>
                    </div>
                    <div className="box">
                        <h1>20+</h1>
                        <h2>Cities</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className='imgContainer'>
        <img src="/bg.png" alt=""/>    
        </div>   
        </div>
    )
}

export default HomePage