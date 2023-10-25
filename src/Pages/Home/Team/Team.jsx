import t1 from "../../../assets/images/team/1.jpg";
import t2 from "../../../assets/images/team/2.jpg";
import t3 from "../../../assets/images/team/3.jpg";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
const Team = () => {
  return (
    <div className="my-20">
      <div className="text-center space-y-4 my-10">
        <h4 className="text-lg text-orange-500 font-bold">Team</h4>
        <h2 className="text-5xl font-bold">Meet Our Team</h2>
        <p className="text-[#737373] max-w-2xl mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which don not look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
        {/* member-1 */}
        <div className="flex flex-col items-center gap-5 p-5 border rounded-lg shadow-lg">
          <img className="rounded-lg h-60" src={t1} alt="" />
          <h2 className="font-bold text-2xl">Car Engine Plug</h2>
          <p className="text-semibold text-[#737373]">Engine Expert</p>
          <div className="flex items-center justify-center gap-4 text-2xl">
            <BsFacebook className="text-[#3b5998]" />
            <BsTwitter className="text-[#00acee]" />
            <BsLinkedin className="text-[#0e76a8]" />
            <div className="bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 via-purple-600 to-blue-600 rounded-lg p-1">
              <BsInstagram className="text-white text-lg" />
            </div>
          </div>
        </div>
        {/* member-2 */}
        <div className="flex flex-col items-center gap-5 p-5 border rounded-lg shadow-lg">
          <img className="rounded-lg h-60" src={t2} alt="" />
          <h2 className="font-bold text-2xl">Car Engine Plug</h2>
          <p className="text-semibold text-[#737373]">Engine Expert</p>
          <div className="flex items-center justify-center gap-4 text-2xl">
            <BsFacebook className="text-[#3b5998]" />
            <BsTwitter className="text-[#00acee]" />
            <BsLinkedin className="text-[#0e76a8]" />
            <div className="bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 via-purple-600 to-blue-600 rounded-lg p-1">
              <BsInstagram className="text-white text-lg" />
            </div>
          </div>
        </div>
        {/* member-3 */}
        <div className="flex flex-col items-center gap-5 p-5 border rounded-lg shadow-lg">
          <img className="rounded-lg h-60" src={t3} alt="" />
          <h2 className="font-bold text-2xl">Car Engine Plug</h2>
          <p className="text-semibold text-[#737373]">Engine Expert</p>
          <div className="flex items-center justify-center gap-4 text-2xl">
            <BsFacebook className="text-[#3b5998]" />
            <BsTwitter className="text-[#00acee]" />
            <BsLinkedin className="text-[#0e76a8]" />
            <div className="bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 via-purple-600 to-blue-600 rounded-lg p-1">
              <BsInstagram className="text-white text-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
