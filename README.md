# cypress

- generic_test fonctionnel, boucle sur les profils et sur les viewports, visite uniquement la page d'accueil
- generic_test_2 bugué, boucle sur les profils, les viewports ET les pages visitées (sur le même site). Plante au retour sur l'interface Facil'iti.
- generic_test_3 bugué, fonctionnement le plus logique, avec implantation du cookie en définissant le domaine en option (donc pas besoin de visiter deux sites à chaque test). Sauf que le domaine apparait préfixé d'un '.' et le tag ne le reconnait donc plus : pas de chargement du profil Facil'iti.