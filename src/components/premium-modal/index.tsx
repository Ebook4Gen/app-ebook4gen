import { Modal } from "./types";

import premiumIcon from '../../../public/premiumRed.png'
import unlock from '../../../public/unlock.png'
import pencilIcon from '../../../public/pencil.png'
import fileIcon from '../../../public/file.png'
import clockIcon from '../../../public/clock.png'
import signatureIcon from '../../../public/signature.png'
import imageIcon from '../../../public/image.png'

const PremiumModal = ({ isOpen, onClose }: Modal) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-[720px]  p-6 gap-8 rounded-lg shadow-lg flex">
                <div className="w-1/2">
                    <img src={premiumIcon} className="w-6 h-6 mb-3" alt="Icone" />
                    <h2 className="text-2xl font-semibold mb-3 text-[#161616]">Desbloqueie ainda mais features com o premium.</h2>
                    <p className="mb-6 text-[#686868]">
                        Assine nosso plano premium e desbloqueie outras funções como:
                    </p>

                    <div className="mb-4">
                        <hr />
                    </div>

                    <ul className="list-none space-y-2 text-base text-[#161616]">
                        <li className="flex items-center space-x-2">
                            <img src={pencilIcon} className="w-5 h-5" alt="Icone" />
                            <span>Editar os prompts de cada página</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <img src={fileIcon} className="w-5 h-5" alt="Icone" />
                            <span>Páginas ilimitadas</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <img src={clockIcon} className="w-5 h-5" alt="Icone" />
                            <span>Mantenha um histórico dos seus livros</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <img src={signatureIcon} className="w-5 h-5" alt="Icone" />
                            <span>Adicione sua Marca d'água</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <img src={imageIcon} className="w-5 h-5" alt="Icone" />
                            <span>Adicionar imagens</span>
                        </li>
                    </ul>
                    <div className="py-4 mb-2">
                        <hr />
                    </div>
                    <button className="bg-[#E30100] text-white w-full font-bold text-base py-3 px-6 rounded-full hover:bg-red-700">
                        Assine por R$ X,XX
                    </button>
                </div>

                <div className="w-1/2 flex justify-center items-center">
                    <img src={unlock} className="w-[316px] h-[455px]" alt="Imagem de um cadeado" />
                </div>

                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                >
                    ✕
                </button>
            </div>
        </div>
    );
};

export default PremiumModal;
