/*
  Quiz content and settings. Edit the words here; the page (index.html) reads everything from this file.

  SCORING: every answer gives points to one or two outcomes, e.g. { market: 2, cafe: 1 }.
  Each outcome's total is divided by the most it could possibly score, so no outcome is easier to land on.
  The highest percentage wins and the second highest is shown as the runner-up.
*/
window.QUIZ = {

  /* ---------- Settings: fill these in before you share the quiz ---------- */
  settings: {
    title: "Where Should You Sell Your Art?",
    byline: "Art Selling Personality Quiz · by Michelle Frost",
    intro: "Craft markets, cafés, galleries, gift shops, online or commissions? Answer ten quick questions about how you like to work and live, and find out which way of selling suits your personality.",
    // A short pause screen shown after this question number (0 to turn it off).
    breatherAfter: 5,
    // Where the name + email are sent before the result is shown.
    // Paste a form endpoint from your email tool or a Zapier/Make webhook. Leave "" to skip the email step while testing.
    signupUrl: "",
    // Field names that endpoint expects. The defaults suit Kit (ConvertKit) forms; a webhook takes any names.
    fieldEmail: "email_address",
    fieldName: "fields[first_name]",
    fieldResult: "fields[quiz_result]",
    privacyNote: "You'll also get my emails about selling your art. Unsubscribe any time."
  },

  /* ---------- The six outcomes ---------- */
  outcomes: {
    market: {
      name: "The Market Maker",
      place: "Craft fairs, farmers markets & pop-ups",
      color: "orange",
      tagline: "You sell best face to face, with a crowd around you.",
      profile: "People give you energy. Talking about your process isn't a chore, it's the fun part. You love the buzz of a busy Saturday, the instant feedback when someone picks up your work, and the regulars who come back to say hello. You're happy to haul a tent and a folding table if it means meeting the people who'll take your work home.",
      traits: ["Chatty and warm", "Learns fast from feedback", "Loves variety and a range of prices", "Thrives in community"],
      whyItFits: "At markets, people buy the maker as much as the work, and connection is exactly what you're good at. You can test new pieces, prices and displays every weekend and see straight away what works.",
      watchOut: "Markets are physically tiring and depend on the weather, and it's easy to drop your price when someone is standing in front of you. Keep track of what you take home against booth fees, travel and hours.",
      steps: [
        "Visit two or three local markets as a shopper. Note what's selling and at what price.",
        "Build a range: small impulse buys, mid-priced pieces and a few showstoppers.",
        "Apply for one small, low-fee market and treat it as an experiment, not a test of your worth."
      ],
      guide: { title: "The Market Maker's Guide", blurb: "Booth setup, pricing that sells, what to bring and how to turn browsers into buyers.", price: "$27", url: "#" }
    },
    cafe: {
      name: "The Local Favourite",
      place: "Coffee shops, cafés & community spaces",
      color: "mustard",
      tagline: "You want your work out in your community, without having to stand beside it.",
      profile: "You love being part of your local scene. You know the barista's name and you'd rather your work did the talking. Seeing your piece on the wall of a favourite café, knowing your neighbours enjoy it every day, is your idea of success. You value visibility and community more than big sales numbers, at least for now.",
      traits: ["Community-minded", "Social in small doses", "Happy at a gentle pace", "Wants to be known locally"],
      whyItFits: "Cafés, restaurants, libraries and salons have walls to fill and customers who linger. It's a low-pressure way to build a local following, get your name known, and practise pricing and presenting your work. It's perfect while you're moving from hobby to selling.",
      watchOut: "Sales can be slow, and café walls come with sunlight and splashes. Agree the commission, hanging dates, insurance and how sales are handled in writing. Treat the wall as an advert as well as a shop: add a QR code that leads to your website or Instagram.",
      steps: [
        "List five places you already love that show local art.",
        "Prepare a cohesive set of 6–10 pieces, ready to hang, with labels and prices.",
        "Visit at a quiet time of day and ask the owner how their art wall works."
      ],
      guide: { title: "The Local Favourite's Guide", blurb: "How to pitch cafés, what to agree in writing, and how to turn a wall into sales and followers.", price: "$27", url: "#" }
    },
    gallery: {
      name: "The Studio Devotee",
      place: "Galleries & representation",
      color: "teal",
      tagline: "You want to make the work and let someone else do the selling.",
      profile: "Your happy place is the studio, and selling feels like a distraction from making. You're thoughtful, often introverted, and your work is personal and one of a kind. Talking about prices makes you squirm. You'd love to be taken seriously as an artist and have a professional champion your work.",
      traits: ["Deep focus", "Makes one-of-a-kind work", "Prefers to stay behind the scenes", "Driven by craft and meaning"],
      whyItFits: "A gallery handles the display, marketing, collectors and the sales conversation, usually for a 30–50% commission. In return you get credibility, higher prices and more time in the studio.",
      watchOut: "Galleries look for a consistent, recognisable body of work, and you'll still need to show up at openings now and then. They rarely take complete beginners, so juried shows, open calls and artist-run spaces are your stepping stones. Price so that both you and the gallery do well from the commission.",
      steps: [
        "Build a cohesive series of 10–15 pieces that clearly belong together.",
        "Enter local juried shows and open calls to start your artist CV.",
        "Research three galleries that show work like yours. Go to their openings and follow their submission guidelines exactly."
      ],
      guide: { title: "The Studio Devotee's Guide", blurb: "Building a body of work, your first artist CV, and approaching galleries without the cringe.", price: "$27", url: "#" }
    },
    wholesale: {
      name: "The Production Pro",
      place: "Wholesale, gift shops & boutiques",
      color: "olive",
      tagline: "You love a good system and a collection that sells itself.",
      profile: "You're organised, practical and quietly ambitious. Making in batches puts you in a rhythm, you like knowing exactly what each item costs to make, and you'd rather sell 50 to one shop than one at a time to 50 people. Designing a collection excites you more than chasing individual sales.",
      traits: ["Systems-minded", "Finds repetition satisfying", "Thinks in collections", "Likes steady, predictable income"],
      whyItFits: "Gift shops, boutiques and museum stores buy in quantity at wholesale (usually half the retail price) and do the selling for you. One good stockist can reorder for years.",
      watchOut: "Wholesale only works if your pricing does: half your retail price must still cover materials, time and profit. Shops expect consistent quality, a line sheet, minimum orders and on-time delivery. Consignment is a gentler first step, but your stock stays tied up until it sells.",
      steps: [
        "Choose a collection of 4–8 products you can make the same way every time.",
        "Check your numbers: your retail price divided by two must still be profitable.",
        "Make a simple line sheet and approach three local shops that suit your style."
      ],
      guide: { title: "The Production Pro's Guide", blurb: "Wholesale pricing, line sheets, approaching shops and keeping up with reorders.", price: "$27", url: "#" }
    },
    online: {
      name: "The Online Independent",
      place: "Your own website, Etsy & social media",
      color: "plum",
      tagline: "You want to sell on your own terms, from your own space.",
      profile: "You may be a bit of an introvert, but you're ambitious. You like being in charge of your prices, your brand and your schedule. You're comfortable with technology, or at least curious about it, and the idea of an order notification arriving while you're in your pyjamas sounds like a dream.",
      traits: ["Independent", "Self-motivated", "Enjoys a bit of tech and photography", "Wants flexibility"],
      whyItFits: "An online shop lets you reach buyers far beyond your town without standing behind a table. You keep full control and more of each sale.",
      watchOut: "Nobody finds an online shop by accident. Selling online is really a marketing job: great photos, posting regularly and building an email list. Remember to include packaging and shipping in your prices.",
      steps: [
        "Photograph your ten best pieces in natural light against a clean background.",
        "Pick one platform (Etsy for built-in shoppers, your own site for control) and launch with what you have.",
        "Start an email list today. Those subscribers are your future buyers."
      ],
      guide: { title: "The Online Independent's Guide", blurb: "Choosing a platform, product photos that sell, and getting your first online buyers.", price: "$27", url: "#" }
    },
    commission: {
      name: "The Custom Collaborator",
      place: "Commissions & custom work",
      color: "rose",
      tagline: "You make your best work when it means something to someone.",
      profile: "You're a people person, but one to one rather than in crowds. You love hearing someone's story and turning it into something they'll treasure: a pet portrait, a wedding gift, a family heirloom. Meaningful connection matters more to you than selling lots, and a happy tearful client makes your whole month.",
      traits: ["Empathetic listener", "Loves stories and meaning", "Enjoys a creative brief", "Thrives on one-to-one connection"],
      whyItFits: "Commissions are sold before you make them. You're paid (usually with a deposit up front), the buyer gets something personal, and word of mouth does your marketing: every happy client tells their friends.",
      watchOut: "Without clear boundaries, commissions can eat your time and your creative energy. Offer a set menu of sizes and prices, take a non-refundable deposit, limit revisions, and put it all in writing.",
      steps: [
        "Decide what you'll offer (subjects, sizes, turnaround) and set your prices.",
        "Make two or three sample pieces for friends or family to use as examples.",
        "Create a simple commission page or enquiry form, then tell everyone you know you're taking commissions."
      ],
      guide: { title: "The Custom Collaborator's Guide", blurb: "Commission menus, pricing, contracts and deposits, and handling clients with confidence.", price: "$27", url: "#" }
    }
  },

  /* ---------- The questions (one per screen) ----------
     Each question can show a picture above it:
       art: "sunrise"            a built-in illustration (sunrise, speech, shapes, eye, star, ledger, repeat, calendar, hearts, envelope)
       image: "photos/q1.jpg"    your own photo or image instead (add imageAlt: "what the picture shows")
       leave both out            no picture
     Add or remove questions freely; the scoring adjusts itself. Run `node test-scoring.js` afterwards to check the balance.
  */
  questions: [
    {
      art: "sunrise",
      q: "It's Saturday morning and you have nothing planned. You're most likely to…",
      a: [
        { t: "Wander a busy farmers market, chatting with the stallholders", s: { market: 2, cafe: 1 } },
        { t: "Disappear into the studio with your phone switched off", s: { gallery: 2, online: 1 } },
        { t: "Meet one close friend for a long, deep conversation", s: { commission: 2, cafe: 1 } },
        { t: "Make lists, tidy up and get organised for the week", s: { wholesale: 2, online: 1 } }
      ]
    },
    {
      art: "speech",
      q: "At a party, someone asks, “So what do you make?” You…",
      a: [
        { t: "Pull out your phone and happily show them photos", s: { market: 2, commission: 1 } },
        { t: "Mumble something modest and change the subject", s: { gallery: 2, online: 1 } },
        { t: "Tell them where they can see a piece in person around town", s: { cafe: 2, market: 1 } },
        { t: "Tell them they can find it all on your website or Instagram", s: { online: 2, wholesale: 1 } }
      ]
    },
    {
      art: "shapes",
      q: "Which sounds most like your work right now?",
      a: [
        { t: "One-of-a-kind pieces that take a while to make", s: { gallery: 2, cafe: 1 } },
        { t: "Small batches of designs I can make again and again", s: { wholesale: 2, market: 1 } },
        { t: "A real mix of sizes, from little things to bigger pieces", s: { market: 2, online: 1 } },
        { t: "Pieces made for particular people, like gifts and portraits", s: { commission: 2, gallery: 1 } }
      ]
    },
    {
      art: "eye",
      q: "A stranger stops to look at your work and asks a lot of questions. You feel…",
      a: [
        { t: "Energised. This is the best part!", s: { market: 2, commission: 1 } },
        { t: "Pleased, but I'd rather they just read the label", s: { cafe: 2, gallery: 1 } },
        { t: "A bit panicked. Can someone else handle this?", s: { gallery: 2, wholesale: 1 } },
        { t: "Curious about what they might want made just for them", s: { commission: 2, online: 1 } }
      ]
    },
    {
      art: "star",
      q: "A year from now, what would feel like real success?",
      a: [
        { t: "My work on walls around town, and people recognising it", s: { cafe: 2, market: 1 } },
        { t: "Being shown in a proper gallery and taken seriously", s: { gallery: 2, commission: 1 } },
        { t: "Orders coming in while I sleep", s: { online: 2, wholesale: 1 } },
        { t: "My products on shop shelves across the region", s: { wholesale: 2, cafe: 1 } }
      ]
    },
    {
      art: "ledger",
      q: "How do you feel about the business side: pricing, marketing, emails and packing orders?",
      a: [
        { t: "I'm happy to do it all. I like being in charge", s: { online: 2, market: 1 } },
        { t: "I'll happily sell in person, but please don't make me do spreadsheets", s: { market: 2, cafe: 1 } },
        { t: "I'd love for someone else to handle all of it", s: { gallery: 2, wholesale: 1 } },
        { t: "I'm fine with it if it's simple and repeatable", s: { wholesale: 2, online: 1 } }
      ]
    },
    {
      art: "repeat",
      q: "Making the same design 50 times sounds…",
      a: [
        { t: "Satisfying, almost meditative", s: { wholesale: 2, online: 1 } },
        { t: "Fine, as long as I can play with colours and variations", s: { online: 2, market: 1 } },
        { t: "Soul-destroying. Every piece should be different", s: { gallery: 2, commission: 1 } },
        { t: "Only if each one is made for someone special", s: { commission: 2, cafe: 1 } }
      ]
    },
    {
      art: "calendar",
      q: "When it comes to your weekends and spare time…",
      a: [
        { t: "I'd give up some weekends for early starts and setting up a stall", s: { market: 2, wholesale: 1 } },
        { t: "I want selling to happen without me being there", s: { online: 2, gallery: 1 } },
        { t: "A few hours here and there for drop-offs and a chat suits me", s: { cafe: 2, commission: 1 } },
        { t: "It's unpredictable, so I'd fit projects in around life", s: { commission: 2, online: 1 } }
      ]
    },
    {
      art: "hearts",
      q: "Your ideal relationship with the people who buy your work is…",
      a: [
        { t: "Friendly regulars who come back to see what's new", s: { market: 2, cafe: 1 } },
        { t: "A collector who treasures my piece, even if we never meet", s: { gallery: 2, online: 1 } },
        { t: "One person whose idea I bring to life", s: { commission: 2, market: 1 } },
        { t: "Shop owners who reorder every season", s: { wholesale: 2, gallery: 1 } }
      ]
    },
    {
      art: "envelope",
      q: "Which message would make your week?",
      a: [
        { t: "“I saw your piece at the café and had to find you!”", s: { cafe: 2, commission: 1 } },
        { t: "“We'd love to include you in our next exhibition.”", s: { gallery: 2, cafe: 1 } },
        { t: "“Your shop made three sales overnight.”", s: { online: 2, wholesale: 1 } },
        { t: "“Can we put in another order of 24 for the holidays?”", s: { wholesale: 2, market: 1 } }
      ]
    }
  ]
};
