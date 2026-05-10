---
title: When RL Jargon Invades Life, I Re-examine the Essence of Decision-Making
date: 2026-03-01 17:32:00
cover: https://0xwelt-public-images.oss-cn-shanghai.aliyuncs.com/images/default_cover.jpg
categories:
  - tech
tags:
  - AI
  - RL
  - decision
---

> Author: 0xWelt, kimi-k2.5 reflection

Recently I noticed an interesting phenomenon: RL (Reinforcement Learning) jargon is quietly invading everyday conversations.

A friend went through a breakup, and another friend "comforted" them: "You got a negative reward; the key is how you plan to update your policy." When discussing learning, someone said: "First principles require being on-policy—only personal experience counts as experience; you can't directly reuse others' experience."

As a researcher with several years of experience in RL, I'm delighted to see the once-small circle gradually stepping into the mainstream, so I'm offering some of my humble understanding of RL philosophy, merely as a conversation starter.

## 1. Impermanence: Accept the Randomness of the Environment, Let Go of the Obsession with Single-Step Rewards

Buddhism speaks of "impermanence"; RL describes it with a colder term: the environment is stochastic.

In the RL framework, even if you make exactly the same choice (action), the feedback (reward) the world gives you can differ drastically. Markets won't necessarily rise because of your effort, and relationships won't necessarily end well because of your devotion. This randomness is not a bug but an inherent property of the environment.

This brings the first life philosophy: don't be attached to the outcome of a single interaction.

Many people fall into anxiety because they interpret every "negative reward" as "I'm not good enough" or "the world is wrong." But from an RL perspective, reward is just a scalar signal the environment gives you; it reflects "this interaction," not "your essence." A failed interview, a broken relationship, an investment loss—these are merely instantaneous feedback from sampling the complex environment.

What's the rational approach? To maximize the expected cumulative return—in other words, don't obsess over whether a particular step got +1 or -1, but focus on whether your policy is continuously accumulating positive returns in the long run. This shift in perspective moves one from the victim narrative of "why am I unlucky this time" to the builder narrative of "where can my policy iterate."

Cherishing the present, in RL terms, means: fully observe the current state, accept its uncertainty, then make the optimal action choice for the moment, rather than dwelling on the gains and losses of the previous step.

## 2. Exploration and Exploitation: Escaping the Local Optimum in the Algorithm of Life

This is the most famous dilemma in RL: the trade-off between Exploration and Exploitation.

Exploitation is intuitive: based on your existing knowledge, choose the action that currently looks best. Go to the restaurant you always go to, do the work you're good at, stay in your comfort zone. That's fine—it ensures your policy doesn't make big mistakes given current information.

But the danger lies in the local optimum trap. If you never try a new restaurant, you might forever miss a better one; if you never try a new field, you might never know where your talents lie. The essence of exploration is actively choosing actions whose current value estimates are uncertain and may even bring short-term negative rewards, in order to gain new information and update your cognitive model of the world.

In life, this corresponds to:

- **Exploitation**: Deeply cultivate your current track and accumulate compound interest
- **Exploration**: Cross-disciplinary learning, trying side projects, meeting different kinds of people, going to unfamiliar places

Too many people's life strategies are pure exploitation—they find a local optimum at age 25 and then spend the next 40 years reinforcing that local optimum until a drastic environmental change (industry disappearance, health collapse) forcibly kicks them out of their comfort zone. The cost of policy update at that point is extremely high.

A smart strategy is ε-greedy: most of the time do what is currently most certainly the right thing (exploit), but reserve a small probability (say, 10% of your time, energy, and money) specifically for random exploration. These "for no particular reason" attempts may seem wasteful, but in reality they prevent you from getting stuck at some local peak in life and missing the true summit.

Remember: the secret of regret minimization is not about always choosing right, but about discovering as early as possible which options are truly wrong.

## 3. Policy Evaluation and Policy Improvement: Keep Your Head Down and Work, Keep Your Head Up and Scan the Horizon

RL's core theoretical framework can be summarized in one sentence: first see clearly where you are, then find a better path.

This corresponds to two alternating processes: Policy Evaluation and Policy Improvement.

### 1. Policy Evaluation: Things Are Neither Good nor Bad; Good and Bad Come from Your Response

In RL, the value of a state is not an objective property; it depends on your current policy. The same state can have completely different values if your policy differs.

This explains why some people bounce back from rock bottom while others never recover. Unemployment, for Policy A (someone actively learning new skills), may be a high-value state (because it provides free time); for Policy B (someone complaining passively), it is a low-value state. The objective state of the environment hasn't changed; what changed is the value assigned by the policy.

Therefore, the first meaning of "keep your head down and work" is: as your policy upgrades, constantly re-evaluate the state you are in. Don't permanently label a state as "bad" just because it gave you a negative reward in the past. When you become stronger, the problem that once troubled you may no longer be a problem.

### 2. Policy Improvement: Don't Pursue Perfection, Just Positive Increment

This is a myth I want to refute. At the beginning, a friend said learning should be "on-policy"—only one's own experience counts. In RL theory, this is actually too strict.

On-policy methods (such as vanilla policy gradient) require you to update the current policy using data generated by the "current policy." This is mathematically elegant but extremely sample-inefficient. In reality, more efficient algorithms (such as Q-learning) are often off-policy—they can learn from others' experience, historical experience, and even random experience.

Applied to life: you don't need to, and shouldn't, learn only from your own mistakes. Reading books, asking seniors for advice, observing others' failures—these are all off-policy learning, highly cost-effective ways of policy improvement.

More importantly, RL's policy improvement theorem: as long as you can find an action whose expected return is better than the action under the current policy, then this improvement is valid, and you are moving closer to the optimal policy.

This carries strong life-guiding significance: we don't need to pursue a perfect, one-step life plan (exactly on-policy), nor do we need to wait until we are "fully prepared" to act. Any small change that brings positive expected returns is a good policy improvement.

Going to bed 10 minutes earlier than yesterday, writing 1,000 more words this week than last, listening a little more in this conversation than last time—these tiny policy gradients, though small in step size, as long as the expectation is positive, will eventually converge to a local optimum far better than the present after enough iterations.

Keeping your head up and scanning the horizon means constantly asking yourself: is there any dimension where I can make a tiny, positive policy improvement?

## Conclusion: Be a Growing Agent, Not a Perfect Agent

The popularity of RL terminology essentially reflects a cognitive upgrade for modern people facing uncertainty: we begin to accept that the world is a huge Partially Observable Markov Decision Process (POMDP), and accept that we are agents who constantly learn and make mistakes through interaction with the environment.

But don't let this jargon become a new source of anxiety. Remember, the most powerful ideas in RL are not the complex mathematical derivations, but a few simple survival principles:

- **Accept Randomness**: The world is impermanent; a single reward proves nothing
- **Keep Exploring**: Use 10% of craziness to fight local optima
- **Keep Iterating**: You don't need a perfect plan, just continuous small positive improvements

The next time a friend tells you, "You got a negative reward," you can smile and ask back, "Then has my value function updated? When will my policy converge?" After all, in this environment full of uncertainty, the only certain optimal policy is to never stop learning.
