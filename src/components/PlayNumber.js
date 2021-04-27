import React, { useState } from 'react';
import { colors } from '../util/Utils';
export const PlayNumber = props => {
    return (
        <button className="number"
            style={{ backgroundColor: colors[props.status] }}
            onClick={() => props.onClick(props.number, props.status)}>{props.number}</button>
    )
}