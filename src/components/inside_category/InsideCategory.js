import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {category_inside} from "../../redux/actions";
import Category from "../category/Category";
import InfiniteScroll from "react-infinite-scroll-component";
let counter = 20;

const InsideCategory = ({name}) => {
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(category_inside(name, counter))
    }, [])
    const categoryState = useSelector(state => state.categoryReducer.categories);
    const resSearch = categoryState.find(item =>  item.name_encoded === name);
    const insideState = useSelector(state => state.categoryReducer.insideCategory);
    const mapInside = insideState.map((item, index) => <p key={index} className="px-2"><img src={item.images.fixed_height.url} className='img-thumbnail'/> </p>);
    const fetchMoreInside = () => {
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
        <div className="d-flex">
            <Category mapCategory={resSearch.subcategories} />
        <div className="pt">
            <h1  className="text-white text-center">{name}</h1>
                <div className="pt">
                    <div className="d-flex justify-content-between">
                        <div>
                        </div>
                        <InfiniteScroll
                            dataLength={insideState.length}
                            next={fetchMoreInside}
                            hasMore={true}
                            loader={<h4 className="text-white text-center">Загрузка</h4>}
                        >
                            <div className="trending d-flex flex-wrap">
                                {mapInside}
                            </div>
                        </InfiniteScroll>
                    </div>
                </div>

        </div>
        </div>
    );
};

export default InsideCategory;