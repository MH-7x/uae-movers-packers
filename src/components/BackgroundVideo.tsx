const BackgroundVideo: React.FC = () => (
  <video
    src="/backgroundVideo.webm"
    autoPlay
    muted
    loop
    playsInline
    className="absolute top-0 left-0 w-full h-screen object-cover -z-10"
    aria-hidden="true"
  />
);

export default BackgroundVideo;
