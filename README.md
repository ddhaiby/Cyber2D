cyber2d / [Module](./docs/modules.md)
# How to setup the game

## _Softwares_
#### _Tiled - Map Editor_

Go to https://www.mapeditor.org/download.html and download the latest version.

![image](https://user-images.githubusercontent.com/72042952/171312198-01488a32-3094-4786-93a4-01faa54ddc71.png)

#### _Git & Git lfs_

Download the .exe file from the 2 links below:
https://git-scm.com/ and https://git-lfs.github.com/

![image](https://user-images.githubusercontent.com/72042952/171312625-ce8eb34f-db49-4dd2-a53b-341a200b956d.png)
![image](https://user-images.githubusercontent.com/72042952/171312315-c9cd3fe9-c717-4675-9572-a9c4b45dad9d.png)


If you are not familiar with git, I suggest you to install _TortoiseGit_ which is a convenient software to use.
https://tortoisegit.org/download/

![image](https://user-images.githubusercontent.com/72042952/171312447-43432d00-4114-4e43-8082-47960f741e89.png)

#### _Visual Studio Code_
Download and install Visual Studio Code.

https://code.visualstudio.com/download

#### _npm_
Download and install nodejs version 16.15.1

https://nodejs.org/en/download/

To double-check that npm has installed. Write _npm_ in a console. It should display something like below.
![image](https://user-images.githubusercontent.com/72042952/171963988-863ee360-e815-4b63-bb17-0861254e1b7e.png)

## The game
#### _Quick version_

- Clone the repository https://github.com/ddhaiby/Cyber2D
- Make sure you are up-to-date with master branch
- In a console of the root project run the following line
  - npm i
  - npm run start
- The console should show you a link - usually _http://localhost:1234/_. In a browser use this link to see the game.
- You are ready! You can now use Visual Studio code to make your change. When you save your changes, the browser page automatically refreshes so you can see and debug your work.

#### _Long version_
##### I) Check installation
First of all make sure TortoiseGit is correctly installed. The quickest way to check it is to right click on your file explorer and see if TortoiseGit is on the menu.

![image](https://user-images.githubusercontent.com/72042952/171684368-fc06f14b-b2c7-4024-be54-3306c5849497.png)

##### II) Clone the repo
On this menu, click on ''Git Clone''. You should see a menu like the image below. Make sure the _URL_ is https://github.com/ddhaiby/Cyber2D and choose the directory to download the repository. Press OK then.

![image](https://user-images.githubusercontent.com/72042952/171685595-c23d9000-c138-44b1-965f-69dfc75061e2.png)

Once all files have been download, the project is ready to be used. The root folder should look like the image below.
![image](https://user-images.githubusercontent.com/72042952/172019490-9e1bc26b-e365-40f0-9de2-ff978ba6574c.png)

##### III) Open a console and initialize the game

Open a console in the root folder. One of the quickest way is to write _cmd_ in the path text box.

![image](https://user-images.githubusercontent.com/72042952/172019427-7a64c362-0894-4803-becf-c34dbf41daf5.png)

In this console, write then run _npm i_ and wait for the initialisation of the game. This will install everything you need to run the game. You won't need to do that again.

![image](https://user-images.githubusercontent.com/72042952/172019583-478d8228-e10c-4fb4-b295-9ccbe92bf7f5.png)

##### IV) Run the game
Once the initialization is done, write and run _npm run start_. Use the localhost link given in the console in a browser to see the game. The link is usually _http://localhost:1234/_.

![image](https://user-images.githubusercontent.com/72042952/172019645-edc3fef7-9474-43f5-9cf8-2af92a8d43d2.png)

You can play now !
![image](https://user-images.githubusercontent.com/72042952/172020414-0ede451e-962c-470c-ada1-d72b35e56cfe.png)
