"use client";

import { ArrowRight, CheckCircle, Shield, Zap, Users, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  const scrollToCTA = () => {
    document.getElementById('cta-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Fixo */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-blue-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
            ELITE
          </div>
          <Button 
            onClick={scrollToCTA}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105"
          >
            Comece Agora
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-black to-black"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-800/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full">
            <span className="text-blue-400 text-sm font-semibold tracking-wider">SOCIEDADE EXCLUSIVA</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            Se você não tiver <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">coragem de entrar</span>,<br />
            alguém vai entrar no seu lugar.
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 font-light max-w-3xl mx-auto">
            Esta é a porta que transforma <span className="text-blue-400 font-semibold">observadores em jogadores</span>.
          </p>

          <Button 
            onClick={scrollToCTA}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-12 py-6 text-xl rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-blue-600/50 group"
          >
            ENTRAR AGORA
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-500" />
              <span>100% Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-500" />
              <span>Acesso Imediato</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-500" />
              <span>Comunidade Exclusiva</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nós */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-blue-950/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 text-blue-400">
            SOBRE NÓS
          </h2>
          <div className="space-y-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
            <p className="font-semibold text-white text-2xl">
              Não somos curso. Não somos promessa vazia.
            </p>
            <p>
              Somos uma <span className="text-blue-400 font-bold">sociedade silenciosa</span> onde pouca gente entra — mas quem entra não sai igual.
            </p>
            <p>
              Guiamos pessoas que querem crescer, agir e lucrar em silêncio, sem aparecer, sem exposição desnecessária.
            </p>
            <p className="text-2xl font-bold text-white mt-8">
              Aqui você não "aprende". <span className="text-blue-400">Você executa.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Por Que Existimos */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-950/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-12 text-center text-blue-400">
            POR QUE EXISTIMOS
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-900/20 to-black border border-blue-800/30 p-8 rounded-2xl">
              <p className="text-xl text-gray-300 leading-relaxed">
                Porque <span className="text-blue-400 font-bold">ficar parado custa caro</span>.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/20 to-black border border-blue-800/30 p-8 rounded-2xl">
              <p className="text-xl text-gray-300 leading-relaxed">
                Porque esperar "o momento certo" é a <span className="text-blue-400 font-bold">desculpa que te manteve preso</span> até hoje.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-900/30 to-blue-950/30 border border-blue-700/50 p-10 rounded-2xl">
            <p className="text-2xl font-bold text-white mb-8 text-center">Criamos um sistema onde você:</p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-lg text-gray-300">tem mentoria direta</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-lg text-gray-300">se conecta com pessoas que estão construindo</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-lg text-gray-300">e não precisa caminhar sozinho</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O Que Você Entra Para Ter */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-blue-950/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-12 text-center text-blue-400">
            O QUE VOCÊ ENTRA PARA TER
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {[
              { icon: Target, label: "Direção" },
              { icon: Zap, label: "Execução" },
              { icon: TrendingUp, label: "Estratégia" },
              { icon: Shield, label: "Silêncio" },
              { icon: CheckCircle, label: "Resultados" }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-900/30 to-black border border-blue-700/40 p-8 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
                <item.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <p className="text-xl font-bold text-white">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="text-center space-y-4 text-xl text-gray-300">
            <p className="font-semibold text-white text-2xl">Sem palco. Sem exposição. Sem discurso bonito.</p>
            <p className="text-blue-400 font-bold text-3xl">Aqui é atividade, decisão e transformação.</p>
          </div>
        </div>
      </section>

      {/* Nossa Comunidade */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-950/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 text-blue-400">
            NOSSA COMUNIDADE
          </h2>
          <div className="space-y-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
            <p className="font-semibold text-white text-2xl">
              Não é grupo de motivação.
            </p>
            <p className="text-2xl">
              É <span className="text-blue-400 font-bold">ambiente de ação</span> — quem entra aprende a jogar para vencer.
            </p>
            <div className="mt-12 space-y-4 text-2xl font-bold">
              <p className="text-gray-300">Pessoas comuns se tornam <span className="text-blue-400">players</span>.</p>
              <p className="text-gray-300">Players se tornam <span className="text-blue-400">sócios</span>.</p>
              <p className="text-blue-400">Sócios crescem.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-blue-950/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-12 text-center text-blue-400">
            QUEM SOMOS
          </h2>
          
          <div className="bg-gradient-to-br from-blue-900/20 to-black border border-blue-700/50 p-10 rounded-2xl text-center space-y-6">
            <p className="text-2xl font-bold text-white">
              Somos os que <span className="text-blue-400">fizeram antes de ensinar</span>.
            </p>
            <p className="text-xl text-gray-300">
              Nossa mentoria existe porque o caminho foi testado no campo, não no palco.
            </p>
            <div className="pt-6 border-t border-blue-800/30 mt-8">
              <p className="text-xl text-gray-300">
                Se você quer teoria, <span className="line-through">abra o YouTube</span>.
              </p>
              <p className="text-2xl font-bold text-blue-400 mt-4">
                Se você quer desempenho, entre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-950/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-12 text-center text-blue-400">
            O QUE DIZEM QUEM ENTROU
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Eu entrei achando que era só conversa. Foi a melhor decisão da minha vida.",
              "Não sei se estou pronto, mas sei que vale a pena estar dentro.",
              "Se eu soubesse disso antes, teria começado mais cedo."
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-900/30 to-black border border-blue-700/40 p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-blue-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-300 text-lg italic mb-4">"{testimonial}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full"></div>
                  <div>
                    <p className="text-white font-semibold">Membro Elite</p>
                    <p className="text-gray-500 text-sm">Verificado</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Convencimento */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-blue-950/20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <p className="text-3xl sm:text-4xl font-black text-white">
              A porta está <span className="text-blue-400">aberta agora</span>.
            </p>
            <p className="text-2xl sm:text-3xl font-bold text-gray-300">
              Quem hesita, <span className="text-red-400">paga</span>.
            </p>
            <p className="text-2xl sm:text-3xl font-bold text-gray-300">
              Quem decide, <span className="text-blue-400">muda</span>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="cta-form" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-950/20 to-black">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-blue-900/40 to-black border-2 border-blue-600/50 p-10 sm:p-16 rounded-3xl shadow-2xl shadow-blue-600/30 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-white">
              ÚLTIMO IMPACTO
            </h2>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed">
              Se você está lendo isso, é porque algo dentro de você sabe que precisa de mudança.
            </p>
            <p className="text-lg sm:text-xl text-gray-400 mb-10">
              Não espere mais um mês, mais uma sexta, mais um salário.
            </p>
            <p className="text-2xl sm:text-3xl font-bold text-blue-400 mb-12">
              A porta está aberta agora.
            </p>
            
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-black px-16 py-8 text-2xl rounded-2xl transition-all duration-300 hover:scale-110 shadow-2xl shadow-blue-600/50 group w-full sm:w-auto"
            >
              QUERO ENTRAR AGORA
              <ArrowRight className="ml-3 w-8 h-8 group-hover:translate-x-2 transition-transform" />
            </Button>

            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Acesso Vitalício</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-500" />
                <span>Garantia Total</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-blue-900/30 bg-black">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2024 ELITE. Todos os direitos reservados.</p>
          <p className="mt-2">Transformação real para quem decide agir.</p>
        </div>
      </footer>
    </div>
  );
}
