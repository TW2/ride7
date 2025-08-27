import {useDatabase} from "nitropack/runtime";

export default defineEventHandler(async (event) => {
    const db = useDatabase("default");
    const requestBody = await readBody(event);
    
    await db.sql`UPDATE users
        SET
            mail = ${requestBody.mail},
            mail_t = ${requestBody.mail_t},
            surnom = ${requestBody.surnom},
            surnom_t = ${requestBody.surnom_t},
            photo = ${requestBody.photo},
            photo_t = ${requestBody.photo_t},
            sign = ${requestBody.sign},
            sign_t = ${requestBody.sign_t},
            privilege = ${requestBody.privilege},
            privilege_t = ${requestBody.privilege_t},
            pw_secure = ${requestBody.pw_secure},
            role_t = ${requestBody.role_t}
        WHERE
            _id = ${requestBody._id}
        
    `;
});