import { FaHandSparkles, FaWalking, FaSpa } from "react-icons/fa";
import { ServiceItem } from "../services-item";
import manicure from "@/assets/nail-polish.png"
import pedicure from "@/assets/pedicure.png"
import pedicureMassagem from "@/assets/foot-massage.png"

export function ServiceCards() {
    return (
        <section className="py-10 bg-[#ebe5f9]">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-[#4B2995] mb-8 text-center">Serviços</h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="bg-white rounded-2xl shadow-md flex flex-col items-center text-center hover:shadow-lg transition">
                        <div className=" bg-purple-dark  w-full rounded-2xl flex items-center justify-center space-x-2 py-4">
                            <img src={manicure} className="text-[#8047f8] " />
                            <h3 className="text-xl font-semibold text-white">Manicure</h3>
                        </div>
                        <p className="text-lg font-medium text-gray-800 mt-2 py-4">R$ 30,00</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-md flex flex-col items-center text-center hover:shadow-lg transition">
                        <div className=" bg-purple-dark  w-full rounded-2xl flex items-center justify-center space-x-2 py-4">
                            <img src={pedicure} className="text-[#8047f8] " />
                            <h3 className="text-xl font-semibold text-white">Pedicure</h3>
                        </div>
                        <p className="text-lg font-medium text-gray-800 mt-2 py-4">R$ 30,00</p>
                    </div>

                    {/* <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
                     
                        <h3 className="text-xl font-semibold text-[#4B2995]">Combo Mãos e Pés</h3>
                        <p className="text-lg font-medium text-gray-800 mt-1 line-through">R$ 60,00</p>
                        <p className="text-xl font-bold text-green-600">R$ 55,00</p>
                        <span className="text-sm text-[#4B2995] mt-1">Desconto especial</span>
                    </div> */}

                    <div className="bg-white rounded-2xl shadow-md flex flex-col items-center text-center hover:shadow-lg transition">
                        <div className=" bg-purple-dark  w-full rounded-2xl flex items-center justify-center space-x-2 py-4">
                            <FaSpa size={40} className="text-[#fff] mb-4" />
                            <h3 className="text-xl font-semibold text-[#fff]">Combo Mãos e Pés</h3>
                        </div>
                        <p className="text-lg font-medium text-gray-800 mt-1 line-through">R$ 60,00</p>
                        <p className="text-xl font-bold text-green-600">R$ 55,00</p>
                        <span className="text-sm text-[#4B2995] mt-1">Desconto especial</span>
                    </div>
                </div>

                <p className="text-center text-[#4B2995] mt-8 text-sm sm:text-base">
                    Atendo a domicílio com taxa a partir de <strong>R$ 5,00</strong>.
                </p>
            </div>
        </section>
    );
}
