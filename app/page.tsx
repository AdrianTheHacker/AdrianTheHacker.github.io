import ProfileContainer from "./components/ProfileContainer";
import TextContainer from "./components/TextContainer";
import NavigationBar from "./components/NavigationBar";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <ProfileContainer />
      <TextContainer />
    </>
  );
}
