import IconButton from "./components/IconButton";
import ProfileContainer from "./components/ProfileContainer";
import TextContainer from "./components/TextContainer";

export default function Home() {
  return (
    <>
      <div className="hero md:bg-base-200 lg:bg-base-200 h-svh w-svw">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="/linkedInIcon2.png" 
            alt="LinkedIn Profile Photo"
            className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Adrian Tarantino</h1>
            <p className="py-6">First Year Electrical Engineering Student at The University of Waterloo</p>
            <div className="flex w-auto items-center gap-5">
              <IconButton imagePath="/githubIcon.png" url="https://github.com/AdrianTarantino" />
              <IconButton imagePath="/linkedInIcon.png" url="https://www.linkedin.com/in/adriantarantino/" />
              <IconButton imagePath="/mailIcon.png" url="mailto:adriantarantino2006@gmail.com" />
              <IconButton imagePath="/youtubeIcon.png" url="https://www.youtube.com/@AdrianTheHacker" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex m-auto w-96 h-svh flex-col items-center justify-center pr-3 pl-3">
        <TextContainer />
      </div>
    </>
  );
}
