// Content and metadata for the dedicated SEO service pages under /services/<slug>.
// Each entry drives one statically generated page (src/app/services/[slug]),
// its metadata, and its Service + FAQPage JSON-LD.

export interface ServiceFaq {
  question: string
  answer: string
}

export interface ServiceBenefit {
  icon: string
  title: string
  description: string
}

export interface ServiceProcessStep {
  step: string
  title: string
  description: string
}

export interface ServicePageData {
  slug: string
  /** Short label used in nav, footer, and related-services cards. */
  label: string
  /** The H1 and the metadata title phrase (the root layout template appends "| Rapid Entrepreneurs"). */
  h1: string
  metaDescription: string
  keywords: string[]
  /** serviceType for the Service JSON-LD schema. */
  serviceType: string
  heroBadge: string
  heroSubtitle: string
  /** Tailwind gradient classes for the icon accent, matching the hub page cards. */
  gradient: string
  icon: string
  intro: string[]
  benefitsHeading: string
  benefitsIntro: string
  benefits: ServiceBenefit[]
  processIntro: string
  process: ServiceProcessStep[]
  faqs: ServiceFaq[]
  /** Short description for the services hub links and related-services block. */
  cardDescription: string
}

export const servicePages: ServicePageData[] = [
  {
    slug: 'web-design',
    label: 'Web Design',
    h1: 'Web Design in Ghana',
    metaDescription:
      'Professional web design in Ghana from an Accra-based team. Mobile-first website design for SMEs, startups, churches, and schools — fast sites built for Ghanaian users.',
    keywords: [
      'web design Ghana',
      'website design Accra',
      'web designers Ghana',
      'website design company Ghana',
      'mobile-first web design Accra',
    ],
    serviceType: 'Web Design',
    heroBadge: 'Web Design',
    heroSubtitle:
      'Beautiful, mobile-first websites designed in Accra for Ghanaian businesses — built to load fast on mobile data and turn visitors into paying customers.',
    gradient: 'from-blue-500 to-cyan-600',
    icon: '🎨',
    intro: [
      'For most Ghanaian businesses today, your website is your shopfront long before anyone visits your actual shop. A customer in East Legon, a diaspora client in London, or a procurement officer comparing suppliers will all judge you in the first few seconds of a page loading on their phone. Good web design in Ghana starts from that reality: it has to look credible, load quickly on mobile data, and make the next step — a call, a WhatsApp message, an order — completely obvious.',
      'Rapid Entrepreneurs designs websites from Accra, for the market we live and work in. We know that most of your visitors will arrive on a phone rather than a laptop, that data bundles are precious, and that a heavy page full of oversized images will be abandoned before it ever finishes loading. So we design light and mobile-first: clear layouts, honest photography, readable text, and one obvious call to action on every page.',
      'We design for the full range of organisations that keep Ghana running — SMEs and market traders moving online, startups pitching to investors, churches and ministries reaching their congregations, schools recruiting students, and professional firms that need a credible presence. Whether you need a brand-new five-page site, a redesign of a dated WordPress site, or a fresh brand identity to match, our goal is the same: a website that looks professional, works on every phone in Ghana, and actually brings you business.',
    ],
    benefitsHeading: 'What good web design looks like in Ghana',
    benefitsIntro:
      'Design is more than decoration. Every choice we make serves a practical purpose for a Ghanaian business.',
    benefits: [
      {
        icon: '📱',
        title: 'Mobile-first, always',
        description:
          'Most browsing in Ghana happens on phones over mobile data. We design for the small screen first, so your site works perfectly for the majority of your audience.',
      },
      {
        icon: '⚡',
        title: 'Fast on mobile data',
        description:
          'Lightweight pages, compressed images, and global content delivery mean your site loads quickly even on modest connections — in Accra, in Kumasi, or abroad.',
      },
      {
        icon: '💬',
        title: 'Built around how Ghanaians buy',
        description:
          'Click-to-call buttons, WhatsApp links, and clear directions — because in Ghana the website starts the conversation and the deal often closes on the phone.',
      },
      {
        icon: '⛪',
        title: 'Designed for your sector',
        description:
          'A church site, a school site, and a fashion brand site each have different jobs. We design around your audience, not from a one-size-fits-all template.',
      },
      {
        icon: '🔍',
        title: 'Search-ready structure',
        description:
          'Proper headings, metadata, and page structure from day one, so Google can find and rank your site — design and SEO working together, not as an afterthought.',
      },
      {
        icon: '🛠️',
        title: 'Easy to keep updated',
        description:
          'A content management setup that lets your team change prices, photos, and announcements without calling a developer every time.',
      },
    ],
    processIntro:
      'A clear, staged process — you see the design before we build, and nothing goes live without your approval.',
    process: [
      {
        step: '01',
        title: 'Discovery',
        description:
          'We meet you — in person in Accra or by call — to understand your business, your customers, and what the site needs to achieve.',
      },
      {
        step: '02',
        title: 'Design concepts',
        description:
          'You review visual designs of the key pages before any code is written. Revisions happen here, where they are quick and cheap.',
      },
      {
        step: '03',
        title: 'Build & content',
        description:
          'We build the approved design, load your content and photos, and test it on real phones and real Ghanaian network speeds.',
      },
      {
        step: '04',
        title: 'Launch & handover',
        description:
          'We launch on reliable hosting, connect your domain, submit the site to Google, and show your team how to manage it.',
      },
    ],
    faqs: [
      {
        question: 'How much does website design cost in Ghana?',
        answer:
          'It depends on the size and complexity of the site — a simple brochure site is a very different project from an online store with mobile money payments. We scope every project first and give you a fixed quote in advance, so there are no surprises and no hourly billing anxiety.',
      },
      {
        question: 'How long does it take to design and launch a website?',
        answer:
          'A typical small business website takes a few weeks from our first meeting to launch, depending mostly on how quickly your content and photos come together. Larger sites with e-commerce or member areas take longer. We agree a timeline up front and keep you updated at every stage.',
      },
      {
        question: 'Will my website work well on phones and slow connections?',
        answer:
          'Yes — this is central to how we design. We keep pages light, compress every image, and serve your site from a global content delivery network, so it loads quickly whether your visitor is on mobile data in Madina or on Wi-Fi in Washington.',
      },
      {
        question: 'Can I update the website myself after it launches?',
        answer:
          'Absolutely. We set up a content management system and train your team to change text, photos, prices, and event announcements themselves. For anything bigger, we offer ongoing support arrangements.',
      },
    ],
    cardDescription:
      'Mobile-first website design from Accra — fast-loading, search-ready sites that turn visitors into customers.',
  },
  {
    slug: 'web-development',
    label: 'Web Development',
    h1: 'Web Development in Ghana',
    metaDescription:
      'Web development in Ghana by an Accra-based team. Modern, fast, secure websites and web applications for Ghanaian SMEs, startups, and organisations.',
    keywords: [
      'web development Ghana',
      'web developers Accra',
      'website development company Ghana',
      'web application development Ghana',
      'Next.js developers Ghana',
    ],
    serviceType: 'Web Development',
    heroBadge: 'Web Development',
    heroSubtitle:
      'Modern, secure websites and web applications engineered in Accra — from business sites to customer portals, built on technology that scales with you.',
    gradient: 'from-indigo-500 to-blue-600',
    icon: '💻',
    intro: [
      'Web design is what your visitors see; web development is what makes it actually work — quickly, securely, and reliably. In Ghana, where a slow or broken site costs you customers who are paying for every megabyte, engineering quality is not a luxury. It decides whether your checkout completes, whether your forms actually deliver enquiries, and whether your site stays up when a Facebook post suddenly sends you traffic.',
      'Rapid Entrepreneurs builds websites and web applications from Accra on a modern stack — the same technologies used by leading product companies worldwide — rather than bolting plugins onto ageing platforms. That means faster pages, fewer security holes, and a codebase that can grow from a simple company site into a customer portal, booking system, or online store without starting from scratch.',
      'We develop for the organisations we know best: Ghanaian SMEs replacing an outdated site, startups that need a real product-grade web application, schools and churches that need portals and registrations, and established firms integrating their website with payments, SMS, or internal systems. Wherever you are starting from, we build something you own outright, hosted properly, with no lock-in.',
    ],
    benefitsHeading: 'Engineering that works for Ghanaian businesses',
    benefitsIntro:
      'The technical decisions behind your site determine speed, security, and how far it can grow.',
    benefits: [
      {
        icon: '🚀',
        title: 'Modern technology stack',
        description:
          'We build with current frameworks like Next.js and React — fast, secure, and maintainable, instead of plugin-heavy legacy platforms that slow down and break.',
      },
      {
        icon: '⚡',
        title: 'Performance as standard',
        description:
          'Server-side rendering, image optimisation, and global content delivery keep load times low on Ghanaian mobile networks — where every second costs you visitors.',
      },
      {
        icon: '🔒',
        title: 'Security built in',
        description:
          'HTTPS everywhere, safe handling of forms and user data, and hosting that receives updates — so your site is not the easy target that outdated installs become.',
      },
      {
        icon: '🧩',
        title: 'Integrations that matter here',
        description:
          'Mobile money and card payments, WhatsApp and SMS notifications, Google Maps and analytics — connected properly, not held together with workarounds.',
      },
      {
        icon: '📈',
        title: 'Built to grow',
        description:
          'Start with a company site today; add a shop, a booking engine, or a member portal tomorrow — on the same codebase, without a rebuild.',
      },
      {
        icon: '🤝',
        title: 'You own everything',
        description:
          'Your domain, your hosting, your code. We hand over full access and documentation, so you are never held hostage by your developer.',
      },
    ],
    processIntro:
      'A transparent build process with milestones you can see and test at every stage.',
    process: [
      {
        step: '01',
        title: 'Requirements',
        description:
          'We map out exactly what the site or application must do — pages, features, integrations, and who will use it.',
      },
      {
        step: '02',
        title: 'Architecture & design',
        description:
          'We plan the technical approach and the interface together, so the build starts on solid foundations.',
      },
      {
        step: '03',
        title: 'Development & testing',
        description:
          'We build in milestones you can preview, testing on real devices and real network conditions as we go.',
      },
      {
        step: '04',
        title: 'Launch & support',
        description:
          'We deploy to production hosting, monitor the launch, and stay available for support and new features.',
      },
    ],
    faqs: [
      {
        question: 'What is the difference between web design and web development?',
        answer:
          'Design is the look, layout, and user experience; development is the engineering that makes it work — the code, hosting, performance, security, and integrations. We do both, so you get one accountable team from first sketch to live site instead of coordinating separate designers and developers.',
      },
      {
        question: 'What technologies do you build with?',
        answer:
          'Our standard stack is Next.js and React with TypeScript, backed by modern cloud databases and hosting. It is fast, secure, and widely used, which means your site performs well today and other developers can work on it in future — you are never locked into us.',
      },
      {
        question: 'Can you rebuild or fix an existing website?',
        answer:
          'Yes. Many projects start as rescues — a slow WordPress site, an abandoned build, or a site the original developer disappeared with. We audit what exists, tell you honestly whether to fix or rebuild, and give you a fixed quote for either path.',
      },
      {
        question: 'How much does web development cost in Ghana?',
        answer:
          'It depends entirely on scope — a marketing site, a booking platform, and a customer portal are very different projects. We scope first and quote a fixed price before any work starts, with staged payments tied to milestones you can see and test.',
      },
    ],
    cardDescription:
      'Modern, secure websites and web applications built in Accra on a stack that scales with your business.',
  },
  {
    slug: 'software-development',
    label: 'Software Development',
    h1: 'Software Development in Ghana',
    metaDescription:
      'Custom software development in Ghana. Accra-based team building business systems, portals, and automation for Ghanaian SMEs, schools, and organisations.',
    keywords: [
      'software development Ghana',
      'software company Accra',
      'custom software Ghana',
      'business systems Ghana',
      'software developers Accra',
    ],
    serviceType: 'Software Development',
    heroBadge: 'Software Development',
    heroSubtitle:
      'Custom software built in Accra for how your organisation actually works — replace the spreadsheets and paper registers with systems your team will use.',
    gradient: 'from-purple-500 to-indigo-600',
    icon: '⚙️',
    intro: [
      'Every growing organisation in Ghana eventually hits the same wall: the spreadsheets multiply, the paper registers pile up, WhatsApp becomes the filing system, and nobody is quite sure which record is current. Off-the-shelf software rarely fits — it is priced in dollars for foreign markets, assumes workflows that do not match yours, and ignores realities like mobile money and intermittent connectivity. Custom software development closes that gap.',
      'Rapid Entrepreneurs designs and builds software from Accra for the way Ghanaian organisations actually operate. That might be a school management system that handles fees paid by MoMo, a member database for a church, an inventory and sales system for a trading business, or an internal portal that finally gets your records out of somebody’s personal laptop. We start from your real workflow — not a template — and automate the painful parts.',
      'Because we are local, we build for local conditions: interfaces that work on the phones your staff already carry, systems that tolerate unstable connections, and integrations with the payment and messaging channels your customers actually use. And because you commission it, the software belongs to you — source code, data, and all.',
    ],
    benefitsHeading: 'Why custom software pays off',
    benefitsIntro:
      'The right system removes hours of manual work every week and puts your records where you can trust them.',
    benefits: [
      {
        icon: '🗂️',
        title: 'One source of truth',
        description:
          'Replace scattered spreadsheets and paper registers with a single system where records are current, searchable, and backed up.',
      },
      {
        icon: '🔁',
        title: 'Automate repetitive work',
        description:
          'Fee reminders, receipts, reports, and follow-ups generated automatically — freeing your staff for work that needs a human.',
      },
      {
        icon: '📲',
        title: 'Works on the phones you have',
        description:
          'Web-based systems that run on any smartphone or computer in the office — no special hardware, no per-seat licence fees.',
      },
      {
        icon: '💳',
        title: 'Mobile money aware',
        description:
          'Payment tracking and integrations designed around how Ghanaians actually pay — MoMo first, cards and bank transfer alongside.',
      },
      {
        icon: '📊',
        title: 'Reports on demand',
        description:
          'See sales, fees, attendance, or stock levels in real time instead of waiting for someone to compile a month-end spreadsheet.',
      },
      {
        icon: '🔐',
        title: 'Your data, protected',
        description:
          'Role-based access, audit trails, and proper backups — so records survive staff changes, lost laptops, and honest mistakes.',
      },
    ],
    processIntro:
      'We build in small, working stages — you see real software early, not a big reveal at the end.',
    process: [
      {
        step: '01',
        title: 'Understand the workflow',
        description:
          'We sit with the people who do the work — admissions clerk, storekeeper, accountant — and map how things really flow.',
      },
      {
        step: '02',
        title: 'Design the system',
        description:
          'We propose the simplest system that solves the problem, with screens you can review before we build.',
      },
      {
        step: '03',
        title: 'Build & pilot',
        description:
          'We deliver a working version early, pilot it with your team, and refine based on real use.',
      },
      {
        step: '04',
        title: 'Roll out & support',
        description:
          'We migrate your existing records, train your staff, and support the system as your needs evolve.',
      },
    ],
    faqs: [
      {
        question: 'Is custom software expensive compared to off-the-shelf tools?',
        answer:
          'It is an investment, but often a better one than it first appears. Foreign SaaS tools charge monthly in dollars forever and still may not fit your workflow. Custom software is scoped to what you actually need, quoted as a fixed price, and owned by you — with no per-user fees growing every time you hire.',
      },
      {
        question: 'What kinds of systems do you build?',
        answer:
          'Business management systems are our core: school administration and fees, inventory and sales, member and donor management for churches and NGOs, booking systems, and internal portals. If your process currently lives in spreadsheets, paper, or WhatsApp, it is probably a candidate.',
      },
      {
        question: 'Will our staff be able to use it?',
        answer:
          'That is a design requirement, not an afterthought. We build interfaces around your team’s existing habits and devices, pilot the system with the actual users before rollout, and provide hands-on training. Software that staff avoid is failed software, however clever it is.',
      },
      {
        question: 'Who owns the software when it is finished?',
        answer:
          'You do. You receive the source code, full access to the hosting and database, and documentation. You can have any competent developer maintain it in future — though most clients stay with us because we built it and know it best.',
      },
    ],
    cardDescription:
      'Custom business systems built in Accra — replace spreadsheets and paper with software that fits how you work.',
  },
  {
    slug: 'ecommerce',
    label: 'E-commerce',
    h1: 'E-commerce Websites in Ghana',
    metaDescription:
      'E-commerce website development in Ghana with mobile money payments. Accra-based team building online stores for Ghanaian retailers, fashion brands, and SMEs.',
    keywords: [
      'ecommerce website Ghana',
      'online store Ghana',
      'ecommerce with mobile money',
      'online shop Accra',
      'sell online Ghana',
    ],
    serviceType: 'E-commerce Development',
    heroBadge: 'E-commerce',
    heroSubtitle:
      'Online stores built in Accra for Ghanaian sellers — with mobile money at the checkout, delivery workflows that fit local logistics, and pages that load fast on any phone.',
    gradient: 'from-green-500 to-emerald-600',
    icon: '🛒',
    intro: [
      'Ghanaians already shop on their phones — through Instagram DMs, WhatsApp catalogues, and marketplace pages. What most sellers are missing is a store of their own: a place where the catalogue, the prices, the checkout, and the customer data belong to you rather than to a social platform that can change its rules overnight. A proper e-commerce website turns your following into a business asset you control.',
      'Rapid Entrepreneurs builds online stores from Accra around the way Ghanaian customers actually pay and receive goods. That means mobile money front and centre at checkout — alongside cards for diaspora and corporate buyers — order confirmations by SMS or WhatsApp, and delivery options that reflect real logistics in Accra and beyond, including pay-on-delivery workflows where they make sense for your business.',
      'Whether you are a fashion brand outgrowing Instagram, a shop in Madina or Makola wanting to reach the whole country, or an established retailer adding an online channel, we build a store that is fast on mobile data, simple to manage from your phone, and structured so Google can send you customers you never had to advertise for.',
    ],
    benefitsHeading: 'E-commerce built for how Ghana buys',
    benefitsIntro:
      'A store that ignores local payment and delivery realities will not sell. Ours are designed around them.',
    benefits: [
      {
        icon: '💳',
        title: 'MoMo at the checkout',
        description:
          'Mobile money is how Ghana pays. We integrate trusted local payment providers so customers can pay with MoMo or card in a few taps.',
      },
      {
        icon: '🛍️',
        title: 'Your store, your rules',
        description:
          'Own your catalogue, prices, and customer list — instead of renting reach from social platforms and marketplaces that take a cut and set the rules.',
      },
      {
        icon: '🚚',
        title: 'Delivery your way',
        description:
          'Flat rates, zoned delivery for Accra, pickup points, or pay-on-delivery — configured around how you actually fulfil orders.',
      },
      {
        icon: '📱',
        title: 'Manage it from your phone',
        description:
          'Add products, update prices, and process orders from a phone — because most Ghanaian sellers run their business from one.',
      },
      {
        icon: '💬',
        title: 'WhatsApp-friendly selling',
        description:
          'Product pages that share beautifully into WhatsApp and Instagram, so your existing social selling feeds the store instead of competing with it.',
      },
      {
        icon: '🔍',
        title: 'Found on Google',
        description:
          'Clean product pages with proper titles, descriptions, and structured data — so searches for what you sell can find you, not just your competitors.',
      },
    ],
    processIntro:
      'From catalogue to first sale in clear stages, with the checkout tested end-to-end before launch.',
    process: [
      {
        step: '01',
        title: 'Store planning',
        description:
          'We map your products, payment options, delivery zones, and how orders will flow to whoever fulfils them.',
      },
      {
        step: '02',
        title: 'Design & build',
        description:
          'We design the storefront, build the catalogue and checkout, and connect payments and notifications.',
      },
      {
        step: '03',
        title: 'Test with real orders',
        description:
          'We run real test transactions — MoMo and card — on real phones before a single customer sees the store.',
      },
      {
        step: '04',
        title: 'Launch & grow',
        description:
          'We launch, train you on order management, and help you connect the store to your social channels and Google.',
      },
    ],
    faqs: [
      {
        question: 'Can customers pay with mobile money on my online store?',
        answer:
          'Yes — that is the default, not an add-on. We integrate established Ghanaian payment providers so customers can pay by MoMo or card, with funds settling to your account. We also support pay-on-delivery workflows where they fit your business.',
      },
      {
        question: 'I already sell on Instagram and WhatsApp. Why do I need a website?',
        answer:
          'Keep selling there — the store makes those channels work harder. A website gives you a permanent catalogue to share, a checkout that works while you sleep, customer records you own, and visibility on Google. Social platforms can restrict your account overnight; your own store cannot be taken away.',
      },
      {
        question: 'How much does an e-commerce website cost in Ghana?',
        answer:
          'It depends on your catalogue size, payment setup, and delivery complexity. We scope your store first and give you a fixed quote before work starts. Payment providers charge their own small transaction fees, which we explain transparently so there are no surprises.',
      },
      {
        question: 'Can I manage products and orders myself?',
        answer:
          'Yes. You get an admin area where you can add products, change prices, upload photos, and process orders — from a phone or computer. We train you at handover, and we stay available if you would rather have us handle updates.',
      },
    ],
    cardDescription:
      'Online stores with mobile money checkout — sell to all of Ghana from a store you own and control.',
  },
  {
    slug: 'mobile-apps',
    label: 'Mobile Apps',
    h1: 'Mobile App Development in Ghana',
    metaDescription:
      'Mobile app development in Ghana. Accra-based team building Android and iOS apps for Ghanaian startups, businesses, and organisations — designed for local users.',
    keywords: [
      'mobile app development Ghana',
      'app developers Accra',
      'Android app development Ghana',
      'iOS app development Ghana',
      'app development company Ghana',
    ],
    serviceType: 'Mobile App Development',
    heroBadge: 'Mobile Apps',
    heroSubtitle:
      'Android and iOS apps engineered in Accra — designed for the phones, data bundles, and payment habits of real Ghanaian users.',
    gradient: 'from-teal-500 to-cyan-600',
    icon: '📱',
    intro: [
      'Ghana lives on mobile. For many of your customers, a smartphone is not one of several screens — it is the only computer they own, and it handles their money, their messaging, and their business. When an app is the right move, it puts your service directly on that screen: a persistent icon, push notifications, offline access, and experiences a website alone cannot deliver.',
      'Rapid Entrepreneurs builds mobile apps from Accra with a clear-eyed view of the local market. Android dominates here, many devices are mid-range, and data is bought in bundles — so we build apps that are small to download, gentle on data, and smooth on modest hardware, using cross-platform technology that ships to both Android and iOS from one codebase without doubling your budget.',
      'Just as importantly, we will tell you honestly when you do not need an app. Some ideas are better served by a fast mobile website or a progressive web app that skips the app-store hurdle entirely. When an app is the right answer — a delivery service, a fintech product, a member app for your church or association, an internal tool for field staff — we take it from idea to the Play Store and App Store, and support it after launch.',
    ],
    benefitsHeading: 'Apps designed for Ghanaian users',
    benefitsIntro:
      'A great app respects the devices, data costs, and habits of the people who will actually use it.',
    benefits: [
      {
        icon: '🤖',
        title: 'Android-first, iOS included',
        description:
          'Cross-platform builds (React Native / Flutter) ship to both stores from one codebase — with Android, Ghana’s dominant platform, treated as first-class.',
      },
      {
        icon: '📶',
        title: 'Light on data and storage',
        description:
          'Small download sizes, cached content, and offline-tolerant features — built for bundle buyers and mid-range phones, not just flagships.',
      },
      {
        icon: '💰',
        title: 'Payments built in',
        description:
          'Mobile money and card payments integrated through trusted providers, so your app can collect payments the way Ghanaians prefer to pay.',
      },
      {
        icon: '🔔',
        title: 'Push notifications that engage',
        description:
          'Reach users directly on their home screen with updates, reminders, and offers — without paying per message like SMS.',
      },
      {
        icon: '🧱',
        title: 'A backend that scales',
        description:
          'Every serious app needs servers, databases, and admin tools behind it. We build the full stack, not just the screens.',
      },
      {
        icon: '🚀',
        title: 'Store launch handled',
        description:
          'We manage Play Store and App Store submission, review requirements, and release — and keep the app updated after launch.',
      },
    ],
    processIntro:
      'From idea to app store in structured stages, with working builds in your hands early.',
    process: [
      {
        step: '01',
        title: 'Strategy & scoping',
        description:
          'We pressure-test the idea, define the smallest version worth launching, and confirm an app beats a mobile site for your goal.',
      },
      {
        step: '02',
        title: 'Design & prototype',
        description:
          'You interact with clickable prototypes of the key screens before development begins.',
      },
      {
        step: '03',
        title: 'Build & beta test',
        description:
          'We develop in milestones, putting test builds on real devices — yours included — throughout.',
      },
      {
        step: '04',
        title: 'Launch & iterate',
        description:
          'We handle store submission, monitor crashes and feedback, and ship improvements after launch.',
      },
    ],
    faqs: [
      {
        question: 'How much does it cost to build a mobile app in Ghana?',
        answer:
          'App budgets vary more than any other project type — a simple content app and a payments-enabled marketplace are worlds apart. We scope your idea first, help you trim it to the smallest version worth launching, and give you a fixed quote for that scope before any work begins.',
      },
      {
        question: 'Should I build for Android, iOS, or both?',
        answer:
          'In Ghana, Android is where most of your users are, so we treat it as first-class. Because we build cross-platform, iOS comes from the same codebase at little extra cost — useful for diaspora users and iPhone-heavy segments. We will advise based on who your actual audience is.',
      },
      {
        question: 'Do I really need an app, or is a website enough?',
        answer:
          'Honest answer: many businesses do not need an app, and we will say so. If your users need push notifications, offline access, device features, or daily engagement, an app earns its keep. If they mainly need information and contact, a fast mobile-first website delivers more value for less money.',
      },
      {
        question: 'What happens after the app launches?',
        answer:
          'Apps are living products — operating systems update, stores change policies, and users report issues. We offer ongoing support arrangements covering updates, monitoring, and new features, so your app stays healthy instead of quietly breaking a year after launch.',
      },
    ],
    cardDescription:
      'Android and iOS apps built in Accra — light on data, integrated with mobile money, launched to both stores.',
  },
  {
    slug: 'digital-marketing',
    label: 'Digital Marketing',
    h1: 'Digital Marketing in Ghana',
    metaDescription:
      'Digital marketing in Ghana that reaches real customers — social media, Google Ads, SEO, and WhatsApp marketing from an Accra-based team that knows the market.',
    keywords: [
      'digital marketing Ghana',
      'digital marketing agency Accra',
      'social media marketing Ghana',
      'Google Ads Ghana',
      'SEO Ghana',
    ],
    serviceType: 'Digital Marketing',
    heroBadge: 'Digital Marketing',
    heroSubtitle:
      'Marketing that meets Ghanaians where they already are — social feeds, Google searches, and WhatsApp — and turns attention into enquiries and sales.',
    gradient: 'from-pink-500 to-rose-600',
    icon: '📈',
    intro: [
      'Your customers in Ghana are online every day — scrolling Facebook and Instagram, watching TikTok, searching Google for exactly what you sell, and doing business inside WhatsApp. Digital marketing is simply the discipline of showing up in those places deliberately, with a message that fits the moment, and a way to measure what came back. Done well, it is the most accountable cedi your business can spend on growth.',
      'Rapid Entrepreneurs runs digital marketing from Accra, for the Ghanaian market specifically. That matters: the platforms that convert here, the tone that lands, the buying journeys that run from an Instagram post into a WhatsApp conversation, and the price sensitivity of local audiences are all different from the playbooks written for Europe or America. We build strategies around how Ghanaians actually discover and buy.',
      'We work with SMEs building their first real online presence, brands that post regularly but see no sales from it, and organisations — schools filling admissions, churches growing congregations, event businesses filling rooms — that need reach beyond their existing circle. Every engagement starts with your goal, not with a package of posts, and every month you see plainly what was done and what it produced.',
    ],
    benefitsHeading: 'Marketing channels that work in Ghana',
    benefitsIntro:
      'We put your budget where Ghanaian attention actually is, and track what each channel returns.',
    benefits: [
      {
        icon: '📣',
        title: 'Social media that sells',
        description:
          'Facebook, Instagram, and TikTok content and advertising built to generate enquiries and orders — not just likes from people who will never buy.',
      },
      {
        icon: '🔍',
        title: 'Google Ads & SEO',
        description:
          'Capture people already searching for what you offer — paid ads for immediate visibility, search optimisation for traffic you stop paying for over time.',
      },
      {
        icon: '💬',
        title: 'WhatsApp as a sales channel',
        description:
          'Campaigns designed to land in conversations — because in Ghana, the sale usually closes in WhatsApp, not in a checkout form.',
      },
      {
        icon: '🎯',
        title: 'Targeting that fits your market',
        description:
          'Reach the neighbourhoods, age groups, and interests that match your customer — in Accra, across Ghana, or in the diaspora.',
      },
      {
        icon: '🎨',
        title: 'Content produced for you',
        description:
          'Graphics, short video, and copy created in-house, consistent with your brand — you do not need to become a content creator to compete.',
      },
      {
        icon: '📊',
        title: 'Reporting in plain language',
        description:
          'Monthly reports that say what was spent, what happened, and what to do next — numbers you can act on, not vanity dashboards.',
      },
    ],
    processIntro:
      'A measured approach: understand, launch, learn, and scale what works.',
    process: [
      {
        step: '01',
        title: 'Audit & strategy',
        description:
          'We review your current presence, your market, and your goals, then agree the channels and budget that fit.',
      },
      {
        step: '02',
        title: 'Setup & content',
        description:
          'We fix the foundations — profiles, pixels, Google Business — and produce the first wave of content and campaigns.',
      },
      {
        step: '03',
        title: 'Launch & optimise',
        description:
          'Campaigns go live, and we tune targeting, creative, and spend based on what the data shows.',
      },
      {
        step: '04',
        title: 'Report & scale',
        description:
          'You see results in plain language every month, and we double down on the channels that prove themselves.',
      },
    ],
    faqs: [
      {
        question: 'How much should a Ghanaian business spend on digital marketing?',
        answer:
          'Less than you fear, more than zero. Meaningful campaigns can start modestly; what matters is matching spend to a clear goal and measuring the return. We agree a budget with you up front — our fee and ad spend stated separately and transparently — and we never spend beyond what was agreed.',
      },
      {
        question: 'How long before I see results?',
        answer:
          'Paid social and Google Ads can generate enquiries within days of launching. SEO and organic social are slower-burning, typically building over months, but they compound — the traffic keeps coming without per-click costs. A good strategy usually blends both horizons.',
      },
      {
        question: 'Which platforms are best for reaching customers in Ghana?',
        answer:
          'It depends on who you sell to. Facebook and Instagram have broad reach across Ghanaian consumers, TikTok skews younger and rewards video, Google captures active buying intent, and WhatsApp is where conversations convert. We recommend a mix based on your actual audience, not fashion.',
      },
      {
        question: 'Do you also manage the content and design?',
        answer:
          'Yes. Strategy without execution is a slideshow. Our team produces the graphics, short-form video, ad creative, and copy, keeps your pages active, and responds to campaign comments where agreed — one accountable team from plan to post.',
      },
    ],
    cardDescription:
      'Social, Google, and WhatsApp marketing run from Accra — accountable campaigns that turn attention into sales.',
  },
  {
    slug: 'it-services',
    label: 'IT Services',
    h1: 'IT Company in Accra',
    metaDescription:
      'Accra-based IT company for Ghanaian businesses — websites, business software, cloud email, and ongoing IT support under one roof at Rapid Entrepreneurs.',
    keywords: [
      'IT company Accra',
      'IT companies in Accra',
      'IT services Ghana',
      'IT support Accra',
      'technology company Ghana',
    ],
    serviceType: 'IT Services',
    heroBadge: 'IT Services',
    heroSubtitle:
      'One Accra-based technology partner for your business — websites, software, cloud email, and honest IT guidance, without the jargon or the runaround.',
    gradient: 'from-yellow-500 to-orange-600',
    icon: '🖥️',
    intro: [
      'Most Ghanaian businesses do not need an IT department — they need one competent, reachable IT company that takes responsibility. Somewhere to call when the website is down, when email needs to move off a free Gmail address, when the business has outgrown its spreadsheets, or when a supplier is quoting suspicious figures for a simple system. That single point of accountability is what an IT partner is for.',
      'Rapid Entrepreneurs is an IT company based in Accra, serving businesses across Ghana. Under one roof we cover the digital essentials a modern business runs on: websites and web applications, custom business software, e-commerce, professional email on your own domain, domain and hosting management, and the ongoing support that keeps it all healthy. One team, one relationship, no finger-pointing between vendors.',
      'We work with SMEs formalising their operations, startups that need a technical partner rather than a one-off contractor, and established organisations — schools, churches, professional firms — modernising systems that have been patched for years. Because we build on modern cloud platforms rather than selling servers and licences, our advice is straightforward: we recommend what your business needs, explain it in plain language, and quote it as a fixed price.',
    ],
    benefitsHeading: 'What you get from one accountable IT partner',
    benefitsIntro:
      'Technology decisions are business decisions. We handle the technical side so you can focus on the business side.',
    benefits: [
      {
        icon: '🧰',
        title: 'Everything under one roof',
        description:
          'Websites, software, e-commerce, email, domains, and hosting from one team — no coordinating four vendors who each blame the others.',
      },
      {
        icon: '📧',
        title: 'Professional email & domains',
        description:
          'yourname@yourbusiness.com instead of a free Gmail address — set up properly, with your domain and DNS managed and renewed on time.',
      },
      {
        icon: '☁️',
        title: 'Cloud-first, not server rooms',
        description:
          'Modern cloud platforms give you reliability and backups without buying hardware that hums in a corner and fails in a storm.',
      },
      {
        icon: '🛟',
        title: 'Support you can actually reach',
        description:
          'A real team in Accra that answers — by phone or WhatsApp — when something breaks, with support arrangements for businesses that need guaranteed response.',
      },
      {
        icon: '🧭',
        title: 'Honest, plain-language advice',
        description:
          'We explain options and trade-offs in plain English, recommend only what you need, and put every cost in a fixed quote before work starts.',
      },
      {
        icon: '🔐',
        title: 'Security and continuity',
        description:
          'Proper backups, access control, and account hygiene — so a lost laptop, a departed employee, or a hacked password does not become a crisis.',
      },
    ],
    processIntro:
      'Whether it is one project or an ongoing partnership, the engagement is structured and transparent.',
    process: [
      {
        step: '01',
        title: 'Assess',
        description:
          'We review your current setup — website, email, systems, accounts — and identify what is solid, what is fragile, and what is missing.',
      },
      {
        step: '02',
        title: 'Recommend',
        description:
          'You get a prioritised, plain-language plan with fixed quotes — quick wins first, bigger projects staged sensibly.',
      },
      {
        step: '03',
        title: 'Implement',
        description:
          'We deliver the agreed work in stages you can verify, with minimal disruption to your daily operations.',
      },
      {
        step: '04',
        title: 'Support',
        description:
          'We keep everything renewed, backed up, and monitored — and remain one call away when you need us.',
      },
    ],
    faqs: [
      {
        question: 'What services does your IT company provide?',
        answer:
          'Websites and web applications, custom business software, e-commerce stores, mobile apps, digital marketing, professional email on your own domain, and domain, hosting, and DNS management — plus ongoing support for all of it. If it is digital and your business depends on it, it is in scope.',
      },
      {
        question: 'Do you offer ongoing IT support for businesses?',
        answer:
          'Yes. Beyond one-off projects, we offer ongoing arrangements covering updates, backups, renewals, monitoring, and priority response when something breaks. Many clients start with a single project and move to a support arrangement once they see how we work.',
      },
      {
        question: 'We are a small business — are we too small for you?',
        answer:
          'No. Ghanaian SMEs are the heart of our client base, and Rapid Entrepreneurs exists precisely to make serious technology accessible to them. Every engagement is scoped to your size and budget, with a fixed quote agreed before any work begins.',
      },
      {
        question: 'Can you take over from a previous developer or IT provider?',
        answer:
          'Yes, and it is common. We audit what exists, recover access to domains, hosting, and accounts where possible, document everything properly, and stabilise before improving. You end up with your digital assets in your own name — which is where they should have been all along.',
      },
    ],
    cardDescription:
      'One accountable Accra-based IT partner — web, software, email, and support for Ghanaian businesses.',
  },
]

export function getServicePage(slug: string): ServicePageData | undefined {
  return servicePages.find((service) => service.slug === slug)
}
