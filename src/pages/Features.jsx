import { useState } from 'react';
import { PageIntro, ButtonLink } from '../components/Shared';
import Icon from '../components/Icon';

const resources = {
  aluno: [
    ['game', 'Seu ritmo, seu desafio', 'Perguntas organizadas por tema e dificuldade para explorar diferentes conteúdos.'],
    ['people', 'Aprender em companhia', 'Partidas individuais ou salas com código de convite para jogar com outro aluno.'],
    ['chart', 'Um olhar sobre sua evolução', 'Pré-teste e pós-teste com as mesmas perguntas para comparar os resultados.'],
    ['book', 'Seu percurso registrado', 'Histórico individual para consultar os resultados das partidas concluídas.'],
  ],
  professor: [
    ['chart', 'Resultados da turma', 'Consulta às avaliações individuais e às médias da turma para apoiar o acompanhamento.'],
    ['book', 'Conteúdo construído em conjunto', 'Criação de perguntas que passam pela aprovação do administrador antes de entrar no jogo.'],
    ['people', 'Relatórios de partidas', 'Resultados por turma com filtros de período para observar as atividades dos estudantes.'],
    ['spark', 'Indicadores por tema', 'Distribuição das perguntas por categoria e situação de revisão no banco de questões.'],
  ],
  admin: [
    ['shield', 'Gestão de acesso', 'Aprovação de solicitações de professor e gerenciamento das contas do sistema.'],
    ['check', 'Moderação de perguntas', 'Revisão, aprovação ou recusa das questões enviadas pelos professores.'],
    ['people', 'Organização de contas', 'Ativação e desativação de usuários e controle dos perfis de acesso.'],
    ['book', 'Solicitações de privacidade', 'Acompanhamento dos pedidos dos usuários e registro das respostas no sistema.'],
  ],
};
const audiences = [['aluno', 'Para estudantes'], ['professor', 'Para professores'], ['admin', 'Para administração']];

export default function Features() {
  const [audience, setAudience] = useState('aluno');
  return <>
    <PageIntro number="03" label="Funcionalidades" title="Cada recurso tem" accent="um propósito.">Explore os recursos do sistema completo e entenda como cada perfil participa da experiência do ConectaSaúde.</PageIntro>
    <section className="container section"><div className="section-heading"><div><span className="eyebrow">DIFERENTES PAPÉIS, UMA MESMA PROPOSTA</span><h2>Um olhar para<br /><em>cada participante.</em></h2></div><p>Selecione um perfil para conhecer as ferramentas disponíveis no projeto original.</p></div><div className="audience-filter" role="group" aria-label="Filtrar recursos por perfil">{audiences.map(([key, label]) => <button key={key} aria-pressed={audience === key} className={audience === key ? 'is-selected' : ''} onClick={() => setAudience(key)}>{label}</button>)}</div><div className="features-grid" aria-live="polite">{resources[audience].map(([icon, title, description], index) => <article className="feature-card" key={title}><span className={`icon-box ${index % 2 ? 'peach' : 'green'}`}><Icon name={icon} size={27} /></span><span className="feature-index">0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div><div className="info-note"><Icon name="code" /><p>Os recursos acima descrevem o sistema original. Esta apresentação em React funciona de forma independente, sem conexão com o banco de dados.</p></div></section>
    <section className="security-section"><div className="container security-grid"><div className="security-symbol"><Icon name="shield" size={90} /><span aria-hidden="true">✳</span></div><div><span className="eyebrow">ATENÇÃO A QUEM PARTICIPA</span><h2>Educação também pede<br /><em>responsabilidade.</em></h2><p>O sistema original inclui confirmação de acesso em duas etapas, permissões por perfil e solicitações de privacidade.</p><p>As perguntas enviadas pelos professores passam pela revisão da administração antes de aparecerem nas partidas.</p><ButtonLink to="/sobre" secondary>Conheça a proposta</ButtonLink></div></div></section>
    <section className="container next-page"><div><span className="eyebrow">CONTINUE EXPLORANDO</span><h2>Quer ver o caminho na prática?</h2></div><ButtonLink to="/como-funciona">Veja como funciona</ButtonLink></section>
  </>;
}
