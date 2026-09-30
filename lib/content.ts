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
    name: 'Systems Clarity Audit',
    eyebrow: 'Diagnose',
    summary:
      'Find the operational constraint beneath the symptoms and turn it into a sequenced, evidence-backed plan.',
    bestFor:
      'Leaders dealing with tool sprawl, unclear ownership, unreliable reporting, or automation that creates more exceptions than it removes.',
    duration: 'Typically 2–3 weeks',
    deliverables: [
      'Current-state system and handoff map',
      'Source-of-truth and identity assessment',
      'Friction, risk, and dependency register',
      'Prioritized 90-day action plan',
      'Executive readout and implementation options',
    ],
  },
  {
    slug: 'operating-system-build',
    number: '02',
    name: 'Operating System Build',
    eyebrow: 'Implement',
    summary:
      'Design and build the connected workflows, data model, automation, and reporting needed to run the work reliably.',
    bestFor:
      'Organizations ready to move from an agreed plan to a working operating system without adding another disconnected platform.',
    duration: 'Typically 6–12 weeks',
    deliverables: [
      'Target-state architecture and implementation plan',
      'Governed workflows and integrations',
      'Exception handling and approval paths',
      'Decision-ready reporting',
      'Documentation, training, and launch support',
    ],
  },
  {
    slug: 'fractional-transformation-operations',
    number: '03',
    name: 'Fractional Transformation & AI Operations',
    eyebrow: 'Operate',
    summary:
      'Embedded senior leadership to keep systems, data, vendors, and AI initiatives moving as one portfolio.',
    bestFor:
      'Leadership teams that need ongoing transformation capacity and technical judgment without adding a full-time executive role.',
    duration: 'Ongoing, usually 3+ months',
    deliverables: [
      'Transformation portfolio and operating cadence',
      'AI and automation opportunity pipeline',
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
  pillar: string
  date: string
  readTime: string
  thesis: string
  sections: InsightSection[]
}

export const insights: Insight[] = [
  {
    slug: 'workflow-is-not-a-system-until-it-remembers',
    title: 'A workflow is not a system until it remembers',
    description:
      'Why state, ownership, recovery, and evidence separate operational systems from impressive demonstrations.',
    pillar: 'Systems that scale',
    date: 'September 30, 2026',
    readTime: '6 min read',
    thesis:
      'A trigger followed by an action is automation. It becomes an operating system only when it can explain what happened, what should happen next, and how to recover when reality interrupts the happy path.',
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
    title: 'Human-in-the-loop is an operating design, not a disclaimer',
    description:
      'Approval works only when the person, decision, evidence, timing, and fallback are designed explicitly.',
    pillar: 'Applied AI with controls',
    date: 'September 30, 2026',
    readTime: '5 min read',
    thesis:
      'Adding “a human reviews the output” to an AI workflow does not create governance. It often creates an invisible queue and a new point of failure.',
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
    title: 'One source of truth starts with identity, not dashboards',
    description:
      'Why polished reporting cannot repair unresolved definitions of people, accounts, transactions, and ownership.',
    pillar: 'Data that supports decisions',
    date: 'September 30, 2026',
    readTime: '6 min read',
    thesis:
      'A dashboard can reconcile totals and still misrepresent reality. The test is whether a decision can be traced back to the same entity and transaction definitions used by operations and finance.',
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
]

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug)
}

export function getInsight(slug: string) {
  return insights.find((insight) => insight.slug === slug)
}
