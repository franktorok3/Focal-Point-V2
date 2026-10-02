export type Offering = {
  slug: string
  number: string
  name: string
  eyebrow: string
  summary: string
  bestFor: string
  duration: string
  deliverables: string[]
}

export const offerings: Offering[] = [
  {
    slug: 'systems-clarity-audit',
    number: '01',
    name: 'AI & Growth Systems Audit',
    eyebrow: 'Diagnose',
    summary:
      'Find the highest-value AI opportunity—and the experience, data, measurement, and operating conditions required to make it real.',
    bestFor:
      'Leaders with no shortage of AI ideas but no shared view of which opportunity matters, what it depends on, or how success will be measured.',
    duration: 'Typically 2–3 weeks',
    deliverables: [
      'Customer journey, system, and handoff map',
      'AI opportunity and readiness assessment',
      'Data, measurement, risk, and dependency register',
      'Prioritized 90-day AI and growth roadmap',
      'Executive readout and implementation options',
    ],
  },
  {
    slug: 'operating-system-build',
    number: '02',
    name: 'AI-Powered Growth System Build',
    eyebrow: 'Implement',
    summary:
      'Build the connected experience, campaign engine, data, dashboards, workflows, and agents required for the priority outcome.',
    bestFor:
      'Organizations ready to move from AI strategy or isolated pilots to a working capability customers and teams can actually use.',
    duration: 'Typically 6–12 weeks',
    deliverables: [
      'Target-state experience and systems architecture',
      'Web, campaign, CRM, workflow, and agent implementation',
      'Exception handling and approval paths',
      'Decision-ready reporting',
      'Documentation, training, and launch support',
    ],
  },
  {
    slug: 'fractional-transformation-operations',
    number: '03',
    name: 'Fractional AI & Transformation Office',
    eyebrow: 'Operate',
    summary:
      'Embedded senior leadership to turn scattered AI, growth, data, and systems initiatives into one accountable transformation portfolio.',
    bestFor:
      'Leadership teams that need sustained AI and transformation capacity without adding a full-time executive or another layer of agency management.',
    duration: 'Ongoing, usually 3+ months',
    deliverables: [
      'Transformation portfolio and operating cadence',
      'AI, experience, campaign, and automation opportunity pipeline',
      'Vendor and implementation oversight',
      'Governance, approvals, and risk controls',
      'Monthly decision and progress readout',
    ],
  },
]

export type CaseStudy = {
  slug: string
  title: string
  client: string
  label: string
  summary: string
  image: string
  imageAlt: string
  disciplines: string[]
  situation: string
  reality: string
  focalPoint: string
  system: string[]
  evidence: string[]
  next: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'auditable-operational-financial-lineage',
    title: 'Making operational and financial data traceable',
    client: 'Multi-program organization',
    label: 'Representative engagement · Client identifiers withheld',
    summary:
      'A governed lineage model connected activity, invoice detail, accounting entries, and reporting without pretending imperfect source data was clean.',
    image: '/images/case-study-auditable-lineage.png',
    imageAlt:
      'Editorial illustration of scattered source records converging into a continuous auditable line and ledger.',
    disciplines: ['Data architecture', 'Finance systems', 'Reporting'],
    situation:
      'Program, customer, and finance teams were looking at different grains of the same activity. Reports could total correctly while still failing to explain which operational record produced a specific accounting line.',
    reality:
      'The problem was not a missing dashboard. Identity and transaction lineage broke between operational detail, household-level records, journal lines, and reporting dimensions.',
    focalPoint:
      'Define the smallest durable transaction identifier and preserve it through every transformation instead of trying to reconstruct attribution at the reporting layer.',
    system: [
      'Mapped the source record, transaction, journal line, and reporting grains.',
      'Defined explicit identifiers, dimensions, and exception states.',
      'Separated confirmed lineage from inference and unknown attribution.',
      'Designed reconciliation views that exposed gaps instead of hiding them.',
    ],
    evidence: [
      'A traceable data contract from operational record to accounting output.',
      'A documented exception path for records that could not be attributed safely.',
      'A reporting design grounded in source evidence rather than dashboard assumptions.',
    ],
    next:
      'With lineage defined, the organization could automate reconciliation and improve reporting without compounding ambiguity.',
  },
  {
    slug: 'governed-ai-operations-fabric',
    title: 'Turning AI experiments into governed operations',
    client: 'Focal Point Operations Lab',
    label: 'Internal reference architecture',
    summary:
      'A durable operations fabric gave AI-assisted workflows memory, approval gates, recovery paths, and proof of downstream action.',
    image: '/images/case-study-governed-ai-operations.png',
    imageAlt:
      'Editorial workflow illustration with approval gates, durable storage, recovery loop, and verified final action.',
    disciplines: ['AI operations', 'Workflow design', 'Governance'],
    situation:
      'Individual automations could trigger actions, but they did not provide a reliable operating layer for context, approvals, failures, restoration, and audit.',
    reality:
      'A healthy service or successful model response did not prove that the intended workflow completed. The missing capability was durable operational state and end-to-end verification.',
    focalPoint:
      'Treat AI as one bounded participant in an operating system—never as the system of record and never as proof that downstream work happened.',
    system: [
      'Created durable records for status, context, approvals, and results.',
      'Separated deterministic diagnostics from model-assisted decisions.',
      'Added explicit human approval before consequential actions.',
      'Designed restore checks and post-action verification into the workflow.',
    ],
    evidence: [
      'A working reference architecture with durable state and auditable transitions.',
      'Clear boundaries among simulated, preview, approved, and completed states.',
      'A repeatable pattern for adding AI without surrendering operational control.',
    ],
    next:
      'The architecture can now support additional assistants and channels while preserving one approval and audit model.',
  },
  {
    slug: 'structured-intake-accountable-delivery',
    title: 'Turning scattered requests into accountable delivery',
    client: 'Service organization',
    label: 'Representative engagement · Client identifiers withheld',
    summary:
      'A structured intake and routing model replaced fragmented requests with a visible path from need to owner, decision, and completion.',
    image: '/images/case-study-structured-intake.png',
    imageAlt:
      'Editorial illustration of scattered notes moving through a sorting frame into three orderly accountable workstreams.',
    disciplines: ['Service design', 'Intake systems', 'Automation'],
    situation:
      'Requests arrived through conversations, inboxes, forms, and informal follow-ups. Teams spent energy reconstructing context before they could decide what to do.',
    reality:
      'The organization did not need another task list. It needed a shared intake contract: the information required, the decision path, the owner, and the state of the work.',
    focalPoint:
      'Standardize the decision and handoff before automating the movement of the request.',
    system: [
      'Defined a request schema with clear required context.',
      'Separated intake, approval, execution, and completion states.',
      'Routed work using explicit ownership and exception rules.',
      'Made status visible without creating a parallel tracker.',
    ],
    evidence: [
      'One durable request record from intake through completion.',
      'A visible decision trail and clear next action for each request.',
      'A reusable pattern for adding automation only after the process was stable.',
    ],
    next:
      'The same structure can support portfolio reporting and AI-assisted triage without losing human accountability.',
  },
]

export type InsightSection = { heading: string; paragraphs: string[]; bullets?: string[] }

export type Insight = {
  slug: string
  title: string
  description: string
  image: string
  imageAlt: string
  pillar: string
  date: string
  publishedAt: string
  readTime: string
  thesis: string
  sections: InsightSection[]
}

export const insights: Insight[] = [
  {
    slug: 'workflow-is-not-a-system-until-it-remembers',
    title: 'Automation fires. Systems remember.',
    description:
      'The difference between a workflow that runs and an operating system that knows what happened next.',
    image: '/images/insight-automation-remembers.png',
    imageAlt:
      'A signal moving through durable checkpoints and returning through a recovery loop.',
    pillar: 'Systems that scale',
    date: 'September 30, 2026',
    publishedAt: '2026-09-30T12:00:00-04:00',
    readTime: '6 min read',
    thesis:
      'A trigger can move work. Only memory makes it accountable. The system must know what happened, what comes next, and how to recover when reality interrupts the demo.',
    sections: [
      {
        heading: 'The demo hides the hard part',
        paragraphs: [
          'Most workflow demonstrations begin with clean input and end with a successful output. Real operations begin earlier and continue longer. Inputs arrive incomplete. Owners change. APIs time out. Someone approves a decision and later needs to know exactly what they approved.',
          'If the workflow cannot retain that history, it has no durable state. The team is forced to reconstruct truth from inboxes, logs, and human memory.',
        ],
      },
      {
        heading: 'What the system needs to remember',
        paragraphs: [
          'Memory is not a transcript of every event. It is the minimum operational record required to make the next decision safely.',
        ],
        bullets: [
          'The identity of the request, customer, transaction, or case.',
          'Its current state and the event that produced that state.',
          'The accountable owner and the next expected action.',
          'Approvals, exceptions, and the evidence behind consequential decisions.',
          'The downstream result—not merely confirmation that a step was attempted.',
        ],
      },
      {
        heading: 'Design recovery before scale',
        paragraphs: [
          'A recoverable workflow knows where to resume, which actions are safe to repeat, and which require review. That is what makes automation dependable enough to scale.',
          'Before adding another trigger, ask a harder question: if this fails at 2:00 a.m., what durable record will tell the morning team what happened and what to do next?',
        ],
      },
    ],
  },
  {
    slug: 'human-in-the-loop-is-an-operating-design',
    title: 'A human in the loop is not a control system',
    description:
      '“A person reviews it” is not governance. The decision, evidence, authority, deadline, and fallback all need a design.',
    image: '/images/insight-human-control-system.png',
    imageAlt:
      'An automated flow meeting a decision gate with approval, revision, rejection, and verification paths.',
    pillar: 'Applied AI with controls',
    date: 'September 30, 2026',
    publishedAt: '2026-09-30T12:00:00-04:00',
    readTime: '5 min read',
    thesis:
      'Adding a reviewer to an AI workflow does not create governance. Without a designed decision boundary, it creates an invisible queue and calls it control.',
    sections: [
      {
        heading: 'Review is not the same as accountability',
        paragraphs: [
          'A vague review step leaves five questions unanswered: who decides, what evidence they see, how long they have, what the system records, and what happens if they do nothing.',
          'Without those answers, the human is not governing the workflow. They are absorbing its uncertainty.',
        ],
      },
      {
        heading: 'Put approval at the decision boundary',
        paragraphs: [
          'The right approval point is immediately before an action becomes consequential or difficult to reverse. Low-risk classification can proceed automatically. Publishing, sending, changing access, committing funds, or updating a system of record should stop at a clear boundary.',
        ],
        bullets: [
          'Name the accountable role, not just a person who happens to be available.',
          'Show the source, proposed action, uncertainty, and consequence together.',
          'Record approve, reject, revise, expiry, and escalation as distinct states.',
          'Verify the downstream result after approval; approval is permission, not completion.',
        ],
      },
      {
        heading: 'The goal is bounded autonomy',
        paragraphs: [
          'Good human-in-the-loop design does not insert a person into every step. It expands safe autonomy inside explicit boundaries and preserves human judgment where consequence, ambiguity, or external commitment demands it.',
        ],
      },
    ],
  },
  {
    slug: 'one-source-of-truth-starts-with-identity',
    title: 'Your dashboard is not a source of truth',
    description:
      'A polished number is still the wrong number when nobody can trace the person, transaction, or rule beneath it.',
    image: '/images/insight-dashboard-source-truth.png',
    imageAlt:
      'A dashboard surface supported by layers of source records, identity, and data lineage.',
    pillar: 'Data that supports decisions',
    date: 'September 30, 2026',
    publishedAt: '2026-09-30T12:00:00-04:00',
    readTime: '6 min read',
    thesis:
      'Truth does not begin in the chart. It begins with identity, grain, and lineage—the unglamorous rules that let operations and finance mean the same thing.',
    sections: [
      {
        heading: 'The phrase hides several different truths',
        paragraphs: [
          'Teams often declare one application the system of record. But customers, households, members, invoices, payments, campaigns, and accounting entries may each have a different authoritative source.',
          'The practical goal is not one database for everything. It is one governed definition and lineage for each decision-critical entity.',
        ],
      },
      {
        heading: 'Start at the grain of the decision',
        paragraphs: [
          'If the decision is about a transaction line, household-level identity is too broad. If the decision is about a person, an account record may combine several people. Data architecture fails when it silently crosses those grains.',
        ],
        bullets: [
          'Define the entity and the smallest meaningful record.',
          'Name its durable identifier and authoritative source.',
          'Preserve that identifier through integrations and transformations.',
          'Label inference and unknown attribution instead of converting them into false precision.',
        ],
      },
      {
        heading: 'Build the audit path before the executive view',
        paragraphs: [
          'An executive metric is trustworthy when a reviewer can move from the summary to the contributing records and understand the rules applied along the way. That lineage is more valuable than another layer of presentation.',
        ],
      },
    ],
  },
  {
    slug: 'your-ai-roadmap-is-a-dependency-map',
    title: 'Your AI roadmap is a dependency map',
    description:
      'The model is usually the easy part. The real roadmap is the identity, data, permissions, ownership, and recovery beneath it.',
    image: '/images/insight-ai-dependency-map.png',
    imageAlt:
      'An AI capability resting on connected layers of identity, data, permissions, ownership, measurement, and recovery.',
    pillar: 'AI transformation without theater',
    date: 'October 1, 2026',
    publishedAt: '2026-10-01T12:00:00-04:00',
    readTime: '7 min read',
    thesis:
      'A list of AI use cases is not a roadmap. A roadmap explains what must become true—operationally, technically, and organizationally—before the valuable use case can work twice.',
    sections: [
      {
        heading: 'Most roadmaps begin one layer too high',
        paragraphs: [
          'They begin with copilots, agents, personalization, and predictive dashboards. Those are visible capabilities, so they are easy to put on a slide. But each one depends on less glamorous conditions: recognizable customers, usable content, permissioned data, accountable owners, measurable outcomes, and a safe way to recover when the system is wrong.',
          'Ignore those dependencies and the roadmap becomes a sequence of demonstrations. The organization keeps proving that a model can produce an answer while never proving that the business can use, trust, or improve it.',
        ],
      },
      {
        heading: 'Map the conditions, not just the concepts',
        paragraphs: [
          'Take the highest-value outcome and work backward. If AI is meant to recommend the next best action, ask what identity links the customer across touchpoints, which signals are available at decision time, who owns the action, and what evidence would show that the recommendation helped.',
        ],
        bullets: [
          'Identity: can the system recognize the same customer, case, or transaction across tools?',
          'Evidence: is the required source data available at the grain and moment of the decision?',
          'Authority: which actions may the system take, and which require human approval?',
          'Ownership: who resolves ambiguity, exceptions, and deteriorating performance?',
          'Recovery: what record allows the team to understand, reverse, or resume a failed action?',
        ],
      },
      {
        heading: 'Sequence by proof',
        paragraphs: [
          'The first phase should not be the easiest demo. It should be the smallest intervention that proves a valuable capability and retires a meaningful dependency for what comes next.',
          'A strong roadmap compounds. Each release leaves behind better identity, cleaner measurement, clearer decision rights, and more reusable operating infrastructure. The next use case gets faster because the business learned, not because the model got another prompt.',
        ],
      },
    ],
  },
  {
    slug: 'website-is-becoming-an-operating-system',
    title: 'The website is becoming an operating system',
    description:
      'Your site is no longer a brochure with a chatbot. It is the public interface to your customer memory, decisions, and service model.',
    image: '/images/insight-website-operating-system.png',
    imageAlt:
      'A simple website surface above connected layers of content, CRM, identity, data, service, and workflow systems.',
    pillar: 'AI-powered experiences',
    date: 'October 1, 2026',
    publishedAt: '2026-10-01T12:00:00-04:00',
    readTime: '7 min read',
    thesis:
      'The next useful website will not merely describe the business. It will recognize intent, assemble evidence, coordinate action, and remember what happened after the visitor clicked.',
    sections: [
      {
        heading: 'The front end is the easy part',
        paragraphs: [
          'A fast, elegant interface matters. But a modern experience succeeds or fails on what sits behind the page: whether content reflects the current offer, whether the visitor is recognized appropriately, whether a form creates accountable work, and whether the business can see what happened after conversion.',
          'Adding conversational AI to a disconnected site does not solve that. It creates a more articulate front door to the same fragmented building.',
        ],
      },
      {
        heading: 'Personalization without memory is improvisation',
        paragraphs: [
          'Useful personalization needs more than a segment and a headline swap. It needs consent, identity, relevant history, content rules, a reason for the recommendation, and a feedback signal that improves the next decision.',
        ],
        bullets: [
          'Treat content as structured operating material, not finished pages trapped in a CMS.',
          'Connect inquiry and behavior to one durable customer or account record.',
          'Route high-intent moments into a visible owner, decision, and next action.',
          'Measure the journey through the downstream outcome, not only the click.',
        ],
      },
      {
        heading: 'Design the handoff, not just the interaction',
        paragraphs: [
          'The experience does not end when the visitor submits, schedules, downloads, or asks. That moment begins an operational promise. The system should know who owns it, what context follows it, what the customer expects next, and how the outcome returns to measurement.',
          'That is the shift from website redesign to experience infrastructure: the page becomes a coherent interface to how the organization actually works.',
        ],
      },
    ],
  },
  {
    slug: 'campaigns-that-cannot-learn',
    title: 'A campaign that cannot learn is expensive repetition',
    description:
      'More content and more channels do not create momentum when every launch forgets what the last one taught you.',
    image: '/images/insight-campaign-learning-loop.png',
    imageAlt:
      'Scattered campaign signals converging into a closed measurement and learning loop that becomes more focused over time.',
    pillar: 'Intelligent campaigns',
    date: 'October 1, 2026',
    publishedAt: '2026-10-01T12:00:00-04:00',
    readTime: '6 min read',
    thesis:
      'Campaign velocity is not how quickly the team launches again. It is how quickly evidence from one decision improves the next one.',
    sections: [
      {
        heading: 'Launch culture creates motion, not memory',
        paragraphs: [
          'Teams ship a campaign, watch a dashboard, write a recap, and begin the next brief. The activity is real. The learning often is not. Audience definitions drift, creative rationale disappears, conversion data arrives at a different grain, and the lesson becomes a sentence nobody can reuse.',
          'The result is expensive repetition: new assets built on old uncertainty, with optimization confined to the media platform that reported it.',
        ],
      },
      {
        heading: 'A learning campaign leaves a usable record',
        paragraphs: [
          'Every meaningful campaign decision should produce evidence the next decision can consume. That requires a shared structure for the hypothesis, audience, message, offer, exposure, response, downstream outcome, and confidence in attribution.',
        ],
        bullets: [
          'Preserve the campaign hypothesis beside the execution, not in a forgotten brief.',
          'Connect channel response to customer and revenue outcomes at an honest grain.',
          'Record what changed, why it changed, and what result followed.',
          'Make unknown attribution visible instead of distributing false certainty.',
        ],
      },
      {
        heading: 'The dashboard should change the next decision',
        paragraphs: [
          'Reporting earns its place when it changes allocation, creative, audience, timing, or the offer. If the dashboard is only a postmortem, it is documenting spend rather than directing growth.',
          'Build the loop so that content, media, web behavior, CRM outcomes, and human judgment return to one decision system. Then the campaign does more than perform. It compounds.',
        ],
      },
    ],
  },
]

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug)
}

export function getInsight(slug: string) {
  return insights.find((insight) => insight.slug === slug)
}
