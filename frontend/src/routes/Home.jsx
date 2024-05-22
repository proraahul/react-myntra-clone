import HomeItems from "../components/HomeItems";
import {useSelector} from 'react-redux';

const Home = () => {
    const items = useSelector(store => store.items);
    // console.log('Got Items: ', items);
    return (
        <>
            <main>
                <div className="items-container">
                    {
                        items.map(item => <HomeItems item={item} key={item.id}/>)
                    }
                  
                </div>


            </main>
        </>
    )
}

export default Home