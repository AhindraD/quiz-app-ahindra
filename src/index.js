import ReactDOM from 'react-dom/client';
import Game from './components/Game';
import '.style.css';

function Run() {
  return (
    <Game />
  )
}

let reactRoot = ReactDOM.createRoot(document.getElementById('root'));

reactRoot.render(<Run />);
