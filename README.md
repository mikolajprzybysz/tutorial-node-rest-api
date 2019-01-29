# Tutorial for creating node rest api
Regardless of the system you are running (Windows, MacOs, Linux), you can use following commands to run the service

## Build
Install dependencies by running following command

    docker-compose run --rm --entrypoint "npm install" tutorial-app
    
## Run
Run service

    docker-compose up

## Verify it works
Open browser (or query address with curl) and enter

    http://localhost/
    
    
