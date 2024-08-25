

import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());

app.get('/metar/:icao', async (req, res) => {
  const icaoCode = req.params.icao;
  const url = `https://avwx.rest/api/metar/${icaoCode}`;

  try {
    const response = await fetch(url, {
      headers: {
        'Authorization': 'BEARER Wb6bHGDnFYz2amm0hyHv7kl-MTiEChkrSyYOk1_xyWk'
      }
    });

    if (!response.ok) {
      throw new Error(`Erro na API: ${response.statusText}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Erro ao buscar METAR:', error);
    res.status(500).send('Erro ao buscar METAR');
  }
});

app.listen(port, () => {
  console.log(`Servidor proxy rodando em http://localhost:${port}`);
});
