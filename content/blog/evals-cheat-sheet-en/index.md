---
title: "Why Am I So Obsessed With Evals"
date: '2026-01-30'
description: 'Updating cheat sheet of my talk'
direction: ltr
language: 'en'
tags: ['ai', 'tech', 'evals', 'talks']
---

This is a cheat sheet of my lecture "Why Am I So Obsessed with Evals". There is a lot of content on the internet and I felt that most of it is messy / too general, so here appears a short explanation along with my personal opinions. If you weren't at my lecture and want to hear more, let me know.

## The Promise

GenAI creates the feeling that it's incredibly easy to do things. It's true that it's easy to reach something that works 90% of the time, but the distance to 99% or 100% is difficult - and I believe that Evals can enable us to get there.

## So what exactly am I talking about when I talk about Evals?

It's about a collection of small tests that check the output of the model. They can be:

1. **Code Evals** - for example, ensuring that the output is JSON, length, number of answers, etc. Simple and precise.

2. **LLM-as-a-Judge** - asking one model to judge the output of another model. It's highly preferable that it be binary, and the more specific the better.
   - Good question: "Does the answer contain medical information? Answer yes/no"
   - Less good question: "Rate how accurate the answer is from 1-5"

3. **Evals for Evaluators** - evaluation that is done on a model that judges. The most common would be to compare the answers that the LLM-as-a-Judge gave to data that is human labeled. For example, "Is the model's answer identical to the answer given by our domain expert?"

## How do we start?

Before we begin implementing an AI model in a product, it's critical to define (like any project) - what success will look like, what failures will look like, and what the risks are. For example, if we want to implement a support chatbot - we really, really don't want it to give customers information about other customers. So we sit down and characterize things in great depth.

The result of characterization can be a collection of positive and negative examples / Ground Truth collected by human experts, or a very long system prompt with all our instructions to the model.

But, from painful experience - this is almost never enough. We start and discover edge cases we didn't think about, the model identifies cases we didn't find and then we have to add them to the dataset, the model behaves in a way we didn't expect and we have to update the prompt - it makes sense, it's impossible to think of everything beforehand.

## So what do we do?

I recently found an excellent [framework](https://hamel.dev/blog/posts/evals-faq/) of two researchers, which in my opinion simply exploits a human weakness: we're not good at thinking of everything beforehand, but we really love identifying the mistakes of others.

## The Simple Idea

1. Go through the data - in our case, traces (all the input and output) of the model, which we fed into an observability system. Read the traces and when you identify a problem - write what's wrong in a comment in the system itself. It's good to go through at least 100 examples.

2. Take all the notes, put them in some LLM, and ask it to cluster them by types of errors (or failure modes), and also count how many notes appear in each cluster.

3. We actually got a prioritization of failure modes! For each one of them, we can build an eval, change the system prompt or the ground truth, or just ignore it.

We choose to build an eval if we want to use it to help us in the development process, as monitoring that triggers an alert, or as a guardrail that blocks answers that didn't meet certain conditions.

Once we have a set of evals that work in real time - it basically works like CI/CD, and allows us to feel comfortable making changes in the entire system without fear that everything will break.

4. We do this process iteratively - once a week, we go through the data. Even half an hour like that works wonders.

![Friendly Error Analysis Framework](./framework.png)

In my opinion, all observability systems are quite similar for this purpose, and they also allow you to implement LLM-as-a-Judge within them. I work with Langfuse, many love Langsmith and I've heard Braintrust is excellent.

## Some answers to questions from the audience (updates with each lecture)

- **How do you test different prompts or try to choose between two different models?** Exactly as we described. If we built a set of evals, we can simply run an a/b test and see who performs better against the evals we built. Science!

- **What do you do when two different people tag errors differently?** Indeed a common problem in data science. Common solutions: only one person is the arbiter, or you average between several taggings.

## So why am I really so obsessed with Evals?

The balance in many professions is shifting from creation to verification.

Building a precise and excellent set of evals through iterations and friction with our data - can enable us to run much faster, not be afraid to break things, test different models and different prompts at the click of a button (but with science, not vibe evals). This is a very significant organizational moat - which can actually help us get from 90% to 99%. Amazing.
