import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {category_inside} from "../../redux/actions";
import InfiniteScroll from "react-infinite-scroll-component";
let counter = 20;
const EndCategory = ({name}) => {
    const dispatch = useDispatch();
    useEffect(() => {
       dispatch(category_inside(name, counter))
    }, [])

    const endState = useSelector(state => state.categoryReducer.insideCategory);
    const mapEnd = endState.map((item, index) => <p key={index} className="px-2"><img src={item.images.fixed_height.url} className='img-thumbnail'/> </p>);
    const fetchMoreEnd = () => {
        if (counter > 199){
            alert("Больше гифки нетууууу")
        } else {
            setTimeout(() => {
                counter += 5
                dispatch(category_inside(name,counter));
            }, 1500)
        }
    }
    return (
        <div>
            <h1 className="pt text-white text-center">{name}</h1>
            <div className="d-flex justify-content-between">
                <div>
                    <InfiniteScroll
                        dataLength={mapEnd.length}
                        next={fetchMoreEnd}
                        hasMore={true}
                        loader={<h4 className="text-white text-center">Загрузка</h4>}
                    >
                    <div className="trending d-flex flex-wrap">
                        {mapEnd}
                    </div>
                    </InfiniteScroll>
                </div>
            </div>
        </div>
    );
};

export default EndCategory;