import React, { useState } from "react";
import { OuterContainer, InnerContainer } from "../css.js";
import Styled from "styled-components";
import CoverImage from "../assets/video-cover.jpg";
import IconPlay from "../assets/icon-play-pink.png";

const Video = () => {
  const [coverVisible, setCoverVisible] = useState(true);
  const [videoPlaceholder, setVideoPlaceholder] = useState(null);

  const onVideoClick = () => {
    setVideoPlaceholder(
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/o0WUKmGlSRE?autoplay=1&modestbranding=1"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        modestbranding="1"
      ></iframe>
    );
    setCoverVisible(false);
  };

  return (
    <VideoOuterContainer aspectRatio={(315 / 560) * 100}>
      <VideoInnerContainer>
        <VideoCoverImage
          src={CoverImage}
          visible={coverVisible}
          onClick={() => onVideoClick()}
        />
        <PlayButton
          src={IconPlay}
          visible={coverVisible}
          onClick={() => onVideoClick()}
        />
        {videoPlaceholder}
      </VideoInnerContainer>
    </VideoOuterContainer>
  );
};

const VideoOuterContainer = Styled(OuterContainer)`
  height: 0;
  padding-bottom: ${(props) => props.aspectRatio}%;
  position: relative;
  width: 100%;
`;

const VideoInnerContainer = Styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
`;

const VideoCoverImage = Styled.img`
  cursor: pointer;
  display: ${(props) => (props.visible ? "block" : "none")};
  height: 100%;
  width: 100%;
`;

const PlayButton = Styled.img`
  cursor: pointer;
  display: ${(props) => (props.visible ? "block" : "none")};
  height: 200px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%,-50%,0);
  width: 200px;
  
`;

export default Video;
