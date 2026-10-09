# Family Photo Album App 📸

## L2C

You can find the L2C link [here](https://l2c.northcoders.com/courses/ce-provisioning/photo-display-app-v2)

## Overview

This application dislays photos shared by the family. It's a place the whole family can log in to see different pictures.

Ok....so right now its not actually real pictures, just ones that AI generated but you get the picture (excuse the pun 🤣)

## Features

### Completed ✅

📸 Displaying of pictures already in album ✅

📂 Ability to upload your own pictures ✅

📧 Email notification when a family member uploads a new photo ✅

### Coming soon ⏳

🖼️ Uploaded pictures will appear on UI in album

## Instructions

The app is a NextJS based application and as a result you'll need **Node.js 16.14** or later to run the application.

### Configuring the application

The application relies on the right [environment variables](https://kinsta.com/knowledgebase/what-is-an-environment-variable/) being set.

You can see an example of the required configuration within the [./.env.example](./.env.example) file.

You will need to create a `.env.local` file with your correct AWS values within the root of the project to be able to successfully upload photos to S3.

### Starting the app

Once you've got node install you can run the following command to start the app

```
npm run dev
```

By default, the application will then start on [http://localhost:3000](http://localhost:3000)
