let personne = {
     nom: "Naz",
     lieu: [],
     argent: 70,
     panier: [],
     mainDroite: [],

          // let monPanier = 0;
          // if (epicerie.paniers.nbrPanier > 0){
          //      let panier = 0;
          //      panier += 1
          //      epicerie.paniers.nbrPanier -= 1;
         
     
     mainGauche:[],
     seDeplacer(lieu){

          lieu.personnes.push(this.nom);
          this.lieu.splice(this.lieu.indexOf(this,1));
          console.log(`${this.nom} est actuellement à ${lieu.nom}`);
          
          

          

     },
     payerArticle(article){

          personne.panier.forEach(element =>{
               console.log(`${personne.nom} a payé ${element.nom} `);
               

          })
          personne.argent -= 1;
          personne.argent -= 3;
          personne.argent -= 5;
          personne.argent -= 10;



          console.log(`Il lui reste ${personne.argent}€`);

     },
     couper(ingredients,outil){
         
          if(ingredients.etat == "entier" ){
               outil.action = "coupé"
               ingredients.etat = "coupé"
               console.log(`${this.nom} à ${couteau.action} avec son ${couteau.nom}`);
          }else{
               console.log("L'aliment n'a pas besoin d'être coupé");
          }
     },
     melanger(omelette){
          console.log(`${this.nom} mélange les ingrédients préalablement coupés et moulus`);
          bol.contenu = omelette;

     }

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
     contenu: [],
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
          
     },
}

export { personne,maison,couteau,epicerie,poele,bol };