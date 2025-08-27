import {useDatabase} from "nitropack/runtime";

export default defineEventHandler(async (event) => {
    const db = useDatabase("default");
    const requestBody = await readBody(event);
    
    /*
    This file goal is to create a structure if no structure
    is present in the database.
     */
    
    /*
    Create an entrypoint for table 'MEDIAS'.
    --------------------------------------------------------------------
    This is the big picture :
    
    +---------------+---------+----------------------------------------+
    | _id           | int     | autoincrement                          |
    +---------------+---------+----------------------------------------+
    | project_id    | int     | id used to link the project            |
    +---------------+---------+----------------------------------------+
    | news_id       | int     | id used to link the news               |
    +---------------+---------+----------------------------------------+
    | numero        | int     | the numero of this episode             |
    +---------------+---------+----------------------------------------+
    | src_ddl       | string  | chained src list                       |
    +---------------+---------+----------------------------------------+
    | nb_ddl        | string  | nb downloads of src_ddl                |
    +---------------+---------+----------------------------------------+
    | src_streaming | string  | chained src list                       |
    +---------------+---------+----------------------------------------+
    | viewed        | string  | nb viewed for src_streaming            |
    +---------------+---------+----------------------------------------+
    | sums          | string  | crc32 md5 sha256 sha512                |
    +---------------+---------+----------------------------------------+
    | likes         | int     | if a user likes your comment           |
    +---------------+---------+----------------------------------------+
    | dislikes      | int     | if a user dislikes your comment        |
    +---------------+---------+----------------------------------------+
    | _active       | int     | 0 inactive 1 active                    |
    +---------------+---------+----------------------------------------+
    | name          | string  | release name                           |
    +---------------+---------+----------------------------------------+
    ====================================================================
     */
    
    // Create 'COMMENTS' table if not exists
    await db.sql`CREATE TABLE IF NOT EXISTS medias
    (
        _id             INTEGER PRIMARY KEY,
        project_id      INTEGER,
        news_id         INTEGER,
        numero          INTEGER,
        src_ddl         TEXT,
        nb_ddl          TEXT,
        src_streaming   TEXT,
        viewed          TEXT,
        sums            TEXT,
        likes           INTEGER,
        dislikes        INTEGER,
        _active         INTEGER,
        name            TEXT
    )`;
    
    // Create a new comment
    await db.sql`INSERT INTO medias VALUES (
        1, /* "_id" INTEGER PRIMARY KEY, */
        ${requestBody.media.project_id},
        ${requestBody.media.news_id},
        ${requestBody.media.numero},
        ${requestBody.media.src_ddl},
        ${requestBody.media.nb_ddl},
        ${requestBody.media.src_streaming},
        ${requestBody.media.viewed},
        ${requestBody.media.sums},
        ${requestBody.media.likes},
        ${requestBody.media.dislikes},
        ${requestBody.media._active},
        ${requestBody.media.name}
    )`;
});