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

At the end, people see their result's name first. To unlock the full breakdown and a free printable checklist for their result, they enter their first name and email.

The full breakdown shows a personality profile, why that way of selling suits them, what to watch out for, three first steps, the checklist (tickable on screen, or print/save as PDF), a runner-up, their match with all six, and a link to a $27 guide.

## Files

- `quiz-data.js`: **all the words**: questions, answers, scoring, results, checklists, guide links and settings. Edit this one.
- `embed.js`: loads the quiz onto any page as an `<art-selling-quiz>` element (used by `index.html` and by Phantom).
- `app.js`: the quiz screens and behaviour.
- `quiz.css`: the quiz's look. It's sealed inside the element, so the host page's styles can't change it.
- `icons.js`: the illustration shown beside each answer.
- `scoring.js`: works out the result.
- `index.html`: the standalone quiz page.
- `test-scoring.js`: checks the quiz is balanced. Run `node test-scoring.js` after changing questions or scoring.

## Putting the quiz on a Phantom (GoHighLevel) funnel page

1. **Point a subdomain at GitHub Pages** (e.g. `quiz.michellefrost.com`): add a CNAME record for `quiz` pointing to `frosterella.github.io` where your DNS is managed, then add the domain under this repository's Settings → Pages → Custom domain and tick "Enforce HTTPS". This hosts the quiz files.
2. **In Phantom, create a workflow** with the **Inbound Webhook** trigger and copy its URL. Send one test submission (take the quiz once), then map the fields: `email`, `first_name`, `quiz_result`, `quiz_result_key`, `quiz_runner_up`. Add actions: create/update contact, add tag `quiz-<quiz_result_key>`, then start that result's email series.
3. **On a funnel page, add a Custom Code (HTML) element** and paste:

   ```html
   <art-selling-quiz signup-url="PASTE-YOUR-PHANTOM-WEBHOOK-URL"></art-selling-quiz>
   <script src="https://quiz.michellefrost.com/embed.js"></script>
   ```

   Optional attributes: `theme="auto"` follows the visitor's dark mode; `min-height="auto"` stops the quiz filling the whole screen.
4. **Add your Meta pixel** to the funnel's tracking code in Phantom. The quiz fires `Lead` when someone signs up and `InitiateCheckout` when they click through to a guide.
5. **Add each guide's Phantom order page URL** to `guide.url` in `quiz-data.js`. The quiz adds `?email=…&first_name=…` so the order form is pre-filled.

Until a webhook URL is set, the unlock screen shows a "See my full breakdown" button with no email fields.

## Sharing a result

The "Share my result" button shares a link to the current page with `?result=market` (for example), which shows only the result's name and a "Take the quiz" button, so the full breakdown stays behind the sign-up.
