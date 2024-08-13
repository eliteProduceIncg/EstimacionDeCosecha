const apiKey ='AIzaSyB_etOfj-AxKXFYXThjEj5MGHOcZ8X_FxE'
const spreadsheetId ='1PkT0xVKAOebCFxbqvrGnLLOq16caf92yCDXk5gIyBGo'

const rangeIdHuerta = 'Catalogos!K2:K';
fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${rangeIdHuerta}?key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const selectElement = document.getElementById('IdHuerta');
        data.values.forEach(row => {
            const option = document.createElement('option');
            option.textContent = row[0];
            option.value = row[0];
            selectElement.appendChild(option);
        });
    })
    .catch(error => console.error('Error fetching data: '));

const rangeHuerta = 'Catalogos!L2:L';
fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${rangeHuerta}?key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const selectElement = document.getElementById('Huerta');
        data.values.forEach(row => {
            const option = document.createElement('option');
            option.textContent = row[0];
            option.value = row[0];
            selectElement.appendChild(option);
        });
    })
    .catch(error => console.error('Error fetching data: '));

const rangeCosecha = 'Catalogos!G2:G';
fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${rangeCosecha}?key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const selectElement = document.getElementById('unidadCosecha');
        data.values.forEach(row => {
            const option = document.createElement('option');
            option.textContent = row[0];
            option.value = row[0];
            selectElement.appendChild(option);
        });
    })
    .catch(error => console.error('Error fetching data: '));


    const rangeTitularidad = 'Catalogos!F2:F';
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${rangeTitularidad}?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const selectElement = document.getElementById('Titularidad');
            data.values.forEach(row => {
                const option = document.createElement('option');
                option.textContent = row[0];
                option.value = row[0];
                selectElement.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching data: '));