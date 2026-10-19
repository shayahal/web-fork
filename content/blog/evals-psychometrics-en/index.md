---
title: 'Evals and I Will Change the World'
subtitle: 'Or: on the sexiest course I took in my degree — test theory and assessment'
date: '2025-01-20'
description: 'On evals, benchmarks, psychometric test theory, and what it can teach us about evaluating LLMs'
direction: ltr
language: 'en'
tags: ['ai', 'tech', 'reflection', 'thoughts']
---

Evals and benchmarks are actually one of the most important parts of developing today's models.

Very roughly speaking, the LLMs we know are a neural network that learns very efficiently, plus _tons and tons of tests_ that check their abilities: language tasks, math, summarization... Through a long series of algebraic operations and relevant data, the model gets nudged to be better and better at them. These tests are called evals, and they're part of the model's secret recipe.

To compare models, the scientific community built benchmarks: standard, public tests used to demonstrate the models' progress in different abilities (like fixing bugs in a GitHub repo) or on safety issues (say, whether models refuse harmful requests like hacking into a website).

So far, sounds cool. Where does it get complicated? When you look closer, you see that model performance sometimes drops dramatically with small variations to the test: shuffling the answer order in a multiple-choice question, testing on different math problems at the same difficulty level, or removing parts of an image's background.

In other words, benchmarks aren't always good at predicting how good the model will actually be in the real world. That can happen if models were exposed to this data during training (contamination), or because models memorize and learn to be really good at this specific test (Goodhart's law is worth reading about) without actually generalizing, or simply because the benchmarks don't measure what they were supposed to measure.

The scientific community is already aware of how painful this problem is, and the call to build a new science of evals is getting more and more urgent.

But wait, we've actually been dealing with tests for a very long time! In 1904, Charles Spearman noticed that when people are tested on several cognitive tasks (verbal, mathematical, visual), their results are highly correlated. He developed a theory saying there is actually a single factor shared by all cognitive tasks, and it's what we measure in all of these tests! He called it g, for general intelligence (remind you of anything?).

It turned out that this g is one of the strongest psychometric predictors of an endless list of good things: success at work and in academia, socioeconomic status, marital stability, health, life expectancy… No surprise that for over a hundred years, researchers have worked hard to build tests for it.

The gold standard for IQ is the Wechsler intelligence test. Wechsler didn't believe in a single g score, so he built a different kind of test: you sit 1:1 with a certified psychologist who gives you a series of verbal and practical subtests. After 3 mistakes in a subtest you move on to the next one, so the better you are, the longer the test gets.

Fun fact: the goal of the Psychometric exam (Israel's university entrance exam) is to approximate the Wechsler score, with an emphasis on the subtests that predict academic performance. And even though we love to hate it, it's actually a really successful test: the correlation between its score and students' success in their first year is really high, which is exactly what it's supposed to do.

So what can test theory teach us about how we treat LLM benchmarks?

When two benchmarks are very highly correlated, they may be measuring the same underlying trait (maybe g!). Benchmarks should aim to measure specific, independent abilities.

Many of them have reached saturation: all the big models already ace them, and when everyone gets 95% you can't really tell them apart. An adaptive test, where the better you are the harder the questions get, could solve this.

Intelligence tests also include practical parts. Testing the model's success on a whole task, not just part of it, is much more interesting and is the most important thing.

And all this deep dive was just to tell you that last week my favorite test came out, vending-bench-2:

https://andonlabs.com/evals/vending-bench-2
