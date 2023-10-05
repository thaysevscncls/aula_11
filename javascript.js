var num = parseInt(prompt('Insira um número inteiro, par e menor que 100'));

if (num %2 == 0 && num > 0 && num < 100){
    alert('O número atende aos critérios.')
}

else{
    alert('O número não atende aos critérios.')
}