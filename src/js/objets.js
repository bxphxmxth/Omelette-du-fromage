let personne = {
     nom: "Naz",
     lieu: "maison",
     argent: 70,
     mainDroite(){

     },
     mainGauche(){

     },
     seDeplacer(maison,epicerie){

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

export { personne,maison,couteau,epicerie };