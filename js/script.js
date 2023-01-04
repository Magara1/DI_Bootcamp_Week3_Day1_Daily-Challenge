/*****   Exercice Daily challenge  
 * 
 * @author : Magara Etychien N'gouan
 * 
 * Description :  
 * 
                 Dans cet exercice, nous allons créer 
                 une page Web avec un fond noir comme univers et nous remplirons l'univers de planètes et de leurs lunes.
 * 
 * Date : 03 Janvier 2023
 * 
 * ***/


    //1. Create an array which value is the planets of the solar system.

    let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

    //2. For each planet in the array, create a <div> using createElement. This div should have a class named "planet".

    //3.Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
    //Finally append each div to the <section> in the HTML (presented below).

    for (i=0; i < planets.length; i++){

      console.log(planets[i]);

      let div = document.createElement('div');

      div.classList.add("planet");

      div.classList.add(planets[i].toLocaleLowerCase());

      let section = document.querySelector(".listPlanets");

      section.getElementsByClassName.display ="flex";

      console.log('div:', div);

      section?.appendChild(div);

    }

   
    
    
