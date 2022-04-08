import React from 'react';
import style from './App.css';
import {Title} from './features/Title/Title.js';
import {List} from "./features/List/List";
import {ItemDetails} from "./features/ItemDetails/ItemDetails";
import {getPokemon, LoadMoreButton} from "./features/LoadMoreButton/LoadMoreButton";

function App() {
    getPokemon(0)
    return (
    <div className={style.outerContainer}>
        <Title/>
        <List/>
        <ItemDetails/>
        <LoadMoreButton/>
    </div>
    );
}

export default App;
