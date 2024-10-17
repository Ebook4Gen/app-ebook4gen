import GenerateEbook from '../../components/GenerateEbook';

const EbookPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-lg px-4">
        <GenerateEbook />
      </div>
    </div>
  );
};

export default EbookPage;