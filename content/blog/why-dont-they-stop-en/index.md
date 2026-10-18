---
title: 'Why Don''t They Just Stop?'
subtitle: 'Or: a short intro to the politics of AI'
date: '2026-10-11'
description: 'Why do the labs keep shipping stronger models despite all the AI safety talk? A bit of history, the arms race with China, and a map of the political forces in the AI world.'
direction: ltr
language: 'en'
tags: ['ai', 'tech', 'thoughts']
---

These past few weeks, AI safety has been everywhere. Lab leaders came to the White House to sign a model oversight agreement; an [AI czar](https://www.theguardian.com/us-news/2026/oct/04/trump-jay-clayton-white-house-ai-czar) was appointed; we keep seeing more and more [misalignment incidents](https://alignment.openai.com/misalignment-reports/); Dario put out a blog post called [Pace the frontier](https://darioamodei.com/post/we-must-pace-the-frontier) that even Sam Altman and Elon Musk, very unusually, agreed with.

And still, in the last two weeks every major lab released new, more powerful models.

#### **What the fuck.** Why don't they stop?

To understand that, it helps to know a bit of the history and the political forces in this world. The goal of this post is to share my insights, perceptions and thoughts on the power dynamics - like in any market, once you understand them, a lot of things become clear.

##### A bit of history

OpenAI was founded in 2015 as a non-profit, to build the holy grail: AGI to benefit humanity. Almost all the researchers came from Google, and the idea of an organization that would only research and develop breakthrough technology was very appealing to a lot of them.

But paradise didn't last long. In 2020[^1] Dario Amodei (who was VP research), his sister Daniela and 5 other senior researchers left the organization, with serious claims of having lost trust in Sam Altman, who according to them lied and hid critical information from them.

On top of that, they had very deep disagreements about the fast pace of development versus the commitment to safety - which was initially an important part of the organization's ethos, and slowly eroded. They argued that OpenAI was sacrificing concern about the existential risks the technology could cause - in order to maximize profits and move fast.

So they decided to build a competing company that would get to AGI faster - but a safe and responsible AGI, which would beat the chaotic AGI being built at OpenAI.

#### Cold war

The root of the argument is the pace of development, with Americans justifying scale at all costs with the argument of an existential threat from China, over who wins the race to the ultimate weapon: AGI.

Here too we get the familiar argument of "we're the good superpower, bringing progress the right way, unlike China, which will do it irresponsibly". Meaning, if we slow down even a little because of regulation or political arguments - China will race ahead and win. That's also why there are very, very strict restrictions on selling compute.

So what we have here is an **arms race**:

1. Anthropic wants to get to AGI before OpenAI, because they claim they're the only ones who'll do it responsibly
2. OpenAI wants to get there before the Chinese
3. The Chinese... are mostly focused on Applied AI (robotics), and pretty consistently keep their open models' performance about 6-9 months behind the Western models.[^2]

![](./image-1.jpg)

*And here it is in a slightly offensive drawing that obviously doesn't capture all the complexity, but I had fun making it*

Everyone (meaning all the Americans) assumes the Chinese won't agree to stop.

The truth is the Chinese are actually very [active](https://aisafetychina.com/) on safety, and government ministers spoke about it publicly a few years ago. I've also had the chance to talk with people at labs there who work on it. And remember, China is an empire that has held together for thousands of years - they know how to think far ahead.

So there was a lot of hope going into the meeting between Trump, President Xi and the lab CEOs - but so far it looks like not much came out of it.[^3]

#### What agreement are we even talking about?

The core idea is to ask the powerful governments to help with an international diplomatic effort to slow down technological progress, so that we can solve AI safety problems like alignment or security, and prepare the whole world for powerful models - for example, hardening the security of critical infrastructure or governments before models with very scary capabilities come out.

The solution the community generally agrees on for the arms race is called Plan A - a mutual oversight agreement between the superpowers, similar to the international agreements we have for nuclear weapons. There's an explanation of the idea [here](http://AI-2040.com)[^4].

#### When AI safety goes mainstream

Scientific questions that used to belong to niche researchers in Berkeley and Oxford are turning into **political and economic** questions. This isn't a new process, but it's louder than ever and it's reaching people who never paid attention to it before[^5]. This table really helped me map the politics of AI in a convenient way - let's look at it together.

The x-axis represents how you see what AI actually is: an instrumental **tool** that we operate ("[normal technology](https://www.nytimes.com/2026/10/09/opinion/ezra-klein-podcast-arvind-narayanan.html)"), or an **agent/entity** that can act in the world with intent and awareness, that can plan and make decisions (or has the potential to become one).

The y-axis represents what you think about the relationship between AI and humanity: **friendly** or **hostile**. Or, put differently, optimistic or pessimistic.

![](./image-2.png)

#### (Tool // Friendly) Accelerationism

They believe this is exciting technological progress, a tool that will bring growth and prosperity, and they strongly oppose regulation (in the lingo: e/acc).

- Yann LeCun, a famous AI scientist who mostly thinks [everyone is exaggerating](https://fortune.com/2026/10/01/ai-godfather-yann-lecun-has-zero-concerns-about-human-extinction-says-anthropic-ceo-dario-amodei-is-deuded/) and that LLMs [can't](https://x.com/rohanpaul_ai/status/2106337846198214728) be AGI
- [Jensen Huang](https://www.bbc.com/news/articles/cr5ye7p13jg7o) of Nvidia (a company that, let's remember, grew out of the demand for more AI)
- Marc Andreessen, in his famous [manifesto](https://a16z.com/the-techno-optimist-manifesto/) in favor of technological progress. And today too, a16z is a very prominent voice against slowing down.

#### (Entity // Friendly) Cyborgism

They aspire to merge with AI, and see it as the next stage of human consciousness and society.

- Ray Kurzweil, in his famous book [The Singularity Is Near](https://www.singularity.com/), which describes biological-technological interfaces. Honestly, he was a pretty successful futurist
- This was back in the 80s, but it reminded me of Donna Haraway's seminal (and not well-known enough[^6]) [manifesto](https://www.cambridge.org/core/books/abs/postmodern-turn/manifesto-for-cyborgs-science-technology-and-socialist-feminism-in-the-1980s/F3C18816B1030A3AE5ECCFE1F5404A1C) on how technology blurs traditional gender boundaries, and how that kind of symbiosis holds potential for cognitive and cultural liberation - once you're freed from the body.

#### (Entity // Hostile) Doomers

They focus on the existential risks of AGI - that AI will become a superhuman entity that will cause our destruction. The hope (other than stopping) is to solve the alignment problem - how do we make sure AI won't want to harm us, and won't harm us by accident while maximizing its goals.

This is the founding principle behind Anthropic; a lot of the original OpenAI employees who believe in it left for there.

- The best-known thinker is Eliezer Yudkowsky[^7], a well-known AI researcher who talks a lot about the dangers of developing AGI. His latest book is called [If Anyone Builds It, Everyone Dies](https://ifanyonebuildsit.com/).
- Another famous and foundational book is Nick Bostrom's Superintelligence
- Geoffrey Hinton and Yoshua Bengio, two important researchers who contributed a lot to modern deep learning, are now also warning about how it's getting out of control.

#### (Tool // Hostile) Misuse critique

They don't think this is an intelligent entity but a powerful tool, and they argue that the debate over whether AI will destroy humanity in 20 years distracts from the harm it's already causing today - concentration of power and capital, environmental cost, privacy violations, even technological dangers that will keep growing.

In my opinion they win the copywriting award, with banger titles like:

- The paper [On the Dangers of Stochastic Parrots](https://dl.acm.org/doi/10.1145/3442188.3445922) - which was so scandalous it got one of its authors fired from Google[^8]
- Sci-fi author Ted Chiang in his piece [No, Artificial Intelligence Is Not Conscious](https://www.theatlantic.com/philosophy/2026/06/no-artificial-intelligence-is-not-conscious/687378/)

#### Why is all this interesting?

A lot of the time the debate gets flattened into for or against (especially with Americans). The reason I like this chart is that it lets us understand the web of forces, and it also lets each of us place ourselves on these axes. Statistical software or an independent entity? What kind of relationship do we want with it? Where are the dangers, where are the opportunities?

The purple diagonal, showing the argument between the accelerationists and the doomers, is the one that makes the most noise. Both share a starting assumption - this is almost godlike technology. It's the most emotional debate - technological paradise versus the end of the world.

Economic interests always matter - it's hard to say the CEOs of the big companies aren't enjoying the debate. When people are afraid of some higher power, stocks go up, and the kind of regulation they're asking for could create a huge barrier to entry for small competitors or open source. **That could explain the dissonance between the fear-mongering and continuing to build**.

What's missing here is China, because as usual we only focus on the West. I'd call the current view in China "state instrumentalism" - which means working hard to develop AI as a geopolitical and economic tool, under tight state control.

> If you want to find out where you sit on these axes - here's a funny [quiz](https://tribes.thefai.org/) that maps the tribes of Silicon Valley. It even has a Vocabulary page

### What's next?

Good question. I end up arguing with quite a few researchers about timelines (they say we'll all die in two years, I say I'll die old). But the pace really is very, very scary. Progress in certain capabilities (like math or code) has blown way past even the conservative forecasts.

Is it even possible, in today's economy, politics and society, to stop or slow down? I think it'll be very hard. The promise of AGI, from the economic vision of replacing human workers to the almost-religious vision of creating intelligence - is so tempting that it's hard for the world to resist.

The economic-social-political forces, fueled by hype and an uncontrollable appetite for tokens, are pushing forward so hard. The voices calling to stop or slow down stand up against them, and so the debate turns political and shallow. The people pushing forward don't want to hear about regulation, even though regulation and procedures have always helped us institutionalize global technological advances and make sure they're accessible and safe (aviation, nuclear, ...)

#### But not all is lost!

I've been doing karate for many years. Most of you don't know me, but I'm pretty small, so I had to learn technique. One of them is that when an opponent's punch is coming at you, it's much more effective to **use** its force and momentum than to resist it. Instead of standing in front of the blow and blocking it head-on - redirect it where I want it to go.

> I wholeheartedly believe it's possible to **redirect the trajectory of progress in positive directions** - using the enormous momentum and force already in play.

That's **P(bloom) -** instead of P(doom), which is the probability that AI destroys humanity, I want to talk about the probability that we actually flourish. This isn't naivety, it's radical optimism - we'll work hard, and together, to make sure the world succeeds. That's the headline of this blog and of more things you'll see in the future :)

There's work to be done. I'm working on it with everything I've got, and I'm not the only one. If you're interested in taking part - I'd be happy to help.

---

Thanks again to the many friends who helped me think through the ideas here.

---

**Finally, some content recommendations:**

A fascinating and scary episode about what goes on behind the scenes at the labs

[AI Expert: We Have 2 Years Before Everything Changes! We Need To Start Protesting! - Tristan Harris (FlightStory)](https://open.spotify.com/episode/1S8FEbhkaQQ8Yrx4e3f5Vh)

The book [Empire of AI](https://karendhao.com/) by Karen Hao, and for those who don't have time, just this episode

[We All Suffer from OpenAI’s Pursuit of Scale w/ Karen Hao [Replay] (Paris Marx)](https://open.spotify.com/episode/6fvizxWSZEIPO9sASl80vb)

[^1]: [https://www.theatlantic.com/technology/2026/09/openai-v-anthropic-inside-biggest-rivalry-tech/688819/](https://www.theatlantic.com/technology/2026/09/openai-v-anthropic-inside-biggest-rivalry-tech/688819/)

[^2]: They do it with a technique called distillation, which is basically a kind of reverse engineering of the closed American models. They make hundreds of thousands of calls to learn how the models work and what answers they give to which questions. There's actually great Chinese talent in AI research - but the West severely restricts selling compute to China, so there's a shortage of hardware, which is critical for training. They manage to get hardware (mostly via Singapore, according to foreign sources) but it takes creativity.

[^3]: Of course, it doesn't help much that [Trump rules out](https://www.bbc.com/news/articles/cwly5lmvy38qo) any cooperation upfront.

[^4]: Full disclosure: I contributed there a little, really just a little. On the other hand, I have quite a few reservations about the work toward an agreement, mainly how most researchers in the field tend to treat it as a technological problem ("how do we do verification to make sure the GPU is in inference mode and not training mode") rather than the problem it really is - diplomatic/political/economic. But great organizations are starting to emerge that work very hard on the other aspects of the problem, connecting Berkeley and Washington.

[^5]: It's embarrassing to say that one of the people I agreed with most this past month was Mark Zuckerberg, who took a jab at Dario and Sam with the line "we spent the last few months making sure muse (their new agent) is safe and secure, because that's our responsibility when we ship a product".

    Maybe that line captures the difference between product people who are committed to customers and understand their business responsibility (at least in theory), and researchers chasing the biggest scientific achievement they possibly can.

    Oh, and of course economic interests - God forbid anyone should pace the frontier. But also the previous point.

[^6]: At least for those of you who didn't take the Feminist Epistemology course in the Philosophy of Science department, which I'm wildly guessing is most of you!

[^7]: For those interested, it's a recommended read that clearly conveys the fears, dangers and views of people worried about AGI. Besides that, Yudkowsky also wrote "[Harry Potter and the Methods of Rationality](https://www.fanfiction.net/s/5782108/1/Harry_Potter_and_the_Methods_of_Rationality)", a famous fanfic that explains the magic in J.K. Rowling's world using scientific, rational thinking. Coming out of the cupboard under the stairs: I didn't like it

[^8]: The paper's claim (unsurprisingly) is that LLMs are a technology that strings sentences together based on training data, which sound coherent and clear, but that doesn't mean they think or "understand" what they're saying. Gebru, one of the authors, said she was fired from Google's Ethical AI team after the legal department wouldn't let her publish the paper (or wanted her to remove her name from it). Google denied it.
