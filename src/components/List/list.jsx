import './list.scss'
import Card from '../card/card.jsx'

function List({posts}){
    return(
        <div className='list'>
            {posts ? posts.map(item=>
                <Card key={item._id} item={item}/>
            ):null}
        </div>
    )
}

export default List