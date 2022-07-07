import ReactDOM from 'react-dom/client';
import Quiz from './components/Quiz';
import './style.css';

function Run() {
  return (
    <Quiz />
  )
}

let reactRoot = ReactDOM.createRoot(document.getElementById('root'));

reactRoot.render(<Run />);
