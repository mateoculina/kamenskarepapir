const OPTIONS = ["Kamen", "Škare", "Papir"]
const rand = Math.floor(Math.random() * OPTIONS.length)
console.log(OPTIONS[rand]);
const resParagraph = document.getElementById("result");
const igracRez = document.getElementById("igrac");
let igracScore = 0;
let racunaloScore = 0;
const racunaloRez = document.getElementById("racunalo");

function provjeriIzbor(korisnik, nasumicnaOpcija) {
    if (korisnik === nasumicnaOpcija) {
      resParagraph.textContent = "Čestitamo, izjednačeno!";
    } else if (
      (korisnik === "Kamen" && nasumicnaOpcija === "Škare") ||
      (korisnik === "Škare" && nasumicnaOpcija === "Papir") ||
      (korisnik === "Papir" && nasumicnaOpcija === "Kamen")
    ) {
     resParagraph.textContent = "Čestitamo, pobjedili ste!";
     igracScore++;
     igracRez.textContent = igracScore;
    } else {
      resParagraph.textContent ="Nažalost, izgubili ste.";
      racunaloScore++;
     racunaloRez.textContent = racunaloScore;
    }
  }
  
  document.getElementById("kamen").addEventListener("click", function() {
    const nasumicnaOpcija = OPTIONS[Math.floor(Math.random() * OPTIONS.length)];
    provjeriIzbor("Kamen", nasumicnaOpcija);
  });
  
  document.getElementById("skare").addEventListener("click", function() {
    const nasumicnaOpcija = OPTIONS[Math.floor(Math.random() * OPTIONS.length)];
    provjeriIzbor("Škare", nasumicnaOpcija);
  });
  
  document.getElementById("papir").addEventListener("click", function() {
    const nasumicnaOpcija = OPTIONS[Math.floor(Math.random() * OPTIONS.length)];
    provjeriIzbor("Papir", nasumicnaOpcija);
  });



  