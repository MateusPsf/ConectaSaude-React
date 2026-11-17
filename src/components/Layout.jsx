import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Icon from './Icon';

const links = [['/', 'Início'], ['/sobre', 'Sobre o projeto'], ['/como-funciona', 'Como funciona'], ['/funcionalidades', 'Funcionalidades'], ['/contato', 'Contato']];

export function Brand({ light = false }) {
  return <Link to="/" className={`brand ${light ? 'brand-light' : ''}`} aria-label="ConectaSaúde, página inicial"><span className="brand-symbol"><Icon name="heart" size={23} /></span><span>Conecta<span className="brand-accent">Saúde</span></span></Link>;
}

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const firstRender = useRef(true);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
    const current = links.find(([path]) => path === location.pathname);
    document.title = `${current?.[1] || 'Página não encontrada'} | ConectaSaúde`;
    // Ao trocar de página, o foco acompanha o conteúdo para leitores de tela.
    if (!firstRender.current) document.getElementById('conteudo')?.focus({ preventScroll: true });
    firstRender.current = false;
  }, [location.pathname]);

  return <>
    <a className="skip-link" href="#conteudo" onClick={(event) => { event.preventDefault(); document.getElementById('conteudo')?.focus(); }}>Pular para o conteúdo</a>
    <header className="site-header" onKeyDown={(event) => { if (event.key === 'Escape' && open) { setOpen(false); document.querySelector('.menu-toggle')?.focus(); } }}>
      <div className="container header-inner">
        <Brand />
        <button className="menu-toggle" aria-expanded={open} aria-controls="navigation" aria-label={open ? 'Fechar menu' : 'Abrir menu'} onClick={() => setOpen(!open)}><Icon name={open ? 'close' : 'menu'} /></button>
        <nav id="navigation" aria-label="Menu principal" className={open ? 'navigation is-open' : 'navigation'}>
          {links.map(([path, label]) => <NavLink key={path} to={path} end={path === '/'} className={({ isActive }) => `${isActive ? 'active' : ''} ${path === '/contato' ? 'nav-contact' : ''}`}>{label}{path === '/contato' && <Icon size={16} />}</NavLink>)}
        </nav>
      </div>
    </header>
    <main id="conteudo" tabIndex={-1}>{children}</main>
    <footer className="site-footer">
      <div className="container footer-top"><div><Brand light /><p>Conhecimento que aproxima.<br />Educação que cuida.</p></div><div className="footer-links"><span className="footer-label">EXPLORE O PROJETO</span>{links.slice(1).map(([path, label]) => <Link key={path} to={path}>{label}</Link>)}</div><div className="footer-note"><span className="footer-label">FEITO PARA APRENDER</span><p>Projeto acadêmico de educação em saúde com jogos e acompanhamento pedagógico.</p><span className="footer-tag"><span /> Educação em saúde</span></div></div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} ConectaSaúde. Projeto acadêmico.</span><span>Informação, acolhimento e aprendizado.</span></div>
    </footer>
  </>;
}
