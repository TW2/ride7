| Nom         |  Type   | Remarques                     | 
|:------------|:-------:|:------------------------------|
| _id         | INTEGER | PK AUTO INC                   |
| mail        |  TEXT   |                               |
| mail_t      |  TEXT   | Mail team                     |
| surnom      |  TEXT   |                               |
| surnom_t    |  TEXT   | Surnom team                   |
| photo       |  TEXT   |                               |
| photo_t     |  TEXT   | Photo team                    |
| sign        |  TEXT   |                               |
| sign_t      |  TEXT   | Signature team                |
| privilege   | INTEGER | Membre 0 VIP 1 VIP+ 2         |
| privilege_t | INTEGER | Rien 0 Team 2 Admin 3 Owner 4 |
| pw_secure   |  TEXT   | JSON 3 mots de passe          |
| role_t      |  TEXT   | JSON                          |
