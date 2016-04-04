Clocker-Mobile
=====================

Clocker-Mobile is designed to be used in tandem with the Clocker 2.0 web app, enabling users to sign in remotely to clocker via their smartphone.

I used the Ionic framework, which enabled me to utilize JavaScript and Angular to build the entire app and run it natively on an iPhone or Android device (currently only tested on ios, however).

##2 Important Notes:

Currently, an organization must be logged in to the clocker web app in order to accept remote sign-ins from mobile devices. Upcoming versions, however, will support remote sign-in even if the parent organization is not logged in.

Additionally, because I am using session ID cookies to authenticate users and retrieve user data, in order to use the mobile app and the web app simultaneously, you'll need to run each app in a different browser.

##How it Works:

Clocker-mobile is designed to run natively on your smartphone. For demoing purposes, however, you can visit (LINK COMING SOON) to try out the app.

Once you have registered for a clocker-mobile account, any user of the Clocker Web-App can search for you by name and invite you to 'join' their organization (via the 'backend' view of the Clocker Web-App).

Upon invting you to join their organization, you will receive an invitation, which you can view by visiting the 'Invitations' tab on yourx mobile app.

Once you accept the invitation, the organization will be listed in the 'Clocks' view of the mobile app.

From the 'Clocks' view of the mobile app, just click on the organization to which you'd like to sign in. Then, make a selection from the group and event/activities dropdown.

Upon clicking 'Sign In,' a new sign in event will be created for you, and you will be listed as 'signed in' on the specified organization's visitor sign in list.

