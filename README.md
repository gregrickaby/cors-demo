# CORS Demo

Avoid CORS issues by using [API Routes from Next.js](https://nextjs.org/docs/api-routes/introduction).

## Get Started

1. Clone the repo `git clone git@github.com:gregrickaby/cors-demo.git`
2. CD into `cors-demo`
3. Start the dev server `npm run dev`
4. Visit any of the pages in the `/demo` directory

## ENV Vars

1. Create a new file named `.env.local`
2. Add the following ENV Vars to `.env.local`

```text
# This ENV variable is passed to the user's web browser.
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY='<your unsplash access key>'

# This ENV variable is not.
UNSPLASH_ACCESS_KEY='<your unsplash access key>'
```
