import ProductCounter from "@/components/details/productCounter";
import ImageContainer from "@/components/detailsImageContainer";
import Footer from "@/components/footer";
import Nav from "@/components/nav/nav";
import { ToPersianNumber } from "topersiannumber";

export default async function DetailsPage({ params }) {
  const id = await params.id;
  const data = await fetch(
    `https://688f2e0cf21ab1769f886fdb.mockapi.io/persons/${id}`
  );
  const item = await data.json();

  console.log(item);

  // if (!data.ok) {
  //   return (
  //     <h1 className="text-white text-2xl text-center">
  //       محصول مورد نظر یافت نشد
  //     </h1>
  //   );
  // }

  let keepCondition;
  if (item && item.category === "sohan") {
    keepCondition = (
      <p className="text-[11px] text-footerTxt inline-block">
        در جای خشک و خنک و به دور از نور مستقیم خورشید نگهداری شود.
      </p>
    );
  } else if (item && item.category === "chocolate") {
    keepCondition = (
      <p className="text-[11px] text-footerTxt inline-block">
        به دور از نور مستقیم خورشید و در یخچال نگهداری شود.
      </p>
    );
  } else if (item && (item.category === "gaz" || item.category === "coffee")) {
    keepCondition = (
      <p className="text-[11px] text-footerTxt inline-block">
        به دلیل عدم وجود مواد نگهدارنده؛ حتما در جای خشک و خنک نگهداری شود.
      </p>
    );
  } else if (item && item.category === "dragee") {
    keepCondition = (
      <p className="text-[11px] text-footerTxt inline-block">
        حتما در یخچال نگهداری شود.شود.
      </p>
    );
  }

  return (
    <>
      <div className="lg:h-screen flex flex-col">
        <Nav otherClasses="bg-backgroundDefault/100" />
        <section className="container grow flex flex-col md:flex-row border border-x-[#212529] border-t-0 border-b-0">
          {item && <ImageContainer item={item} />}
          {/* جزئیات */}
          <div className="w-full md:w-3/5 pt-6 px-5">
            <h1 className="text-md text-white">
              {ToPersianNumber(item.title)}
            </h1>
            <h4 className="text-textColor text-[13px] mt-2">
              {ToPersianNumber(item.price)}
            </h4>
            <p className="text-footerTxt mt-2 text-[11px]">
              {item.details.description}
            </p>
            <ProductCounter product={item} />
            <ul className="mt-3 flex flex-col gap-1">
              <li>
                <span className="text-white text-[12px]">گروه :</span>
                <span className="text-footerTxt text-[12px]">
                  {" " + item.group}
                </span>
              </li>
              <li>
                <span className="text-white text-[12px]">وزن :</span>
                <span className="text-footerTxt text-[12px]">
                  {" " + ToPersianNumber(item.details.weight)}
                </span>
              </li>
              <p className="text-footerTxt text-[11px]">
                تمامی وزن ها با بسته بندی محاسبه شده است.
              </p>
              <li className="mt-2">
                <span className="text-white text-[12px]">نوع بسته بندی :</span>
                <span className="text-footerTxt text-[12px]">
                  {" " + item.details.packType}
                </span>
              </li>
              <li>
                <span className="text-white text-[12px]">سایز بسته بندی :</span>
                <span className="text-footerTxt text-[12px]">
                  {" " + ToPersianNumber(item.details.packSize)}
                </span>
              </li>
              <li>
                <span className="text-white text-[12px]">
                  بهترین زمان مصرف :
                </span>
                <span className="text-footerTxt text-[12px]">
                  {" " + ToPersianNumber(item.details.bestTime)}
                </span>
              </li>
              <li className="mt-5">
                <span className="text-white text-[12px]">شرایط نگهداری :</span>
                <span className="text-footerTxt text-[12px]">
                  {" "}
                  {keepCondition}
                </span>
              </li>
              {item &&
              (item.category === "sohan" || item.category === "chocolate") ? (
                <p className="text-footerTxt text-[11px]">
                  به دلیل گرما و احتمال آب شدن و یا خرد شدن، ارسال این محصول
                  تنها در تهران و قم امکان پذیر است.
                </p>
              ) : (
                ""
              )}
              {item.details.ingredients.length > 0 && (
                <li className="mt-2 leading-8">
                  <span className="text-white text-[12px]">
                    مواد تشکیل دهنده :
                  </span>
                  <span className="text-footerTxt text-[12px]">
                    {item.details.ingredients.map((ingredient, index) => (
                      <span
                        key={index}
                        className="bg-[#353535] mx-1 p-1 text-[11px] text-slate-200">
                        {ingredient}
                      </span>
                    ))}
                  </span>
                </li>
              )}
            </ul>
          </div>
        </section>
      </div>
      <Footer classes="mt-15" />
    </>
  );
}
