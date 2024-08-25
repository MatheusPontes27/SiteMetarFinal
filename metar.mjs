

document.getElementById('fetchMetar').addEventListener('click', () => {
    const icaoCode = document.getElementById('icaoInput').value.toUpperCase();
    if (icaoCode) {
        fetch(`http://localhost:3000/metar/${icaoCode}`)
            .then(response => response.text())
            .then(data => {
                document.getElementById('metar-output').textContent = data;
                document.getElementById('translateMetar').style.display = 'block'; // Exibe o botão de tradução
            })
            .catch(error => {
                console.error('Erro ao buscar METAR:', error);
                document.getElementById('metar-output').textContent = 'Erro ao buscar METAR.';
            });
    } else {
        alert('Por favor, insira um código ICAO.');
    }
});

document.getElementById('translateMetar').addEventListener('click', () => {
    const metar = document.getElementById('metar-output').textContent;
    const translation = translateMetar(metar);
    document.getElementById('translated-output').textContent = translation;
});

// Função para traduzir o METAR
function translateMetar(metar) {
    const translation = [];

    // 1. Estação e Data/Hora
    const stationAndTime = metar.match(/([A-Z]{4})\s(\d{6}Z)/);
    if (stationAndTime) {
        translation.push(`Estação: ${stationAndTime[1]}, Emitido em: ${stationAndTime[2]}`);
    }

    // 2. Vento
    const wind = metar.match(/(\d{3})(\d{2})(G(\d{2}))?KT/);
    if (wind) {
        const gust = wind[4] ? `, com rajadas de ${wind[4]} nós` : '';
        translation.push(`Vento: Direção de ${wind[1]}° a ${wind[2]} nós${gust}.`);
    }

    // 3. Visibilidade Horizontal
    const visibility = metar.match(/\s(\d{4})\s/);
    if (visibility) {
        const visibilityInKm = parseInt(visibility[1]) / 1000;
        translation.push(`Visibilidade Horizontal: ${visibilityInKm} km.`);
    }

    // 4. Condições meteorológicas significativas (WX)
    const wx = metar.match(/\s(-|\+)?(RA|SN|FG|BR|TS|DZ|GR|HZ)\s/);
    if (wx) {
        const intensity = wx[1] === '-' ? 'leve' : wx[1] === '+' ? 'forte' : '';
        const phenomena = {
            RA: 'Chuva',
            SN: 'Neve',
            FG: 'Névoa',
            BR: 'Neblina',
            TS: 'Trovoada',
            DZ: 'Chuvisco',
            GR: 'Granizo',
            HZ: 'Névoa seca'
        };
        translation.push(`Fenômeno: ${intensity} ${phenomena[wx[2]]}.`);
    }

    // 5. Nuvens
    const clouds = metar.match(/(FEW|SCT|BKN|OVC)(\d{3})/g);
    if (clouds) {
        const cloudCoverage = {
            FEW: 'Poucas nuvens',
            SCT: 'Nuvens dispersas',
            BKN: 'Nublado',
            OVC: 'Encoberto'
        };
        clouds.forEach(cloud => {
            const coverage = cloud.match(/(FEW|SCT|BKN|OVC)(\d{3})/);
            if (coverage) {
                translation.push(`${cloudCoverage[coverage[1]]} a ${parseInt(coverage[2]) * 100} pés.`);
            }
        });
    }

    // 6. Temperatura e Ponto de Orvalho
    const tempDew = metar.match(/(M?\d{2})\/(M?\d{2})/);
    if (tempDew) {
        const temp = tempDew[1].replace('M', '-') + '°C';
        const dew = tempDew[2].replace('M', '-') + '°C';
        translation.push(`Temperatura: ${temp}, Ponto de Orvalho: ${dew}.`);
    }

    // 7. Pressão Atmosférica
    const pressure = metar.match(/Q(\d{4})/);
    if (pressure) {
        translation.push(`Pressão: ${pressure[1]} hPa.`);
    }

    return translation.length > 0 ? translation.join(' ') : 'Tradução não disponível.';
}