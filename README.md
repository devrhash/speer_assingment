1. used express and mongodb for this assingment because it has a large community support and mongodb has a good documentation. <br></br>
2. used express-rate-limit library to limit request.<br></br>
3. for authorization json bearer token is used.<br></br>
4. used jsonwebtoken and bcryt libray for token generation and password encryption. <br></br>
5. user schema is {UserName:"some name",password:"password"}.<br></br>
6. notes schema is {name:"name",desription:"description",user_id:ojectId,shared_by:objectId}. when note is created user_id and shared_by has the same value which is the ObjectId of the user who has created the note.<br></br> After sharing another new note is created with same name and description, where shared_by is the ObjectId of the user who has shared the note and user_id is the Id of the user to whom note is shared.<br></br>
7. in the request api/notes/:id/share here id is of the user to whom the note has to be shared.<br></br>
8. text indexing is created on {name,description} in notes.<br></br>
9. npm i install to install all dependencies.<br></br>
10. node index to run the code.<br></br>
