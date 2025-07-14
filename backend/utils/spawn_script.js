const { spawn } = require("child_process");

function executePythonScript(scriptPath, res) {
  const pythonProcess = spawn("python3", [scriptPath]);

  let output = "";
  let error = "";

  pythonProcess.stdout.on("data", (data) => {
    output += data.toString();
  });

  pythonProcess.stderr.on("data", (data) => {
    error += data.toString();
  });

  pythonProcess.on("close", (code) => {
    if (code === 0) {
      res.send(output);
    } else {
      res.status(500).send(error);
    }
  });
}
/*
app.get("/api/bruteforce", (req, res) => {
  executePythonScript("../brute_force/brute_force/brute_force.py", res);
});

app.get("/api/dictionary", (req, res) => {
  executePythonScript("../brute_force/dictionary.py", res);
});

app.get("/api/hydra", (req, res) => {
  executePythonScript("../brute_force/hydra.py", res);
});*/