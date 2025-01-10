const BackgroundVideo: React.FC = () => (
  <video
    src="/backgroundVideo.webm"
    autoPlay
    muted
    loop
    playsInline
    preload="none"
    className="absolute md:top-28 top-16 opacity-75 left-0 w-full md:h-screen h-[90vh] object-cover -z-10"
    aria-hidden="true"
  />
);

export default BackgroundVideo;
