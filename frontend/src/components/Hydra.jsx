import {useState} from 'react'

function Hydra() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
   
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult('Launching Hydra...');

    const res = await fetch('http://localhost:4000/hydra', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    setResult(data.result);
    setLoading(false);
  };

  return (
    <div>
      <h2>🧠 Hydra Launcher</h2>
      <form onSubmit={handleSubmit}>
        <h4>username</h4>
        <textarea
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          rows={6}
          style={{ width: '100%', marginBottom: 10 }}
        />

        <h4>Passwords</h4>
        <textarea
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          rows={6}
          style={{ width: '100%', marginBottom: 10 }}
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Running...' : 'Run Hydra'}
        </button>
      </form>
      <pre
        style={{
          marginTop: 20,
          padding: 10,
          whiteSpace: 'pre-wrap',
        }}
      >
        {result}
      </pre>
    </div>
  );
}

export default Hydra;