import Head from 'next/head';
import "cloudinary-video-player/dist/cld-video-player.min.js";
import "cloudinary-video-player/dist/cld-video-player.min.css";
import { Cloudinary } from "cloudinary-core";
import { useEffect } from "react";

const Home = () => {
  const cld = new Cloudinary({ cloud_name: "amarachi-2812", secure: true});

  const up_options = {
    resource_type: "video", type: "upload",
    eager: [
      { streaming_profile: "hd", format: "m3u8" }, 
    ] 
  };
  cld.v2.uploader.explicit("videoplayback_1_pr2hzi", up_options, function(result) {console.log(result); } );

  useEffect(() => {
    const videoPlayer = cld.videoPlayer("video-player", {
      controls: true
    });
    videoPlayer.source("videoplayback_1_pr2hzi");
  },[]);
  
  return (
    <div>
      <video id="video-player" />
    </div>
  );
};
export default Home;