import {useDatabase} from "nitropack/runtime";

export default defineEventHandler(async (event) => {
    const db = useDatabase("default");
    const requestBody = await readBody(event);
    
    /*
    This file goal is to create a structure if no structure
    is present in the database.
     */
    
    /*
    Create an entrypoint for table 'COMMENTS'.
    --------------------------------------------------------------------
    This is the big picture :
    
    +---------------+---------+----------------------------------------+
    | _id           | int     | autoincrement                          |
    +---------------+---------+----------------------------------------+
    | news_id       | int     | id used to display the commented news  |
    +---------------+---------+----------------------------------------+
    | user_id       | int     | id of the user (rights changes display)|
    +---------------+---------+----------------------------------------+
    | moment        | string  | the date and h:m couple                |
    +---------------+---------+----------------------------------------+
    | message       | string  | the content of the comment             |
    +---------------+---------+----------------------------------------+
    | likes         | int     | if a user likes your comment           |
    +---------------+---------+----------------------------------------+
    | dislikes      | int     | if a user dislikes your comment        |
    +---------------+---------+----------------------------------------+
    | reply_to_id   | int     | record user id you send a reply        |
    +---------------+---------+----------------------------------------+
    ====================================================================
     */
    
    // Create 'COMMENTS' table if not exists
    await db.sql`CREATE TABLE IF NOT EXISTS comments
     (
         _id            INTEGER PRIMARY KEY,
         news_id        INTEGER,
         user_id        INTEGER,
         moment         TEXT,
         message        TEXT,
         likes          INTEGER,
         dislikes       INTEGER,
         reply_to_id    INTEGER
     )`;
    
    await db.sql`DELETE FROM comments
       WHERE _id = ${requestBody.comment._id}`;
    
});