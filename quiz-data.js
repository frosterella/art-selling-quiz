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
    intro: "For artists, makers and creatives of every kind. Craft markets, cafés, galleries, gift shops, online or commissions? Answer 11 quick questions about how you like to work and live, and find out which way of selling suits your personality. There's no single right answer: it's about getting your work in front of the right buyers, in a way that suits you.",
    // A short pause screen shown after this question number (0 to turn it off).
    breatherAfter: 5,
    // Where the name + email are sent: your Phantom (GoHighLevel) workflow's Inbound Webhook URL.
    // While this is "", there is no email step: people go straight to their result.
    // You can also set it on the embed snippet instead: <art-selling-quiz signup-url="…">.
    signupUrl: "",
    // Field names sent to the webhook. Also sent: quiz_result_key (e.g. "market"), quiz_runner_up and source.
    fieldEmail: "email",
    fieldName: "first_name",
    fieldResult: "quiz_result",
    // Adds the person's email and first name to each guide's checkout link, so the order form is pre-filled.
    prefillCheckout: true,
    // Currency reported to the Meta pixel when someone clicks through to buy a guide.
    currency: "CAD",
    // Shown on the unlock screen. Only promise an emailed copy once your email tool sends one.
    unlockNote: "I'll also email you a copy, so you can come back to it.",
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
      checklist: {
        title: "The Market Maker's Getting-Started Checklist",
        items: [
          "Visit two or three markets as a shopper and note what sells, and at what price",
          "Choose one beginner-friendly market and check its application dates and booth fee",
          "Price every piece so it covers materials, your time and a share of the booth fee",
          "Build a range: small impulse buys, mid-priced pieces and a few showstoppers",
          "Make enough stock to fill your table, plus extras of your likely best-sellers",
          "Practise your table setup at home, using crates or stands to add height",
          "Label every price clearly so shoppers don't have to ask",
          "Set up a card reader and bring a float of small change",
          "Bring business cards or a QR code that leads to your Instagram or email list",
          "Pack your kit: tent weights, tablecloth, bags, tape, water and snacks",
          "Afterwards, note what sold, what people asked about, and your takings minus costs"
        ]
      },
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
      checklist: {
        title: "The Local Favourite's Getting-Started Checklist",
        items: [
          "List five cafés, restaurants or community spaces near you that show local art",
          "Visit each one and note the wall space, the lighting and the art already there",
          "Choose 6–10 pieces that hang well together as a set",
          "Get them ready to hang: wired, framed if needed, and checked for damage",
          "Make a label for each with title, medium, size, price and your contact details",
          "Add a QR code that leads to your website, Instagram or email list",
          "Ask the owner about commission, hanging dates and how sales are handled",
          "Put the agreement in writing, including who covers damage or theft",
          "Keep an inventory with a photo of every piece you leave",
          "Share the show online and invite friends to visit",
          "Check in every few weeks and swap out pieces that aren't getting attention"
        ]
      },
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
      checklist: {
        title: "The Studio Devotee's Getting-Started Checklist",
        items: [
          "Choose your focus: the subject, medium or style you want to be known for",
          "Create a cohesive series of 10–15 pieces that clearly belong together",
          "Photograph every piece square on, in even light",
          "Write a short artist statement (about 150 words) and a bio",
          "Start an artist CV, even if it's only a few lines for now",
          "Keep an inventory: title, size, medium, date and price for every piece",
          "Enter two or three local juried shows or open calls this year",
          "Go to openings near you and note which galleries show work like yours",
          "Read each gallery's submission guidelines and follow them exactly",
          "Check your prices still work for you after a 40–50% gallery commission",
          "Follow up politely, and keep making while you wait"
        ]
      },
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
      checklist: {
        title: "The Production Pro's Getting-Started Checklist",
        items: [
          "Choose 4–8 products you can make the same way every time",
          "Time yourself making a full batch, and cost every material",
          "Set retail prices where half (the wholesale price) still covers costs, time and profit",
          "Decide your minimum order and how shops reorder",
          "Test your packaging so products arrive safely and look good on a shelf",
          "Photograph every product on a plain background",
          "Make a simple line sheet: photos, product codes, wholesale and suggested retail prices",
          "List ten local shops whose style matches yours",
          "Approach three of them, with samples if you can",
          "Work out how much you can make each month before you say yes to orders",
          "Consider consignment for your first shop, with a written agreement"
        ]
      },
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
      checklist: {
        title: "The Online Independent's Getting-Started Checklist",
        items: [
          "Choose one place to start: Etsy for built-in shoppers or your own site for control",
          "Photograph your ten best pieces in natural light",
          "Write descriptions that tell each piece's story and give sizes and materials",
          "Build packaging and shipping costs into your prices",
          "Write your shop policies: shipping times, returns and custom requests",
          "Pick one social media platform and post there three times a week",
          "Start an email list and put the sign-up link on your shop and profile",
          "Launch with what you have rather than waiting until it's perfect",
          "Tell friends, family and past buyers that your shop is open",
          "Check your shop stats once a month and note what people click on",
          "Add new work regularly so returning visitors find something fresh"
        ]
      },
      guide: { title: "The Online Independent's Guide", blurb: "Choosing a platform, product photos that sell, and getting your first online buyers.", price: "$27", url: "#" }
    },
    commission: {
      name: "The Custom Collaborator",
      place: "Commissions, interior designers & art consultants",
      color: "rose",
      tagline: "You make your best work when it means something to someone.",
      profile: "You're a people person, but one to one rather than in crowds. You love a creative brief: hearing someone's story, or seeing the room a piece is meant for, and making something that fits perfectly. That might be a pet portrait or a family heirloom, or a large piece an interior designer has chosen for a client's home. Meaningful connection matters more to you than selling lots, and a delighted client makes your whole month.",
      traits: ["Empathetic listener", "Loves a creative brief", "Easy to work with", "Thrives on one-to-one connection"],
      whyItFits: "Commissions are sold before you make them. You're paid (usually with a deposit up front) and the buyer gets something personal. Interior designers, art consultants and home stagers are always looking for artists who can work to a brief, size and colour palette. One good designer relationship can bring you repeat projects for years, and every happy private client tells their friends.",
      watchOut: "Without clear boundaries, commissions can eat your time and your creative energy. Offer a set menu of sizes and prices, take a non-refundable deposit, limit revisions, and put it all in writing. Designers usually expect a trade discount (often 10–20%), so build it into your prices from the start.",
      steps: [
        "Decide what you'll offer (subjects, sizes, turnaround) and set your prices.",
        "Make two or three sample pieces for friends or family to use as examples.",
        "Create a simple commission page with your prices and examples, then introduce yourself to two or three local interior designers or home stagers."
      ],
      checklist: {
        title: "The Custom Collaborator's Getting-Started Checklist",
        items: [
          "Decide what you'll offer: subjects, sizes and materials",
          "Set a fixed price for each option so you're not quoting from scratch",
          "Make two or three sample pieces to show what you do",
          "Write out your process: enquiry, deposit, sketch, final piece, delivery",
          "Decide your deposit (often 50%, non-refundable) and how many revisions you include",
          "Create a simple agreement covering price, timeline, revisions and deposit",
          "Make a commission page or enquiry form with examples and prices",
          "Set your trade discount for interior designers (often 10–20%)",
          "Introduce yourself to two or three local interior designers or home stagers",
          "Photograph every finished commission, with the client's permission, for your portfolio",
          "Ask happy clients for a testimonial and a referral"
        ]
      },
      guide: { title: "The Custom Collaborator's Guide", blurb: "Commission menus, pricing and deposits, working with interior designers, and handling clients with confidence.", price: "$27", url: "#" }
    }
  },

  /* ---------- The questions (one per screen) ----------
     Every answer shows a picture beside it:
       art: "stall"              one of the illustrations in icons.js
       image: "photos/a1.jpg"    your own image instead (add alt: "what the picture shows")
     Add or remove questions freely; the scoring adjusts itself. Run `node test-scoring.js` afterwards to check the balance.
  */
  questions: [
    {
      q: "It's Saturday morning and you have nothing planned. You're most likely to…",
      a: [
        { art: "stall", t: "Wander a busy farmers market, chatting with the stallholders", s: { market: 2, cafe: 1 } },
        { art: "easel", t: "Disappear into the studio with your phone switched off", s: { gallery: 2, online: 1 } },
        { art: "cups", t: "Meet one close friend for a long, deep conversation", s: { commission: 2, cafe: 1 } },
        { art: "checklist", t: "Make lists, tidy up and get organised for the week", s: { wholesale: 2, online: 1 } }
      ]
    },
    {
      q: "At a party, someone asks, “So what do you make?” You…",
      a: [
        { art: "phone", t: "Pull out your phone and happily show them photos", s: { market: 2, commission: 1 } },
        { art: "shy", t: "Mumble something modest and change the subject", s: { gallery: 2, online: 1 } },
        { art: "pin", t: "Tell them where they can see a piece in person around town", s: { cafe: 2, market: 1 } },
        { art: "browser", t: "Tell them they can find it all on your website or Instagram", s: { online: 2, wholesale: 1 } }
      ]
    },
    {
      q: "Which sounds most like your work right now?",
      a: [
        { art: "original", t: "One-of-a-kind pieces that take a while to make", s: { gallery: 2, cafe: 1 } },
        { art: "batch", t: "Small batches of designs I can make again and again", s: { wholesale: 2, market: 1 } },
        { art: "sizes", t: "A real mix of sizes, from little things to bigger pieces", s: { market: 2, online: 1 } },
        { art: "gift", t: "Pieces made for particular people, like gifts and portraits", s: { commission: 2, gallery: 1 } }
      ]
    },
    {
      q: "A stranger stops to look at your work and asks a lot of questions. You feel…",
      a: [
        { art: "burst", t: "Energised. This is the best part!", s: { market: 2, commission: 1 } },
        { art: "tag", t: "Pleased, but I'd rather they just read the label", s: { cafe: 2, gallery: 1 } },
        { art: "door", t: "A bit panicked. Can someone else handle this?", s: { gallery: 2, wholesale: 1 } },
        { art: "bulb", t: "Curious about what they might want made just for them", s: { commission: 2, online: 1 } }
      ]
    },
    {
      q: "A year from now, what would feel like real success?",
      a: [
        { art: "town", t: "My work on walls around town, and people recognising it", s: { cafe: 2, market: 1 } },
        { art: "spotlight", t: "Being shown in a proper gallery and taken seriously", s: { gallery: 2, commission: 1 } },
        { art: "moon", t: "Orders coming in while I sleep", s: { online: 2, wholesale: 1 } },
        { art: "shelf", t: "My products on shop shelves across the region", s: { wholesale: 2, cafe: 1 } }
      ]
    },
    {
      q: "How do you feel about the business side: pricing, marketing, emails and packing orders?",
      a: [
        { art: "crown", t: "I'm happy to do it all. I like being in charge", s: { online: 2, market: 1 } },
        { art: "chat", t: "I'll happily sell in person, but please don't make me do spreadsheets", s: { market: 2, cafe: 1 } },
        { art: "hammock", t: "I'd love for someone else to handle all of it", s: { gallery: 2, wholesale: 1 } },
        { art: "cog", t: "I'm fine with it if it's simple and repeatable", s: { wholesale: 2, online: 1 } }
      ]
    },
    {
      q: "Be honest: how do you feel about technology?",
      a: [
        { art: "laptop", t: "I love it. Building a website, editing photos and trying new apps is fun", s: { online: 2, wholesale: 1 } },
        { art: "camera", t: "I'm happy with email and sharing good photos of my work with clients", s: { commission: 2, online: 1 } },
        { art: "people", t: "Basics only. I'd rather be out in my real-life community than scrolling", s: { cafe: 2, market: 1 } },
        { art: "unplugged", t: "I'd much rather someone else dealt with it", s: { gallery: 2, wholesale: 1 } }
      ]
    },
    {
      q: "Making the same design 50 times sounds…",
      a: [
        { art: "dots", t: "Satisfying, almost meditative", s: { wholesale: 2, online: 1 } },
        { art: "palette", t: "Fine, as long as I can play with colours and variations", s: { online: 2, market: 1 } },
        { art: "swirl", t: "Soul-destroying. Every piece should be different", s: { gallery: 2, commission: 1 } },
        { art: "heart", t: "Only if each one is made for someone special", s: { commission: 2, cafe: 1 } }
      ]
    },
    {
      q: "When it comes to your weekends and spare time…",
      a: [
        { art: "clock", t: "I'd give up some weekends for early starts and setting up a stall", s: { market: 2, wholesale: 1 } },
        { art: "parcel", t: "I want selling to happen without me being there", s: { online: 2, gallery: 1 } },
        { art: "tote", t: "A few hours here and there for drop-offs and a chat suits me", s: { cafe: 2, commission: 1 } },
        { art: "hourglass", t: "It's unpredictable, so I'd fit projects in around life", s: { commission: 2, online: 1 } }
      ]
    },
    {
      q: "Your ideal relationship with the people who buy your work is…",
      a: [
        { art: "faces", t: "Friendly regulars who come back to see what's new", s: { market: 2, cafe: 1 } },
        { art: "collector", t: "A collector who treasures my piece, even if we never meet", s: { gallery: 2, online: 1 } },
        { art: "sofa", t: "A client or interior designer I work with closely on a piece for a special space", s: { commission: 2, market: 1 } },
        { art: "store", t: "Shop owners who reorder every season", s: { wholesale: 2, gallery: 1 } }
      ]
    },
    {
      q: "Which message would make your week?",
      a: [
        { art: "cup", t: "“I saw your piece at the café and had to find you!”", s: { cafe: 2, commission: 1 } },
        { art: "invite", t: "“We'd love to include you in our next exhibition.”", s: { gallery: 2, cafe: 1 } },
        { art: "bell", t: "“Your shop made three sales overnight.”", s: { online: 2, wholesale: 1 } },
        { art: "boxes", t: "“Can we put in another order of 24 for the holidays?”", s: { wholesale: 2, market: 1 } }
      ]
    }
  ]
};
