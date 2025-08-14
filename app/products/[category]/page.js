import Footer from "@/components/footer";
import Header from "@/components/header";
import Nav from "@/components/nav/nav";
import Products from "@/components/product/products";
import productHeaderImg from "@/assets/headerimg.jpg";

export default async function CategoryPage({ params }) {
  const { category } = await params;

  return (
    <>
      <Nav otherClasses="fixed top-0 z-10" />
      <Header title="محصولات" headerImg={productHeaderImg} classes="mt-20" />
      <Products filterProduct={category} />
      <Footer className="mt-20" />
    </>
  );
}
