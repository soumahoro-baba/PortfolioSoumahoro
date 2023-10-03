


//AOS
AOS.init();

//TYPED
var typed = new typed('.typed', {
   Strings:["Titulaire d'une Licence en Electronique Electrotechnique,Automatique et Informatique (EEAI) de l'UFHB., Etactuellement inscris en Licence Informatique option Développement d'Applicationsete-commerces (DAS), Réseau et SécuritéInformatique(RSI)àlUniversité VirtuelledeCote d'Ivoire (UVCI). ,Je suis à la recherche de stage afin d'acquérir del'expérience et surtout mettre en exercice lesconnaissances acquises lors de ma formation.Veuillez agréer..."],
   typeSpeed: 20,
});

window.addEventListener('scroll', function(){
    const header =document.querySelector('header');
    header.classList.toggle("sticky",window.scrollY >0 );
});
function toggleMenu(){
    const toggleMenu = document.querySelector('menutoggle');
  
    const navbar = document.querySelector('navbar');
    navbar.classList.toggle('active');
}
