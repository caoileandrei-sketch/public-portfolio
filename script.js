/* ==========================================================================
   EDIT ME — all portfolio content lives in this config object.
   Change the text below; you do not need to touch index.html or style.css
   to update your content.
   ========================================================================== */
const CONTENT = {
  experience: [
    {
      hop: 1,
      company: "meridian-wireless.net",
      role: "Senior Wireless Network Engineer",
      dates: "2023 — Present",
      rtt: "3.1y",
      description:
        "Lead RF design and deployment for high-density venues — stadiums, convention centers, and campuses. Own the WLAN architecture from spectrum planning through post-deployment validation.",
      tags: ["Wi-Fi 6E", "Ekahau", "Cisco Catalyst 9800", "Aruba", "Spectrum analysis"],
    },
    {
      hop: 2,
      company: "backbone-carrier.net",
      role: "Service Provider Network Engineer",
      dates: "2020 — 2023",
      rtt: "2.9y",
      description:
        "Built and maintained MPLS/BGP core for a regional ISP serving enterprise customers. Migrated legacy OSPF core to a segment-routing design, reducing convergence time significantly.",
      tags: ["BGP", "MPLS", "Segment Routing", "IS-IS", "Juniper MX"],
    },
    {
      hop: 3,
      company: "campus-networks.net",
      role: "Network Engineer II",
      dates: "2018 — 2020",
      rtt: "1.8y",
      description:
        "Managed wired and wireless infrastructure across a multi-building enterprise campus. Automated switch provisioning with Ansible, cutting manual config time significantly.",
      tags: ["Ansible", "VLAN/STP", "QoS", "Site surveys"],
    },
  ],

  skills: [
    {
      title: "Wireless / RF",
      items: [
        "Wi-Fi 6 / 6E design",
        "RF spectrum analysis",
        "Predictive & AP-on-a-stick surveys",
        "Antenna theory & placement",
        "Controller-based architectures",
        "Roaming & channel planning",
      ],
    },
    {
      title: "Service Provider",
      items: [
        "BGP & route policy",
        "MPLS / segment routing",
        "OSPF / IS-IS",
        "QoS & traffic engineering",
        "Carrier Ethernet",
        "SD-WAN",
      ],
    },
    {
      title: "Tools & Platforms",
      items: [
        "Wireshark",
        "Ekahau",
        "Ansible / Python",
        "Grafana & Zabbix",
        "iPerf / NetFlow",
        "Cisco, Juniper, Aruba",
      ],
    },
  ],

  projects: [
    {
      tag: "Wireless",
      title: "Stadium Wi-Fi for 40,000 concurrent users",
      description:
        "Redesigned RF and capacity plan for a stadium where fans couldn't get online during events. Rebuilt the AP layout around sectorized antennas and per-section VLANs.",
      stat: "Peak failure rate: <b>18% → 1.2%</b>",
      tags: ["Wi-Fi 6", "High density", "Ekahau"],
    },
    {
      tag: "Service Provider",
      title: "Segment routing migration",
      description:
        "Moved a regional carrier's OSPF/LDP core to segment routing with minimal customer-facing downtime, using a phased dual-stack rollout across 30+ PE routers.",
      stat: "Convergence time: <b>4.2s → 400ms</b>",
      tags: ["BGP", "SR-MPLS", "Juniper"],
    },
    {
      tag: "Automation",
      title: "Zero-touch branch provisioning",
      description:
        "Built an Ansible + Python pipeline that provisions new branch routers and switches from a single YAML file, replacing a manual CLI checklist.",
      stat: "Rollout time per site: <b>4hrs → 25min</b>",
      tags: ["Ansible", "Python", "SD-WAN"],
    },
  ],

  certifications: [
    { name: "CCNP Enterprise", issuer: "Cisco" },
    { name: "CWDP", issuer: "CWNP" },
    { name: "CWAP", issuer: "CWNP" },
    { name: "JNCIA-Junos", issuer: "Juniper" },
    { name: "CCNA", issuer: "Cisco" },
  ],
};

/* ==========================================================================
   Rendering
   ========================================================================== */
function renderExperience() {
  const list = document.getElementById("experience-list");
  list.innerHTML = CONTENT.experience
    .map(
      (job) => `
    <li class="trace-item reveal">
      <div class="trace-hop">
        <span>${String(job.hop).padStart(2, "0")}</span>
        <span class="trace-node"></span>
        <span class="trace-hop-line"></span>
      </div>
      <div>
        <div class="trace-body-top">
          <div>
            <span class="trace-role">${job.role}</span>
            <span class="mono" style="color:var(--text-tertiary);">&nbsp;@&nbsp;</span>
            <span class="trace-company">${job.company}</span>
          </div>
          <div class="trace-meta">
            <span>${job.dates}</span>
            <span class="trace-rtt">${job.rtt}</span>
          </div>
        </div>
        <p class="trace-desc">${job.description}</p>
        <div class="trace-tags">
          ${job.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
        </div>
      </div>
    </li>`
    )
    .join("");
}

function renderSkills() {
  const grid = document.getElementById("skills-grid");
  grid.innerHTML = CONTENT.skills
    .map(
      (group, i) => `
    <div class="skill-card reveal">
      <h3><span class="idx">0${i + 1}</span>${group.title}</h3>
      <div class="chip-list">
        ${group.items.map((s) => `<span class="chip">${s}</span>`).join("")}
      </div>
    </div>`
    )
    .join("");
}

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  grid.innerHTML = CONTENT.projects
    .map(
      (p) => `
    <div class="project-card reveal">
      <div class="project-tag">${p.tag}</div>
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <div class="project-stat">${p.stat}</div>
      <div class="project-tags">
        ${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
      </div>
    </div>`
    )
    .join("");
}

function renderCertifications() {
  const row = document.getElementById("cert-row");
  row.innerHTML = CONTENT.certifications
    .map(
      (c) => `
    <div class="cert-badge reveal">
      <svg class="cert-badge-icon" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="9" r="6" stroke="currentColor" stroke-width="1.6"/>
        <path d="M8.5 14L7 21l5-2.5L17 21l-1.5-7" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
      </svg>
      <div>
        <div class="cert-name">${c.name}</div>
        <div class="cert-issuer">${c.issuer}</div>
      </div>
    </div>`
    )
    .join("");
}

/* ==========================================================================
   Scroll reveal
   ========================================================================== */
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  els.forEach((el) => io.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  renderExperience();
  renderSkills();
  renderProjects();
  renderCertifications();
  initReveal();
});
