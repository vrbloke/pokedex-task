import React from 'react';
import './ListItem.module.css';
import {store} from "../../../app/store";
import {itemDetailsSlice} from '../../ItemDetails/ItemDetailsSlice.js'

export function ListItem(props) {

    const onClick = (e) => {
        store.dispatch(itemDetailsSlice.actions.inspecting(true))
        store.dispatch(itemDetailsSlice.actions.setNo(props.data.order));
    }

    const types = props.data.types;
    const type1 = props.data.types[0].type.name;
    const type2 = props.data.types.length === 2 ? props.data.types[1].type.name : undefined;

    return (
        <tr onClick={onClick}>
            <td>{props.data.game_indices[18].game_index}</td>
            <td><img src={props.data.sprites.front_default} alt="Sprite unavailable"/></td>
            <td>{capitalize(props.data.species.name)}</td>
            <td>{capitalize(type1)}{type2 ? `/${capitalize(type2)}` : ""}</td>
        </tr>
    );
}

export const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}