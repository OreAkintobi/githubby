# githubby

### To run app:
- cd into app folder
- run `yarn install`
- run `yarn start`

### What I would have done with more time
**Please note, expo was giving me an error for close to an hour, so I had to rush through. I was so nervous, did not realise device was on my mobile data plan and laptop was on Wi-Fi, and it wasn't loading my app :cry:**

- I created a store folder, the plan was to use the combined reducer, add a reducer for the data that I would be getting from Github API
- The store folder would have a dataReducer through which all the actions would be outlined, an actions file to hold the functions, and a combined export that would make the Context & Provider available to the app in its entirety.
- So, once app is opened, api call runs once and makes data available globally.
- I usually have a constants folder in my projects, I keep everything that is susceptible to typo (eg pathnames, colors, fonts, constants) in this folder, and make it available elsewhere. I only have to change it once if I need to.
- Data was supposed to be made available throughout the app, in both home screen and in the individual commit screen
- This would make it possible to view an individual commit on the commit screen without having to pass params via navigation in the previous (home) screen.
- Another thing I wanted to do was finish the design of the commit screen so that if the user wanted to view more details, they would have been viewable on the individual commit screen
- Params is working, so on clickthrough, user is taken to commits screen with commit details
- Additional plan was to provide two navigation tabs in a BottomNav tab navigator. In one tab, the user would view commit details raw, as in homescreen. In second tab, user would be able to filter by name of author of each commit. Unfortunately, pressed for time.


![Screenshot](/Screenshot.png)
