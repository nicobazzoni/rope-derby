import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
class Audio extends React.Component {
  render() {
    return (
      // https://www.npmjs.com/package/react-h5-audio-player
      // every controls can be styable and customizable through events
      <AudioPlayer
        src="https://storage.googleapis.com/nicoroc_audio/Rope%20-1220ZMASTER%20(1).wav"
        autoPlay={true}
        controls={false}
        showJumpControls={false}
      />
    );
  }
} 

export default Audio;