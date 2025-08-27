import {useDatabase} from "nitropack/runtime";

export default defineEventHandler(async (event) => {
    const db = useDatabase("default");
    const requestBody = await readBody(event);
    
    // Create a new user
    await db.sql`INSERT INTO users
    (
        mail, mail_t, surnom, surnom_t, photo, photo_t, sign, sign_t,
        privilege, privilege_t, pw_secure, role_t
    )
    VALUES (
        ${requestBody.mail},
        ${requestBody.mail_t},
        ${requestBody.surnom},
        ${requestBody.surnom_t},
        ${requestBody.photo},
        ${requestBody.photo_t},
        ${requestBody.sign},
        ${requestBody.sign_t},
        ${requestBody.privilege},
        ${requestBody.privilege_t},
        ${requestBody.pw_secure},
        ${requestBody.role_t}
    )`;
});