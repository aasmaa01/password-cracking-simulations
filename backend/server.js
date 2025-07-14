import express from 'express';
import cors from 'cors';
import { exec } from 'child_process';

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/bruteforce', (req, res) => {
  exec('python brute_force.py', {
  cwd: '../brute_force/brute_force'
},  (error, stdout, stderr) => {
    if (error) {
      console.error('Erreur lors de l’exécution du script Python :', stderr);
      return res.status(500).send({ error: 'Erreur interne', details: stderr });
    }
    res.send({ output: stdout });
  });
});



app.post('/hydra', (req, res) => {
  const { username, password } = req.body;

  fs.writeFileSync('base.txt', username);
  fs.writeFileSync('wordlist.txt', password);

  const cmd = `hydra -L base.txt -P wordlist.txt localhost http-post-form "/login:email=^USER^&password=^PASS^:Invalid credentials"`;

  exec(cmd, (err, stdout, stderr) => {
    if (err) {
      console.error('Hydra error:', stderr);
      return res.status(500).json({ error: 'Erreur Hydra', details: stderr });
    }

    res.json({ output: stdout });
  });
});

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`Serveur en ligne sur http://localhost:${PORT}`);
});
