# gamingBlogBackend

# #Login Route
# /login
# METHOD: POST

# #Register Route
# /register
# METHOD: POST

# #Edit User
# /user/:id
# METHOD: PUT
# when editing a user, call the object, then update the whole object but change the information that is being parsed through

# #Add A Post
# /blog
# METHOD: POST

# #Edit a Post
# /blog/:id
# METHOD: PUT
# when editing a post, call the object, then update the whole object but change the information that is being parsed through

# #Delete Post
# /blog/:id
# METHOD: DELETE

# #Add A comment
# blog/:id/comment
# METHOD: POST

# #Edit a comment
# /comment/:id
# METHOD: PUT
# when editing a post, call the object, then update the whole object but change the information that is being parsed through

# #Delete comment
# /comment/:id
# METHOD: DELETE

# #Get User Posts
# /user/:id/blogs
# METHOD: GET

# #Get User Comments
# /user/:id/comments
# METHOD: GET

# #Get All Posts
# /blogs
# METHOD: GET

# #send emails 
# /send-email
# after registering you should get back an object of the user that registered. store that to local storage and set the body for the email, password, and fullName to the info in the object. 