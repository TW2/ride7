| Nom         |  Type   | Remarques                                         | 
|:------------|:-------:|:--------------------------------------------------|
| _id         | INTEGER | PK AUTO INC                                       |
| titre       |  TEXT   |                                                   |
| titre_o     |  TEXT   |                                                   |
| titre_a     |  TEXT   |                                                   |
| coprod      |  TEXT   |                                                   |
| annee       | INTEGER |                                                   |
| pays        |  TEXT   |                                                   |
| saison      |  TEXT   |                                                   |
| studio      |  TEXT   |                                                   |
| auteur      |  TEXT   |                                                   |
| genres      |  TEXT   | Tableau JSON                                      |
| nb_eps      | INTEGER |                                                   |
| nb_oav      | INTEGER |                                                   |
| nb_films    | INTEGER |                                                   |
| site_off    |  TEXT   |                                                   |
| site_fr     |  TEXT   |                                                   |
| type_projet |  TEXT   |                                                   |
| affiche     |  TEXT   |                                                   |
| bandeau     |  TEXT   |                                                   |
| etat        | INTEGER | En cours 0, Fini 1, Abandon 2, Licence 3, Autre 4 |
| dispo       | INTEGER | Tous 0, Membre 1, VIP 2, Personne 3               |
| synopsis    |  TEXT   |                                                   |
| visible     | INTEGER | Non visible 0, Visible 1                          |
| geo_bloc    | INTEGER | Inactif 0, Actif 1                                |
| geo_filtre  | INTEGER | Inactif 0, Actif 1                                |
| geo_list    |  TEXT   | Tableau JSON                                      |