import Image from "next/image";
import Link from "next/link";
import Overlap from "./overlap";

export default function Post({img, title, linkHref}) {
  return (
    <div className="w-full md:w-1/2 p-3">
      <Link href={linkHref} className="relative block">
        <Image src={img} alt={title} />
        <Overlap title={title} />
      </Link>
    </div>
  );
}
