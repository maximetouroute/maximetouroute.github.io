# Portfolio Website

A simple portfolio website.

#### How to run and deploy

- npm run develop
- npm run deploy

#### How to install

- npm install -g gatsby-cli
- npm ci

#### Google Calendar Integration

The "news" page is integrated with a public google calendar.  
Rules for formatting event description properly :  
All urls are put at the end of description  
All html tags & break lines from google calendar are deleted.  
Want to break a line ? Type "BR"  
Make sure to put spaces around your urls

#### Libs

- [gatsbyJS](gatsbyjs.org) framework and multiple plugins
- [React](reactjs.org/), obviously
- Customised image compare component based on [react-compare-image](https://github.com/junkboy0315/react-compare-image)
- [react-image-lightbox](https://github.com/frontend-collective/react-image-lightbox)

#### Todolist

- responsive navbar
- ~~photobook inside a custom page~~
- analytics
- filter blog posts depending on categories
- auto generation of navbar links
- clean graphql with fragments
- factorise and clean css
- Dirty workaround in components image-compare and photo-grid to use in markdowns
- updating gatsby packages somehow broke many dependencies, need to update the whole project with a gatsby new
