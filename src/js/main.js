// ># Créer un objet personne. Cette personne doit avoir des propriétés et des méthodes : 
// >>- nom
// >>- lieu
// >>- argent
// >>- mainDroite
// >>- ( du coup main gauche)
// >>- seDeplacer(lieu)
// >>- payerArticle(article)
// >>- couper(ingredient, outil)

import {personne,maison,couteau,epicerie,poele,bol} from "./objets.js"
// console.log(personne);


// #  

// >### Créer un lieu "maison" (un objet) avec comme propriété "nom: 'maison'" et "personnes = []" => qui sera un tableau de personnes présentes dans la maison :
// console.log(maison);

// #  

// >- Créer un outil (couteau) pour découper les ingrédients achetés
// >- propriétés : nom et action.
// >- action a comme valeur l'état "coupé" (qui sera mis aux légumes lorsqu'ils seront coupés avec le méthode de "personne".)
// console.log(couteau);
// #  

// >- Créer des produits (ingrédients) à mettre dans le magasin qui serviront à créer l'omelette (oignon, oeuf, epice, fromage, ...);
// >- attributs : nom, etats ( entier,coupé, moulu), prix
import {Ingredients} from "./methodes.js";
let oignon = new Ingredients("oignon","entier",1);
let oeuf = new Ingredients("oeuf","entier",3);
let epice = new Ingredients("epice","moulu",5);
let fromage = new Ingredients("fromage","entier",10);

// console.log(fromage);
// #  

// >- Créer un lieu "epicerie" qui a comme propriétés :
// >- nom, personnes = [], paniers (plusieurs objets paniers avec le type de panier et le contenu du panier),
// >- Les "ingrédients" créés juste au dessus contenus dans un tableau.
// console.log(epicerie);
epicerie.stock.push(oignon);
epicerie.stock.push(oeuf);
epicerie.stock.push(epice);
epicerie.stock.push(fromage);
// console.log(epicerie.stock);
// #  

// >- Créer un poele avec un tableau comme contenu. Et avec une méthode cuir() qui, après 4 secondes, met l'état 'cuit' à this.contenu[0]. On peut faire ça avec la fonction setTimeout(()=> {}, 4000)
// console.log(poele);

// #  

// >- Créer un bol avec un tableau comme contenu
// >- ajouter une méthode melanger(nomMelange) qui va créer un nouvel objet "newMelange" avec comme nom la variable nomMelange passé en paramètre et avec 'pas cuit' en etat. cette méthode remplacera this.contenu par [l'obj newMelange]
// #  

// ># DEBUT DE L'OMELETTE
// >>1. Pour dire que le personnage est à la maison :

// personne.this.lieu.push(personne)
// console.log(personne.lieu); // naz n'est pas dans le lieu départ
personne.lieu.push(personne.nom) // je la push dans le lieu de depart
// console.log(personne.lieu); // Elle est dans le lieu de depart



// naz a été splice du lieu de depart
// console.log(personne.lieu);

console.log(`${personne.nom} est à la ${maison.nom} et se prépare à sortir de chez elle`);

// >>1. Avec l'objet personnage, utiliser la method seDeplacer et de passer en paramètre l'objet maison

personne.seDeplacer(epicerie);
// console.log(epicerie.personnes);


// >>1. Afficher un message tel que :
// >>1. console.log(personnage.nom + " est actuellement à la " + personnage.lieu);


// >>1. Pour aller à l'épicerie acheter les ingrédients pour l'omelette, je répète la première étape en changeant le parametre de la method seDeplacer par l'epicerie
console.log(`${personne.nom} est actuellement à l'${epicerie.nom}.`);



// >>1. Mon personnage prend un des paniers dans l'épicerie (il récupère le panier dans les objets de l'épicerie et le met dans sa main droite.



let prendre = () =>{

     if(epicerie.paniers.nbrPanier > 0){

     epicerie.paniers.nbrPanier -= 1;

      personne.mainDroite.push(epicerie.paniers.nom);


     }else{
          alert("Il n'y a plus de paniers, va au Aldi")
     }


}
prendre();

// console.log(personne.mainDroite);
// console.log(epicerie.paniers.nbrPanier);

//déduire 1 des 4 paniers du magasin 


// >>1. Il doit y avoir un objet dans la main droite de personnage et un panier en moins. Vérifier avec des console.log() ensuite afficher un message du type : 


// >>1. console.log(`${personnage.nom} a pris un ${personnage.mainDroite.type}`);

console.log(`${personne.nom} a prit un ${personne.mainDroite} avec sa main droite.`);
// console.log(personne.mainDroite);


// >>1. Je créer une boucle qui va prendre chaque élément (ingrédient) du contenu de l'épicerie (1 à 1) et en faire une COPIE dans le panier du personnage
// >>1. Afficher un message à chaque ingrédient pris


epicerie.stock.forEach(element =>{
     console.log(`${personne.nom} a prit ${element.nom} et l'a mise dans son ${epicerie.paniers.nom}`);
      personne.mainGauche.push(element);
     // console.log(element);
});

// console.log(personne.mainGauche);

// >>1. Payer chaque ingrédient récupéré dans le panier. Avec une boucle aussi, on va les passer 1 à 1 dans la fonction payerArticle()

// >>1. Afficher un message de ce qu'il reste d'argent sur le personnage.
personne.payerArticle();


// >>1. rentrer à la maison (comme ça on pourra cuisiner)
personne.seDeplacer(maison);



// >>1. mettre chaque ingrédient dans le bol (1 à 1 donc avec une boucle)

// console.log(personne.mainGauche);
personne.mainGauche.forEach(element => {

     bol.contenu.push(element);
     console.log(`${personne.nom} a mit ${element.nom} dans le bol` );
    
     
})
personne.mainGauche.forEach(element => {

     personne.mainGauche.splice(element)
     console.log(`${personne.nom} a tout enlevé du panier qu'elle a volé mais qu'elle va aller rendre.` );

// console.log(personne.mainGauche);

    
     
     
})

 
// console.log(bol.contenu[1].nom);
// >>1. Vérifier que les ingrédients ne se trouvent plus dans le panier (oups ! on a oublié de le rapporter x)

// console.log(personne.mainGauche);
// >>1. Afficher un petit message de chaque ingrédient qu'on met dans le bol.


// >>1. Retourner à l'épicerie pour rapporter le panier. (donc seDeplacer puis enlever le panier de la main droite et le remetre dans les paniers de l'épicerie.)

personne.seDeplacer(epicerie);


// >>1. Afficher un petit message

console.log(`${personne.nom} a rendu le panier volé. Il y a de nouveau ${epicerie.paniers.nbrPanier + personne.mainDroite.length} paniers dans l'épicerie`);

// >>1. Retourner à la maison pour continuer l'omelette
// >>1. Afficher un petit message

personne.seDeplacer(maison);

// >>1. Vérifier chaque ingrédient dans le bol et le couper seulement s'il est entier ! Pour ça on utilise la méthode couper de personnage

personne.couper(oignon,couteau);
personne.couper(fromage,couteau)
personne.couper(oeuf,couteau)



console.log(oignon.etat);
console.log(fromage.etat);
console.log(oeuf.etat);





// >>1. Mélanger le contenu du bol avec la méthode melanger. on va nommer ce mélange une 'omelette' (à passer en param).



// >>1. Afficher un message avec le nouveau mélange

// >>1. vider le contenu du bol dans la poele. Il ne doit plus rien avoir dans le bol et y avoir juste l'omelette pas cuite.

// Je verse mes ingrédients dans la poele 
console.log(bol.contenu);
poele.contenu.push(bol.contenu);


// et je les retirent de mon bol

bol.contenu.splice(bol.contenu.splice(bol.contenu.length));
console.log(bol.contenu);

personne.melanger();

// >>1. Afficher un message final, notre omelette est cuite :)

// poele.cuir();
// console.log(poele.contenu);

poele.cuire();
