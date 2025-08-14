import Image from "next/image";

export default function Header({headerImg, title, classes=""}) {

    return <div className={`w-full h-[30vh] relative ${classes}`}>
        <Image src={headerImg} alt="saedinia" className="w-full h-full object-cover"/>
        <section className="w-full flex flex-row justify-center items-center absolute top-[50%] -translate-y-[50%]">
        <h1 className="text-slate-200 text-xl font-thin">{title}</h1>
        </section>
    </div>
}