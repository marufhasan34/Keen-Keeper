import React, { useContext } from 'react';
import { TimelineFriendContext } from '../../context/TimelineFriendContext';

const ListedCall = () => {
    const { storedCall } = useContext(TimelineFriendContext);
    return (
        <div>
            listed call
        </div>
    );
};

export default ListedCall;