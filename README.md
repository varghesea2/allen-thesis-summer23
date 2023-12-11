# Allen-thesis-s23 

## Repository

https://github.com/varghesea2/allen-thesis-summer23

## Background
The Aim of this thesis is to create a Dynamic Malware detection model.
A machine learning model will be deployed to achieve the desired results. 

## Approach/Plan
Collect data/information from the browser by using functions calls. This collected information will then be passed to machine learning model which in turn will be able to help in applying/enforcing policies, preventing/avoiding malicious website, links etc.

## Outcomes/results
Using the above mentioned approch we should be able to monitor functions and their properties that are being used through out the website and collect information from them, this in turn helps to train the machine learning model that is being implemented.

## Instructions on how to run the frame work on your system
Cloning a Repository from GitHub

Install Git:
Ensure Git is installed on your system. You can download it from Git's official website.

Open a Terminal or Command Prompt:
On Windows, search for 'Command Prompt' or 'Git Bash'.
On macOS or Linux, search for 'Terminal'.

Navigate to Your Desired Directory:
Use the cd command to navigate to the folder where you want to clone the repository.
Example: cd Documents/Projects

Clone the Repository:
Find the repository on GitHub that you want to clone.
Click on the 'Code' button and copy the URL under 'HTTPS'.
Back in your terminal, type git clone [URL], replacing [URL] with the copied link.
Example: git clone https://github.com/user/repository.git

Navigate to the Repository Folder:
After cloning, navigate to the repository folder using cd [repository-name].

Installing npm and Running the Project

Install Node.js and npm:
Download and install Node.js from Node.js official website. npm is included in the Node.js installation.

Check the Installation:
Verify that Node.js and npm are installed by typing node -v and npm -v in the terminal.

Install Project Dependencies:
Ensure you are in the project directory (cd [repository-name] if not already there).
Run npm install to install the project's dependencies. This command reads the package.json file in the repository and installs all necessary packages.

Run the Project:
node index_domain.js – Benign
node index_domain_mal.js - Malicious
path for the above JavaScript files – [test/Javascript_Automation]

Once the files are generated. You must flag them as malicious(1) and benign (0) and then concatenate them.
Codes for the Machine learning model can be found under [allen-thesis-summer23/Professor]




## Team Members
   Allen Varghese
  
## Mentor
   Dr. Phu Phung