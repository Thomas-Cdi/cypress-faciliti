//Version avec implantation directe du cookie (bug du '.')

var FACIL_ITI_LS = Cypress.env('profiles_list');
var liste_profiles = Object.keys(FACIL_ITI_LS.profiles);

//Formatage date
var d = new Date();
var current_date = ''+
	d.getFullYear()+
	(d.getMonth() >= 10 ? d.getMonth() : "0"+d.getMonth())+
	(d.getDate() >= 10 ? d.getDate() : "0"+d.getDate())+"_"+
	(d.getHours() >= 10 ? d.getHours() : "0"+d.getHours())+
	(d.getMinutes() >= 10 ? d.getMinutes() : "0"+d.getMinutes())+
	(d.getSeconds() >= 10 ? d.getSeconds() : "0"+d.getSeconds());

//Parcours des profils Facil'iti
liste_profiles.forEach((profil_en_cours) => {

	FACIL_ITI_LS.active_profile = profil_en_cours;
	var ls_string = JSON.stringify(FACIL_ITI_LS);

	describe('Test '+Cypress.env('destination'),() => {

		it('Teste l\'affichage '+profil_en_cours,() => {
	 		cy.clearCookies()
	 			.setCookie('FACIL_ITI_LS',btoa(encodeURIComponent(ls_string)),{ domain :"ws.facil-iti.com"})
		 		.setCookie('blabla',profil_en_cours)
		 		.getCookie('blabla');

			//Parcours des pages du site
			 Cypress.env('pages').forEach((page) => {
			 	cy.visit(Cypress.env('site')+"/"+page[1]);

				//Parcours des résolutions d'écran
				Cypress.env('viewports').forEach((element) => {
					cy.wait(1000);
					cy.viewport(element[0],element[1]);

					var screenshot_destination = Cypress.env('destination')+"/"+page[0]+"/"+profil_en_cours+"/"+element[0]+"-"+element[1]+"_"+current_date;

					cy.screenshot(screenshot_destination);
				})
			})
		})
	})
})