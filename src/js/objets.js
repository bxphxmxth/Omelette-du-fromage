let personne = {
     nom: "Naz",
     lieu: [],
     argent: 70,
     mainDroite: [],

     // let monPanier = 0;
     // if (epicerie.paniers.nbrPanier > 0){
     //      let panier = 0;
     //      panier += 1
     //      epicerie.paniers.nbrPanier -= 1;


     mainGauche: [],
     seDeplacer(lieu) {

          lieu.personnes.push(this.nom);
          this.lieu.splice(this.lieu.indexOf(this, 1));
          console.log(`${this.nom} est actuellement à ${lieu.nom}`);





     },
     payerArticle(article) {

          personne.mainGauche.forEach(element => {
               console.log(`${personne.nom} a payé ${element.nom} `);


          })
          personne.argent -= 1;
          personne.argent -= 3;
          personne.argent -= 5;
          personne.argent -= 10;



          console.log(`Il lui reste ${personne.argent}€`);

     },
     couper(ingredients, outil) {

          if (ingredients.etat == "entier" && ingredients.nom == "oignon") {
               outil.action = "coupé"
               ingredients.etat = "coupé"
               console.log(`${this.nom} à ${couteau.action} avec son ${couteau.nom} l'${ingredients.nom}`);
          } else if (ingredients.etat == "entier" && ingredients.nom == "fromage") {
               outil.action = "coupé"
               ingredients.etat = "coupé"
               console.log(`${this.nom} à ${couteau.action} avec son ${couteau.nom} le ${ingredients.nom}`);
          }else if (ingredients.nom == "oeuf"){
               ingredients.etat = "cassé"
               console.log(`${this.nom} casse la coquille de l'${ingredients.nom}`);
          }else{
               console.log(`${this.nom} verse les ${ingredients.nom}s`);
          }
     },
     melanger(omelette) {
          console.log(`${this.nom} mélange les ingrédients préalablement coupés, brisés et moulus`);
          bol.contenu = omelette;

     }

}
// console.log("L'aliment n'a pas besoin d'être coupé");
let maison = {
     nom: "maison",
     personnes: [],

}

let couteau = {
     nom: "couteau",
     action: "couper",

}

let epicerie = {
     nom: "épicerie",
     personnes: [],
     paniers: {
          nbrPanier: 3,
          contenu: [],
          nom: "panier",
     },
     stock: [],
}

let poele ={
     contenu : [],
     cuire(){
         setTimeout(()=>{
             let newMelange = "omelette";
             this.contenu.push(bol.contenu);
             poele.contenu.etat = "cuite";
             console.log(`L' ${newMelange} est ${poele.contenu.etat}`)
         },4000)
     }
 }

 let bol ={
     contenu :[],
     melanger(nomMelange){
         nomMelange = newMelange;
         etat = "pas cuit";
         this.contenu = this.contenu;
     }
 }

export { personne, maison, couteau, epicerie, poele, bol };