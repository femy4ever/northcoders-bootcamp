# CICD Simulator

Create a bash script that achieves the following steps in order before moving onto the next one:

1. Copies this repo to a `staging` folder
2. Installs the dependencies
3. Runs the tests
4. Builds the Docker image
5. Tags the image to a Dockerhub repo
6. Pushes the Docker image to the repo

Your pipeline should log a message to the terminal to tell you what step its currently on.
