# URL Shortner (SKIDS-Health Assessment for SDE(MERN) role)

##  Steps to run the code (Windows OS)

- Clone the repository:
```sh
 git clone https://github.com/shaad82663/url-shortner
```

- After clonning the repository, Navigate to the project folder by running following command in terminal:
```sh
 cd url-shortner/
```

- Run the following command to install the all the node.js packages that are used in the code.
```sh
npm install
```

- Run the server by running following command:
```sh
npm run start
```

- The ouput in the termnal will be :
>Listening Server over port 4000 in DEVELOMENT mode.
>
>mongoDB Database is connected with mongodb://localhost:27017/urlshortner

# DATABASE (MongoDB)

## TABLE-1 : USER 
     Schema : {email,password} //All not null
     Primary Key : _id (auto generated)
     Methods/Functions : [getJwtToken(), comparePassword()]
     
## TABLE-2 : URL
     Schema : {urlCode, longUrl, shortUrl, date} // All not null
     Primary Key : _id (auto generated)

# REST API

The REST API used in the code is described below.

## Register User

### Request

`POST /register`

     http://localhost:4000/register

#### Sample Request (JSON)
  
    {
    "email" : "shaad82663@gmail.com",
    "password" : "123456"
    }
    
### Response
  
    HTTP/1.1 200 OK
    success : true
    token : token
    user : {...user}
    
## Login User

### Request

`POST /login`

     http://localhost:4000/login

#### Sample Request (JSON)
  
    {
    "email" : "shaad82663@gmail.com",
    "password" : "123456"
    }
    
### Response
  
    HTTP/1.1 200 OK
    success : true
    token : token
    user : {...user}    
    
## Logout

### Request

`GET /logout`

     http://localhost:4000/logout

#### Sample Request (JSON)
  
    {}
    
### Response
  
    HTTP/1.1 200 OK
    success : true,
    message : "Logged Out"
    
## Short URL (Protected Route : Login first)

### Request

`POST /shorten`

     http://localhost:4000/shorten


#### Sample Request (JSON)

    {
    "longUrl" :  "https://www.geeksforgeeks.org/java-hello-world-program/"
    }
 
### Response
  
        HTTP/1.1 200 OK
        success : true,
        url : {...url}
        
### Error (In case of not logged in user) //Same for other protected routes.
       {
       "success": false,
        "error": {
        "statusCode": 500
         },
         "errMessage": "Login first to access resourses.",
         "stack" : {error-stack}
       }
    
## Get all the events for today (Protected Route : Login first)

### Request

`GET /:code`

     http://localhost:4000/:code
     
#### Sample Request (JSON) 
  
    Copy the URL and paste it in browser : http:localhost:4000/6S1bFVE85    

### Response
  
        HTTP/1.1 200 OK
        Page Opened in Browser
      
## Installation

[Node.js](https://nodejs.org/) enviroment is required to run the code.
[Git Bash](https://git-scm.com/) is suggested as a terminal.

Install the dependencies and devDependencies.

```sh
cd <foler path>
npm install
```

Run the app

```sh
cd <foler path>
npm run dev //Running in Development mode
npm run prod //Running in Production mode
```



