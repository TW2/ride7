import {useDatabase} from "nitropack/runtime";

export default defineEventHandler(async (event) => {
    const db = useDatabase("default");
    const requestBody = await readBody(event);
    
    await db.sql`DELETE FROM project WHERE _id = ${requestBody._id}`;
});