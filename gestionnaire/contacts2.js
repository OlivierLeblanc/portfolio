 
var Contact = {
    init: function (nom, prenom, telephone, mail, adresse, dateDeNaissance, specialite) {
        this.nom = nom;
        this.prenom = prenom;
        this.telephone = telephone;
        this.mail = mail;
        this.adresse = adresse;
        this.dateDeNaissance = dateDeNaissance;
        this.specialite = specialite;
    },
    decrire: function () {
        var description = this.nom + " " + this.prenom + ", " +  this.telephone + " " + this.mail + " " + this.adresse + this.dateDeNaissance + ", spécialité : " + this.specialite;
        return description;
    }
};

var leblanc = Object.create(Contact);
leblanc.init("Leblanc", "Olivier", "06 37 91 86 88", "olivier22leblanc@yahoo.fr", "82 rue Amelot, 75011 Paris", "16/01/82", "Javascript");


var duarte = Object.create(Contact);
duarte.init("Duarte", "François", "", "francois.duarte@gmail.com", "", "", "HTML / CSS");

var dehalle = Object.create(Contact);
dehalle.init("Dehalle", "Gérard", "", "gerarddehalle@yahoo.fr", "", "", "Communication entreprise");

var malaud = Object.create(Contact);
malaud.init("Malaud", "Grégoire", "01 49 29 20 12", "gmalaud@ifocop.fr", "", "", "Tout. c'est Dieu.")

var quittard = Object.create(Contact);
quittard.init("Quittard", "Mathieu", "", "mathieuquittard@vogue.fr", "", "", "Responsive design");

var voirin = Object.create(Contact);
voirin.init("Voirin", "Mickaël", "", "mivoirin@gmail.com", "", "", "Photoshop");

var contacts = [leblanc, duarte, dehalle, malaud, quittard, voirin];

var listerLesContacts = function () {
    var tousMesContacts = '';
    var i = 0;
    while (contacts[i]) {
        tousMesContacts = tousMesContacts + (i + 1) + ". " + contacts[i].decrire() + '\n';                       
        i++;
    };
    alert(tousMesContacts);
}

var ajouterUnContact = function () {
    var nvContact = Object.create(Contact);
    nvContact.init(nom = prompt("Entrez le nom du nouveau contact :"),
            prenom = prompt("Entrez le prénom du nouveau contact :"), telephone = prompt("Entrez le téléphone du nouveau contact :"), mail = prompt("Entrez l'email du nouveau contact :"), adresse = prompt("Entrez l'adresse du nouveau contact :"), dateDeNaissance = prompt("Entrez la date de naissance du nouveau contact :"));
    
    contacts.push(nvContact);
    alert("Le contact a bien été ajouté.");
}

/* else if (option === 2) {
        var nvContact = Object.create(Contact);
        nvContact.init(nom = prompt("Entrez le nom du nouveau contact : "), prenom = prompt("Entrez le prénom du nouveau contact : "));
        contacts.push(nvContact);
        alert("Le contact a été ajouté");
        console.log("");     */
    
    
/*   contacts.forEach(function(contact) {
        contact.decrire(contact);
        });   */

