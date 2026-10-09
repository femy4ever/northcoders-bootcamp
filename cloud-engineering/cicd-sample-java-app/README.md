# Continuous integration

## Introduction

Another day, another development language - this time the development team you are supporting have created a Java [Spring Boot](https://spring.io/projects/spring-boot) based web application.

They've shared a Dockerfile and all the code with you in this repository.

It's your job to explore the code, getting it running locally and then also create the build pipeline for this app.

At this stage you don't need to have the pipeline deploying the application but it should make sure to build, test, package and push the Docker image to your container registry.

You'll make use of the [CircleCI](https://circleci.com/) SaaS tool for defining and running your pipeline.

## Exercises

Work through the tasks provided in the [tasks](./tasks) folder.

## Further reading

[CircleCI Java/Maven Tutorial](https://medium.com/@arton.demaku/getting-started-with-circleci-for-java-applications-21eee6888a39)

[CircleCI ECR Orb](https://circleci.com/developer/orbs/orb/circleci/aws-ecr)

[CircleCI ECR pushing guide](https://circleci.com/docs/ecs-ecr/)
