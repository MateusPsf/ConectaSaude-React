import { useState } from 'react';
import { PageIntro, CallToAction } from '../components/Shared';
import QuizDemo from '../components/QuizDemo';
import Icon from '../components/Icon';

const steps = [
  ['Crie sua conta', 'No sistema completo, o estudante se cadastra e informa seu ano escolar para começar seu percurso.'],
  ['Descubra seu ponto de partida', 'O pré-teste é realizado antes da primeira partida e ajuda a reconhecer os conhecimentos iniciais.'],
  ['Escolha seu desafio', 'Selecione um tema e uma dificuldade. Jogue individualmente ou compartilhe uma partida com um colega.'],
  ['Observe sua evolução', 'Depois de jogar, o pós-teste retoma as perguntas da avaliação inicial. O professor pode acompanhar os resultados.'],
];
const faqs = [
  ['Preciso instalar algum aplicativo?', 'A proposta do ConectaSaúde é funcionar pelo navegador. Esta apresentação também pode ser acessada pelo computador, tablet ou celular.'],
  ['O jogo completo está disponível nesta apresentação?', 'Esta versão contém as cinco páginas de apresentação e uma pergunta de demonstração. Login, partidas reais, avaliações e relatórios pertencem ao sistema completo e não estão conectados aqui.'],
  ['Como funciona a participação do professor?', 'No sistema completo, o usuário solicita o perfil de professor. Após a aprovação do administrador, ele pode consultar resultados da turma e enviar perguntas para moderação.'],
  ['Posso jogar com outra pessoa?', 'O sistema completo permite criar uma sala e compartilhar um código com outro aluno. Os dois usam suas próprias contas e precisam ter concluído o pré-teste.'],
];

export default function HowItWorks() {
  const [active, setActive] = useState(null);
  return <>
    <PageIntro number="02" label="Como funciona" title="Um passo de cada vez." accent="Uma descoberta a mais.">Do primeiro acesso à avaliação final, conheça o caminho de aprendizado proposto pelo ConectaSaúde.</PageIntro>
    <section className="container section"><div className="section-heading"><div><span className="eyebrow">O PERCURSO DO ESTUDANTE</span><h2>Aprender é<br /><em>participar do caminho.</em></h2></div><p>Estas etapas descrevem o sistema completo. A demonstração abaixo permite experimentar a interação com uma pergunta.</p></div><ol className="journey">{steps.map(([title, text], index) => <li key={title}><span className="step-number">0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></section>
    <section className="demo-section"><div className="container demo-grid"><div><span className="eyebrow">DA IDEIA À EXPERIÊNCIA</span><h2>A curiosidade<br />começa com uma<br /><em>boa pergunta.</em></h2><p>Experimente uma interação inspirada no projeto. Escolha uma resposta, confira a explicação e tente novamente quando quiser.</p><div className="demo-detail"><Icon name="game" /><span>Uma pergunta para conhecer a proposta.</span></div><div className="demo-detail"><Icon name="shield" /><span>Sem cadastro e sem salvar respostas.</span></div></div><QuizDemo /></div></section>
    <section className="container section faq-section"><div><span className="eyebrow">AINDA TEM DÚVIDAS?</span><h2>Vamos<br /><em>esclarecer.</em></h2></div><div className="faq-list">{faqs.map(([question, answer], index) => <article className="faq-item" key={question}><h3><button aria-expanded={active === index} aria-controls={`faq-${index}`} id={`faq-button-${index}`} onClick={() => setActive(active === index ? null : index)}>{question}<span aria-hidden="true">{active === index ? '−' : '+'}</span></button></h3><div id={`faq-${index}`} role="region" aria-labelledby={`faq-button-${index}`} hidden={active !== index}><p>{answer}</p></div></article>)}</div></section>
    <CallToAction />
  </>;
}
