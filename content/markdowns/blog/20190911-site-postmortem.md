---
title: Website Post Mortem - Part I
path: 'website-post-mortem'
date: 2019-09-11
tags: ['tech', 'web-dev']
type: 'blog'
---

I couldn't exactly put a finger when, but at one point while preparing myself for AI-related jobseeking, *"let's put my resume online in a simple throwaway website,"* turned into *"let's make a personal website with blog from scratch"*. I do remember, however, not long after that *"let's try Django and focus all of my intellectual resources into mastering Python for any task,"* turned into *"hey, Gatsby seems cool, might as well refresh my React knowledge which would likely be not very relevant in my potential future job,*" That sounds like a perfectly good idea.

But here we are now, website minimally presentable and all; thank you for taking your time to read this attempt at a welcome post. After too much deliberation and rounds of impulsive cleaning, I have decided to do a post-mortem on the development process of this web. I fear this (along with the coming part II) will be the only post tagged with "web-dev" in a while so if that's why you're here... well that's too bad.

Anyway let's get to talking about stuff.

### About This Site

The website is built using [Gatsby.js](https://www.gatsbyjs.org/) from the very barebone ['gatsby-starter-default'](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-default/). I decided on building everything from scratch because there's not much to build anyway; the decision to attach a blog comes later when I'm doing basic tutorials for Gatsby. Starting from a fancier and a more sophisticated starter would be akin to drawing a circle by first drawing a cover page illustration for [Shonen Jump](https://www.viz.com/shonenjump) then erasing all the uneeded details. Doing everything from scratch also make sense given my limited knowledge on the development framework. Skipping the fundamentals and focusing on the end-product just contradicts one of the reasons for building the site.

Content-wise, there's nothing much: a landing page, a blogroll, and a resume page. Looking at the finished site, it's funny that small features such as post tags. pagination, or just left-aligned date on the resume pages took quite a while to get right. Hereafter I will always click 'next' on a paginated website content with utmost respect and worship. Currently the plan is to push all kinds of writings on the site, ranging from information dump on artificial intelligence/machine learning to personal diaries/streams of consciousness. Also probably essays on popular culture and media.

Moving on to the actual post mortem though.

### What Went Well

#### Gatsby and Static Site Generators

Being new to the concept of Static Site Generators, I'm pleasantly surprised at how much I like the whole idea of just generating the entire static site and then deploying it every time. Admittedly it makes perfect sense only when your only concern is serving content, but that's exactly what I'm looking to do. With regards to blogging, making a new post by just typing a markdown file on my machine and doing a git push is so convenient and more hassle-free than loading your CMS and writing on the browser. The switch feels almost like a revelation, only rivalled by the similar switch MS Word to LaTeX.

Gatsby in itself is great; given my prior experience with React the learning curve doesn't feel that steep. That being said, I am convinced that anyone with enough grit to put aside at least 1 full day to the learning process can easily slide to developing Gatsby sites given the active [community](https://www.gatsbyjs.org/contributing/community/) and the excellent [documentation](https://www.gatsbyjs.org/docs/)/[tutorials](https://www.gatsbyjs.org/tutorial/). In addition, the development of this site was not at all plagued with any weird bugs/errors other than my frequent episodes of making stuffs implode through small typos. 

#### CSS and Emotion

CSS, including all of its flavors (LESS, Sass) is something I have never touch prior to building this site. As such, it was the most daunting things to get into—my lack of design sensibility does not help my confidence here also. After a severe analysis paralysis (which I will touch on the next part) I gave [Emotion](https://emotion.sh/docs/introduction) a chance. As you might have guessed, I'm new to Emotion. While Emotion scares me at first (the whole 'css-in-js' thing is something I never heard before), I learnt how to utilize it with relative ease.

But probably, the best thing about Emotion is writing about it. An appropriate amount of snicker were had during the writing of the last 5 sentences. Second best thing is of course its logo.

Flexbox is another concept in CSS I didn't expect to ease into in a short time. Everything I need to know about flexbox is summed up in this nifty [article](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) (or [this](https://marina-ferreira.github.io/tutorials/css/flexbox/)). Overall I'm quite satisfied with the minimalist look of the website, even if that's only because I'm unable to come up with a good palette that is not grayscale. Of course, spacing, kerning, and all that stuff was based on ballpark estimates and feeling; there's always room for improvement. This site was always meant to be a work-in-progress though, so that is perfectly fine.

#### GraphQL

Being familiar with the concept of RESTful API, I initially struggled to come to terms with GraphQL. Transitioning to a freeform query on one endpoint from the very structured API method calls feels like entering college and living alone for the first time; it's like you have all this freedom without knowhing what exactly to do with it. After using it as necessary for a while though, it's pretty neat. Essentially it's a query language allows you to get exactly what you asked in the structure you want. I particularly fancy the fact that the query and result is written in practically the same structure, which extends naturally to Javascript.

That being said, I have yet to try mutations or subscriptions. Also I imagine things will get more complicated once you're actually building something like a GraphQL interface for multiple legacy APIs/database. However, learning using it with Gatsby is actually a pleasant enough experience for me to stop looking at it as some complicated piece of web development tech I won't ever bother to learn. There's also a [website](https://www.howtographql.com/) to learn about it (that I did not read through considering all GraphQL stuff in Gatsby is pretty basic) which looks cool. All in all, I have to say well played, Facebook.

---

That went longer than expected. Part II will touch on the things I'm not very proud about doing while developing this website, and some stuff I want to add in the future. Before that ideally I want to push some AI/ML stuff here; I guess it's time to start on that overdue [Kuzujishi recognition](https://www.kaggle.com/c/kuzushiji-recognition) kaggle comp I want to do to start off my personal AI/ML grind (not that I will be able to meet the deadline).

I am however moving back to Indonesia late this month, so fingers crossed I can somehow save some time amidst all of it. I'm looking forward to meeting a lot of people, old and new. So, do send me words if you want to meet! 

Well, until then.