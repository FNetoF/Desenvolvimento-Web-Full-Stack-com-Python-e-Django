/*
    Calcular se é melhor usar álcool ou gasolina
    se valorAlcool / valorGasolina >= 0.7 é melhor
    utilizar gasolina 
    se não é melhor utlizar álcool
*/

function calcularMelhorPreco() {
    
    //Valida campos  
    const precoAlcool = document.getElementById('alcool').value
    const precoGasolina = document.getElementById('gasolina').value

    if (precoAlcool != "") {
        if (precoGasolina != "") {
            let result = precoAlcool / precoGasolina
            if (result >= 0.7) {
                // alert("Melhor ultilizar Gasolina")
                document.getElementById('resultado').innerHTML = "Melhor ultilizar Gasolina"
            }
            else {
                // alert("Melhor utilizar Álcool")
                document.getElementById('resultado').innerHTML = "Melhor ultilizar Álcool"
            }
        }
        else {
            alert("Preencha o perço do Gasolina");
        }
    }
    else {
        alert("Preencha o perço do Álcool")
    }
}
