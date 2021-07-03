function verificar(){
    let texto = document.getElementById("txt_nome").value
    let texto2 = document.getElementById("txt_verifica").value
    
    if (texto.indexOf(texto2) > -1){
        alert('O intervalo '+texto2+' está contido em '+texto);
    }
    else{
        alert('O intervalo '+texto2+' não está contido em '+texto);
    }
}