import React from 'react';
import {listSlice} from '../List/ListSlice';
import {store} from '../../app/store';
import style from './LoadMoreButton.module.css';
import jQuery from "jquery";
import {useSelector} from "react-redux";

export function LoadMoreButton(props) {
    const no_loaded = useSelector(state => state.list.no_loaded);

    const onClick = (e) => {
        console.log('Store state')
        console.log(store.getState());
        getPokemon(no_loaded);
        store.dispatch(listSlice.actions.updateLoaded());
    }

    return (
        <div className={style.outer}>
            <button className={style.bt} onClick={onClick}>
                Load 20 more Pokémon!
            </button>
        </div>
    )
}

export function getPokemon(no_loaded) {
    console.log(`No loaded: ${no_loaded}`)
    jQuery.getJSON(
        `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${no_loaded}`,
        (data,stats,jqXHR) => {
            store.dispatch(listSlice.actions.updateTotal(data.count));
            const urls = data.results.map(pokemon => pokemon.url);
            urls.forEach(url => {
                jQuery.getJSON(
                    url,
                    (data) => {
                        store.dispatch(listSlice.actions.updatePokemon(data));
                    }
                )
            });
        }
    );
}