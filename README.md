### Site link

https://facebook-mock-project.netlify.app/

# Facebook Clone

A Web Application intended to look and operate in a similar fashion to Facebook. Users can create an account, post, comment and add friends. Along with other features this project was intended to provide the same feel one would get using Facebook. The client side was built with React, and Redux to handle state. Axios was used to to make the necessary API calls to our server side which was built using Express. For data handling MongoDB Atlas was used as well as Cloudinary for image uploading.

### Executing program

Copy the repository.

```
git clone git@github.com:Nuccino92/facebook-clone.git
```

Enter into the client/server directories through terminal respectively.

#### Client Directory (terminal)

- Replace all https://facebook-clone-production.up.railway.app/(keep params) urls with http://localhost:8000/ (keep params)

```
npm install
npm start
```

#### Server Directory (terminal)

```
npm install
```

- Create a MongoDB database https://cloud.mongodb.com/
- Create a Cloudinary account https://cloudinary.com/
- Create .env file that contains:

```
// MongoDB connection string
MONGOOSE_URI =XXXXXX

// any JWT secret key
JWT_SECRET = XXXXXX

// cloudinary name
CLOUDINARY_CLOUD_NAME=XXXXXX

// cloudinary API key
CLOUDINARY_API_KEY=XXXXXX

// cloudinary secret
CLOUDINARY_API_SECRET=XXXXXX
```

```
npm start
```
