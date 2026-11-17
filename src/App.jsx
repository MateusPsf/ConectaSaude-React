import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { ButtonLink } from './components/Shared';
import Home from './pages/Home';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import Features from './pages/Features';
import Contact from './pages/Contact';

// Cada rota é uma página. Cabeçalho e rodapé são compartilhados pelo Layout.
export default function App() {
  return <Layout><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sobre" element={<About />} />
    <Route path="/como-funciona" element={<HowItWorks />} />
    <Route path="/funcionalidades" element={<Features />} />
    <Route path="/contato" element={<Contact />} />
    <Route path="*" element={<section className="container section not-found"><span className="eyebrow">PÁGINA NÃO ENCONTRADA</span><h1>Vamos voltar<br /><em>ao começo?</em></h1><p>Esse endereço não faz parte da apresentação.</p><ButtonLink to="/">Voltar ao início</ButtonLink></section>} />
  </Routes></Layout>;
}
