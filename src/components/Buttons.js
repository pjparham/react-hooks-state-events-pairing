import React, { useState } from 'react';

function Buttons({ video, showComments, setShowComments }) {
const [likeCount, setLikeCount] = useState(video.upvotes);
const [dislikeCount, setDislikeCount] = useState(video.downvotes);

function onLikeCount(){setLikeCount(likeCount + 1)}
function onDislikeCount(){setDislikeCount(dislikeCount + 1)}
function onShowComments(){setShowComments(!showComments)}


    return(
        <>
            <button onClick={onLikeCount}>{likeCount} 👍</button>
            <button onClick={onDislikeCount}>{dislikeCount} 👎</button>
            <br/><br/>
            <button onClick={onShowComments}>{showComments ? 'Hide' : 'Show'} comments</button>
            <hr />
        </>

    )
}

export default Buttons