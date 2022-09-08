import { useState } from 'react';
import video from "../data/video.js";
import Comments from "./Comments.js";
import Buttons from './Buttons.js';

function App() {
  const [showComments, setShowComments] = useState(true)

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <p>{video.views} Views | Uploaded {video.createdAt}</p>
      <Buttons video={video} showComments={showComments} setShowComments={setShowComments}/>
      <hr />
      {showComments ? <Comments videoComments={video.comments}/> : null}
      {/* <Comments showComments={showComments} videoComments={video.comments}/> */}
    </div>
  );
}

export default App;
