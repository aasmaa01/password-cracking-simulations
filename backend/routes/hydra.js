// backend/routes/hydra.js
const express = require('express');
const { spawn } = require('child_process');
const router = express.Router();

router.post('/', (req, res) => {
  const { username } = req.body;
  if (!username) return res.status(400).json({ error: 'Missing username' });

  // Hydra command:
  // hydra -l <username> -P wordlist.txt 127.0.0.1 http-post-form "/login.php:user=^USER^&pass=^PASS^:F=incorrect"
  const hydra = spawn('hydra', [
    '-l', username,
    '-P', 'wordlist.txt',
    '127.0.0.1',
    'http-post-form',
    '/login.php:user=^USER^&pass=^PASS^:F=incorrect'
  ]);

  let output = '';
  hydra.stdout.on('data', data => output += data.toString());
  hydra.stderr.on('data', data => output += data.toString());

  hydra.on('close', () => {
    const match = output.match(/login:\s+(\w+)\s+password:\s+(\S+)/);
    if (match) {
      res.json({ result: `Found: ${match[1]} → ${match[2]}` });
    } else {
      res.json({ result: 'Password not found.' });
    }
  });
});

module.exports = router;
