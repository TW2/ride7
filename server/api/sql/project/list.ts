import {useDatabase} from "nitropack/runtime";

export default defineEventHandler(async (event) => {
    const db = useDatabase("default");

    const { rows } = await db.sql`SELECT * FROM project`;
    
    return {
        rows,
    };
});