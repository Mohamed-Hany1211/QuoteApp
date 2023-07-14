var arr = [
    Qoute0 = {
        qoute: 'Be yourself; everyone else is already taken.',
        auother: '― Oscar Wilde'
    },
    Qoute1 = {
        qoute: 'So many books, so little time.',
        auother: '― Frank Zappa'
    },
    Qoute2 = {
        qoute: 'A room without books is like a body without a soul.',
        auother: '― Marcus Tullius Cicero'
    },
    Qoute3 = {
        qoute: 'Be who you are and say what you feel, because those who mind dont matter, and those who matter dont mind.',
        auother: '― Bernard M. Baruch'
    },
    Qoute4 = {
        qoute: 'Be the change that you wish to see in the world.',
        auother: '― Mahatma Gandhi'
    },
    Qoute5 = {
        qoute: 'In three words I can sum up everything I have learned about life: it goes on.',
        auother: '― Robert Frost'
    },
    Qoute6 = {
        qoute: 'If you tell the truth, you dont have to remember anything.',
        auother: '― Mark Twain'
    },
    Qoute7 = {
        qoute: 'A friend is someone who knows all about you and still loves you.',
        auother: '― Elbert Hubbard'
    },
    Qoute8 = {
        qoute: 'To live is the rarest thing in the world. Most people exist, that is all.',
        auother: '― Oscar Wilde'
    },
    Qoute9 = {
        qoute: 'Always forgive your enemies; nothing annoys them so much.',
        auother: '― Oscar Wilde'
    },
    Qoute10 = {
        qoute: 'Live as if you were to die tomorrow. Learn as if you were to live forever.',
        auother: '― Mahatma Gandhi'
    }
];

// with bounas part
var temp = -1;
function display() {
    var i = Math.ceil(Math.random() * 10);
    if (temp == i) {
        if (i == 10) {
            i -= 1;
        } else {
            i += 1;
        }
    }
    document.getElementById('q').innerHTML = arr[i].qoute;
    document.getElementById('a').innerHTML = arr[i].auother;
    temp = i;
    // console.log(i);
}





