import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { trending_geta} from "../../redux/actions";
import InfiniteScroll from "react-infinite-scroll-component";

let counter = 20;

const Trending = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(trending_geta(counter));
    }, [])

    const trendingState = useSelector(state => state.trendingReducer.trendingData);
    const mapTrending = trendingState.map((item, index) => <p key={index} className="px-2"><img src={item.images.fixed_height.url} className='img-thumbnail'/> </p>);
    const fetchMoreTrending = () => {
        if (counter > 199){
            alert("Больше гифки нетууууу")
        } else {
            setTimeout(() => {
                counter += 5
                dispatch(trending_geta(counter));
            }, 1500)
        }
    }

    const resetBtn = () => {
        window.location.reload();
    }

    return (
        <div className="pt">
            <h2 className="text-white text-center">Trending</h2>
            <div className="d-flex justify-content-between">

                { counter > 190 ?<div>
                        <h1 className="text-white">Больше нету картинки</h1>
                        <button onClick={resetBtn}> Обновить </button>
                </div> :
                    <InfiniteScroll
                        dataLength={mapTrending.length}
                        next={fetchMoreTrending}
                        hasMore={true}
                        loader={<h4 className="text-white text-center">Загрузка</h4>}
                    >
                        <div className="trending d-flex flex-wrap">
                            {mapTrending}
                        </div>
                    </InfiniteScroll>
                }
            </div>
        </div>
    );
};

export default Trending;