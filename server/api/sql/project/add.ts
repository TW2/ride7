import {useDatabase} from "nitropack/runtime";

export default defineEventHandler(async (event) => {
    const db = useDatabase("default");
    const requestBody = await readBody(event);
    
    // Create a new comment
    await db.sql`INSERT INTO project(
        titre,
        titre_o,
        titre_a,
        coprod,
        annee,
        pays,
        saison,
        studio,
        auteur,
        genres,
        nb_eps,
        nb_oav,
        nb_films,
        site_off,
        site_fr,
        type_projet,
        affiche,
        bandeau,
        etat,
        dispo,
        synopsis,
        visible,
        geo_bloc,
        geo_filtre,
        geo_list
    ) VALUES (
        ${requestBody.titre},
        ${requestBody.titre_o},
        ${requestBody.titre_a},
        ${requestBody.coprod},
        ${requestBody.annee},
        ${requestBody.pays},
        ${requestBody.saison},
        ${requestBody.studio},
        ${requestBody.auteur},
        ${requestBody.genres},
        ${requestBody.nb_eps},
        ${requestBody.nb_oav},
        ${requestBody.nb_films},
        ${requestBody.site_off},
        ${requestBody.site_fr},
        ${requestBody.type_projet},
        ${requestBody.affiche},
        ${requestBody.bandeau},
        ${requestBody.etat},
        ${requestBody.dispo},
        ${requestBody.synopsis},
        ${requestBody.visible},
        ${requestBody.geo_bloc},
        ${requestBody.geo_filtre},
        ${requestBody.geo_list}
    )`;
});