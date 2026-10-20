import React, { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, Building2, CalendarHeart, Fish, Flag, MapPin, Menu, Phone, Plane, Snowflake, Sprout, Utensils, Waves, X } from "lucide-react";
import { ConceptWidget, StudioCredit } from "./concept.jsx";

// ---------------------------------------------------------------- Content (from thewatervalleycompany.com and its sister sites)
const COMPANY = "The Water Valley Company";
const ABBR = "twvc";
const END_DATE = "2026-11-24T23:59:59-07:00";
const PHONE = "(970) 686-5828";
const PHONE_HREF = "tel:+19706865828";
const ADDRESS = "1625 Pelican Lakes Point, Suite 201, Windsor, CO 80550";
const ORIGINAL = "https://thewatervalleycompany.com/";

const RE = "https://thewatervalleyrealestate.com/wp-content";
const WED = "https://twvcweddings.com/wp-content/uploads";
const LOGO = `${RE}/themes/watervalley/assets/images/watervalley-logo.svg`;
const LOGO_REVERSE = `${RE}/themes/watervalley/assets/images/watervalley-logo-reverse.svg`;
const PHOTO = {
  hero: `${RE}/uploads/2023/07/homepage-heroimage2.jpeg`,
  residential: `${RE}/uploads/2023/06/residential-image.jpg`,
  commercial: `${RE}/uploads/2023/08/commercial-image.jpeg`,
  aviation: `${RE}/uploads/2023/08/aviation-header.jpg`,
  island: `${WED}/2025/02/twvc-weddings-1920-_0006_AKP_6952.jpg`,
  wedding: `${WED}/2025/02/twvc-weddings-1920-_0014_AKP_6858.jpg`,
};
const BADGES = [
  { src: `${WED}/2025/01/VendorBadge_CouplesLoveUs_Knot.png`, alt: "The Knot: Couples Love Us" },
  { src: `${WED}/2025/01/00-BOS-WINNER-2022-1024x1024.webp`, alt: "2022 award winner badge shown on TWVC Weddings" },
];

const WORLDS = [
  {
    id: "lake",
    name: "Lake",
    icon: Waves,
    place: "Pelican Lakes · Windsor",
    headline: "Five lakes, 27 holes, and a golf cart ride to dinner.",
    body: "Resort-style lake living with shoreline, championship golf, beaches and dining, all within the same neighborhood.",
    items: [
      ["27 Holes of Championship Golf", "Semi-private, with a pro shop, two restaurants and miles of shoreline."],
      ["The Grillhouse", "Award-winning American cuisine and steaks with lake and mountain views."],
      ["The Sand Bar", "A golf-themed sports bar with simulators and a casual menu."],
      ["Marina Adventures", "Guided bowfishing and fly fishing. Wakeboard and surf lessons are coming soon."],
      ["W Club", "Cardio and weights, aquatics, steam rooms, group classes and personal training."],
      ["The Water Valley Vaults", "Climate-controlled lounge-style storage for cars, boats and RVs."],
    ],
  },
  {
    id: "farm",
    name: "Farm",
    icon: Sprout,
    place: "RainDance · Windsor",
    headline: "Cherry trees, apple orchards and playful parks.",
    body: "A top-selling master-planned community rooted in working farmland, with a hilltop golf resort looking out at the Rockies.",
    items: [
      ["RainDance National Resort & Golf", "18 signature holes across thousand-year-old arroyos toward the Poudre River. Open to the public since July 2022."],
      ["RainDance River Resort", "Northern Colorado's largest community water park: lazy river, slide, lap lanes and splash pad."],
      ["Ted's Sweetwater Grill", "Farm-to-table breakfast, brunch, lunch and dinner with pond-side seating."],
      ["Ted's Trout Pond", "A stocked pond of golden and rainbow trout for first-timers and seasoned anglers."],
      ["One-acre custom home sites", "Plus golf course neighborhoods for every stage of life."],
    ],
  },
  {
    id: "ice",
    name: "Ice",
    icon: Snowflake,
    place: "Indoor ice · Northern Colorado",
    headline: "Cold air, fast skates, warm memories.",
    body: "The indoor ice side of Water Valley: a place for skaters, players and families to spend the long Colorado winter.",
    items: [
      ["The indoor ice experience", "Ask the main office about ice time, skating and events."],
    ],
  },
];

const HOMES = [
  ["Pelican Shores", "Lakefront luxury homes overlooking the golf course."],
  ["Pelican Farms", "Small-town-style contemporary homes."],
  ["Pelican Bluff", "Affordable luxury apartments with lake views."],
  ["RainDance", "One-acre custom home sites and golf course neighborhoods."],
];

const QUICK = [
  { icon: Flag, label: "Book a tee time", note: "Pelican Lakes or RainDance", href: "#worlds" },
  { icon: Utensils, label: "Reserve a table", note: "Grillhouse, Sand Bar, Ted's", href: "#worlds" },
  { icon: Building2, label: "Find a home", note: "Lakefront to one-acre lots", href: "#live" },
  { icon: CalendarHeart, label: "Plan a wedding", note: "The Island and more", href: "#events" },
];

const VALUES = [
  ["Faith", "gives us the confidence to pursue ambitious goals."],
  ["Freedom", "makes room to grow."],
  ["Hard Work", "is how success gets built."],
  ["Inspiration", "drives the next adventure."],
  ["Conviction", "lets us take the right risks."],
  ["Relentlessness", "pushes us from good to great."],
];

// ---------------------------------------------------------------- Pieces
function Logo({ reverse = false }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <span className={`wordmark${reverse ? " is-reverse" : ""}`}>Water <em>Valley</em></span>;
  return <img className="logo" src={reverse ? LOGO_REVERSE : LOGO} alt={COMPANY} width="168" height="48" onError={() => setFailed(true)} />;
}

function Contours({ className = "" }) {
  // Lake-depth contour lines: the site's recurring motif.
  return (
    <svg className={`contours ${className}`} viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <path key={i} d={`M${-40 + i * 6} ${200 + i * 4} C ${120 - i * 8} ${40 + i * 22}, ${300 + i * 4} ${30 + i * 20}, ${420 - i * 6} ${150 + i * 10} S ${640 - i * 12} ${330 - i * 14}, ${560 - i * 20} ${380 - i * 4}`} />
      ))}
    </svg>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [["Our Worlds", "#worlds"], ["Live Here", "#live"], ["Weddings & Events", "#events"], ["Our Story", "#story"], ["Contact", "#contact"]];
  return (
    <header className={`site-header${scrolled ? " is-solid" : ""}`}>
      <div className="wrap header-row">
        <a href="#top" className="brand" aria-label={`${COMPANY} home`}><Logo reverse={!scrolled} /></a>
        <nav className={`nav${open ? " is-open" : ""}`} aria-label="Main">
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="nav-call" href={PHONE_HREF}><Phone size={16} /> {PHONE}</a>
        </nav>
        <button className="menu-btn" type="button" onClick={() => setOpen((v) => !v)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}

function Hero({ world, setWorld }) {
  const active = WORLDS.find((w) => w.id === world);
  return (
    <section className="hero" id="top">
      <div className="hero-media" style={{ backgroundImage: `url(${PHOTO.hero})` }} role="img" aria-label="A lake at Water Valley in Windsor, Colorado" />
      <div className="hero-shade" />
      <Contours className="hero-contours" />
      <div className="wrap hero-inner">
        <p className="eyebrow light">Windsor, Colorado · Nearly four decades</p>
        <h1>Places Northern Colorado <em>remembers.</em></h1>
        <p className="hero-lede">Golf, lakes, farms, ice, dining and neighborhoods from one family company. Pick a world and start your day.</p>
        <div className="world-tabs" role="tablist" aria-label="Water Valley worlds">
          {WORLDS.map(({ id, name, icon: Icon }) => (
            <button key={id} role="tab" type="button" aria-selected={world === id} className={world === id ? "is-active" : ""} onClick={() => setWorld(id)}>
              <Icon size={18} /> {name}
            </button>
          ))}
        </div>
        <div className="hero-card" role="tabpanel">
          <span className="hero-card-place"><MapPin size={14} /> {active.place}</span>
          <strong>{active.headline}</strong>
          <a href="#worlds">Explore the {active.name.toLowerCase()} <ArrowRight size={16} /></a>
        </div>
      </div>
    </section>
  );
}

function QuickBar() {
  return (
    <section className="quick" aria-label="Plan your visit">
      <div className="wrap quick-grid">
        {QUICK.map(({ icon: Icon, label, note, href }) => (
          <a key={label} href={href} className="quick-card">
            <Icon size={22} />
            <span><strong>{label}</strong><small>{note}</small></span>
            <ArrowUpRight size={18} className="quick-arrow" />
          </a>
        ))}
      </div>
    </section>
  );
}

function Worlds({ world, setWorld }) {
  return (
    <section className="worlds" id="worlds">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Our worlds</p>
          <h2>Three landscapes. <em>One way of doing things.</em></h2>
          <p>Every Water Valley place is built to refresh your spirit and make a memory worth coming back for.</p>
        </div>
        <div className="world-switch" role="tablist" aria-label="Choose a world">
          {WORLDS.map(({ id, name, icon: Icon, place }) => (
            <button key={id} type="button" role="tab" aria-selected={world === id} className={world === id ? "is-active" : ""} onClick={() => setWorld(id)}>
              <Icon size={20} /><span><strong>{name}</strong><small>{place}</small></span>
            </button>
          ))}
        </div>
        {WORLDS.filter((w) => w.id === world).map((w) => (
          <div className={`world-panel world-${w.id}`} key={w.id} role="tabpanel">
            <div className="world-intro">
              <Contours />
              <span className="world-num">{String(WORLDS.indexOf(w) + 1).padStart(2, "0")}</span>
              <h3>{w.headline}</h3>
              <p>{w.body}</p>
            </div>
            <ul className="world-list">
              {w.items.map(([title, text]) => (
                <li key={title}><strong>{title}</strong><span>{text}</span></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Live() {
  return (
    <section className="live" id="live">
      <div className="wrap live-grid">
        <div className="live-copy">
          <p className="eyebrow">Live, work and land here</p>
          <h2>Neighborhoods first. <em>Then everything around them.</em></h2>
          <p>Water Valley Real Estate Services handles residential, commercial and aviation property across our communities.</p>
          <ul className="homes">
            {HOMES.map(([name, text]) => <li key={name}><strong>{name}</strong><span>{text}</span></li>)}
          </ul>
          <a className="btn" href="https://thewatervalleyrealestate.com/" target="_blank" rel="noopener noreferrer">Talk to real estate <ArrowUpRight size={18} /></a>
        </div>
        <div className="live-tiles">
          <figure className="tile tile-tall"><img src={PHOTO.residential} alt="A Water Valley residential neighborhood" loading="lazy" /><figcaption>Residential</figcaption></figure>
          <figure className="tile"><img src={PHOTO.commercial} alt="Commercial property at Water Valley" loading="lazy" /><figcaption>Commercial</figcaption></figure>
          <figure className="tile"><img src={PHOTO.aviation} alt="Hangars at Northern Colorado Regional Airport" loading="lazy" /><figcaption><Plane size={14} /> Hangars at Discovery Air</figcaption></figure>
        </div>
      </div>
    </section>
  );
}

function Events() {
  return (
    <section className="events" id="events">
      <div className="events-photo" style={{ backgroundImage: `url(${PHOTO.island})` }} role="img" aria-label="A wedding ceremony on The Island at Pelican Lakes" />
      <div className="wrap events-inner">
        <div className="events-card">
          <p className="eyebrow">Weddings &amp; events</p>
          <h2>Say yes on a <em>four-acre island.</em></h2>
          <p>TWVC Weddings plans everything from small gatherings to large celebrations across our venues, with welcome parties and rehearsal dinners too.</p>
          <ul className="venues">
            <li><strong>The Island</strong><span>Waterfront ceremonies and receptions at Pelican Lakes</span></li>
            <li><strong>Garden at Rock Bridge</strong><span>An outdoor garden setting</span></li>
            <li><strong>Banquet Room</strong><span>An elegant indoor space that pairs with the Island</span></li>
          </ul>
          <div className="badges">
            {BADGES.map((b) => <img key={b.src} src={b.src} alt={b.alt} loading="lazy" />)}
          </div>
          <a className="btn" href="https://twvcweddings.com/contact/" target="_blank" rel="noopener noreferrer">Plan your event <ArrowUpRight size={18} /></a>
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="story" id="story">
      <div className="wrap story-grid">
        <div>
          <p className="eyebrow">Our story</p>
          <h2>Built for the next <em>generation.</em></h2>
          <p>For nearly four decades, The Water Valley Company has been turning Windsor farmland and shoreline into places families come back to. We care for this land across generations and build with the next one in mind.</p>
          <div className="stats">
            <div><strong>5</strong><span>lakes</span></div>
            <div><strong>45</strong><span>holes of golf</span></div>
            <div><strong>3</strong><span>worlds to explore</span></div>
          </div>
        </div>
        <ol className="values">
          {VALUES.map(([name, text], i) => (
            <li key={name}><span className="value-num">{String(i + 1).padStart(2, "0")}</span><p><strong>{name}</strong> {text}</p></li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  async function submit(event) {
    event.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(event.currentTarget));
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const json = await res.json().catch(() => ({}));
      setStatus(res.ok ? "sent" : "demo");
      setMessage(json.message || "");
    } catch {
      setStatus("demo");
    }
  }
  const embed = `https://maps.google.com/maps?q=${encodeURIComponent(ADDRESS)}&z=13&output=embed`;
  return (
    <section className="contact" id="contact">
      <div className="wrap contact-grid">
        <div>
          <p className="eyebrow light">Contact</p>
          <h2>Where do you want <em>to start?</em></h2>
          <dl className="directory">
            <div><dt>Main office</dt><dd><a href={PHONE_HREF}>{PHONE}</a></dd></div>
            <div><dt>Real estate</dt><dd><a href="tel:+19702171948">(970) 217-1948</a></dd></div>
            <div><dt>Weddings &amp; events</dt><dd><a href="tel:+19704601701">(970) 460-1701</a></dd></div>
            <div><dt>Pelican Lakes Golf</dt><dd><a href="tel:+19706740930">(970) 674-0930</a></dd></div>
            <div><dt>Visit</dt><dd>{ADDRESS}</dd></div>
          </dl>
          <div className="map"><iframe title={`Map to ${COMPANY}`} src={embed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <h3>Send us a note</h3>
          <label>Name<input name="name" required autoComplete="name" /></label>
          <label>Email<input name="email" type="email" required autoComplete="email" /></label>
          <label>Phone<input name="phone" type="tel" autoComplete="tel" /></label>
          <label>I'm interested in
            <select name="service" defaultValue="Golf">
              <option>Golf</option><option>Dining</option><option>Real estate</option><option>Weddings &amp; events</option><option>Fitness &amp; W Club</option><option>Something else</option>
            </select>
          </label>
          <label>Message<textarea name="message" rows={4} /></label>
          {status === "sent" && <p className="form-note">Thanks, we'll be in touch soon.</p>}
          {status === "demo" && <p className="form-note">{message || "This is a concept preview, so the form isn't connected yet. Please call the main office."}</p>}
          <button className="btn btn-solid" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Send message"}</button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-row">
        <div className="footer-brand"><Logo reverse /><p>{ADDRESS}</p><a href={PHONE_HREF}>{PHONE}</a></div>
        <div className="footer-links">
          <a href="#worlds">Our Worlds</a><a href="#live">Live Here</a><a href="#events">Weddings &amp; Events</a><a href="#story">Our Story</a>
          <a href="https://www.facebook.com/TheWaterValleyCompany/" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.youtube.com/@thewatervalleycompany" target="_blank" rel="noopener noreferrer">YouTube</a>
        </div>
      </div>
      <div className="wrap footer-base">
        <span>© {new Date().getFullYear()} {COMPANY}. Independent concept · not for official use. Current site: <a href={ORIGINAL}>thewatervalleycompany.com</a></span>
        <StudioCredit />
      </div>
    </footer>
  );
}

export default function App() {
  const [world, setWorld] = useState("lake");
  return (
    <>
      <Header />
      <main>
        <Hero world={world} setWorld={setWorld} />
        <QuickBar />
        <Worlds world={world} setWorld={setWorld} />
        <Live />
        <Events />
        <Story />
        <Contact />
      </main>
      <Footer />
      <ConceptWidget company={COMPANY} abbr={ABBR} endDate={END_DATE} />
    </>
  );
}
