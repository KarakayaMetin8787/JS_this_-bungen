// ===================================================
// CodeFlow Übung lev1_1: JavaScript this
// ===================================================

let person = {
    vorname: "Anton",
    nachname: "Fish",
    fullName: function() {
        return this.vorname + " " + this.nachname;
    }
};

console.log(person.fullName());

// ===================================================
// CodeFlow Übung lev1_2: JavaScript this [object Object]
// ===================================================

let person2 = {
    vorname: 'Anton',
    nachname: 'Fish',
    alter: 34,
    familienstand: 'ledig',
    groesse: '178cm',
    profil: function() {
    return "Name: " + this.vorname + " " + this.nachname + `<br>Alter: ` + this.alter + " Jahre" + `<br>Körpergröße: ` + this.groesse + `<br>Familienstand: ` + this.familienstand;
    }
};

document.getElementById("person").innerHTML = person2.profil();

// ===================================================
// CodeFlow Übung lev1_3: JavaScript this 
// ===================================================

let personFunction = {
    fullName: function () {
        return this.vorname + " " + this.nachname;
    }
};
let personObjekt = {
    vorname: "Anton",
    nachname: "Nüssler"
};

let anzeigeImHTMLDokument = `<br><br><p>${personFunction.fullName.call(personObjekt)}</p>`;
document.getElementById("person").innerHTML += anzeigeImHTMLDokument;

// ===================================================
// CodeFlow Übung lev1_4: JavaScript this 
// ===================================================

function fahrrad() {
    console.log(this.name);
}

let name = "Canyon";
let obj1 = { name: "Merida", fahrrad: fahrrad };
let obj2 = { name: "Scott", fahrrad: fahrrad };

console.log(fahrrad());
console.log(obj1.fahrrad());
console.log(obj2.fahrrad());