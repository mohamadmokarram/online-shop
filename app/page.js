import Footer from "@/components/footer";
import HomePosts from "@/components/homePost/homePosts";
import Nav from "@/components/nav/nav";
import Slider from "@/components/slider";


export default function Home() {
  return (
    <>
      <Nav otherClasses="absolute top-0 z-10" />
      <Slider />
      <HomePosts />
      <Footer />
    </>
  );
}
