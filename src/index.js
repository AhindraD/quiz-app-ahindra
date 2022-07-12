import ReactDOM from 'react-dom/client';
import Quiz from './components/Quiz';
import './style.css';
import { BrowserRouter } from "react-router-dom";

function Run() {
  return (
    <BrowserRouter>
      <Quiz />
    </BrowserRouter>
  )
}

let reactRoot = ReactDOM.createRoot(document.getElementById('root'));

reactRoot.render(<Run />);
