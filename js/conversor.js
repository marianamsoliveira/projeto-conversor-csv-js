(function () {


    function escreverJson(arrayCsv) {
        const textoJsonFinal = []
        const valores = []
        arrayCsv = arrayCsv.split('\n')
        
        const chaves = arrayCsv[0].split(',')
        
        for (let i = 1; i < arrayCsv.length; i++) {
            valores.push(arrayCsv[i])
        }
        
        
        for (let j = 0; j < valores.length; j++) {
            let textoJson = "{"
            let valor = valores[j].split(",")
            for (let i = 0; i < chaves.length; i++) {
                if(/^\d+$/.test(valor[i])){
                    textoJson +=`"${chaves[i]}":${valor[i]}`

                }else{
                    textoJson +=`"${chaves[i]}":"${valor[i]}"`

                }
                if(i+1<chaves.length){
                    textoJson += ","
                }
            }
            textoJson += "}"
            textoJsonFinal.push(textoJson)
        }
        return textoJsonFinal
    }
    function conversor() {
        const botaoAcionado = document.getElementById('botao-converter')
        botaoAcionado.addEventListener("click", () => {
            const textoCsv = document.getElementById('texto-csv')
            const arrayCsv = textoCsv.value
            
            const textoJson = document.getElementById('texto-json')

            resultados = escreverJson(arrayCsv)

            textoJson.innerHTML = `[`
            for (let i = 0; i < resultados.length; i++) {
                textoJson.innerHTML += `${resultados[i]}`
                if (i + 1 < resultados.length) {
                    textoJson.innerHTML += `,`
                }
            }
            textoJson.innerHTML += `]`
            const json = JSON.parse(textoJson.innerHTML);
            const jsonFormatado = JSON.stringify(json, null, 2)
            textoJson.textContent = jsonFormatado            
        })
    }

    conversor()
})()