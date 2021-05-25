let personne = {
     nom: "Naz",
     lieu: [],
     argent: 70,
     panier: [],
     mainDroite(){
          
          if (epicerie.paniers.nbrPanier > 0){
               let panier = 0;
               panier += 1
               epicerie.paniers.nbrPanier -= 1;
          }else{
               ("Il n'y a plus de paniers, va au Aldi")
          }
     },
     mainGauche(){

     },
     seDeplacer(lieu){
          
          epicerie.personnes.push(this.nom);
          this.lieu.splice(this.lieu.indexOf(this),1);

          // depart.personnes.splice(depart.personnes.indexOf(this),1);


     },
     payerArticle(article){

     },
     couper(ingredients,outil){

     },

}

let maison = {
     nom: "maison",
     personnes: [],

}

let couteau ={
     nom: "couteau",
     action: "couper",

}

let epicerie = {
     nom: "épicerie",
     personnes: [],
     paniers: {
          nbrPanier : 5,
          contenu : [],
     },
     stock:[],
}

let poele = {
     contenu: "vide",
     cuir(){
          //après 4 secondes, met l'état 'cuit' à this.contenu[0]. On peut faire ça avec la fonction setTimeout(()=> {}, 4000)
     }
}

let bol = {
     contenu : [],
     nomMelange(nomMelange,etat){
          nomMelange = newMelange;
          newMelange = "pas cuit";
          this.contenu= newMelange;
          
     }
}

export { personne,maison,couteau,epicerie,poele,bol };