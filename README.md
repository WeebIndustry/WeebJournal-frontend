# Rebuck Core Project

## a beta phase project of WeebJournal's front-end

This project is powered by NextJS. Made by Wello, a partner with WeebIndustry Team.

#### Getting Started

###### 1. Setting up deploy environment

You'll need git, NodeJS (latest LTS version), yarn installed. You should use UNIX styled shells for working, e.g. bash/zsh from Linux/MacOS/BSD/WSL on Windows, msys, cygwin, etc. for the hassle-less deployment. Windows is a little bit more inconvenient when setting up, so install it by yourself.

Setting up NodeJS for: 

* Ubuntu (also works on WSL): `sudo apt install curl -y && curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -`. Do not use NodeJS version from Ubuntu.

* Fedora/RHEL/CentOS: `sudo dnf install -y gcc-c++ make && curl -sL https://rpm.nodesource.com/setup_12.x | sudo -E bash -`

* MacOS (with brew): `brew install node`

* openSUSE Tumbleweed: `sudo zypper -vv in nodejs`

and yarn:

* For most of Linux distro and MacOS: [check yarn's installation instruction](https://classic.yarnpkg.com/en/docs/install).

* openSUSE Tumbleweed: `sudo zypper -vv ar https://dl.yarnpkg.com/rpm/yarn.repo && sudo zypper -vv in yarn` (hit `a` for always trust yarn's rpm repo when adding to zypper's repos list)

Set up the project:

* Clone this repo:  `git clone https://github.com/WeebIndustry/WeebJournal-frontend.git`

* Then jump inside: `cd WeebJournal-frontend`

* Switch to `rebuck-core` branch: `git checkout rebuck-core`

* Initialize the project: `yarn install`

Run the development server:

```bash
npm run dev -p 6969
# or
yarn dev -p 6969
```

Open [http://localhost:6969](http://localhost:6969) with your browser to see the result. You can change the port if you want by change `6969` with your own port.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.
