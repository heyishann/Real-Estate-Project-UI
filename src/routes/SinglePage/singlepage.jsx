import './singlepage.scss';
import Slider from '../../components/Slider/slider';
// import { singlePostData } from '../../lib/dummydata';
import { userData } from '../../lib/dummydata';
import Map from '../../components/map/Map.jsx'
import { useLoaderData } from 'react-router-dom';
import { ZoomControl } from 'react-leaflet';

function SinglePage(){
    const post = useLoaderData()
    console.log(post,'<=====');
    return(
        <div className='singlepage'>
            <div className='details'>
                <div className='wrapper'>
                <Slider images={post.images}/>
                <div className="info">
                    <div className="top">
                        <div className="post">
                            <h1>{post.title}</h1>
                            <div className="address">
                                <img src='/pin.png'/>
                                <span>{post.address}</span>
                            </div>
                            <div className="price">₹{post.price}</div>
                        </div>
                        <div className="user">
                            <img src={post.user.avatar || "nouser.png"} alt="" />
                            <span>{post.user.username}</span>
                        </div>
                    </div>
                    <div className="bottom">
                        {post.desc}
                    </div>
                </div>
                </div>
                </div>
                    <div className='features'>
                        <div className='wrapper'>
                            <p className='title'>General</p>
                            <div className="listVertical">
                                <div className="feature">
                                    <img src='/utility.png'/>
                                    <div className="featureText">
                                        <span>Utility</span>
                                        {
                                            post.utility == 'owner' ?
                                            <p>Owner Is responsible</p> :
                                            <p>Tenant Is responsible</p> 
                                        }
                                    </div>
                                </div>
                                <div className="feature">
                                    <img src='/pet.png'/>
                                    <div className="featureText">
                                        <span>Pet Policy</span>
                                        <p>{post.pet}</p>
                                    </div>
                                </div>
                                <div className="feature">
                                    <img src='/fee.png'/>
                                    <div className="featureText">
                                        <span>Income Policy</span>
                                        <p>{post.income}</p>
                                    </div>
                                </div>
                            </div>
                            <p className='title'>Size</p>
                            <div className="sizes">
                            <div className="size">
                                <img src='/size.png'/>
                                <span>{post.size} sq.ft.</span>
                            </div>
                            <div className="size">
                                <img src='/bed.png'/>
                                <span>{post.bedroom} BHK</span>
                            </div>
                            <div className="size">
                                <img src='/bath.png'/>
                                <span>{post.bathroom} Bathroom</span>
                            </div>
                            </div>
                            <p className='title'>Nearby Places</p>
                            <div className="listHorizontal">
                            <div className="feature">
                                    <img src='/school.png'/>
                                    <div className="featureText">
                                        <span>School</span>
                                        <p>{post.school} km away</p>
                                    </div>
                            </div>
                            <div className="feature">
                                    <img src='/bus.png'/>
                                    <div className="featureText">
                                        <span>Bus</span>
                                        <p>{post.bus} km away</p>
                                    </div>
                            </div>
                            <div className="feature">
                                    <img src='/restaurant.png'/>
                                    <div className="featureText">
                                        <span>Restaurant</span>
                                        <p>{post.restaurant} km away</p>
                                    </div>
                            </div>
                            </div>
                            <p className='title'>Location</p>
                            <div className="mapContainer">
                                <Map items={[post] }/>
                            </div>
                            <div className="buttons">
                                <button>
                                    <img src="/chat.png" alt=""/>
                                    Send a Message
                                </button>
                                <button>
                                    <img src="/save.png" alt=""/>
                                    Save the place
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
        
    )
}

export default SinglePage