import './listpage.scss';
import Filter from '../../components/Filter/filter.jsx'
import Card from '../../components/card/card.jsx'
import Map from '../../components/map/Map.jsx'
import { useLoaderData } from 'react-router-dom';

function ListPage(){
    const posts = useLoaderData()
        return (
        <div className='listpage'>
            <div className="listContainer">
                <div className='wrapper'>
                    <Filter/>
                    {posts.map(item=>
                        <Card key={item.id} item={item}/>
                    )}
                </div>
            </div>
            <div className='mapContainer'> 
            <Map items={posts}/>
            </div>
        </div>
    )
}

export default ListPage