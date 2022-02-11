import React from 'react';
import {Route} from "react-router-dom";
import { Routes } from "react-router-dom";
import Trending from "../components/trending/Trending";
import Random from "../components/random/Random";
import {useSelector} from "react-redux";
import InsideCategory from "../components/inside_category/InsideCategory";
import Category from "../components/category/Category";
import EndCategory from "../components/endCategory/EndCategory";

const Router = () => {
    const categoryState = useSelector(state => state.categoryReducer.categories);
    const categoryInside =  categoryState.map((item, index) => <Route exact key={index} path={`/${item.name_encoded}`} element={<InsideCategory name={item.name_encoded}/>} />)
    const categoryEnd = categoryState.map(item => {
            return item.subcategories.map(item => {
                return <Route path={`${item.name_encoded}`} element={<EndCategory name={item.name_encoded} />} />
            })
        })
    return (
        <div className="d-flex">
            <Category mapCategory={categoryState}/>
                <Routes>
                    <Route path="/" element={<Trending />} />
                    <Route path="/random" element={<Random />} />
                    {categoryInside}
                    {categoryEnd}
                </Routes>
        </div>
    );
};

export default Router;