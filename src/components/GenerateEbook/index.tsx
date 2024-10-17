import { useState } from 'react';

const GenerateEbook = () => {
  const [summary, setSummary] = useState('');
  const [pages, setPages] = useState(1);

  const handleSummaryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSummary(e.target.value);
  };

  const handlePagesChange = (increment: boolean) => {
    setPages((prev) => (increment ? prev + 1 : Math.max(prev - 1, 1)));
  };

  const handleSubmit = async () => {
    if (summary) {
      console.log('Resumo:', summary);
      console.log('Número de páginas:', pages);
      console.log('Chamando a api da OpenAi...')
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-lg">
      <h1 className="text-3xl font-bold mb-4">
        Olá {`{username}`}, o que vamos escrever hoje?
      </h1>
      <p className="text-lg mb-4">
        Use o campo abaixo para descrever um pequeno resumo sobre o assunto que seu e-book irá contemplar.
      </p>
      <textarea
        value={summary}
        onChange={handleSummaryChange}
        placeholder="Digite seu resumo aqui."
        className="w-full p-4 border border-gray-300 rounded-lg mb-4"
        rows={5}
      />
      <div className="flex items-center justify-between mb-4">
        <label className="text-lg">Nº de páginas:</label>
        <div className="flex items-center">
          <button
            onClick={() => handlePagesChange(false)}
            className="bg-gray-200 rounded-full p-2"
          >
            -
          </button>
          <span className="px-4">{pages}</span>
          <button
            onClick={() => handlePagesChange(true)}
            className="bg-gray-200 rounded-full p-2"
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="bg-red-500 text-white px-6 py-2 rounded-lg w-full"
      >
        Criar texto
      </button>
    </div>
  );
};

export default GenerateEbook;
