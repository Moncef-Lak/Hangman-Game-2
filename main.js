let clavier = "abcdefjhigklmnopqrstuvwxyz-",
  allClavier = [...clavier],
  placeOfLetters = document.getElementById("placeOfLetters"),
  hangmanDraw = document.getElementById("hangmanDraw"),
  blood = document.getElementById("blood"),
  niveau = document.getElementById("niveau"),
  tahbat = document.getElementById("tahbat"),
  tatla = document.getElementById("tatla"),
  circle = document.getElementById("circle"),
  fakebody = document.querySelector(".fakebody"),
  countiner = document.getElementById("countiner"),
  countiner2 = document.getElementById("countiner2"),
  countiner3 = document.getElementById("countiner3"),
  countiner4 = document.getElementById("countiner4"),
  countiner5 = document.getElementById("countiner5"),
  countiner6 = document.getElementById("countiner6"),
  chabah = document.getElementById("chabah"),
  themes = document.getElementById("themes"),
  theme1 = document.getElementById("theme1"),
  logo = document.getElementById("logo"),
  row2 = document.getElementById("row2"),
  next = document.getElementById("next"),
  next2 = document.getElementById("next2"),
  next3 = document.getElementById("next3"),
  name = document.getElementById("name"),
  winGame = document.getElementById("winGame"),
  loseGame = document.getElementById("loseGame"),
  score = document.querySelector(".score2"),
  count = document.getElementById("count"),
  score2 = document.getElementById("score"),
  replay = document.getElementById("replay"),
  replay2 = document.getElementById("replay2"),
  replay3 = document.getElementById("replay3"),
  letters222 = document.getElementById("letters2"),
  sound = document.getElementById("sound"),
  letters = document.getElementById("letters");

var sucsess = 0;
var sucsess2 = 0;

allClavier.forEach((spans) => {
  let span = document.createElement("span"),
    spantext = document.createTextNode(spans);

  span.appendChild(spantext);
  span.classList.add("oneletter");
  placeOfLetters.appendChild(span);
});

let words = {
  movies: [
    "prestige",
    "inception",
    "parasite",
    "interstellar",
    "whiplash",
    "memento",
    "coco",
    "harry-potter",
  ],
  people: [
    "albert-einstine",
    "hitchcock",
    "alexander",
    "cleopatra",
    "mahatma-ghandi",
  ],
  countries: [
    "yamen",
    "egypt",
    "bahrain",
    "algeria",
    "tunis",
    "marroc",
    "qatar",
  ],
  animals: ["cat", "dog", "fox", "sheep", "panda", "lion", "snake", "cow"],
  programming: [
    "php",
    "javascript",
    "css",
    "html",
    "python",
    "mysql",
    "java",
    "react",
    "vue",
  ],
};

let allType = Object.keys(words),
  numberOfType = Math.floor(Math.random() * allType.length),
  choseOneType = allType[numberOfType],
  numberOfWordsInType = Math.floor(Math.random() * words[choseOneType].length),
  choseOneWord = words[choseOneType][numberOfWordsInType],
  allLettersOfWords = [...choseOneWord];

console.log(allType);

allLettersOfWords.forEach((spans) => {
  let span = document.createElement("span");

  span.classList.add("oneletter2");
  if (spans === "-") {
    span.style.background = "none";
    span.style.border = "none";
    span.style.fontSize = "30px";
  }
  letters.appendChild(span);

  ydor();
});
let allletter2 = document.querySelectorAll(".oneletter2");
var allLett = document.querySelectorAll(".oneletter");

let MO = 0;

function ydor() {
  let allLtt = document.querySelectorAll(".oneletter");

  themes.children[1].onclick = function () {
    circle.classList.add("div23");
    countiner.classList.add("div23");
    theme1.classList.add("div23");

    setTimeout(() => {
      circle.classList.remove("div23");
      countiner.classList.remove("div23");
      theme1.classList.remove("div23");
    }, 1500);

    themes.children[1].classList.add("div17");
    setTimeout(() => {
      themes.children[1].classList.remove("div17");
    }, 500);
    setTimeout(() => {
      row2.classList.add("theme1OB1");
      placeOfLetters.classList.add("theme1OB2");
      amazing.children[2].classList.add("theme1OB3");
      letters222.classList.add("theme1OB4");

      circle.children[0].classList.add("theme1OB5");
      circle.children[1].classList.add("theme1OB6");
      circle.classList.add("theme1OB7");
      theme1.classList.add("theme1OB8");
    }, 1000);

    removetheme2();

    removetheme3();

    allLtt.forEach((span) => {
      var Mon = setInterval(() => {
        if (span.classList.contains("clicked")) {
        } else {
          span.classList.add("div7");
        }
        setTimeout(() => {
          span.classList.remove("div7");
        }, 2500);
      }, 5000);

      setTimeout(() => {
        clearInterval(Mon);
      }, 15000);
    });
  };
}

let X = false;

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("oneletter")) {
    e.target.classList.add("clicked");
    let clickedLetter = e.target.textContent,
      shihWalaGhalat = false;
    /*
            setTimeout(() => {
                circle.classList.add("circle2");
            },1000);
            */

    allLettersOfWords.forEach((letter, letterIndex) => {
      if (clickedLetter == letter) {
        shihWalaGhalat = true;
        allletter2.forEach((lett, lettIndex) => {
          if (letterIndex == lettIndex) {
            sound.children[0].play();
            lett.textContent = clickedLetter;
            sucsess = sucsess * 1 + 1;
            circle.children[0].children[0].textContent =
              circle.children[0].children[0].textContent * 1 + 100;
            score.textContent = circle.children[0].children[0].textContent;
            score2.textContent = circle.children[0].children[0].textContent;
            if (sucsess == choseOneWord.length) {
              sound.children[2].play();
              placeOfLetters.classList.add("div1");
              setTimeout(() => {
                countiner.classList.add("div16");
                theme1.classList.add("div16");
                winGame.classList.add("div15");
              }, 1000);
            }
          }
        });
      }
    });
    if (shihWalaGhalat == false) {
      sound.children[1].play();
      sucsess2++;
      if (circle.children[0].children[0].textContent == 0) {
      } else {
        circle.children[0].children[0].textContent =
          circle.children[0].children[0].textContent * 1 - 50;
        score.textContent = circle.children[0].children[0].textContent;
        score2.textContent = circle.children[0].children[0].textContent;
      }
      if (sucsess2 == 1) {
        hangmanDraw.children[0].children[0].classList.add("div2");
        niveau.classList.add("niveau1");
      } else if (sucsess2 == 2) {
        hangmanDraw.children[0].children[1].classList.add("div2");
        niveau.classList.add("niveau2");
      } else if (sucsess2 == 3) {
        hangmanDraw.children[0].children[2].classList.add("div2");
        niveau.classList.add("niveau3");
      } else if (sucsess2 == 4) {
        hangmanDraw.children[0].children[3].classList.add("div2");
        niveau.classList.add("niveau4");
      } else if (sucsess2 == 5) {
        hangmanDraw.children[0].children[4].classList.add("div2");
        niveau.classList.add("niveau5");
      } else if (sucsess2 == 6) {
        hangmanDraw.children[0].children[4].classList.add("div3");
        placeOfLetters.classList.add("div1");
        niveau.classList.add("niveau6");
        circle.classList.remove("circle2");
        sound.children[3].play();

        setTimeout(function () {
          hangmanDraw.children[0].children[4].children[0].classList.add("div4");
          blood.classList.add("div5", "div6");
        }, 800);

        setTimeout(() => {
          sound.children[4].play();
        }, 1000);
        setTimeout(() => {
          countiner.classList.add("div16");
          theme1.classList.add("div16");
          loseGame.classList.add("div15");
        }, 3000);
      }

      replay.onclick = function () {
        replay.classList.add("div20");
        setTimeout(() => {
          replay.classList.remove("div20");
        }, 1000);
        sucsess2 = 0;
        if (sucsess2 == 0) {
          var alllett2 = document.querySelectorAll(".oneletter2");
          sucsess = 0;
          setTimeout(() => {
            placeOfLetters.classList.remove("div1");
            countiner.classList.remove("div16");
            theme1.classList.remove("div16");
            winGame.classList.remove("div15");
            hangmanDraw.children[0].children[0].classList.remove("div2");
            hangmanDraw.children[0].children[1].classList.remove("div2");
            hangmanDraw.children[0].children[2].classList.remove("div2");
            hangmanDraw.children[0].children[3].classList.remove("div2");
            hangmanDraw.children[0].children[4].classList.remove("div2");
            hangmanDraw.children[0].children[4].classList.remove("div3");
            hangmanDraw.children[0].children[4].children[0].classList.remove(
              "div4"
            );
            blood.classList.remove("div5", "div6");
            niveau.classList.remove(
              "niveau1",
              "niveau2",
              "niveau3",
              "niveau4",
              "niveau5",
              "niveau6"
            );
            circle.children[0].children[0].textContent = 0;

            allLett.forEach((letters) => {
              letters.classList.remove("clicked");
            });
            alllett2.forEach((span) => {
              span.textContent = "";
            });
          }, 1000);
        }
      };

      replay2.onclick = function () {
        replay2.classList.add("div20");
        setTimeout(() => {
          replay2.classList.remove("div20");
        }, 1000);
        sucsess2 = 0;
        if (sucsess2 == 0) {
          var alllett2 = document.querySelectorAll(".oneletter2");
          sucsess = 0;
          setTimeout(() => {
            placeOfLetters.classList.remove("div1");
            countiner.classList.remove("div16");
            theme1.classList.remove("div16");
            loseGame.classList.remove("div15");
            hangmanDraw.children[0].children[0].classList.remove("div2");
            hangmanDraw.children[0].children[1].classList.remove("div2");
            hangmanDraw.children[0].children[2].classList.remove("div2");
            hangmanDraw.children[0].children[3].classList.remove("div2");
            hangmanDraw.children[0].children[4].classList.remove("div2");
            hangmanDraw.children[0].children[4].classList.remove("div3");
            hangmanDraw.children[0].children[4].children[0].classList.remove(
              "div4"
            );
            blood.classList.remove("div5", "div6");
            niveau.classList.remove(
              "niveau1",
              "niveau2",
              "niveau3",
              "niveau4",
              "niveau5",
              "niveau6"
            );
            circle.children[0].children[0].textContent = 0;

            allLett.forEach((letters) => {
              letters.classList.remove("clicked");
            });
            alllett2.forEach((span) => {
              span.textContent = "";
            });
          }, 1000);
        }
      };

      replay3.onclick = function () {
        replay3.classList.add("div20");
        setTimeout(() => {
          replay3.classList.remove("div20");
        }, 1000);
        sucsess2 = 0;
        setTimeout(() => {
          khat.classList.remove("open");
          X = false;
          count.classList.remove("div19");
        }, 500);

        if (sucsess2 == 0) {
          var alllett2 = document.querySelectorAll(".oneletter2");
          sucsess = 0;
          setTimeout(() => {
            placeOfLetters.classList.remove("div1");
            countiner.classList.remove("div16");
            theme1.classList.remove("div16");
            loseGame.classList.remove("div15");
            hangmanDraw.children[0].children[0].classList.remove("div2");
            hangmanDraw.children[0].children[1].classList.remove("div2");
            hangmanDraw.children[0].children[2].classList.remove("div2");
            hangmanDraw.children[0].children[3].classList.remove("div2");
            hangmanDraw.children[0].children[4].classList.remove("div2");
            hangmanDraw.children[0].children[4].classList.remove("div3");
            hangmanDraw.children[0].children[4].children[0].classList.remove(
              "div4"
            );
            blood.classList.remove("div5", "div6");
            niveau.classList.remove(
              "niveau1",
              "niveau2",
              "niveau3",
              "niveau4",
              "niveau5",
              "niveau6"
            );
            circle.children[0].children[0].textContent = 0;

            allLett.forEach((letters) => {
              letters.classList.remove("clicked");
            });
            alllett2.forEach((span) => {
              span.textContent = "";
            });
          }, 2000);
        }
      };
    }
  }
});

document.querySelector(".Fiha").textContent = choseOneType;
setInterval(function () {
  setTimeout(function () {
    amazing.children[0].classList.add("amazing1");
    amazing.children[1].classList.add("amazing2");
    amazing.children[2].classList.add("amazing3");
  }, 2500);
  setTimeout(function () {
    amazing.children[0].classList.remove("amazing1");
    amazing.children[1].classList.remove("amazing2");
    amazing.children[2].classList.remove("amazing3");
  }, 5000);
}, 5000);

setInterval(() => {
  for (var i = 0; i < chabah.children.length; i++) {
    chabah.children[i].classList.add("chabah2");
  }
  setTimeout(() => {
    for (var i = 0; i < chabah.children.length; i++) {
      chabah.children[i].classList.remove("chabah2");
    }
  }, 6000);
}, 12000);

setTimeout(() => {
  logo.classList.add("div8");
  setTimeout(() => {
    tahbat.classList.add("div9");
    tatla.classList.add("div9");
  }, 500);
}, 2000);

let khat = document.getElementById("khat"),
  menu = document.getElementById("menu");

tatla.onclick = function () {
  setTimeout(() => {
    countiner2.classList.add("div10");
  }, 1000);

  setTimeout(() => {
    countiner4.classList.add("div11");
  }, 3500);

  setTimeout(() => {
    countiner3.classList.add("div14");
  }, 4000);

  setTimeout(() => {
    countiner5.classList.add("div12");
  }, 6000);

  setTimeout(() => {
    countiner6.classList.add("div13-2");
  }, 8500);
  setTimeout(() => {
    countiner6.classList.add("div13");
    countiner2.classList.add("div14");
    countiner4.classList.add("div14");
    countiner5.classList.add("div14");
  }, 11000);
  setTimeout(() => {
    countiner6.classList.add("div14");
  }, 13500);
  setTimeout(() => {
    let name2 = prompt("What's Your Name ");

    if (name2 == "") {
      name.textContent = "player 1";
    } else {
      name.textContent = name2;
    }
  }, 14000);
  setTimeout(() => {
    row2.classList.add("div24");
    fakebody.classList.add("fakebody-after");
    setTimeout(() => {
      amazing.classList.add("div27");
      letters222.classList.add("div28");
    }, 1500);
    setTimeout(() => {
      placeOfLetters.classList.add("all-letters222");
      niveau.classList.add("div24");
      menu.classList.add("div2");
    }, 4500);
    setTimeout(() => {
      placeOfLetters.classList.add("div25");
      placeOfLetters.classList.remove("all-letters111");
      circle.classList.add("div26");
    }, 8500);
  }, 18000);
};

next.onclick = function () {
  next.children[0].classList.add("div21");
  setTimeout(() => {
    window.location.reload();
  }, 1000);
};
next2.onclick = function () {
  next2.children[0].classList.add("div21");
  setTimeout(() => {
    window.location.reload();
  }, 1000);
};
next3.onclick = function () {
  next3.children[0].classList.add("div21");
  setTimeout(() => {
    window.location.reload();
  }, 1000);
};

menu.onclick = function () {
  if (X == false) {
    khat.classList.add("open");
    count.classList.add("div19");
    X = true;
  } else {
    khat.classList.remove("open");
    X = false;
    count.classList.remove("div19");
  }
};

themes.children[2].onclick = function () {
  circle.classList.add("div23");
  countiner.classList.add("div23");
  theme1.classList.add("div23");

  setTimeout(() => {
    circle.classList.remove("div23");
    countiner.classList.remove("div23");
    theme1.classList.remove("div23");
  }, 1500);

  themes.children[2].classList.add("div17");
  setTimeout(() => {
    themes.children[2].classList.remove("div17");
  }, 500);

  setTimeout(() => {
    row2.classList.add("theme2OB1");
    placeOfLetters.classList.add("theme2OB2");
    amazing.children[2].classList.add("theme2OB3");
    letters222.classList.add("theme2OB4");

    circle.children[0].classList.add("theme2OB5");
    circle.children[1].classList.add("theme2OB6");
    circle.classList.add("theme2OB7");
    theme1.classList.add("theme2OB8");
    letters.classList.add("theme2OB9");
  }, 1000);

  removetheme1();

  removetheme3();
};

themes.children[3].onclick = function () {
  circle.classList.add("div23");
  countiner.classList.add("div23");
  theme1.classList.add("div23");

  setTimeout(() => {
    circle.classList.remove("div23");
    countiner.classList.remove("div23");
    theme1.classList.remove("div23");
  }, 1500);

  themes.children[3].classList.add("div17");
  setTimeout(() => {
    themes.children[3].classList.remove("div17");
  }, 500);

  setTimeout(() => {
    row2.classList.add("theme3OB1");
    placeOfLetters.classList.add("theme3OB2");
    amazing.children[2].classList.add("theme3OB3");
    amazing.children[0].classList.add("theme3OB9");
    amazing.children[1].classList.add("theme3OB9");
    amazing.children[2].classList.add("theme3OB9");

    letters222.classList.add("theme3OB4");

    circle.children[0].classList.add("theme3OB5");
    circle.children[1].classList.add("theme3OB6");
    circle.classList.add("theme3OB7");
    theme1.classList.add("theme3OB8");
  }, 1000);

  removetheme1();

  removetheme2();
};

function removetheme1() {
  setTimeout(() => {
    row2.classList.remove("theme1OB1");
    placeOfLetters.classList.remove("theme1OB2");
    amazing.children[2].classList.remove("theme1OB3");
    letters222.classList.remove("theme1OB4");

    circle.children[0].classList.remove("theme1OB5");
    circle.children[1].classList.remove("theme1OB6");
    circle.classList.remove("theme1OB7");
    theme1.classList.remove("theme1OB8");
  }, 1000);
}
function removetheme2() {
  setTimeout(() => {
    row2.classList.remove("theme2OB1");
    placeOfLetters.classList.remove("theme2OB2");
    amazing.children[2].classList.remove("theme2OB3");
    letters222.classList.remove("theme2OB4");

    circle.children[0].classList.remove("theme2OB5");
    circle.children[1].classList.remove("theme2OB6");
    circle.classList.remove("theme2OB7");
    theme1.classList.remove("theme2OB8");
    letters.classList.remove("theme2OB9");
  }, 1000);
}
function removetheme3() {
  setTimeout(() => {
    row2.classList.remove("theme3OB1");
    placeOfLetters.classList.remove("theme3OB2");
    amazing.children[2].classList.remove("theme3OB3");
    amazing.children[0].classList.remove("theme3OB9");
    amazing.children[1].classList.remove("theme3OB9");
    amazing.children[2].classList.remove("theme3OB9");

    letters222.classList.remove("theme3OB4");

    circle.children[0].classList.remove("theme3OB5");
    circle.children[1].classList.remove("theme3OB6");
    circle.classList.remove("theme3OB7");
    theme1.classList.remove("theme3OB8");
  }, 1000);
}

/*

    row2.classList.add("");
    placeOfLetters.classList.add("");
    amazing.children[2].classList.add("");
    letters222.classList.add("");{

    letters.classList.add("");
    }
    circle.children[0].classList.add("");
    circle.children[1].classList.add("");
    circle.classList.add("");
    theme1.classList.add("");
    





   */

/*
  setTimeout(() => {
    row2.classList.add("theme1OB1");
    placeOfLetters.classList.add("theme1OB2");
    amazing.children[2].classList.add("theme1OB3");
    letters222.classList.add("theme1OB4");
    
    circle.children[0].classList.add("theme1OB5");
    circle.children[1].classList.add("theme1OB6");
    circle.classList.add("theme1OB7");
    theme1.classList.add("theme1OB8");

   }, 1000);

   */
