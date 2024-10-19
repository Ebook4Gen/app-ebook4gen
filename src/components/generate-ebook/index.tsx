import jsPDF from "jspdf";
import { useState } from "react";

import configIcon from '../../../public/gear.png'
import premiumIcon from '../../../public/premium.png'
import userIcon from '../../../public/user.png'
import fileIcon from '../../../public/file.png'
import minusIcon from '../../../public/minus.png'
import plusIcon from '../../../public/plus.png'
import sparkleIcon from '../../../public/sparkle.png'
import graduationCap from '../../../public/graduation.png'
import arrowTopIcon from '../../../public/arrowTop.png'
import PremiumModal from "../premium-modal";

const GenerateEbook = () => {
  const [summary, setSummary] = useState("");
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showTips, setShowTips] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false); 
  };

  const toggleTips = () => {
    setShowTips(!showTips);
  };

  const generatePDF = (content: string) => {
    const doc = new jsPDF();
    doc.text(content, 10, 10);
    doc.save("ebook.pdf");
  };

  const handleSummaryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSummary(e.target.value);
  };

  const handlePagesChange = (increment: boolean) => {
    setPages((prev) => (increment ? prev + 1 : Math.max(prev - 1, 1)));
  };

  const handleSubmit = async () => {
    if (summary) {
      setLoading(true);
      console.log("Resumo:", summary);
      console.log("Número de páginas:", pages);
      console.log("Chamando a API da OpenAi...");
    }
    setLoading(false);
    generatePDF("conteudoRetornadoDaOpenAi");
  };

  return (
    <div className="min-h-screen w-full gap-10 flex justify-between py-[56px] px-[116px]">
      <div className="flex flex-col items-start w-full mb-6 min-h-screen">
        <div className="flex w-full justify-between items-center mb-14">
          <img src={userIcon} className="w-12 h-12" alt="React logo" />
          <div className="flex items-center space-x-4">
            <button onClick={handleOpenModal} className="flex items-center gap-2 px-4 py-3 bg-[#E30100] border-none hover:bg-red-700 rounded-full text-white font-bold text-base">
              <img src={premiumIcon} className="w-5 h-5" alt="React logo" />
              Assine o Premium
            </button>
            <div className="p-3 rounded-full bg-white cursor-pointer">
              <img src={configIcon} className="w-5 h-5" alt="React logo" />
            </div>
          </div>
        </div>

        <h1 className="text-[40px] font-bold text-gray-800 mb-6 ">
          Olá {`{username}`}, sobre o que
          <br className="hidden md:block" />
          vamos escrever hoje?
        </h1>

        <p className="text-lg text-gray-600 w-full mb-96">
          Use o campo abaixo para descrever um pequeno resumo sobre o
          <br className="hidden md:block" />
          assunto que seu e-book irá contemplar.
        </p>

        <div className="flex w-full justify-end items-end">
          <div className="w-full mb-auto">
            <textarea
              value={summary}
              onChange={handleSummaryChange}
              placeholder="Digite seu resumo aqui."
              className="w-full p-4 border border-gray-300 rounded-lg mb-5"
              rows={5}
            />

            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-3 items-center">
                <img src={fileIcon} className="w-5 h-5" alt="Ícone de uma pasta" />
                <label className="text-lg font-medium">Nº de páginas:</label>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center bg-white rounded-full w-full p-3">
                  <button
                    onClick={() => handlePagesChange(false)}
                    className="bg-transparent text-[#686868] border-none p-2"
                  >
                    <img src={minusIcon} className="w-5 h-5" alt="Ícone de subtração" />
                  </button>
                  <span className="px-4 font-bold">{pages}</span>
                  <button
                    onClick={() => handlePagesChange(true)}
                    className="bg-transparent text-[#686868] border-none p-2"
                  >
                    <img src={plusIcon} className="w-5 h-5" alt="Ícone de soma" />
                  </button>
                </div>


                <button
                  onClick={handleSubmit}
                  className="bg-[#E30100] flex justify-center items-center gap-2 text-white font-bold text-base px-6 py-3 rounded-full w-full border-none hover:bg-red-700 transition whitespace-nowrap"
                  disabled={loading}
                >
                  <img src={sparkleIcon} className="w-5 h-5 inline-block" alt="Ícone de uma pasta" />
                  <span className="whitespace-nowrap">{loading ? "Gerando..." : "Criar texto"}</span>
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="w-full p-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={toggleTips}
        >
          <div className="flex items-center gap-3">
            <img src={graduationCap} className="w-5 h-5 inline-block" alt="Ícone de uma pasta" />
            <h2 className="text-xl font-semibold">
              Saiba como gerar textos melhores:
            </h2>
          </div>
          <img src={arrowTopIcon} className={showTips ? "w-5 h-5 inline-block" : "w-5 h-5 inline-block rotate-180"} alt="Ícone de uma pasta" />
        </div>

        <div className="pt-4 pb-6">
          <hr />
        </div>

        <div
          className={`transition-all duration-500 ease-in-out transform ${showTips ? "max-h-full opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
        >
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-white p-3 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <span className="font-bold">Defina objetivos</span>
                <button className="flex px-3 py-[3px] bg-[#E30100] border-none hover:bg-red-700 rounded-full text-xs text-white font-medium">
                  Essencial
                </button>
              </div>
              <p className="text-gray-600">Comece com um verbo ou comando e descreva a tarefa...</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow">
              <span className="font-bold">Forneça contexto</span>
              <p className="text-gray-600">Descreva qual é o objetivo do texto e os problemas a se solucionar...</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow">
              <span className="font-bold">Defina o público</span>
              <p className="text-gray-600">Escolha um público no qual a linguagem do livro será guiada...</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow">
              <span className="font-bold">Forneça objetivos</span>
              <p className="text-gray-600">Quais tópicos devem ser contemplados e comprovados...</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow">
              <span className="font-bold">Defina restrições</span>
              <p className="text-gray-600">Seja específico sobre o resultado que você deseja obter...</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow">
              <span className="font-bold">Forneça um tom</span>
              <p className="text-gray-600">Defina se o tom do texto deve ser sério ou divertido...</p>
            </div>
          </div>
        </div>
      </div>
      <PremiumModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default GenerateEbook;
