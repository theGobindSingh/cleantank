# Sections

Every section type on the site has one name. Use it in docs, issues and chat, so everyone means the same part of a page. The name stays the same on every page; only the heading text changes. How each one looks and behaves is in docs/DESIGN.md, Sections.

The home page and `/homes` are the reference pages (docs/DESIGN.md, Page patterns). New pages are built from these sections.

## The sections

| Name                     | What it is                                                                                                                                          | Block             |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| Hero section             | The top of the home and audience pages: the before/after slider with the big heading and the first buttons                                          | `hero`            |
| Page intro section       | The top of an inner page: the heading, the coral Level Line, one line and buttons                                                                   | `pageIntro`       |
| Value prop section       | Why it matters: text on the left, one or two photos (photos variant, tall 1:2 or one wide landscape) or a numbered list (list variant) on the right | `valueProp`       |
| Price section            | The calculator on the left and the price table on the right                                                                                         | `priceList`       |
| Clients strip            | A thin stone strip of scrolling client logos; its heading is the `clientsBand` global                                                               | `clientsBand`     |
| Story section            | Text on the left, an optional photo on the right                                                                                                    | `story`           |
| Comparison section       | The story section with two texts side by side under small headings, such as our method against a usual wash                                         | `story`           |
| Process section          | The five numbered steps in a row; the detailed variant adds each step in full                                                                       | `process`         |
| Map section              | Where we work: text on the left, the drawn map on the right                                                                                         | `serviceArea`     |
| Ruled list section       | Short points in ruled boxes                                                                                                                         | `ruledList`       |
| Expect section           | Two ruled lists side by side: before we arrive and after the cleaning                                                                               | `ruledList`       |
| Questions section        | Questions that open and close                                                                                                                       | `faq`             |
| Doors section            | Three navy cards leading to Homes, Organisations and Franchise                                                                                      | `audiences`       |
| Testimonials section     | Up to three quote cards                                                                                                                             | `testimonials`    |
| Closing band             | A navy band with a heading, one line and the page's two buttons                                                                                     | `ctaBand`         |
| Track record strip       | A light strip of key figures, such as 15+ years                                                                                                     | `trustBand`       |
| Gallery section          | Several before/after sliders                                                                                                                        | `compareGallery`  |
| Founder section          | The founder's name, role, bio and portrait                                                                                                          | `founder`         |
| Credentials section      | The spec sheet of registrations and certificates                                                                                                    | `credentials`     |
| Client list section      | Every cleared client by name, grouped by sector                                                                                                     | `clientList`      |
| Franchise models section | The franchise models side by side, each with its investment, and the financial disclaimer under them                                                | `franchiseModels` |

## Page by page

### Home (`/`), reference

1. Hero section: "Clean has never been so easy."
2. Value prop section, photos: "Your health comes first."
3. Process section: "Our cleaning process."
4. Doors section: "Let's get started."
5. Clients strip: "WHO WE CLEAN:", on two lines (CT-465)
6. Testimonials section: "What our clients say."
7. Track record strip: "Track record."

### Homes (`/homes`), reference

1. Hero section: "Water tank cleaning for homes."
2. Value prop section, one wide photo: "Clean tank, healthy life." Its old numbered list is kept, hidden, in the block (docs/DESIGN.md, Value prop section).
3. Price section: "Specialist services, affordable prices."
4. Comparison section, with an intro and three photos: "cleaning families can trust."
5. Process section, stacked on the left with the right half empty for questions later (CT-440): "How it works."
6. Map section, on stone: "Where we clean home tanks."
7. Expect section: "What to expect."
8. Questions section: "Questions families ask."
9. Closing band: "If your tank is due, we can help."
10. Clients strip: "WHO WE CLEAN:", on two lines (CT-465), right above the track record (James's call, 27 Nov 2026, CT-438).
11. Track record strip: "Track record."

### Process (`/process`)

1. Page intro section: "Our cleaning process."
2. Process section, detailed: "Five steps, in this order."
3. Gallery section, on stone: "Before and after."
4. Expect section: "What to expect."
5. Ruled list section, on stone: "How often to clean?"
6. Questions section: "Questions."
7. Doors section: "Who we work for."
8. Closing band: "Plan your tank cleaning."
9. Track record strip: "Track record."

### About (`/about`)

1. Page intro section: "The people behind the work."
2. Story section: "Why we started."
3. Founder section, on stone
4. Value prop section, list: "Why choose Clean Tank?"
5. Clients strip: "WHO WE CLEAN:", on two lines (CT-465)
6. Testimonials section: "What our clients say."
7. Credentials section, on stone: "Registrations and certificates."
8. Client list section: "Our clients."
9. Ruled list section, on stone: "Aims and objectives."
10. Doors section: "Who we work for."
11. Closing band: "Talk to us about your tanks."
12. Track record strip: "Track record."

### Franchise (`/franchise`)

Every section with buttons has the same two: Become a Franchise Partner (WhatsApp) first, then Call Us. The new sections carry no buttons of their own; the starter guide is a text link.

1. Page intro section: "Start your own tank cleaning business. Step beyond jobs."
2. Clients strip: "WHO WE CLEAN:", on two lines (CT-465)
3. Value prop section, list: "Tank cleaning is repeat work."
4. Franchise models section: "Three models, one system." Standard FOFO, Classic FOCS and Premium FOCO, each with its total investment, summary and package, and the financial disclaimer under them.
5. Ruled list section, two lists: "What running it looks like." A normal week (with the kit) and the hard parts (INFO-BANK §8, How a partner joins). No earnings figures.
6. Ruled list section, on stone: "What you get from us." (`#support`)
7. Process section: "One process, every tank."
8. Founder section, on stone
9. Ruled list section, two lists: "Is this business right for you?" Who it suits and who it does not.
10. Ruled list section, two lists: "How we choose partners." The steps from the first WhatsApp to training, and what we look for; the line says we never ask for money to apply.
11. Credentials section, on stone: "Registrations you can check."
12. Questions section: "Questions before you invest." Includes the cost questions to ask (CT-453).
13. Closing band: "Call us for the full details."
14. Track record strip: "Track record."

### Franchise starter guide (`/franchise-guide`)

The free guide, open to everyone: no form, nothing asks for a number. Held off production like `/franchise`. Only the hero and the closing band have working buttons; the starter guide's download button is greyed out until the file arrives. The hero has Become a Franchise Partner (WhatsApp) and Learn More, which jumps to "What running it looks like." (`#running`); the closing band has the same two as `/franchise`.

1. Hero section: "Make Work Your Way.", with "Your" highlighted, over a night (left) and day (right) aerial view of a planned city like the Tricity (CT-459). The two images are AI-made, and their alt text says so.
2. Value prop section, landscape: "Franchise Starter Guide.", with "Starter" highlighted, beside a mockup of the guide booklet. Placeholder body copy and a greyed-out Download Franchise Guide button until the guide file and final copy arrive (CT-463); never release them to production. On dev and staging its content is one raised white panel, on the section's usual white (CT-473 trial, docs/neumorphic.md).
3. Franchise models section: "Your Business, Your Plan" ("Business" in accent). The same models and disclaimer as `/franchise`, as separate cards with the copy beside them from 1440 px.
4. Clients strip: "WHO WE CLEAN:", on two lines (CT-465)
5. Ruled list section, on stone: "What running it looks like." (`#running`)
6. Ruled list section, on stone: "Training and support."
7. Ruled list section, two lists: "Is this business right for you?"
8. Ruled list section, on stone: "What is hard about this work."
9. Value prop section, list: "How a partner joins." From the first call to training; no money before signing.
10. Ruled list section, two lists, on stone: "Questions to ask us on the call." Costs beyond the package and the agreement, as questions only.
11. Story section: "Do your homework in your own town."
12. Ruled list section, on stone: "How to check any franchise offer."
13. Closing band: "Call us when you are ready."
14. Track record strip: "Track record."

`/organisations` has no sections yet. When a page changes, update its list here in the same change.
