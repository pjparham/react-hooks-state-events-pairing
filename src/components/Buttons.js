import React, { useState } from 'react';

function Buttons({ video }) {
const [likeCount, setLikeCount] = useState(video.upvotes);
const [dislikeCount, setDislikeCount] = useState(video.downvotes);

console.log('from buttons', likeCount, dislikeCount)
    return(
        <button>hi</button>
    )
}

export default Buttons