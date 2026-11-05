window.SITE_CONTENT = {
  "site": {
    "pageTitle": "Kids' Crochet Socks",
    "brand": "Little",
    "brandAccent": "socks",
    "heroTitle": "Warm crochet socks for your child",
    "heroText": "These socks are worked in the round from the toe up to the cuff in single crochet, and the heel is added at the end. Pick your child's size and every stitch count in the pattern updates automatically.",
    "facts": ["Level: beginner", "3 mm hook", "Fingering weight sock yarn", "Three sizes: ages 1–10"],
    "footer": "This page was made with Claude."
  },
  "prep": {
    "title": "Before you start",
    "lead": "Choose a size based on your child's foot length. Measure from the back of the heel to the tip of the longest toe while your child is standing.",
    "gaugeTitle": "Gauge",
    "gaugeText": "About 25 single crochet stitches and 28 rows = 10 × 10 cm (4 × 4 in). Crochet a test swatch first: if you have more stitches, go up a hook size, and if you have fewer, go down. The sock should fit snugly when stretched over the foot.",
    "abbrTitle": "Abbreviations",
    "abbreviations": [
      {"term": "ch", "text": "chain"},
      {"term": "sl st", "text": "slip stitch"},
      {"term": "sc", "text": "single crochet"},
      {"term": "dc", "text": "double crochet"},
      {"term": "inc", "text": "2 sc in the same stitch (increase)"},
      {"term": "sc2tog", "text": "single crochet two together (decrease)"},
      {"term": "FPdc / BPdc", "text": "front post / back post double crochet"}
    ]
  },
  "defaultSize": "M",
  "sizes": [
    {"id": "S", "age": "ages 1–3", "foot": "12–14 cm", "yarn": "about 50 g"},
    {"id": "M", "age": "ages 4–6", "foot": "15–17 cm", "yarn": "60–70 g"},
    {"id": "L", "age": "ages 7–10", "foot": "18–20 cm", "yarn": "80–100 g"}
  ],
  "variables": [
    {"key": "n", "label": "Stitches per round", "values": {"S": "30", "M": "36", "L": "42"}},
    {"key": "toeRounds", "label": "Toe rounds", "values": {"S": "5", "M": "6", "L": "7"}},
    {"key": "heelSpace", "label": "Space for heel", "values": {"S": "4 cm", "M": "4.5 cm", "L": "5 cm"}},
    {"key": "half", "label": "Half the stitches", "values": {"S": "15", "M": "18", "L": "21"}},
    {"key": "leg", "label": "Leg length", "values": {"S": "4 cm", "M": "5 cm", "L": "6 cm"}},
    {"key": "cuff", "label": "Cuff rounds", "values": {"S": "4", "M": "5", "L": "6"}},
    {"key": "decStart", "label": "First heel decrease spacing", "values": {"S": "3", "M": "4", "L": "5"}}
  ],
  "instructions": {
    "title": "Pattern",
    "lead": "The foot and leg are worked in a continuous spiral without joining rounds. Mark the first stitch of each round with a stitch marker and move it up as you go.",
    "steps": [
      {"title": "Toe", "blocks": [
        {"type": "row", "text": "Round 1: 6 sc into a magic ring, pull the ring closed (6)"},
        {"type": "row", "text": "Round 2: inc in every stitch (12)"},
        {"type": "row", "text": "Round 3: *1 sc, inc* repeat around (18)"},
        {"type": "row", "text": "Round 4: *2 sc, inc* repeat around (24)"},
        {"type": "p", "text": "Keep going, working one more sc between increases each round, until you have {n} stitches. This takes {toeRounds} rounds."}
      ]},
      {"title": "Foot", "blocks": [
        {"type": "p", "text": "Work 1 sc in each stitch until the sock measures {heelSpace} less than your child's foot length from the tip of the toe. The rest is left for the heel."}
      ]},
      {"title": "Heel opening", "blocks": [
        {"type": "p", "text": "Work {half} sc (this is the top of the foot). Then ch {half}, skip {half} stitches and continue the round."},
        {"type": "p", "text": "On the next round work 1 sc into each chain. You are back to {n} stitches."}
      ]},
      {"title": "Leg", "blocks": [
        {"type": "p", "text": "Work sc in a spiral for {leg}. You can make it longer or shorter as you like."}
      ]},
      {"title": "Cuff", "blocks": [
        {"type": "p", "text": "From here on, join each round with a sl st. Ch 2 counts as the first stitch of the round."},
        {"type": "row", "text": "Round 1: ch 2, dc in each stitch, sl st to the top of the ch 2"},
        {"type": "row", "text": "Following rounds: ch 2, *1 FPdc, 1 BPdc* repeat around, sl st to join"},
        {"type": "p", "text": "Work {cuff} rounds of ribbing. This gives a stretchy cuff that keeps the sock in place. Fasten off and weave in the end."}
      ]},
      {"title": "Heel", "blocks": [
        {"type": "p", "text": "Join the yarn at a corner of the opening and work sc in the round all the way around it: 1 sc in each stitch and 1 sc in each corner. On the second round, sc2tog at the corners so you are back to {n} stitches."},
        {"type": "row", "text": "Decrease rounds: *{decStart} sc, sc2tog* repeat around, working one fewer sc between decreases each round"},
        {"type": "p", "text": "Decrease until 12 stitches remain."}
      ]},
      {"title": "Finishing", "blocks": [
        {"type": "p", "text": "Cut the yarn leaving a 20 cm tail. Thread it onto a tapestry needle, pass it through the front loops of the 12 remaining stitches and pull tight. Close any small gaps at the heel corners with the same tail. Weave in the ends and make the second sock."}
      ]}
    ],
    "tipTitle": "Tip.",
    "tipText": "Single crochet makes a dense, sturdy fabric, so crocheted socks hold up well. They are most comfortable around the house or in shoes with a roomy toe box. Choose a yarn with some nylon in it so the socks survive washing and running around."
  },
  "productsSection": {
    "title": "Recommended supplies",
    "lead": "Everything you need for your first pair. Essentials are marked, the rest just make the job easier."
  },
  "products": [
    {"tag": "must", "name": "Sock yarn", "description": "75% merino wool and 25% nylon. Soft, warm and hard-wearing. For kids, choose a machine-washable yarn.", "spec": "Fingering weight · 50 g ≈ 210 m", "price": "", "url": ""},
    {"tag": "must", "name": "Crochet hook", "description": "With a soft ergonomic handle so your hand doesn't tire on longer sessions. A metal head glides easily through wool.", "spec": "3 mm", "price": "", "url": ""},
    {"tag": "must", "name": "Stitch markers", "description": "Without them it's hard to find the start of the round when working in a spiral. Locking markers are easy to move up.", "spec": "Locking, pack of 10", "price": "", "url": ""},
    {"tag": "must", "name": "Tapestry needle", "description": "For closing the toe and weaving in ends. The blunt tip won't split the yarn.", "spec": "Large eye", "price": "", "url": ""},
    {"tag": "nice", "name": "Crochet hook set", "description": "Handy when you need to adjust your gauge or work with thicker yarn.", "spec": "2.5–4 mm", "price": "", "url": ""},
    {"tag": "nice", "name": "Row counter", "description": "Helps you count toe and heel rounds so both socks come out the same.", "spec": "Click counter", "price": "", "url": ""},
    {"tag": "nice", "name": "Measuring tape", "description": "For measuring foot length and checking your gauge.", "spec": "150 cm, soft", "price": "", "url": ""},
    {"tag": "nice", "name": "Sock blockers", "description": "Dry washed socks on them so they keep a smooth, even shape.", "spec": "Kids' sizes", "price": "", "url": ""},
    {"tag": "nice", "name": "Project bag", "description": "Keeps the ball of yarn from rolling under the table and your hook from going missing.", "spec": "With a pocket for tools", "price": "", "url": ""}
  ],
  "kit": {
    "title": "Starter kit",
    "text": "Everything for one pair of size M socks in a single box.",
    "items": ["2 skeins of sock yarn (50 g each)", "3 mm hook with an ergonomic handle", "Tapestry needle and 4 stitch markers", "A printed copy of this pattern"]
  }
};
