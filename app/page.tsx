export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-6">Pontual Equipamentos</h1>

      <p className="text-lg text-gray-300 mb-10">
        Locação profissional para eventos corporativos
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Serviços</h2>
        <ul className="space-y-2 text-gray-300">
          <li>• Projetores (Datashow)</li>
          <li>• Telas de projeção</li>
          <li>• TVs</li>
          <li>• Painel de LED</li>
          <li>• Microfones profissionais</li>
          <li>• Sonorização completa</li>
          <li>• Iluminação cênica</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Catálogo (exemplo)</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-gray-700 p-4 rounded">
            <p className="font-semibold">Projetor Multimídia</p>
            <p className="text-sm text-gray-400">R$ 180 / diária</p>
          </div>

          <div className="border border-gray-700 p-4 rounded">
            <p className="font-semibold">Tela de Projeção</p>
            <p className="text-sm text-gray-400">R$ 120 / diária</p>
          </div>

          <div className="border border-gray-700 p-4 rounded">
            <p className="font-semibold">Microfone Sem Fio</p>
            <p className="text-sm text-gray-400">R$ 90 / diária</p>
          </div>

          <div className="border border-gray-700 p-4 rounded">
            <p className="font-semibold">TV 55&quot;</p>
            <p className="text-sm text-gray-400">R$ 250 / diária</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Carrinho (futuro)</h2>
        <div className="border border-gray-700 p-4 rounded text-gray-400">
          Aqui o cliente vai adicionar os equipamentos e enviar o orçamento.
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contato</h2>
        <p className="text-gray-400">WhatsApp e Instagram em breve</p>
      </section>
    </div>
  );
}