import Post from "./post";
import sohanImg from "@/public/homePosts/sohan-homepost.jpg";
import drageeImg from "@/public/homePosts/dragee-homepost.jpg";
import chocolateImg from "@/public/homePosts/chocoDate-homepost.jpg";
import coffeeImg from "@/public/homePosts/roast-coffee-homepost.jpg";
import gazImg from "@/public/homePosts/gaz-homepost.jpg";

export default function HomePosts() {
  return (
    <main>
      <section className="container mt-10">
        <Post title="سوهان" img={sohanImg} linkHref="/products/sohan" />
        <Post title="دراژه" img={drageeImg} linkHref="/products/dragee" />
        <Post title="شکلات" img={chocolateImg} linkHref="/products/chocolate" />
        <Post title="قهوه" img={coffeeImg} linkHref="/products/coffee" />
        <Post title="گز" img={gazImg} linkHref="/products/gaz" />
      </section>
    </main>
  );
}
