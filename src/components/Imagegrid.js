import React from 'react';
import useFirestore from '../hooks/useFirestore';

const ImageGrid = () => {
    const {docs} = useFirestore('images');
    console.log(docs);

    return(
        <div>
            images
        </div>
    )
}

export default ImageGrid;