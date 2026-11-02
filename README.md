# Where Should You Sell Your Art?

A personality-quiz lead magnet for artists and makers. Eleven questions, shown one at a time, lead to one of six selling personalities:

| Result | Best place to sell |
|---|---|
| The Market Maker | Craft fairs, farmers markets & pop-ups |
| The Local Favourite | Coffee shops, cafés & community spaces |
| The Studio Devotee | Galleries & representation |
| The Production Pro | Wholesale, gift shops & boutiques |
| The Online Independent | Your own website, Etsy & social media |
| The Custom Collaborator | Commissions, interior designers & art consultants |

Each result shows a personality profile, why that way of selling suits them, what to watch out for, three first steps, a runner-up, their match with all six, and a link to a $27 guide.

## Files

- `index.html`: the quiz page (design and screens).
- `quiz-data.js`: **all the words**: questions, answers, scoring, results, guide links and settings. Edit this one.
- `scoring.js`: works out the result.
- `test-scoring.js`: checks the quiz is balanced. Run `node test-scoring.js` after changing questions or scoring.

## Before you share it

1. **Connect your email tool.** In `quiz-data.js`, set `signupUrl` to your email tool's form endpoint or a Zapier/Make webhook. Until you do, the quiz shows a "Testing mode: skip" link and collects no emails. The quiz sends first name, email and result name, so you can tag subscribers by result.
2. **Add the guide links.** Replace each `url: "#"` under `guide` with the guide's checkout link.

## Sharing a result

The "Share my result" button shares a link like `index.html?result=market`, which opens that result with a "Take the quiz yourself" button.
