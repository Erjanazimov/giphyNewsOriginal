import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {category_geta, category_inside, nullCategory} from "../../redux/actions";
import {Link} from "react-router-dom";


const Category = ({mapCategory}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(category_geta())
    }, []);
    function btnCategory(name){
        dispatch(nullCategory())
        dispatch(category_inside(name))
    }
    const result = mapCategory.map((item, index) => <li key={index} className="pb-2"><Link onClick={() => btnCategory(item.name_encoded)} to={`/${item.name_encoded}`}>{item.name_encoded}</Link></li>);
    return (
        <div className="ptx" >
            <ul className=" p-4 pr bg-dark">
                <h3 className="text-white bgtext pb-1">Categories</h3>
                {result.length ? result : <h3 className="text-white text-center">Загрузка...</h3>}
            </ul>
        </div>
    );
};

export default Category;