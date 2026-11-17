import { useState } from 'react';
import Icon from './Icon';

const options = ['Somente pela pontuação de uma partida.', 'Comparando as avaliações antes e depois de jogar.', 'Pela quantidade de vezes que entra no site.'];

export default function QuizDemo({ compact = false }) {
  const [selected, setSelected] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const correct = selected === 1;
  return <div className={`quiz-card ${compact ? 'quiz-compact' : ''}`}>
    <div className="quiz-top"><span><Icon name="game" size={18} /> EXPERIMENTE A IDEIA</span><span className="demo-label">Demonstração</span></div>
    <div className="quiz-progress"><span /></div>
    <span className="quiz-topic">CONHECENDO O CONECTASAÚDE</span>
    <h3>Como acompanhar o que você aprendeu?</h3>
    <p>Escolha uma alternativa e descubra.</p>
    <fieldset disabled={confirmed}><legend className="sr-only">Como acompanhar o que você aprendeu?</legend>{options.map((option, index) => <label key={option} className={`quiz-option ${selected === index ? 'selected' : ''} ${confirmed && index === 1 ? 'correct' : ''} ${confirmed && selected === index && !correct ? 'incorrect' : ''}`}><input type="radio" name={compact ? 'quiz-home' : 'quiz-full'} value={index} checked={selected === index} onChange={() => setSelected(index)} /><span className="option-letter">{String.fromCharCode(65 + index)}</span><span>{option}</span>{confirmed && index === 1 && <Icon name="check" size={17} />}</label>)}</fieldset>
    {confirmed ? <><div className={`quiz-feedback ${correct ? '' : 'try-again'}`} role="status"><strong>{correct ? 'Isso mesmo!' : 'Vamos aprender juntos?'}</strong><p>O pré-teste e o pós-teste ajudam a comparar os conhecimentos antes e depois das partidas.</p></div><button className="quiz-confirm" onClick={() => { setSelected(null); setConfirmed(false); }}>Tentar novamente <Icon name="arrow" size={17} /></button></> : <button className="quiz-confirm" disabled={selected === null} onClick={() => setConfirmed(true)}>Conferir resposta <Icon name="arrow" size={17} /></button>}
    {!compact && <p className="demo-disclaimer">Exemplo interativo desta apresentação. Nenhuma resposta é salva no sistema.</p>}
  </div>;
}
