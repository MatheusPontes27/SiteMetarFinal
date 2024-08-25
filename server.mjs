

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

        const data = await response.json();
        console.log('Resposta da API:', data); // Log a resposta da API

        if (data && data.raw) {
            // Retorna o METAR bruto
            res.send(data.raw);
        } else {
            res.send('Nenhum dado METAR encontrado');
        }
    } catch (error) {
        console.error('Erro ao buscar METAR:', error);
        res.send('Erro ao buscar METAR');
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
