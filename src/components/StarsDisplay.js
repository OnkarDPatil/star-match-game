import React from 'react'
import { utils } from '../util/Utils'
import '../App.css';
export const StarsDisplay = (props) => {
    return (
        <>
            {utils.range(1, props.count).map(starId =>
                <div key={starId} className="star" />
            )}
        </>
    );
}
