import React from "react";

const HeaderControls: React.FC = () => {
    return (
        <div className="w-screen  flex flex-col justify-between items-center  px-8 py-4 h-screen bg-[#f1f0ee]">
            <div className="w-full flex justify-between items-center rounded-full bg-white">

                <button className="text-2xl text-gray-600  hover:text-black">
                    <span className="material-icons">{"<"}</span>
                </button>

                <div className="flex gap-3 bg-white p-2 w-full rounded-full shadow">
                    <select className="text-gray-500 bg-transparent outline-none">
                        <option>Arial</option>
                    </select>

                    <select className="text-gray-500 bg-transparent outline-none">
                        <option>12</option>
                    </select>

                    <div className="flex gap-2 text-gray-300">
                        <button className="hover:text-black font-bold">B</button>
                        <button className="hover:text-black italic">I</button>
                        <button className="hover:text-black underline">U</button>
                        <button className="hover:text-black">{"<<"}</button>
                    </div>

                    <button className="text-gray-300 hover:text-black flex items-center gap-1">
                        <span className="material-icons">image</span>
                        <span>Adicionar imagem</span>
                    </button>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center text-gray-500">
                        <span className="text-lg">1</span> <span className="mx-1">de</span>
                        <span className="text-lg">12</span>
                    </div>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold">
                        Exportar
                    </button>
                </div>


            </div>
        </div>
    );
};

export default HeaderControls;
