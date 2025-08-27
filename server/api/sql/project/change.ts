import {useDatabase} from "nitropack/runtime";

export default defineEventHandler(async (event) => {
    const db = useDatabase("default");
    const requestBody = await readBody(event);
    
    await db.sql`UPDATE project
    SET
        titre = ${requestBody.titre},
        titre_o = ${requestBody.titre_o},
        titre_a = ${requestBody.titre_a},
        coprod = ${requestBody.coprod},
        annee = ${requestBody.annee},
        pays = ${requestBody.pays},
        saison = ${requestBody.saison},
        studio = ${requestBody.studio},
        auteur = ${requestBody.auteur},
        genres = ${requestBody.genres},
        nb_eps = ${requestBody.nb_eps},
        nb_oav = ${requestBody.nb_oav},
        nb_films = ${requestBody.nb_films},
        site_off = ${requestBody.site_off},
        site_fr = ${requestBody.site_fr},
        type_projet = ${requestBody.type_projet},
        affiche = ${requestBody.affiche},
        bandeau = ${requestBody.bandeau},
        etat = ${requestBody.etat},
        dispo = ${requestBody.dispo},
        synopsis = ${requestBody.synopsis},
        visible = ${requestBody.visible},
        geo_bloc = ${requestBody.geo_bloc},
        geo_filtre = ${requestBody.geo_filtre},
        geo_list = ${requestBody.geo_list}
    WHERE
        _id = ${requestBody._id}
    
    `;
});