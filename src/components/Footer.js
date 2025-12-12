import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#111827] text-gray-300 py-[3vh] border-t border-t-[.1vh] border-gray-800">
      <div className=" w-full px-[20vh] grid grid-cols-4 md:grid-cols-4 gap-[1vh]">
        {/* Logo + Description */}
        <div>
          <h2 className="text-[2.5vh] font-bold text-white">ScoreBall</h2>
          <p className="text-[1.5vh] text-gray-400 leading-[3vh]">
            Canlı skorlar, maç istatistikleri, fikstürler ve daha fazlası.
            Futbol dünyasını modern bir arayüzle keşfet!
          </p>

          {/* Social Icons */}
          <div className="flex gap-[2vh] mt-[2vh]">
            <a
              href="https://github.com/BunyminKarayagiz"
              className="p-[1vh] rounded-lg bg-gray-800 hover:bg-blue-600 transition"
            >
              <i className="fa-brands fa-github text-[2vh]">
                <FaGithub />
              </i>
            </a>

            <a
              href="https://www.linkedin.com/in/bunyaminkarayagiz/"
              className="p-[1vh]  rounded-lg bg-gray-800 hover:bg-blue-500 transition"
            >
              <i className="fa-brands fa-linkedin text-[2vh]">
                <FaLinkedin />
              </i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-[2.5vh] font-semibold mb-[.5vh]">
            Hızlı Bağlantılar
          </h3>
          <ul className="space-y-[.5vh] text-[1.5vh] text-gray-400">
            <li className="hover:text-white transition cursor-pointer">
              Canlı Skorlar
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Fikstür
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Ligler
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Oyuncular
            </li>
          </ul>
        </div>

        {/* Leagues */}
        <div>
          <h3 className="text-white text-[2.5vh] font-semibold mb-[.1vh]">
            Popüler Ligler
          </h3>
          <ul className="space-y-[.5vh] text-[1.5vh] text-gray-400">
            <li
              onClick={() => {
                navigate("/league/39");
              }}
              className="hover:text-white transition cursor-pointer"
            >
              Premier League
            </li>
            <li
              onClick={() => {
                navigate("/league/140");
              }}
              className="hover:text-white transition cursor-pointer"
            >
              La Liga
            </li>
            <li
              onClick={() => {
                navigate("/league/78");
              }}
              className="hover:text-white transition cursor-pointer"
            >
              Bundesliga
            </li>
            <li
              onClick={() => {
                navigate("/league/135");
              }}
              className="hover:text-white transition cursor-pointer"
            >
              Serie A
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white text-[2.5vh] font-semibold mb-[.5vh]">
            Haber Bülteni
          </h3>
          <p className="text-gray-400 text-[1.5vh] mb-[.5vh]">
            Haftalık futbol özeti ve istatistikleri e-postana gelsin.
          </p>

          <div className="flex items-center bg-gray-800 p-[1vh] rounded-lg">
            <input
              type="text"
              placeholder="E-posta adresin"
              className="bg-transparent outline-none text-[1.5vh] flex-1 text-gray-300 px-[1vh]"
            />
            <button className="bg-blue-600 px-[2vh] py-[1vh] rounded-lg text-[1.5vh] font-semibold hover:bg-blue-700 transition">
              Gönder
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-[1.5vh] mt-[7vh]">
        © {new Date().getFullYear()} ScoreBall — Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
