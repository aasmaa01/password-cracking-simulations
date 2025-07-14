import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container">
      <h1>Password Cracking Showcase</h1>
      <ul>
        <li><Link to="/bruteforce">Brute‑Force Attack</Link></li>
        <li><Link to="/dictionary">Dictionary Attack</Link></li>
        <li><Link to="/hydra">Hydra Attack</Link></li>
        <li><Link to="/rainbow">Rainbow Table Attack</Link></li>
      </ul>
    </div>
  );
}
