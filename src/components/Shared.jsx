import { Link } from 'react-router-dom';
import Icon from './Icon';

export function ButtonLink({ to, children, secondary = false, className = '' }) {
  return <Link to={to} className={`button ${secondary ? 'button-secondary' : 'button-primary'} ${className}`}>{children}<Icon size={19} /></Link>;
}

export function PageIntro({ number, label, title, accent, children }) {
  return <section className="page-intro"><div className="container"><div className="breadcrumb"><Link to="/">Início</Link><span>/</span><span>{label}</span></div><div className="eyebrow"><span /> {number} · {label}</div><h1>{title} <em>{accent}</em></h1><p className="intro-description">{children}</p></div></section>;
}

export function CallToAction() {
  return <section className="container cta-wrap"><div className="cta"><div className="cta-heart"><Icon name="heart" size={45} /></div><div><span className="eyebrow">CONHECIMENTO QUE FAZ PARTE DO CUIDADO</span><h2>Uma conversa pode ser<br />o começo de uma boa ideia.</h2><p>Conheça a proposta e compartilhe suas dúvidas sobre o projeto.</p></div><ButtonLink to="/contato">Vamos conversar</ButtonLink></div></section>;
}
