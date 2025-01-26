import ProfileContainer from "./components/ProfileContainer";
import TextContainer from "./components/TextContainer";

export default function Home() {
  return (
    <>
      <div className="flex m-auto w-fit h-svh flex-col items-center justify-center">
        <ProfileContainer />
      </div>

      <div className="flex m-auto w-96 h-svh flex-col items-center justify-center pr-3 pl-3">
        <TextContainer />
      </div>
    </>
  );
}
