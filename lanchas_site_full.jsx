import React, { useState } from "react";
import { motion } from "framer-motion";
import { Anchor, Ship, Star, CreditCard, Mail, Lock, Menu, X, Filter, Info, Phone } from "lucide-react";

const NAVY = "#0b1b3a";

export default function LanchasApp() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [authTab, setAuthTab] = useState<"login" | "signup">("login");

  return (
    <div className="min-h-screen bg-white text-slate-900" style={{ fontFamily: "Inter, sans-serif" }}>
      <header className="sticky top-0 bg-white/90 backdrop-blur border-b z-30">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
          <div className="flex items-center gap-2 select-none">
            <div className="h-9 w-9 grid place-content-center rounded-2xl shadow-md" style={{ backgroundColor: NAVY }}>
              <Anchor className="h-5 w-5 text-white" />
            </div>
            <span className="font-black tracking-wide" style={{ color: NAVY }}>Lanchas</span>
          </div>
          <nav className="hidden md:flex items-center gap-4">
            {[
              { label: "Como funciona", href: "#como-funciona" },
              { label: "Capitães", href: "#capitaes" },
              { label: "Lanchas", href: "#lanchas" },
              { label: "Sobre", href: "#sobre" },
              { label: "Contato", href: "#contato" }
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="bg-white text-[rgb(11,27,58)] font-semibold text-sm px-4 py-1.5 rounded-full hover:shadow-md transition-all border border-slate-200"
              >
                {item.label}
              </a>
            ))}
            <button
              className="bg-[rgb(11,27,58)] text-white text-sm px-4 py-1.5 rounded-full hover:bg-[rgb(8,20,44)] transition-all"
              onClick={() => setAuthOpen(true)}
            >
              Entrar
            </button>
          </nav>
          <button onClick={() => setMenuOpen((v) => !v)} className="md:hidden" aria-label="menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="md:hidden border-b bg-white">
          <div className="flex flex-col gap-3 p-4">
            {[
              { label: "Como funciona", href: "#como-funciona" },
              { label: "Capitães", href: "#capitaes" },
              { label: "Lanchas", href: "#lanchas" },
              { label: "Sobre", href: "#sobre" },
              { label: "Contato", href: "#contato" }
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[rgb(11,27,58)] font-semibold text-sm px-4 py-1.5 rounded-full border border-slate-200 text-center"
              >
                {item.label}
              </a>
            ))}
            <button
              className="bg-[rgb(11,27,58)] text-white text-sm px-4 py-1.5 rounded-full"
              onClick={() => setAuthOpen(true)}
            >
              Entrar
            </button>
          </div>
        </div>
      )}

      <main>
        <Hero />
        <LanchasSection />
        <CapitaesSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />

      {authOpen && <AuthModal tab={authTab} onChangeTab={setAuthTab} onClose={() => setAuthOpen(false)} />}
    </div>
  );
}

function Hero() {
  return (
    <section id="como-funciona" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[rgb(11,27,58)]" />
      <div className="max-w-6xl mx-auto px-4 py-20 text-white grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Chegue por água, no seu tempo.</h1>
          <p className="mt-4 text-white/80 text-lg">Reserve lanchas com segurança, preço transparente e capitães avaliados.</p>
          <div className="mt-6 flex gap-3">
            <a
              href="#lanchas"
              className="bg-white text-[rgb(11,27,58)] font-semibold px-5 py-2 rounded-full hover:bg-white/90 transition"
            >
              Começar agora
            </a>
            <a
              href="#lanchas"
              className="border border-white text-white px-5 py-2 rounded-full hover:bg-white/10 transition"
            >
              Ver rotas
            </a>
          </div>
          <div className="mt-6 flex items-center gap-2 text-white/80">
            <Star className="h-4 w-4 text-yellow-400" />
            <span>4.8/5 média de satisfação • 10k+ viagens</span>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <BookingWidget />
        </motion.div>
      </div>
    </section>
  );
}

function BookingWidget() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [seats, setSeats] = useState(1);
  return (
    <div className="bg-white rounded-2xl shadow-xl p-5 text-slate-700" id="rotas">
      <h3 className="font-bold text-[rgb(11,27,58)] flex items-center gap-2">
        <Ship className="h-5 w-5" /> Reservar lancha
      </h3>
      <div className="grid grid-cols-2 gap-3 mt-4">
        <input
          className="border rounded-xl px-3 py-2"
          placeholder="Origem"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
        <input
          className="border rounded-xl px-3 py-2"
          placeholder="Destino"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
        <input
          type="date"
          className="border rounded-xl px-3 py-2 col-span-2"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="number"
          min={1}
          className="border rounded-xl px-3 py-2 col-span-2"
          value={seats}
          onChange={(e) => setSeats(Number(e.target.value) || 1)}
        />
      </div>
      <button className="bg-[rgb(11,27,58)] text-white font-semibold w-full mt-4 py-2 rounded-full hover:bg-[rgb(8,20,44)] transition">
        Ver opções
      </button>
    </div>
  );
}

function LanchasSection() {
  const [filter, setFilter] = useState(0);
  const boats = [
    { name: "Cap. Nogueira", title: "Lancha Vó Maria 28'", rating: 4.9, price: "2.420,00", capacity: 8 },
    { name: "Cap. Silva", title: "Lancha Poseidon 32'", rating: 4.7, price: "3.100,00", capacity: 10 },
    { name: "Cap. Ramos", title: "Lancha Netuno 26'", rating: 4.5, price: "1.980,00", capacity: 6 },
    { name: "Cap. Torres", title: "Lancha Aurora 40'", rating: 4.8, price: "4.250,00", capacity: 16 }
  ];
  const filtered = filter ? boats.filter((b) => b.capacity <= filter) : boats;

  return (
    <section id="lanchas" className="max-w-6xl mx-auto px-4 py-20">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-bold text-[rgb(11,27,58)]">Lanchas disponíveis</h2>
        <div className="flex items-center gap-2 border rounded-full px-3 py-1.5 shadow-sm">
          <Filter className="h-4 w-4 text-slate-500" />
          <select
            value={filter}
            onChange={(e) => setFilter(Number(e.target.value))}
            className="outline-none bg-transparent text-sm text-slate-600"
          >
            <option value={0}>Todas as capacidades</option>
            <option value={6}>Até 6 pessoas</option>
            <option value={8}>Até 8 pessoas</option>
            <option value={10}>Até 10 pessoas</option>
            <option value={16}>Até 16 pessoas</option>
          </select>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((b, i) => (
          <div key={i} className="border rounded-2xl p-5 shadow-sm hover:shadow-md transition">
            <div className="flex justify-between items-center mb-2">
              <div>
                <p className="font-medium text-[rgb(11,27,58)]">{b.name}</p>
                <p className="text-xs text-slate-500">{b.title}</p>
              </div>
              <div className="flex items-center text-yellow-500 font-semibold text-sm">
                <Star className="h-4 w-4 fill-yellow-400" /> {b.rating}
              </div>
            </div>
            <div className="text-xs text-slate-500">Capacidade: {b.capacity} pessoas</div>
            <div className="text-xs text-slate-500 mt-1">Total</div>
            <div className="text-lg font-bold text-[rgb(11,27,58)]">R$ {b.price}</div>
            <button className="bg-[rgb(11,27,58)] text-white w-full mt-3 py-2 rounded-2xl flex items-center justify-center gap-2 hover:bg-[rgb(8,20,44)] transition">
              <CreditCard className="h-4 w-4" /> Reservar
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

function CapitaesSection() {
  const items = [
    { name: "Cap. Nogueira", exp: "12 anos de experiência" },
    { name: "Cap. Silva", exp: "9 anos de experiência" },
    { name: "Cap. Ramos", exp: "7 anos de experiência" }
  ];
  return (
    <section id="capitaes" className="bg-slate-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[rgb(11,27,58)] mb-6">Capitães</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((c) => (
            <div key={c.name} className="rounded-2xl border bg-white p-5 shadow-sm">
              <p className="font-semibold text-[rgb(11,27,58)]">{c.name}</p>
              <p className="text-slate-600 text-sm">{c.exp}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="sobre" className="bg-slate-50 py-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-[rgb(11,27,58)] mb-4">Sobre nós</h2>
          <p className="text-slate-600 leading-relaxed">
            A Lanchas conecta pessoas e experiências únicas através do mar. Nosso compromisso é oferecer conforto, segurança e uma navegação inesquecível, com os melhores capitães e embarcações disponíveis.
          </p>
        </div>
        <div className="flex justify-center">
          <Info className="h-20 w-20 text-[rgb(11,27,58)]" />
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contato" className="py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[rgb(11,27,58)] mb-6">Entre em contato</h2>
        <p className="text-slate-600 mb-6">Tem dúvidas ou quer saber mais? Fale conosco!</p>
        <a
          href="mailto:contato@lanchas.com"
          className="inline-flex items-center gap-2 bg-[rgb(11,27,58)] text-white px-6 py-2 rounded-full hover:bg-[rgb(8,20,44)] transition"
        >
          <Phone className="h-4 w-4" /> contato@lanchas.com
        </a>
      </div>
    </section>
  );
}

function AuthModal({ tab, onChangeTab, onClose }: { tab: "login" | "signup"; onChangeTab: (t: "login" | "signup") => void; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-[rgb(11,27,58)]">{tab === "login" ? "Entrar" : "Criar conta"}</h3>
          <button onClick={onClose} aria-label="Fechar">
            <X className="h-5 w-5 text-slate-500" />
          </button>
        </div>
        <div className="flex mb-4 border rounded-full overflow-hidden">
          <button
            onClick={() => onChangeTab("login")}
            className={`w-1/2 py-2 font-semibold ${tab === "login" ? "bg-[rgb(11,27,58)] text-white" : "bg-slate-100 text-slate-600"}`}
          >
            Entrar
          </button>
          <button
            onClick={() => onChangeTab("signup")}
            className={`w-1/2 py-2 font-semibold ${tab === "signup" ? "bg-[rgb(11,27,58)] text-white" : "bg-slate-100 text-slate-600"}`}
          >
            Criar conta
          </button>
        </div>
        <form className="space-y-4">
          <div>
            <label className="text-sm font-medium text-slate-600">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input type="email" placeholder="voce@exemplo.com" className="border rounded-xl pl-9 py-2 w-full" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-slate-600">Senha</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input type="password" placeholder="••••••••" className="border rounded-xl pl-9 py-2 w-full" />
            </div>
          </div>
          <button type="submit" className="bg-[rgb(11,27,58)] text-white w-full py-2 rounded-full font-semibold hover:bg-[rgb(8,20,44)] transition">
            {tab === "login" ? "Entrar" : "Cadastrar"}
          </button>
        </form>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t mt-20">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <p className="font-black text-[rgb(11,27,58)]">Lanchas</p>
          <p className="text-slate-600">Conectando portos e pessoas com segurança e transparência.</p>
        </div>
        <div>
          <p className="font-semibold text-[rgb(11,27,58)] mb-2">Empresa</p>
          <ul className="text-slate-600 space-y-1">
            <li>Sobre</li>
            <li>Carreiras</li>
            <li>Imprensa</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-[rgb(11,27,58)] mb-2">Suporte</p>
          <ul className="text-slate-600 space-y-1">
            <li>Ajuda</li>
            <li>Termos & Privacidade</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 py-4">© {new Date().getFullYear()} Lanchas • Made at sea</div>
    </footer>
  );
}
