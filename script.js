console.log("Привествую тебя, новый пользователь!");
console.error("Что-то пошло не так :(");
console.warn("Может медленней? :(");

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
    if (name == 'BioTech Iso Whey Zero, 500 гр') {
        productNumber = 0;
    } else if (name == 'BioTech 100% Pure Whey, 454 гр') {
        productNumber = 1;
    } else if (name == 'BioTech 100% Pure Whey, 28 гр') {
        productNumber = 2;
    } else if (name == 'BioTech Mult for Women, 60 таб') {
        productNumber = 3;
    } else if (name == 'BioTech Mult for Men, 60 таб') {
        productNumber = 4;
    } else if (name == 'BioTech BCAA Zero, 360 гр') {
        productNumber = 5;
    } else if (name == 'Maxler 100% Golden Whey, 908 гр') {
        productNumber = 6;
    } else if (name == 'Maxler Creatine bag, 500 гр') {
        productNumber = 7;
    } else if (name == 'Maxler Special Mass Gainer, 2730 гр') {
        productNumber = 8;
    } else if (name == 'Maxler Ultra Whey bag, 900 гр') {
        productNumber = 9;
    } else if (name == 'Maxler Vitamen, 90 таб') {
        productNumber = 10;
    } else if (name == 'Maxler Glucosamine, 90 таб') {
        productNumber = 11;
    } else if (name == 'Maxler Vitawomen, 90 таб') {
        productNumber = 12;
    } else if (name == 'Maxler Daily Caps, 120 капс') {
        productNumber = 13;
    } else if (name == 'Maxler Creatine, 100 капс') {
        productNumber = 14;
    } else if (name == 'Whey Gold Standard, 909 гр') {
        productNumber = 15;
    } else if (name == 'Serious Mass, 2720 гр') {
        productNumber = 16;
    } else if (name == 'Opti-women, 120 капс') {
        productNumber = 17;
    } else if (name == 'Gold Standard Pre-workout, 300 гр') {
        productNumber = 18;
    } else if (name == 'Multicomponent Protein, 1000 гр') {
        productNumber = 19;
    } else if (name == 'Egg Protein, 600 гр') {
        productNumber = 20;
    } else if (name == 'Chikalab, 60 гр') {
        productNumber = 21;
    } else if (name == 'Flavored BCAA Powder, 457 гр') {
        productNumber = 22;
    } else if (name == 'Prostar Whey, 907 гр') {
        productNumber = 23;
    } else if (name == 'Muscle Juice Revolution, 2120 гр') {
        productNumber = 24;
    } else {
    
        alert('Товар не найден');
    }

    let cards = document.getElementsByClassName('card');
    if (name == '') {
        cards[0].style.display = "inline-block";
        cards[1].style.display = "inline-block";
        cards[2].style.display = "inline-block";
        cards[3].style.display = "inline-block";
        cards[4].style.display = "inline-block";
        cards[5].style.display = "inline-block";
        cards[6].style.display = "inline-block";
        cards[7].style.display = "inline-block";
        cards[8].style.display = "inline-block";
        cards[9].style.display = "inline-block";
        cards[10].style.display = "inline-block";
        cards[11].style.display = "inline-block";
        cards[12].style.display = "inline-block";
        cards[13].style.display = "inline-block";
        cards[14].style.display = "inline-block";
        cards[15].style.display = "inline-block";
        cards[16].style.display = "inline-block";
        cards[17].style.display = "inline-block";
        cards[18].style.display = "inline-block";
        cards[19].style.display = "inline-block";
        cards[20].style.display = "inline-block";
        cards[21].style.display = "inline-block";
        cards[22].style.display = "inline-block";
        cards[23].style.display = "inline-block";
        cards[24].style.display = "inline-block";
    }
    else {
        cards[0].style.display = "none";
        cards[1].style.display = "none";
        cards[2].style.display = "none";
        cards[3].style.display = "none";
        cards[4].style.display = "none";
        cards[5].style.display = "none";
        cards[6].style.display = "none";
        cards[7].style.display = "none";
        cards[8].style.display = "none";
        cards[9].style.display = "none";
        cards[10].style.display = "none";
        cards[11].style.display = "none";
        cards[12].style.display = "none";
        cards[13].style.display = "none";
        cards[14].style.display = "none";
        cards[15].style.display = "none";
        cards[16].style.display = "none";
        cards[17].style.display = "none";
        cards[18].style.display = "none";
        cards[19].style.display = "none";
        cards[20].style.display = "none";
        cards[21].style.display = "none";
        cards[22].style.display = "none";
        cards[23].style.display = "none";
        cards[24].style.display = "none";
    }

    let card = cards[productNumber];
    card.style.display = 'inline-block';
    card.style.border = 'lpx dashed red';
    card.style.backgroundColor = 'Grey';

    setTimeout(function() {
        card.style.border = 'none';
        card.style.backgroundCollor = '';
    }, 2000);
}

function loaded() {
    let searchbox = document.getElementById('search');
    searchbox.addEventListener('keydown', function (key) {
        if(key.key == 'Enter')
            search();
    });
}

javascript
const resultButton = document.querySelector('.test-button input');
const answerBlock = document.getElementById('aswer1');
resultButton.addEventListener('click', function() {
    answerBlock.style.display = 'block';
});