/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Home as HomeIcon, 
  ShieldCheck, 
  Lightbulb, 
  Info, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter,
  ArrowRight,
  ExternalLink,
  Droplets,
  ThermometerSun,
  Clock,
  Users,
  Footprints,
  ChevronDown
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="relative w-8 h-8 flex items-center justify-center bg-brand-primary rounded-lg">
      {/* Simplified single dog paw icon */}
      <svg viewBox="0 0 100 100" className="w-5 h-5 fill-brand-secondary">
        <path d="M30 45c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm20-15c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm25 15c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm-15 35c-10 0-18-4-18-12s8-12 18-12 18 4 18 12-8 12-18 12z" />
      </svg>
    </div>
    <span className="text-xl font-bold tracking-tight text-brand-secondary">Passeio <span className="text-brand-moss">Feliz</span></span>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Início', path: '/', icon: <HomeIcon size={18} /> },
    { name: 'Dicas', path: '/dicas', icon: <Lightbulb size={18} /> },
    { name: 'Segurança', path: '/seguranca', icon: <ShieldCheck size={18} /> },
    { name: 'Sobre', path: '/sobre', icon: <Info size={18} /> },
    { name: 'Contato', path: '/contato', icon: <Mail size={18} /> },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-brand-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-[70px]">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 transition-transform hover:scale-105">
              <Logo />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-wider transition-colors hover:text-brand-secondary ${
                  location.pathname === link.path ? 'text-brand-secondary underline underline-offset-8' : 'text-brand-moss'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-brand-secondary transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-3 py-3 rounded-xl text-base font-medium transition-colors ${
                    location.pathname === link.path 
                      ? 'bg-brand-primary/10 text-brand-secondary' 
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-white text-brand-moss border-t border-slate-200 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="inline-block mb-6">
            <Logo />
          </Link>
          <p className="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
            Comprometidos com o bem-estar animal através da educação e compartilhamento de informações baseadas em evidências. Passear é saúde, segurança é vida.
          </p>
        </div>
        
        <div>
          <h4 className="text-brand-secondary font-bold mb-6 text-xs uppercase tracking-widest">Links Rápidos</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link to="/dicas" className="hover:text-brand-secondary transition-colors">Dicas de Passeio</Link></li>
            <li><Link to="/seguranca" className="hover:text-brand-secondary transition-colors">Segurança</Link></li>
            <li><Link to="/sobre" className="hover:text-brand-secondary transition-colors">Sobre o Projeto</Link></li>
            <li><Link to="/contato" className="hover:text-brand-secondary transition-colors">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-brand-secondary font-bold mb-6 text-xs uppercase tracking-widest">Passeio Feliz</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Portal informativo dedicado a tornar a vida dos cães mais rica através do movimento e exploração segura.
          </p>
          <p className="mt-8 text-xs text-slate-400">
            &copy; 2026 Passeio Feliz.
          </p>
        </div>
      </div>
      
      <div className="mt-12 pt-8 border-t border-slate-100 text-[10px] text-center text-slate-400 flex flex-wrap justify-center gap-6">
        <p>FONTE: AVMA, RSPCA, ASPCA</p>
        <p>IMAGENS: CREATIVE COMMONS</p>
        <p>REFERÊNCIA: ART. CIENTÍFICO 2026</p>
      </div>
    </div>
  </footer>
);

// --- Pages ---

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-24 pb-24"
    >
      {/* Hero Banner */}
      <section className="relative h-[400px] flex items-center overflow-hidden bg-[linear-gradient(135deg,#4FD1C5_0%,#E6FFFA_100%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center">
          <div className="max-w-xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-extrabold text-brand-secondary leading-[1.1] mb-6"
            >
              Momentos de alegria,<br />passo a passo.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-brand-moss max-w-[450px] mb-8"
            >
              Portal premium de bem-estar animal com dicas fundamentadas em veterinária para passeios seguros e felizes.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link 
                to="/dicas" 
                className="px-6 py-3 bg-brand-secondary text-white rounded-full font-bold text-[13px] hover:opacity-90 transition-opacity uppercase tracking-wider"
              >
                Ver Guia Completo
              </Link>
            </motion.div>
          </div>
          <div className="hidden lg:flex w-[380px] h-[240px] bg-white/40 border-4 border-white rounded-[40px_40px_0_0] items-center justify-center relative overflow-hidden self-end">
             <span className="text-[120px]">🐕</span>
          </div>
        </div>
      </section>

      {/* Dicas Rápidas Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Dicas Fundamentais</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Tudo o que você precisa saber antes de colocar a coleira e sair de casa.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "Horários de Ouro", 
              desc: "Evite o sol forte entre 10h e 16h. Prefira o frescor da manhã ou do fim de tarde.", 
              icon: <Clock className="text-brand-secondary" size={32} />,
              color: "bg-blue-50"
            },
            { 
              title: "Regra dos 5 Segundos", 
              desc: "Toque o asfalto com a mão por 5s. Se queimar você, vai queimar as patinhas dele.", 
              icon: <ThermometerSun className="text-brand-secondary" size={32} />,
              color: "bg-teal-50"
            },
            { 
              title: "Hidratação Sempre", 
              desc: "Leve água fresca. Cães regulam a temperatura ofegando e precisam de líquidos.", 
              icon: <Droplets className="text-brand-secondary" size={32} />,
              color: "bg-blue-50"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className={`p-10 rounded-2xl bg-white transition-all duration-300 border-t-4 border-brand-primary shadow-[0_4px_6px_rgba(0,0,0,0.02)]`}
            >
              <div className="mb-4 text-[10px] uppercase font-extrabold text-brand-secondary tracking-widest">Destaque</div>
              <h3 className="text-lg font-bold text-brand-moss mb-4">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm mb-6">{item.desc}</p>
              <Link to="/dicas" className="mt-auto text-[11px] font-bold text-brand-secondary uppercase tracking-wider flex items-center gap-2 hover:translate-x-1 transition-transform">
                Ler mais →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Artigos Destaque */}
      <section className="bg-brand-primary/5 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Destaques do Portal</h2>
              <p className="text-slate-500">Conteúdo atualizado e revisado por especialistas.</p>
            </div>
            <Link to="/dicas" className="text-brand-secondary font-semibold flex items-center gap-1 hover:underline underline-offset-4">
              Ver todos os artigos <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group cursor-pointer">
              <div className="relative aspect-[16/9] rounded-[2.5rem] overflow-hidden mb-8 shadow-xl transition-transform group-hover:scale-[1.02]">
                <img src="https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&q=80&w=800" alt="Socialização" className="w-full h-full object-cover" />
                <div className="absolute top-6 left-6 px-4 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-bold text-brand-secondary">COMPORTAMENTO</div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-secondary transition-colors">A Arte da Socialização: Nem todo "Oi" é bem-vindo</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">Entenda por que forçar interações pode ser prejudicial e como ler os sinais de desconforto do seu cão no ambiente urbano.</p>
              <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
                <span>Fonte: RSPCA Knowledgebase</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                <span>5 min de leitura</span>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative aspect-[16/9] rounded-[2.5rem] overflow-hidden mb-8 shadow-xl transition-transform group-hover:scale-[1.02]">
                <img src="https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&q=80&w=800" alt="Guia e Peitoral" className="w-full h-full object-cover" />
                <div className="absolute top-6 left-6 px-4 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-bold text-brand-secondary">EQUIPAMENTO</div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-secondary transition-colors">Guia ou Peitoral? Escolhendo o melhor para a saúde</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">Descubra por que veterinários recomendam peitorais em formato 'Y' e os riscos de guias retráteis e enforcadores para a coluna do animal.</p>
              <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
                <span>Fonte: AVMA Guidelines</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                <span>7 min de leitura</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const Dicas = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl mx-auto px-4 py-24 space-y-20">
    <header className="text-center space-y-6">
      <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary">Guia Completo de Passeio</h1>
      <p className="text-slate-500 text-lg">Informações essenciais para uma rotina saudável e feliz.</p>
    </header>

    <div className="space-y-16">
      <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100 flex flex-col md:flex-row gap-12 items-start">
        <div className="bg-brand-primary/10 p-6 rounded-3xl shrink-0"><Clock className="text-brand-moss" size={40} /></div>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">Melhores Horários e Frequência</h2>
          <p className="text-slate-600 leading-relaxed">Independente da raça, cães precisam de ao menos 30 a 60 minutos de atividade física diária dividida em 2 ou 3 passeios. O horário ideal é antes das 10h e após as 18h para evitar hipertermia.</p>
          <div className="pt-4 border-t border-slate-100 italic text-sm text-slate-400">Fonte: ASPCA Daily Care Requirements</div>
        </div>
      </div>

      <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100 flex flex-col md:flex-row gap-12 items-start">
        <div className="bg-brand-primary/10 p-6 rounded-3xl shrink-0"><Users className="text-brand-moss" size={40} /></div>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">Socialização Consciente</h2>
          <p className="text-slate-600 leading-relaxed">Respeite o espaço do outro. Sempre pergunte se o outro cão é amigável antes de permitir contato. Observe a cauda, as orelhas e a tensão no corpo. Se o cão desvia o olhar, ele não quer interagir.</p>
          <div className="pt-4 border-t border-slate-100 italic text-sm text-slate-400">Fonte: RSPCA Social Interaction Guide</div>
        </div>
      </div>

      <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100 flex flex-col md:flex-row gap-12 items-start">
        <div className="bg-brand-primary/10 p-6 rounded-3xl shrink-0"><Footprints className="text-brand-moss" size={40} /></div>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">Comportamento e Estímulo</h2>
          <p className="text-slate-600 leading-relaxed">Passear não é apenas caminhar; é cheirar! Deixe seu cão explorar o ambiente com o focinho (o "sniffari"). Isso reduz o estresse e cansa mentalmente mais do que a caminhada física pura.</p>
          <div className="pt-4 border-t border-slate-100 italic text-sm text-slate-400">Fonte: American Kennel Club (AKC) Enrichment</div>
        </div>
      </div>
    </div>
  </motion.div>
);

const Seguranca = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl mx-auto px-4 py-24 space-y-16">
    <div className="text-center space-y-6 mb-20">
      <div className="inline-block p-4 bg-brand-moss/10 rounded-full mb-4">
        <ShieldCheck className="text-brand-moss" size={48} />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary">Segurança em Primeiro Lugar</h1>
      <p className="text-slate-500 text-lg">Prevenção é a chave para passeios tranquilos no ambiente urbano.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
        { 
          title: "Prevenção de Fugas", 
          desc: "Utilize coleiras e peitorais com ajuste perfeito (deve caber dois dedos entre a fita e o corpo). Use sempre plaquinha de identificação com telefone atualizado.", 
          icon: <Menu />
        },
        { 
          title: "Cuidados Noturnos", 
          desc: "Se passear à noite, utilize acessórios refletivos ou pequenas luzes de LED na coleira para garantir visibilidade perante motoristas.", 
          icon: <ShieldCheck />
        },
        { 
          title: "Calor Extremo", 
          desc: "Cães não suam como humanos. Em dias quentes, eles podem sofrer choque térmico rapidamente. Nunca deixe seu cão no carro, nem mesmo por 1 minuto.", 
          icon: <ThermometerSun />
        },
        { 
          title: "Segurança Urbana", 
          desc: "Evite deixar a guia muito solta em locais com carros. Fique atento a vidros, lixo e restos de comida no chão que podem ser ingeridos.", 
          icon: <HomeIcon />
        }
      ].map((item, i) => (
        <div key={i} className="p-8 bg-slate-50 rounded-[2rem] border border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
          <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>

    <div className="bg-brand-secondary p-12 rounded-[3.5rem] text-white">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
        <Droplets /> Emergência Térmica
      </h2>
      <p className="mb-6 opacity-90">Sinais de que seu cão está com muito calor (Heatstroke):</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium">
        <li>• Ofego excessivo e barulhento</li>
        <li>• Gengivas muito escuras ou roxas</li>
        <li>• Salivação excessiva (babando muito)</li>
        <li>• Desorientação ou fraqueza</li>
      </ul>
      <div className="mt-8 pt-8 border-t border-white/20 text-xs opacity-75">
        Fonte: VCA Animal Hospitals - Symptoms of Overheating in Dogs
      </div>
    </div>
  </motion.div>
);

const Sobre = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl mx-auto px-4 py-24 space-y-16">
    <div className="relative rounded-[4rem] overflow-hidden bg-brand-primary h-80 flex items-center justify-center text-center p-12">
      <div className="absolute inset-0 grayscale opacity-20 contrast-125">
        <img src="https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" />
      </div>
      <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-brand-moss">A Missão Passeio Feliz</h1>
    </div>

    <div className="max-w-none space-y-8 text-slate-600">
      <p className="text-xl leading-relaxed font-medium">O Passeio Feliz nasceu da paixão por cães e da necessidade de compartilhar informação técnica de forma acessível.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-slate-900">Objetivo do Portal</h3>
          <p>Nosso objetivo é reduzir o abandono e melhorar a qualidade de vida dos animais através da educação. Donos bem informados criam cães mais felizes e saudáveis.</p>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-slate-900">Bem-estar Animal</h3>
          <p>Acreditamos que o passeio é o pilar fundamental do bem-estar. Não é apenas exercício, é saúde mental, conexão e exploração sensorial.</p>
        </div>
      </div>

      <div className="bg-slate-100 p-12 rounded-[3rem]">
        <h3 className="text-2xl font-bold text-slate-900 mb-6">Nossos Compromissos</h3>
        <ul className="space-y-4">
          <li className="flex gap-4">
            <span className="text-brand-secondary font-bold">01.</span>
            <span>Informação baseada em diretrizes de organizações internacionais (AVMA, ASPCA).</span>
          </li>
          <li className="flex gap-4">
            <span className="text-brand-secondary font-bold">02.</span>
            <span>Conteúdo 100% gratuito e de código aberto.</span>
          </li>
          <li className="flex gap-4">
            <span className="text-brand-secondary font-bold">03.</span>
            <span>Foco total na experiência e segurança do animal.</span>
          </li>
        </ul>
      </div>
    </div>
  </motion.div>
);

const Contato = () => {
  const [submitted, setSubmitted] = useState(false);
  
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-7xl mx-auto px-4 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div className="space-y-12">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary">Fale Conosco</h1>
            <p className="text-slate-500 text-lg">Tem alguma dúvida sobre passeios seguros? Use o formulário ao lado para compartilhar sua mensagem conosco.</p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">Perguntas Frequentes</h3>
            <div className="space-y-4">
              {[
                { q: "Qual a melhor guia para filhotes?", a: "Recomendamos peitorais em Y e guias fixas de 1.5m a 2m." },
                { q: "Com que idade posso começar a passear?", a: "Geralmente após a última dose das vacinas (V10, raiva). Consulte seu veterinário." }
              ].map((faq, i) => (
                <div key={i} className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <p className="font-bold text-slate-900 mb-2">{faq.q}</p>
                  <p className="text-sm text-slate-500">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white p-12 lg:p-16 rounded-[3.5rem] shadow-xl shadow-slate-200/50 border border-slate-100">
          {submitted ? (
            <div className="text-center space-y-6 py-12">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                <ShieldCheck size={40} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Mensagem Enviada!</h2>
              <p className="text-slate-500 underline cursor-pointer" onClick={() => setSubmitted(false)}>Enviar outra mensagem</p>
            </div>
          ) : (
            <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Nome Completo</label>
                <input required type="text" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all" placeholder="Como podemos te chamar?" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Email</label>
                <input required type="email" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all" placeholder="exemplo@email.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Assunto</label>
                <input required type="text" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all" placeholder="Ex: Dúvida sobre equipamento" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Mensagem</label>
                <textarea required rows={5} className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all resize-none" placeholder="Conte-nos sua dúvida ou sugestão..."></textarea>
              </div>
              <button type="submit" className="w-full py-5 bg-brand-secondary text-white font-bold rounded-2xl shadow-lg shadow-brand-secondary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                Enviar Mensagem
              </button>
            </form>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// --- Main App Component ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans selection:bg-brand-primary/30">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dicas" element={<Dicas />} />
            <Route path="/seguranca" element={<Seguranca />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
