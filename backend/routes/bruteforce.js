import express from 'express';
import cors from 'cors';
import { exec } from 'child_process';

app.get("/api/bruteforce", (req, res) => {
  exec("python3 ../brute_force/brute_force/brute_force.py", (err, stdout, stderr) => {
    if (err) return res.status(500).send(stderr);
    res.send(stdout);
  });
});
