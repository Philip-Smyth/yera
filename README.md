## Yera: A fitbit dashboard to track heart-rate and activity levels

# Current Status: Prototyping-Early proof of concept development, currently no testing

A small side project to work with the fitbit api and firebase. 

The overarching plan has been to create a dashboard that will pull down a users fitbit data each day and then show this in the form of a graph. This will then allow us to analyze the data. If there are cases of a heartrate spike with no correlated activity levels, then we can flag this period of time as a potential risk. This is to allow those that potentially suffer with anxiety, epilepsy or other conditions to better log and track these events.

Current status:

Basic UI implementation - 
- [x] Homepage
- [x] Navigation
- [x] "LogHistory" basic view
- [x] Stub client/user list view

General features
- [x] Rendering graphs with fixture fitbit data
- [x] Basic implementaion of firebase google login
- [x] Limit visibility to history etc to logged in users
- [ ] Implement firebase user authentication
- [ ] Implement cloud functions in firebase project
- [ ] Call firebase data sets for information
- [ ] Better isolate information dependant upon users

Ideally this will exist as a single SAAS website that will read from firebase firestore. The firestore will be updated at staggered intervals, calling cloud functions that call the fitbit api and update the firestore. 

If you are interested take a look at the issues, actions etc, as I will use these to track progress, plans and my thought process. 
