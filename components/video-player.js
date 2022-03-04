import "cloudinary-video-player/dist/cld-video-player.min.js";
import "cloudinary-video-player/dist/cld-video-player.min.css";
import { Cloudinary } from "cloudinary-core";
import { useEffect } from "react";

const VideoPlayer = () => {
  const cld = new Cloudinary({ cloud_name: "amarachi-2812" });
  useEffect(() => {
    const videoPlayer = cld.videoPlayer("video-player", {
      muted: true,
      controls: true
    });
    videoPlayer.source("videoplayback_1_pr2hzi");
  });

  cld.url('videoplayback_1_pr2hzi.m3u8', {streamingProfile: "full_hd"}, {resource_type: 'video'});

  return (
    <div>
      <video id="video-player" className="video-player"/>
    </div>
  );
};
export default VideoPlayer;
