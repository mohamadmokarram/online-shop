import Image from "next/image";
import AddToCard from "./addToCart";
import Link from "next/link";

export default function ProdItem({
  classes,
  product,
  forwardImage,
  backwardImage,
  title,
  group,
  price,
  delay,
}) {
  const delayTime = (delay + 1) / 10 + "s";
  return (
    <article
      className={`p-3 animate-right ${classes}`}
      style={{
        animationDelay: delayTime,
      }}>
      <figure className="relative *:w-full *:block *:duration-300 group">
        <Link
          href={`/products/${product.category}/${product.id}`}
          target="_blank"
          >
          <Image
            src={forwardImage}
            alt={group}
            className="w-full h-[300px] absolute group-hover:opacity-0 duration-300"
            width={300}
            height={300}
          />
          <Image
            src={backwardImage}
            alt={group}
            className="w-full h-[300px] opacity-0 group-hover:opacity-100 duration-300"
            width={300}
            height={300}
          />
        </Link>
        <AddToCard product={product} />
      </figure>
      <p className="text-[11px] py-2 font-extralight text-slate-300 text-center">
        {title}
      </p>
      <p className="text-[12px] text-textColor font-extralight text-center">
        {price}
      </p>
    </article>
  );
}
