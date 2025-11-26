import { Header } from "@/components/layout/Header";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center bg-gray-100">
      <Header />
      {/* Seção: Sobre */}
      <section
        id="sobre"
        className="w-full max-w-5xl bg-white rounded-2xl shadow-md p-12 my-12 border border-gray-200 scroll-mt-20"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center relative after:content-[''] after:block after:w-20 after:h-1 after:bg-amber-500 after:mx-auto after:mt-2">
          Sobre o AedesControl
        </h2>
        <p className="text-center text-gray-600 leading-relaxed">
          O <span className="font-semibold text-amber-500">AedesControl</span> é um sistema criado
          para registrar, monitorar e visualizar focos de dengue de forma inteligente. A plataforma
          auxilia equipes de saúde na coleta e análise de dados, ajudando na prevenção e no combate
          à doença.
        </p>
      </section>

      {/* Seção: Como Funciona */}
      <section
        id="funciona"
        className="w-full max-w-5xl bg-white rounded-2xl shadow-md p-12 my-12 border border-gray-200 scroll-mt-20"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center relative after:content-[''] after:block after:w-20 after:h-1 after:bg-amber-500 after:mx-auto after:mt-2">
          Como Funciona
        </h2>
        <p className="text-center text-gray-600 leading-relaxed">
          Os dados são coletados de endereços com suspeitas, casos confirmados e locais livres de
          dengue. O sistema organiza essas informações em gráficos e relatórios, facilitando o
          acompanhamento e o planejamento de ações.
        </p>
      </section>

      {/* Seção: Visualização de Dados */}
      <section
        id="dados"
        className="w-full max-w-5xl bg-white rounded-2xl shadow-md p-12 my-12 border border-gray-200 scroll-mt-20"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center relative after:content-[''] after:block after:w-20 after:h-1 after:bg-amber-500 after:mx-auto after:mt-2">
          Visualização de Dados
        </h2>
        <p className="text-center text-gray-600 leading-relaxed">
          Através de gráficos interativos, é possível visualizar a distribuição de casos e detectar
          rapidamente regiões com alto índice de infecção. Essas informações ajudam as autoridades a
          agir com precisão.
        </p>
      </section>

      {/* Seção: Contato */}
      <section
        id="contato"
        className="w-full max-w-5xl bg-white rounded-2xl shadow-md p-12 my-12 border border-gray-200 flex flex-col items-center scroll-mt-20"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center relative after:content-[''] after:block after:w-20 after:h-1 after:bg-amber-500 after:mx-auto after:mt-2">
          Entre em Contato
        </h2>
        <p className="text-center text-gray-600 leading-relaxed mb-8 max-w-2xl">
          Deseja colaborar com o projeto ou obter mais informações? Entre em contato conosco!
        </p>

        <a
          href="mailto:contato@aedescontrol.com"
          className="bg-amber-500 text-white px-8 py-3 rounded-xl shadow hover:bg-amber-500 transition-transform transform hover:-translate-y-1"
        >
          Enviar Email
        </a>
      </section>
    </main>
  );
}
