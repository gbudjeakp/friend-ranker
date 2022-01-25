# friend-ranker
A friend ranking application that let's you put your friends in their place 

# It's Open Source
This is an open source project?? I guess? if you see this and you're curious, feel free to reach out to me for more details. 
I'll be updating this as much as I can. A Low Level Design should be out sometime when I'm free. In the mean time, checkout the current design. 
Feel free to suggest improvements. Design is subject to change as more research is being done.

# Plans For the App
For the sake of time and simplicity, the app will be built using API's from various social media platforms. It'll be dockerized and running serverless on GCP. There'll also be a CI/CD pipeline prepared using github-actions.

# UI/UX Designs
Here are some overviews of the UI. There'll be prototypes of the functionality in the future. For now this app is geared towards desktop but there'll be a mobile version for it 
some time in the future.
  ### The Dashboard before rankings have been made.
   ![Empty-Dashboard](https://user-images.githubusercontent.com/61554248/150936920-b77f964b-81d8-43d5-bb6d-1cc4c78b86da.png)
   
  ### The Dashboard after user has ranked friends
   ![Dashboard](https://user-images.githubusercontent.com/61554248/150937118-ec628c2f-ec85-4fea-a3ce-1925de1d2416.png)



## High Level Design
This is a rough high level design of the friend ranker application.
### Previous Design(Update on the new design should be out soon) 
![Friend-Ranker Architecture](https://user-images.githubusercontent.com/61554248/141692748-f48877ed-b6a6-49ad-867d-7b77549b4b7d.png)


## How to contribute
Interested in helping out build this out? 
First clone the `development branch` repository to your local environment  by entering 

`git clone {development branch url/ssh} `

# For Front-End Development
Next open the repo in your IDE. Then change directories to `client` if you want to work on the front-end part of things and enter 

`yarn start`

to start up the react side of things. The project will be done in TypeScript so keep that in mind. I'll be adding the UI/UX mocks to the front-end side of things once everything is figured out well maybe not when everything is figured out maybe just bits by bits.

# For Back-End Development
After some consideration and planning, there'll be no backend here (Sort of a no backend). The application will be a severless on hosted on GCP and running with cloud functions.
