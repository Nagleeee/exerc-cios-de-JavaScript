function calcularex1(){
//variáveis
    let aex1 
    let bex1
    let cex1
    let respex1

//leitura
    aex1 = parseFloat(document.getElementById("aex1").value)
    bex1 = parseFloat(document.getElementById("bex1").value)
    cex1 = parseFloat(document.getElementById("cex1").value)
   
//processamento
    respex1 = (aex1*bex1 * (aex1/bex1 * (bex1-cex1)))

//impressão
    document.getElementById("respex1").innerHTML = "Resultado: Valor de X = " + respex1

}

function calcularex2(){
//variáveis
    let Bex2
    let bex2
    let hex2
    const t = 2
    let respex2

//leitura
    Bex2 = parseFloat(document.getElementById("Bex2").value)
    bex2 = parseFloat(document.getElementById("bex2").value)
    hex2 = parseFloat(document.getElementById("hex2").value)

//processamento
    respex2 = (Bex2 + bex2) * hex2/ t

//impressão
    document.getElementById("respex2").innerHTML = "Resultado: A área do trapésio é igual a " + respex2

}

function calcularex3(){
//variável
    let aex3
    let bex3
    let cex3
    let respex3

//leitura
    aex3 = parseFloat(document.getElementById("aex3").value)
    bex3 = parseFloat(document.getElementById("bex3").value)
    cex3 = parseFloat(document.getElementById("cex3").value)

//processamento
    respex3 = aex3**2 + bex3**2 + cex3

//impressão
    document.getElementById("respex3").innerHTML = "Resultado: " + respex3

}

function calcularex4(){
//variável
    let numero1
    let numero2
    let numero3
    let medianumeros
    
//leitura
    numero1 = parseFloat(document.getElementById("1ex4").value)
    numero2 = parseFloat(document.getElementById("2ex4").value)
    numero3 = parseFloat(document.getElementById("3ex4").value)
    
//processamento
    medianumeros = (numero1 + numero2 + numero3) / 3    

//impressão
    document.getElementById("medianumeros").innerHTML = "Resultado: a média é " + medianumeros

}

function calcularex5(){
//variável
    let aex5
    let bex5
    let respex5
    
//leitura
    aex5 = parseFloat(document.getElementById("aex5").value)
    bex5 = parseFloat(document.getElementById("bex5").value)

//processamento
    respex5 = aex5**3 + bex5**2

//impressão
    document.getElementById("respex5").innerHTML = "Resiltado: " + respex5

}