import Nav from "@/components/nav/nav";
import Header from "@/components/header";
import Products from "@/components/product/products";
import Footer from "@/components/footer";
import productHeaderImg from "@/assets/headerimg.jpg";

export default function ProductsPage() {
  // getting data here and passing to Products component
  return (
    <>
      <Nav otherClasses="fixed top-0 z-10 bg-backgroundDefault/100" />
      <Header classes="mt-20" title="محصولات" headerImg={productHeaderImg} />
      <Products />
      <Footer classes="mt-20" />
    </>
  );
}
