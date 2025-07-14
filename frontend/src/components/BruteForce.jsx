import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function BruteForce() {
  const [result , setResult] =useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const runBruteForce = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult('running Brute Force attack!...');
    try{
      const res = await fetch('http://localhost:4000/api/bruteforce');
      const data= await res.json();

      setResult(data.output);
      setLoading(false);
      if(data.output.startsWith('Found:')) {
        setTimeout(() => navigate('/success'), 1500); 
      }
    } catch (err) {
      console.error('Error running brute force:', err);
      setResult('An error occurred while running the brute force attack.');
      setLoading(false);
    }
  }

  return (
    <div>
      <h2>Brute Force Simulation</h2>
        <form onSubmit={runBruteForce}>
        
        <button type='submit' >          {loading ? 'Running...' : 'Run Brute Force'}
</button>
        <pre style={{  padding: 10, marginTop: 20 }}>{result}</pre>
      </form>
    </div>
  )
}

export default BruteForce