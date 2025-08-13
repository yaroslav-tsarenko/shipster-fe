import React from 'react';
import {GridProps} from "@/constructor/grid/types";

const Grid: React.FC<GridProps> = ({
                                       columns = 12,
                                       gap = '16px',
                                       alignItems = 'stretch',
                                       justifyItems = 'stretch',
                                       style,
                                       children,
                                   }) => {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                gap,
                alignItems,
                justifyItems,
                ...style,
            }}
        >
            {children}
        </div>
    );
};

export default Grid;