# Next Sanity Demo - Next.js & Sanity CMS

**[Click here to see live demo →](https://demo.dzrlab.top/)**
**[Click here to edit sanity data →](https://demo.dzrlab.top/studio/)**

###### Click the above button for one-click clone & deploy for this template. Read [quick start](#quick-start) guide below. 

## Quick Start

To use this template and configure sanity and deploying to vercel, we recommend the "One Click Deploy" method.  Just follow the GUI and you will have an exact copy of what you see in the live demo .Using this method will automatically configure the following tasks for you.

- Signup/Login to Sanity CMS (if not already)
- Create a Sanity Project
- Add required CORS & API settings in the project
- Create new Repository in Github
- Install Sanity Integration in Vercel
- Add required `.env` variables
- Deploy Sanity Studio - Content Manager
- Import Demo Content (as seen in live demo)
- Deploy to Vercel
 
### Run Next.js frontend

You can use the normal Next.js method to run the frontend. Just run the following command and a live server will open on `http://localhost:3000`

```
pnpm i
pnpm dev
pnpm start (`pnpm build` before it)
```


### Run Sanity Studio CMS

1. Install Sanity CLI globally (if not already)

```
npm install -g @sanity/cli
```

2. Run 

To run sanity studio server, run the following command in your terminal.  It will open a live server on `http://localhost:3333`

```
pnpm sanity
# or
cd studio && pnpm start
```
