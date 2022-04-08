import React from 'react';
import {useSelector} from "react-redux";
import {ListItem} from "./ListItem/ListItem";
import style from './List.module.css';

export function List() {
    // List will procure items from redux store
    let listItems = useSelector(state => state.list.listItems);
    const filters = useSelector(state => state.filters);

    // Extend if there's time left (unlikely)
    const filterfunc = filters => {
        return item => true;
    }

    return (
      <div className={style.list}>
          <table>
              <thead>
                 <tr><th>No.</th><th>Sprite</th><th>Name</th><th>Type(s)</th></tr>
              </thead>
              <tbody>
                  {listItems.map(item =>
                      <ListItem data={item} key={item.order}/>
                  )}
              </tbody>
          </table>
      </div>
    );
}