# QA Technical Exercise

This repository contains the source of an application to be tested. It's a simple client (web) and server application (api).

There's something wrong, and it'll be up to you to report it, create a reproducible test case, and see how far you can get on your report.

**Can you spot the issue?**

![](issue.png)

## Objective
This exercise has several objectives, and we'll evaluate not only the results but the process that led you to it. 

1. Report the bug as if it should be reported for developers to fix it. 
2. Create an automated tests that asserts that the observed behavior is wrong and that passes once the issue has been resolved. 
3. Within the `server` folder there's a unit test, even though the test passes there's something wrong about it, can you fix it?
4. Can you spot the offending line of code / file / section that's causing this issue?

Please keep track of all your decisions and document your process along the way, what did you do? how you did it? and most important why you did it?

**NOTE**: For the automated testing you can use the language of your choice, and the framework of your choice. As long as the exercise comes back with the required steps for running the test.

## Prerequisites  
In order to run this application you will need to have GIT and Docker installed: 

* **Docker**. Get docker from [https://docs.docker.com/engine/installation/](https://docs.docker.com/engine/installation/)

* **GIT**. Get GIT from [https://git-scm.com/](https://git-scm.com/)

### Configuring the environment 
With the email that points to this repository, you have received a set of configuration settings. Please update your `server/config/defaults.json` accordingly to be able to run the tests.

```json
{
  "auth": {
      "domain": "auth0-domain",
      "clientId": "auth0-client-id",
      "clientSecret": "auth0-client-secret"
  }
}
```

## Running the app 
Once you have checked out the app, and docker installed you just need to do: 

```bash 
$ docker-compose up 
```

This will make the app (both server and client to be running on your machine).

When the app is running, the output should look like this

```bash
# johnnyhalife@westeros.local ~/Documents/GitHub/qa-excersice
λ docker-compose up 
Starting qaexcersice_client_1
Starting qaexcersice_server_1
Attaching to qaexcersice_server_1, qaexcersice_client_1
client_1  | npm info it worked if it ends with ok
client_1  | npm info using npm@3.10.8
client_1  | npm info using node@v6.9.1
server_1  | Server is ready, listening on port 5000
client_1  | npm info lifecycle client@0.1.0~prestart: client@0.1.0
client_1  | npm info lifecycle client@0.1.0~start: client@0.1.0
client_1  | 
client_1  | > client@0.1.0 start /usr/src
client_1  | > react-scripts start
client_1  | 
client_1  | Starting the development server...
client_1  | 
client_1  | Compiled successfully!
client_1  | 
client_1  | The app is running at:
client_1  | 
client_1  |   http://localhost:3000/
client_1  | 
client_1  | Note that the development build is not optimized.
client_1  | To create a production build, use yarn run build.
client_1  | 
```

Open your web browser and navigate to [http://localhost:3000](http://localhost:3000)

##  Running the Unit Test of the Server App 
The server app has a unit test into it, to run the unit test you can do the following 

```bash 
$ > cd server 
$ > docker build -t server . 
$ > npm install
$ > docker run -v $PWD:/usr/src server npm test
```

## About the app 
The app is built using the `create-app` from React it's just a boiler plate. 

And the server has been bootstraped with `express.js` on NodeJs.

## Questions? Feedback? Concerns

Write directly to me at johnny@mural.ly
