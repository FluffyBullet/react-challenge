import css from './css/Sidebar.module.css';
import React from "react";

function Display() {
    return (
        <div>
        <a className={css.sidebar}>My Photos</a>
        <a className={css.sidebar}>My Illustrations</a>
        <a className={css.sidebar}>My Paintings</a>
        </div>
    )
}

export default Display;