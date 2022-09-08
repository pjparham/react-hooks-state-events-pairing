import { useState } from 'react';
import video from "../data/video.js";
import Comments from "./Comments.js";
import Buttons from './Buttons.js';
import Video from './Video.js';

function App() {
  const [showComments, setShowComments] = useState(true)

  return (
    <div className="App">
      <Video video={video} />
      <Buttons video={video} showComments={showComments} setShowComments={setShowComments}/>
      {showComments ? <Comments videoComments={video.comments}/> : null}
    </div>
  );
}

export default App;
