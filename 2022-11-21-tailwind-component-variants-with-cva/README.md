# A Solution For Having Way Too Many Classnames in Larger Tailwind Components

Tailwind is an amazing library for writing styles, which gained a lot of popularity lately. I love to work with it, but also see some potential pitfalls when creating bigger components — for example as part of a design system, that has a lot of different variants of one component.

Think about a button that can be a primary, secondary, destructive button and even has a disabled and loading state for all these 3 variants. The classnames you add with Tailwind can become quite messy when building such a component. But not anymore! A few weeks ago I came across a library called Class Variance Authority (CVA), which adds a similar API as Stitches brings to Tailwind. In this video we dive into CVA and see if this makes writing bigger / complicated components any better.

## Start this project

Run `yarn` and `yarn dev` to view this project on [localhost:3000]( http://localhost:3000)

## Links

🔗 Stitches: [stitches.dev](https://stitches.dev/)
🔗 CVA on Github: [github.com/joe-bell/cva](https://github.com/joe-bell/cva)
🔗 My PR on CVA’s Github about array variants and negatory variants: [github.com/joe-bell/cva/pull/66](https://github.com/joe-bell/cva/pull/66)
🔗 Shopify’s button: [polaris.shopify.com/components/button](https://polaris.shopify.com/components/button)
🔗 Tailwind: [tailwindcss.com/](https://tailwindcss.com/)

🐦 Follow me on Twitter: [twitter.com/frontend_fyi](https://twitter.com/frontend_fyi) & [twitter.com/JeroenReumkens](https://twitter.com/JeroenReumkens)
👨‍🏫  Check my mentorships: [jeroenreumkens.nl/mentoring](https://www.jeroenreumkens.nl/mentoring)