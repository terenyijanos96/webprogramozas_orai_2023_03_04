window.addEventListener("load", init);

function init() {
    const felsorolas = document.querySelector("#felsorolas");
    const masik_felsorolas = document.querySelector("#masik");
    const hobbik = [
        "photoshoppolás",
        "zenehallgatás",
        "programozás",
        "fotózás",
        "számítógépes játékok",
    ];

    kiir(felsorolasLetrehozasa(hobbik), felsorolas);
    kiir(felsorolasLetrehozasa(hobbik, "div", "p"), masik_felsorolas);

    masikFelsorolas_kialakitasa(masik_felsorolas)
}

function felsorolasLetrehozasa(lista, szulo_elem = "ul", gyerek_elem = "li") {
    gyerek_elemek_szovege = "";
    lista.forEach((elem) => {
        gyerek_elemek_szovege += `<${gyerek_elem}>${elem}</${gyerek_elem}>`;
    });

    return `<${szulo_elem}>${gyerek_elemek_szovege}</${szulo_elem}>`;
}

function masikFelsorolas_kialakitasa(masik_felsorolas) {
    const szulo = masik_felsorolas.querySelector("*")
    const gyerekek = szulo.querySelectorAll("*")

    szulo.classList.add("hobbik")

    gyerekek.forEach(gyerek => {
        gyerek.classList.add("hobbi-elem")
        kiir("<button>OK</button>", gyerek)
        gyerek.querySelector("button").addEventListener("click", gomb_klikk)
    });
}

function kiir(mit, mibe) {
    mibe.innerHTML += mit;
}

function gomb_klikk(event) {
    event.target.parentNode.classList.toggle("hatter")
}   

