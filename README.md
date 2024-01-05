used express and mongodb for this assingment because it has a large community support and mongodb has a good documentation.
used express-rate-limit library to limit request.
for authorization json bearer token is used.
used jsonwebtoken and bcryt libray for token generation and password encrption. 
user schema is {UserName:"some name",password:"password"}.
notes schema is {name:"name",desription:"description",user_id:ojectId,shared_by:objectId}. when note is created user_id and shared_by has same value which is the ObjectId of the user who has created the note. After sharing another new note is created with same name and description, where shared_by is the ObjectId of the user who has shared the note and user_id is the Id of the user to whom note is shared.
in the request api/notes/:id/share here id is of the user to whom the note has to be shared.
text indexing is created on {name,description} in notes
