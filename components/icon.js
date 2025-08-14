export default function Icon({ title, fontsize, classes = "", ...props }) {
  return (
    <span
      {...props}
      className={`material-symbols-outlined ${fontsize} cursor-pointer duration-200 select-none ${classes}`}>
      {title}
    </span>
  );
}
