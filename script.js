function showButton(card) {
    let b = card.getElementsByTagName("input")[0];
    b.style.display="inline";
}

function hideButton(card) {
    let b2 = card.getElementsByTagName("input")[0];
    b2.style.display="none";
}

function call() {
    alert('Call-центр в данный момент не работает');
    return false;
}

function buy() {
    alert('Товара нет в наличии :(');
    return false;
}

function notReadyAlert() {
    alert('Not ready yet, please wait...\nЕще не готово, подождите немного...');
    return false;
}

function search(){
    let name = document.getElementById('search').value;
    let productNumber = null;
    
    let cards = document.getElementsByClassName('prod');
    for(let i = 0; i< cards.length; i++){
        cards[i].style.display = cards[i].querySelector('.product-name').innerText.toLowerCase().includes(name.toLowerCase()) ? "inline-block" : "none";
    }

}

function loaded() {

    let searchbox = document.getElementById('search');
    searchbox.addEventListener('keydown', function (key) {
        if(key.key == 'Enter')
            search();
    });

    const resultButton = document.querySelector('.test-button input');
    const answerBlock = document.getElementById('aswer1');
    resultButton.addEventListener('click', function() {
        answerBlock.style.display = 'block';
    });

}







