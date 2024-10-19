import { Modal } from "./types";

import sparkleIcon from '../../../public/sparkleRed.png'

const LoadingModal = ({ isOpen, onCancel }: Modal) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-[400px] p-8 rounded-lg shadow-lg flex flex-col items-start text-start">
                <div className="mb-4">
                    <img src={sparkleIcon} className="w-8 h-8" alt="Icone mágico" />
                </div>
                <h2 className="text-2xl font-bold mb-2 text-[#161616]">Estamos fazendo a nossa mágica...</h2>
                <p className="mb-6 text-[#686868]">
                    Aguarde alguns minutinhos, estamos gerando o seu livro...
                </p>

                <div className="pb-3">
                    <hr />
                </div>

                <div className="flex items-center w-full justify-center mb-6">
                    <div className="flex rounded-2xl bg-[#F1F0EE] p-3 w-full">
                        <svg
                            className="animate-spin h-6 w-6 text-red-500"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            ></path>
                        </svg>
                        <span className="ml-2 text-[#161616] text-base font-medium">Gerando o livro...</span>
                    </div>
                </div>
                <div className="w-full flex justify-end">
                    <button
                        className="bg-white border flex items-end border-gray-300 text-[#161616] font-semibold py-2 px-6 rounded-full hover:bg-gray-100"
                        onClick={onCancel}
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoadingModal;
