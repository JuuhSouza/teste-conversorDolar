function convert(){
    var usdValue = document.getElementById('usdInput').value;
    var exchangeRate = 0.20;
    var inrValue = (usdValue * exchangeRate).toFixed(2);
    document.getElementById('InrInput').value = inrValue;

}