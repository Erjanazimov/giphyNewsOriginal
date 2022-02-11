import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {random_geta} from "../../redux/actions";


const Random = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(random_geta())
    }, [])
    const randomState = useSelector(state => state.randomReducer.randomData)
    return (
        <div className="pt ">
            <h2 className="text-white text-center">Random </h2>
        <div className="d-flex">
            <p className="randomGiphy">
                {randomState.url ?
                    <img src={randomState.url} className='img-thumbnail'/> : <h1 className="text-white text-center">Загрузка</h1>
                }
            </p>
        </div>
        </div>
    );
};

export default Random;