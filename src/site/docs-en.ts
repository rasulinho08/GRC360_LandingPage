import type { Site } from "./types";

/**
 * English product documentation. A first version written from the application itself; the team's
 * full documentation will replace or extend it. Keep it to what the product does today.
 */
export const docsEn: Site["docs"] = {
  eyebrow: "Documentation",
  title: "GRC360 documentation",
  lead: "How to install GRC360, set up your organisation and work in each module.",
  note: "This is the first version of the documentation. Ask us at hello@strativu.com if something you need is missing.",
  groups: [
    { title: "Getting started", pages: ["overview", "installation", "first-steps"] },
    { title: "Administration", pages: ["users-and-access", "authentication", "import-export", "administration"] },
    { title: "Working in the modules", pages: ["risk-scoring", "approvals", "compliance-packages", "controls-and-policies", "operations-and-dashboard"] },
  ],
  pages: [
    {
      slug: "overview",
      title: "Overview",
      summary: "What GRC360 is made of and how the modules relate.",
      sections: [
        {
          heading: "What GRC360 is",
          body: [
            "GRC360 is a governance, risk and compliance platform. It keeps your registers (risks, assets, vendors, controls, policies, obligations) in one system, with an owner, review dates and a history for every record.",
            "It is installed on your own servers and works in Azerbaijani and English.",
          ],
        },
        {
          heading: "The modules",
          body: ["Each module is a group of pages in the left-hand menu. What a user sees depends on the rights of their groups."],
          list: [
            "Command Center: tasks, risk heat maps, compliance and project progress on one page.",
            "Governance Hub: coverage, issues and objectives with their audits.",
            "Organization Hub: users, departments and groups (roles).",
            "Third Parties: vendors and service agreements.",
            "Asset Management: assets with reviews, data assets and data flows.",
            "Control Center: internal controls, policies and standards, policy exceptions, continuity plans.",
            "Risk Management: asset, business and third-party risks, and risk exceptions.",
            "Compliance Hub: compliance packages, compliance analysis, obligations, compliance exceptions and external audit findings.",
            "Operations Center: projects (with tasks and expenses) and security incidents.",
            "Settings (administrators only): authentication, system information, health, updates, system log and data reset.",
          ],
        },
        {
          heading: "How records connect",
          body: [
            "Records link to each other instead of being copied: a risk links to its assets and controls, a control to the standards it supports, an audit finding to the task that closes it. Changing a record changes it everywhere it is shown.",
          ],
        },
      ],
    },
    {
      slug: "installation",
      title: "Installation",
      summary: "What a server needs and how the services fit together.",
      sections: [
        {
          heading: "Requirements",
          body: ["GRC360 runs as a set of Docker containers on a Linux server."],
          list: [
            "Linux server with Docker and Docker Compose",
            "PostgreSQL 16 (the database; row-level security keeps organisations apart)",
            "Redis (sessions and caching)",
            "S3-compatible object storage for files, for example MinIO",
            "ClamAV for antivirus scanning of uploads (optional)",
            "Prometheus and Grafana for monitoring (optional)",
          ],
        },
        {
          heading: "The services",
          body: [
            "nginx serves the web application and passes API calls to the application server. The application server talks to PostgreSQL, Redis, the object storage and, if enabled, ClamAV. All of them run inside your network; nothing is sent to an outside service.",
          ],
        },
        {
          heading: "Installing",
          steps: [
            "Prepare the server and the DNS name users will open.",
            "Set the environment values: database, storage, mail server and the public address.",
            "Start the stack with Docker Compose. The database schema is created and updated automatically on start.",
            "Open the address in a browser and sign in with the first administrator account.",
          ],
          body: [],
          note: "We install GRC360 together with your team; the exact values depend on your network and security rules.",
        },
      ],
    },
    {
      slug: "first-steps",
      title: "First steps",
      summary: "The onboarding wizard, the product tour and personal settings.",
      sections: [
        {
          heading: "Onboarding wizard",
          body: ["The first time an administrator signs in, GRC360 opens a short wizard before the main application:"],
          steps: [
            "Welcome: what the wizard will set up.",
            "Organization: the organisation's basic details.",
            "Import: bring existing registers in from Excel or CSV templates (can be skipped).",
            "Guide: where to find each module.",
            "Done: the application opens on the Command Center.",
          ],
        },
        {
          heading: "Product tour",
          body: ["A guided tour walks through the screens used every day. It starts on first sign-in and can be replayed at any time from the help (?) button in the top bar or the profile menu."],
        },
        {
          heading: "Language, theme and profile",
          body: [
            "Each user chooses Azerbaijani or English and a light or dark theme from the top bar. Server messages follow the chosen language.",
            "Profile shows your details and two-step sign-in; Account shows your groups, your access and the devices you are signed in on.",
          ],
        },
      ],
    },
    {
      slug: "users-and-access",
      title: "Users, groups and access",
      summary: "How rights are given: groups, the access matrix and access requests.",
      sections: [
        {
          heading: "Users and departments",
          body: ["Users are created in Organization Hub → Users and belong to a department. A new user receives an activation link to set a password."],
        },
        {
          heading: "Groups and the access matrix",
          body: [
            "Rights are given to groups, not to individual users. For each module and each page a group can read, create, edit, delete, import, export or manage settings; some pages have extra actions such as audit results or assignment.",
            "A user can also receive additional permissions on top of their groups.",
          ],
        },
        {
          heading: "Locked actions and access requests",
          body: [
            "Buttons a user may not use stay visible with a lock. Clicking one offers to request access; administrators see pending requests in the Groups page and approve or reject them.",
          ],
          note: "Settings is reserved for the Administrators group and can't be granted to any other group.",
        },
      ],
    },
    {
      slug: "authentication",
      title: "Sign-in and authentication",
      summary: "Passwords, two-step sign-in, single sign-on and LDAP.",
      sections: [
        {
          heading: "Two-step sign-in (MFA)",
          body: ["Users enable two-step sign-in with an authenticator app (TOTP) and receive backup codes. It is mandatory for administrators."],
        },
        {
          heading: "Single sign-on",
          body: ["In Settings → Authentication, administrators add OIDC or SAML connectors, for example Microsoft Entra ID, ADFS or Google, and test them before enabling."],
        },
        {
          heading: "LDAP",
          body: ["LDAP connectors let users sign in with their directory account. Each connector can be tested from the same page."],
        },
        {
          heading: "Sessions",
          body: ["Administrators see the organisation's active sessions and can end them; each user sees and ends their own sessions in Account."],
        },
      ],
    },
    {
      slug: "import-export",
      title: "Import and export",
      summary: "Moving existing registers in and taking data out.",
      sections: [
        {
          heading: "Templates",
          body: ["Every register has an import template. The Import templates page lists them by module, with the columns each one expects."],
        },
        {
          heading: "Importing",
          steps: [
            "Open the register and choose Import CSV.",
            "Upload the filled template.",
            "GRC360 checks every row and lists the errors before anything is saved.",
            "Fix the rows and import again; valid rows are created.",
          ],
          body: [],
        },
        {
          heading: "Exporting",
          body: ["Export writes the register in the same format as the template, so an export can be edited and imported back. Exporting needs the export right on that page."],
        },
      ],
    },
    {
      slug: "risk-scoring",
      title: "Risk scoring",
      summary: "Scales, the threshold matrix, appetite and reviews.",
      sections: [
        {
          heading: "Scales and score",
          body: ["Each register uses likelihood and impact scales set by your organisation. A risk's score is likelihood × impact, before (inherent) and after (residual) treatment."],
        },
        {
          heading: "Threshold matrix",
          body: ["In the register's settings, administrators divide scores into levels with their own names and colours, for example Low, Medium, High. The level of a risk, its colour in the table and its place on the heat map all come from this matrix."],
        },
        {
          heading: "Appetite",
          body: ["Risk appetite sets the limit above which a risk needs attention. Risks over the limit are flagged in the register."],
        },
        {
          heading: "Reviews and exceptions",
          body: ["Every risk has a next review date; reviews are recorded in the Reviews tab with their result. When a risk is accepted instead of treated, a risk exception is created and sent for approval."],
        },
      ],
    },
    {
      slug: "approvals",
      title: "Approvals",
      summary: "Setting up approval steps, SLAs, reminders and delegation.",
      sections: [
        {
          heading: "Approval steps",
          body: [
            "Administrators set up approval steps per flow in Approvals → Approval steps. A default chain is required; after it is saved, separate chains can be added for each risk level from your matrix.",
            "Each step is approved by a group (any one member, or a set number of members) or by a named person. Steps are numbered automatically.",
          ],
          note: "The same person can't approve two steps of the same request.",
        },
        {
          heading: "SLA and reminders",
          body: ["Every step has a time to decide, in hours or days. Approvers receive in-app reminders when half, a quarter and a tenth of the time is left."],
        },
        {
          heading: "Deciding",
          body: [
            "Requests appear under Waiting for me with the details of the record and the requester's note. Approving can include a comment; declining requires one. Each decision is kept with the person and time.",
            "Requesters follow their own requests under My requests and can withdraw them while pending.",
          ],
        },
        {
          heading: "Delegation",
          body: ["An approver going on leave can delegate their approvals to a colleague for a date range."],
        },
      ],
    },
    {
      slug: "compliance-packages",
      title: "Compliance packages and obligations",
      summary: "Loading standards, assessing them and tracking legal obligations.",
      sections: [
        {
          heading: "Packages",
          body: ["A compliance package holds a standard, law or internal policy as a list of items. Packages are created in Compliance Hub → Compliance Packages and their items added by hand or imported from CSV."],
          note: "GRC360 does not ship the text of standards; your organisation loads the content it is licensed to use.",
        },
        {
          heading: "Compliance analysis",
          body: ["Choose a package to assess it item by item: record the status and the action, link evidence, exceptions and external audit findings. The analysis shows the percentage per section and for the whole package."],
        },
        {
          heading: "Obligations",
          body: ["Laws and regulator requirements are tracked as obligations, each with an owner, a review date and a dynamic status. Every law has its own profile with its obligations and compliance percentage; overdue reviews and status mismatches are flagged."],
        },
      ],
    },
    {
      slug: "controls-and-policies",
      title: "Controls and policies",
      summary: "Control audits, issues and maintenance; policy versions and attestation.",
      sections: [
        {
          heading: "Controls",
          body: ["Each internal control has an owner, a schedule and a result. Audits, issues and maintenances are tabs of the control register; an open issue or an overdue audit shows in the control's status straight away. Evidence files are attached to audits."],
        },
        {
          heading: "Policies and standards",
          body: ["Policies are published as versions, and the lifecycle panel shows who published what and when. Reviews are scheduled per policy, and policy exceptions are approved like other exceptions."],
        },
        {
          heading: "Attestation",
          body: ["Employees find the policies waiting for them under My tasks → Policies to attest and accept or decline each one."],
        },
        {
          heading: "Continuity plans",
          body: ["Continuity plans record recovery objectives (RTO, RPO), their audits and recovery tasks with owners and due dates."],
        },
      ],
    },
    {
      slug: "operations-and-dashboard",
      title: "Operations and the Command Center",
      summary: "Projects, tasks, incidents and the management dashboard.",
      sections: [
        {
          heading: "Projects, tasks and expenses",
          body: ["Projects hold tasks and expenses as tabs. A project counts as delayed when it passes its own deadline or holds a late task. Preset views show late and upcoming work."],
        },
        {
          heading: "Security incidents",
          body: ["Incidents move through stages your organisation defines in the stage settings. An unfinished stage is marked so it is visible at a glance."],
        },
        {
          heading: "Command Center",
          body: ["The Command Center shows expired, today's and future tasks, heat maps for the three risk registers (all open risks, or those changed in the last 7, 30 or 90 days), compliance per framework, overall project progress and obligations. The summary can be exported to CSV."],
        },
      ],
    },
    {
      slug: "administration",
      title: "System administration",
      summary: "System log, health, updates, backups and data reset.",
      sections: [
        {
          heading: "System log",
          body: ["The system log records who changed what, when and from where. It can be filtered and exported."],
        },
        {
          heading: "System health",
          body: ["System health shows the state of the services, lets an administrator clear the cache, download logs and diagnostics, and send them to support."],
        },
        {
          heading: "About and updates",
          body: ["About system shows the installed version and system details; Updates lists the available updates."],
        },
        {
          heading: "Data reset",
          body: ["Clear data removes the organisation's records after a preview and typing the organisation's name to confirm. A backup of every row being cleared is saved first; if it can't be saved, nothing is deleted. Backups can be downloaded from the same page."],
          note: "Data reset is a separate right and is limited to administrators.",
        },
      ],
    },
  ],
};
