let words = document.querySelectorAll('.word');
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
        let span = document.createElement('span');
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let = maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out ";
        }, i * 80);
    });
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind ";
        setTimeout(() => {
            letter.className = "letter in ";

        }, 340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
}

changeText();
setInterval(changeText, 3000);


// circle skills---------------------------------------------------------------
const circles = document.querySelectorAll('.circle');
circles.forEach(elem => {
    var dots = elem.getAttribute('data-dots');
    var marked = elem.getAttribute('data-percent');
    var percent = Math.floor(dots * marked / 100);
    var points = "";
    var rotate = 360 / dots;


    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;

    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked');
    }
})

// mix it up porfolio section---------------------------------------
var mixer = mixitup('.portfolio-gallery');


// active menu---------------------------------------------------------------
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu() {
    let len = section.length;
    while (--len && window.scrollY + 97 < section[len].offsetTop) { }
    menuLi.forEach(sec => sec.classList.remove('active'));
    menuLi[len].classList.add('active');
}

activeMenu();
window.addEventListener('scroll', activeMenu);

// sticky navbar------------------------------------------
const header = document.querySelector('header');
window.addEventListener('scroll', function name() {
    header.classList.toggle('sticky', this.window.scrollY > 50);

})


// toogle icon navbar-------------------------------------------------
let menuIcon = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}
window.onscroll = () => {
    menuIcon.classList.remove('bx-x');
    navlist.classList.remove('open');
}

// parallax------------------------------
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-items');
        }
        else {
            entry.target.classList.remove('show-items');
        }
    });
});

const scrollScale = document.querySelectorAll('.scroll-scale');
scrollScale.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll('.scroll-bottom');
scrollBottom.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll('.scroll-top');
scrollTop.forEach((el) => observer.observe(el));

// bouton about-------------------------

let togg2 = document.getElementById("togg2");
let d1 = document.getElementById("d1");

function togg() {
    if (getComputedStyle(d1).display != "none") {
        d1.style.display = "none";
        togg2.textContent = 'Read more';
    } else {
        d1.style.display = "block";
        togg2.textContent = 'moins';
    }

};

// section service bouton web desiger
let a1 = document.getElementById("a1");
let as = document.getElementById("as");
function ser() {
    if (getComputedStyle(as).display != "none") {
        as.style.display = "none";
        a1.textContent = 'Read more';
    } else {
        as.style.display = "block";
        a1.textContent = 'moins';
    }

};
a1.onclick = ser;
// section service bouton programmation

let pro = document.getElementById('pro');
let proP = document.getElementById('proP');

function prog() {
    if (getComputedStyle(proP).display != "none") {
        proP.style.display = "none";
        pro.textContent = 'Read more';
    } else {
        proP.style.display = "block";
        pro.textContent = 'moins';
    }
}
pro.onclick = prog;

// section service bouton graphique

let gra = document.getElementById('gra');
let graP = document.getElementById('graP');

function graph() {
    if (getComputedStyle(graP).display != "none") {
        graP.style.display = "none";
        gra.textContent = "Read more"
    } else {
        graP.style.display = "block";
        gra.textContent = "moins"
    }
}
gra.onclick = graph;

// ///////////////////////////////////////////////////////////////////////:

// var frmvalidator = new frmvalidator("contact_form");
// frmvalidator.addValidation("name", "req", "Please provide your name");
// frmvalidator.addValidation("email", "req", "Please provide your email");
// frmvalidator.addValidation("email", "email", "Please enter a valid email address");
// frmvalidator.addValidation("adresse", "req", "Please enter a valid addresse");
// frmvalidator.addValidation("number", "req", "Please enter a valid number");
