import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageIntro } from '../components/Shared';
import Icon from '../components/Icon';

export default function Contact() {
  const [status, setStatus] = useState('');
  const [draft, setDraft] = useState(null);
  function prepareMessage(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get('name').trim().length < 2 || data.get('message').trim().length < 10) {
      setStatus('Informe um nome com pelo menos 2 caracteres e uma mensagem com pelo menos 10 caracteres, sem contar os espaços das pontas.');
      return;
    }
    const text = `Mensagem sobre o ConectaSaúde\n\nNome: ${data.get('name').trim()}\nE-mail: ${data.get('email').trim()}\nAssunto: ${data.get('subject')}\n\n${data.get('message').trim()}`;
    setDraft(text);
    setStatus('Rascunho preparado. Você pode copiar ou baixar o texto. Nenhuma mensagem foi enviada.');
  }
  async function copyMessage() {
    try { await navigator.clipboard.writeText(draft); setStatus('Texto copiado. Compartilhe pelo canal de contato da sua equipe.'); }
    catch { setStatus('A cópia automática não está disponível. Selecione o texto abaixo ou baixe o rascunho.'); }
  }
  function downloadMessage() {
    const url = URL.createObjectURL(new Blob([draft], { type: 'text/plain;charset=utf-8' }));
    const anchor = document.createElement('a'); anchor.href = url; anchor.download = 'mensagem-conectasaude.txt'; anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setStatus('Rascunho baixado. Nenhuma mensagem foi enviada.');
  }
  return <>
    <PageIntro number="04" label="Contato" title="Boas ideias começam" accent="com uma conversa.">Tem uma dúvida sobre a proposta ou uma sugestão para o projeto? Organize sua mensagem por aqui.</PageIntro>
    <section className="container section contact-grid"><div className="contact-copy"><span className="eyebrow">VAMOS CONVERSAR SOBRE O PROJETO</span><h2>Sua curiosidade<br />tem <em>espaço aqui.</em></h2><p>O ConectaSaúde é uma proposta acadêmica. Dúvidas, sugestões e olhares diferentes ajudam a discutir e melhorar a experiência.</p><div className="contact-channel"><span className="icon-box green"><Icon name="code" /></span><div><h3>Acompanhe o código</h3><p>Consulte o repositório do sistema original.</p><a href="https://github.com/Nickk-eng/conectasaude" target="_blank" rel="noreferrer">Ver projeto no GitHub <Icon size={16} /></a></div></div><div className="contact-channel"><span className="icon-box peach"><Icon name="chat" /></span><div><h3>Quer entender melhor?</h3><p>Veja as respostas sobre o funcionamento.</p><Link to="/como-funciona">Explore as dúvidas frequentes <Icon size={16} /></Link></div></div><div className="contact-reminder"><Icon name="mail" size={25} /><p>O formulário prepara um rascunho para você compartilhar. Os dados ficam apenas nesta página e não são enviados a um servidor.</p></div></div><div className="contact-form-wrap"><form className="contact-form" onSubmit={prepareMessage} onChange={() => { setDraft(null); setStatus(''); }}><h3>Prepare sua mensagem</h3><p>Preencha os campos para gerar um texto pronto para compartilhar.</p><label htmlFor="name">Seu nome <span>(obrigatório)</span></label><input id="name" name="name" autoComplete="name" required minLength={2} maxLength={100} pattern=".*\S.*" placeholder="Como podemos chamar você?" /><label htmlFor="email">Seu e-mail <span>(obrigatório)</span></label><input id="email" name="email" type="email" autoComplete="email" required maxLength={150} placeholder="voce@exemplo.com" /><label htmlFor="subject">Sobre o que quer conversar?</label><select id="subject" name="subject" defaultValue="Dúvida sobre o projeto"><option>Dúvida sobre o projeto</option><option>Sugestão de melhoria</option><option>Uso em sala de aula</option><option>Outro assunto</option></select><label htmlFor="message">Sua mensagem <span>(obrigatório)</span></label><textarea id="message" name="message" rows={5} required minLength={10} maxLength={3000} placeholder="Conte um pouco sobre sua dúvida ou ideia…" /><p className="form-note">Evite incluir informações de saúde ou outros dados sensíveis.</p><button className="button button-primary" type="submit">Preparar mensagem <Icon size={18} /></button></form><div className="form-status" role="status">{status}</div>{draft && <div className="draft-result"><h3>Seu rascunho</h3><textarea aria-label="Mensagem preparada" readOnly rows={9} value={draft} /><div className="draft-actions"><button onClick={copyMessage} className="button button-primary">Copiar texto</button><button onClick={downloadMessage} className="button button-secondary">Baixar texto</button></div></div>}</div></section>
  </>;
}
