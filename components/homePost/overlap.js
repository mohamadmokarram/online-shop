export default function Overlap({title}) {
  return (
    <div className="absolute top-0 left-0 !w-full !h-full bg-slate-800/55 flex justify-center items-center text-textColor text-2xl opacity-0 hover:opacity-100 duration-300 ">
      {title}
    </div>
  );
}
