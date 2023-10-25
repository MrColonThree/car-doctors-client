import { FaQuoteRight } from "react-icons/fa";
const Testimonia = () => {
  return (
    <div className="my-20">
      <div className="text-center space-y-4 my-10">
        <h4 className="text-lg text-orange-500 font-bold">Testimonial</h4>
        <h2 className="text-5xl font-bold">What Customer Says</h2>
        <p className="text-[#737373] max-w-2xl mx-auto">
          The majority have suffered alteration in some form, by injected
          humour, or randomized words which don not look even slightly
          believable.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-5 px-5">
        {/* Card-1 */}
        <div className="space-y-5 p-5 rounded-lg border">
          <div className="flex justify-between gap-5">
            <div className="flex items-center gap-2">
              <img
                className="h-14"
                src="https://oliver-andersen.se/wp-content/uploads/2018/03/cropped-Profile-Picture-Round-Color.png"
                alt=""
              />
              <div>
                <h4 className="text-2xl font-bold">Jack Martinez</h4>
                <p className="text-[#737373] text-lg font-semibold">
                  Businessman
                </p>
              </div>
            </div>
            <FaQuoteRight className="text-orange-500/50 text-6xl" />
          </div>
          <div>
            <p className="text-[#737373]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <div className="rating my-5">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
        </div>
        {/* Card-1 */}
        <div className="space-y-5 p-5 rounded-lg border">
          <div className="flex justify-between gap-5">
            <div className="flex items-center gap-2">
              <img
                className="h-14"
                src="https://themarketingcrowd.ie/wp-content/uploads/2017/01/Round-Profile-Pic.png"
                alt=""
              />
              <div>
                <h4 className="text-2xl font-bold">Monica Gomez</h4>
                <p className="text-[#737373] text-lg font-semibold">Doctor</p>
              </div>
            </div>
            <FaQuoteRight className="text-orange-500/50 text-6xl" />
          </div>
          <div>
            <p className="text-[#737373]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <div className="rating my-5">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonia;
