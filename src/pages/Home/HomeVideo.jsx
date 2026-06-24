import video from "../../assets/video/homesectionvid.mp4";

const HomeVideo = () => {
  return (
    <section className="bg-black py-16">
      <div className="overflow-hidden  border border-[#1F1F1F] shadow-2xl">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default HomeVideo;
