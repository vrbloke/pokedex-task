import React from 'react';
import {useSelector} from "react-redux";
import style from './ItemDetails.module.css';
import {itemDetailsSlice} from "./ItemDetailsSlice";
import {store} from "../../app/store";
import {capitalize} from "../List/ListItem/ListItem";

export function ItemDetails(props) {
    const inspecting = useSelector(state => state.ItemDetails.inspecting);
    const order = useSelector(state => state.ItemDetails.no);
    const data = useSelector(state => state.list.listItems.filter(item => item.order === order))[0];

    console.log(order);
    console.log(data);

    if(!order || !data) { return false; }

    const types = data.types;
    const type1 = types[0].type.name;
    const type2 = types.length === 2 ? types[1].type.name : undefined;

    const exitClick = (e) => {
        store.dispatch(itemDetailsSlice.actions.inspecting(false));
    }

    if(!inspecting) {
        return false;
    }
    else {
        return (
            <div className={style.outer}>
                <div className={style.popup}>
                    <p><img src={data.sprites.front_default} alt="No sprite available"/></p>
                    <div className={style.textBlock}>
                        <p><b>No.: </b>{data.game_indices[18].game_index}</p>
                        <p><b>Name: </b>{capitalize(data.species.name)}</p>
                        <p><b>Types: </b>{capitalize(type1)}{type2 ? `/${capitalize(type2)}` : ""}</p>
                        <p><b>Height: </b>{data.height}</p>
                        <p><b>Weight: </b>{data.weight}</p>
                    </div>
                    <button onClick={exitClick} className={style.buttonText}>
                        X
                    </button>
                </div>
            </div>
        );
    }
}