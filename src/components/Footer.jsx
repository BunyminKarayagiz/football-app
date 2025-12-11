import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export default function Footer() {
    const navigate = useNavigate();
  return (
    <footer className="bg-[#111827] text-gray-300 py-10 mt-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">ScoreBall</h2>
          <p className="text-sm text-gray-400 leading-6">
            Canlı skorlar, maç istatistikleri, fikstürler ve daha fazlası.
            Futbol dünyasını modern bir arayüzle keşfet!
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/BunyminKarayagiz"
              className="p-2 rounded-lg bg-gray-800 hover:bg-blue-600 transition"
            >
              <i className="fa-brands fa-github text-xl"><FaGithub /></i>
            </a>

            <a
              href="https://www.linkedin.com/in/bunyaminkarayagiz/"
              className="p-2 rounded-lg bg-gray-800 hover:bg-blue-500 transition"
            >
              <i className="fa-brands fa-linkedin text-xl"><FaLinkedin/></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Hızlı Bağlantılar
          </h3>
          <ul className="space-y-3 text-gray-400">
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
          <h3 className="text-white text-lg font-semibold mb-4">
            Popüler Ligler
          </h3>
          <ul className="space-y-3 text-gray-400">
            <li onClick={() => {
              navigate("/league/39");

            }} className="hover:text-white transition cursor-pointer">
              Premier League
            </li>
            <li onClick={() => {
              navigate("/league/140");

            }} className="hover:text-white transition cursor-pointer">
              La Liga
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Bundesliga
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Serie A
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Haber Bülteni</h3>
          <p className="text-gray-400 mb-4">
            Haftalık futbol özeti ve istatistikleri e-postana gelsin.
          </p>

          <div className="flex items-center bg-gray-800 p-2 rounded-lg">
            <input
              type="text"
              placeholder="E-posta adresin"
              className="bg-transparent outline-none text-sm flex-1 text-gray-300 px-2"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
              Gönder
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-800 pt-5">
        © {new Date().getFullYear()} ScoreBall — Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
