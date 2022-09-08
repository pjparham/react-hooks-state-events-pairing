import React from 'react';

function Comments({ videoComments }){
  
    const bothComments = videoComments.map((videoComment) => {
        return (
            <div key={videoComment.id}>
                <h3>{videoComment.user}</h3>
                <p>{videoComment.comment}</p>
            </div>
        )
    })

    return (
        <>
            <h2>{videoComments.length} comments</h2>
            {bothComments}
        </>
        
    )
}

export default Comments