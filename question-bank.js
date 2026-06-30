/* build: 2026063001 */
/* ============================================================================
   SF KNOWLEDGE HUB — TypeScript 7 for Playwright — CERTIFICATION QUESTION BANK
   Exposes window.QUESTION_BANK, consumed by certification-test.html.
   Each question: { id, module, stem, options:{A,B,C[,D]}, correct }.
   20 questions: 12 from the three module quizzes (m1..m3, 4 each)
   + 8 exam-only synthesis/scenario questions (xS*).
   The exam samples 15 at random per attempt.
   courseId: qAPsB1Cn3WbegUqkhPm3
   ============================================================================ */
window.QUESTION_BANK = [

  /* ===== MODULE 1 — TypeScript 7 for Playwright Testers ================= */
  { id:'m1q1', module:'Module 1', stem:'What is TypeScript 7, in one sentence?',
    options:{ A:'A new version of the language with lots of new syntax for tests.', B:'The same TypeScript language on a rebuilt, native compiler that\u2019s roughly 10\u00d7 faster and type-checks identically.', C:'A replacement for Playwright\u2019s test runner.' }, correct:'B' },
  { id:'m1q2', module:'Module 1', stem:'When you run npx playwright test, does Playwright type-check your specs?',
    options:{ A:'No — it transforms specs to JavaScript and runs them; type errors are not caught at that step.', B:'Yes — it fails the run on any type error.', C:'Only if you pass a special --typecheck flag.' }, correct:'A' },
  { id:'m1q3', module:'Module 1', stem:'Where does type safety for your Playwright tests actually come from?',
    options:{ A:'From running the compiler separately, e.g. tsc --noEmit — which is the step TypeScript 7 speeds up.', B:'From the browser engine during the test run.', C:'From the operating system.' }, correct:'A' },
  { id:'m1q4', module:'Module 1', stem:'Why does tsc --noEmit use the --noEmit flag for a Playwright project?',
    options:{ A:'It makes the compiler run twice for safety.', B:'You only want type-checking; Playwright produces the runnable JavaScript itself, so the compiler should emit nothing.', C:'It disables type-checking to run faster.' }, correct:'B' },

  /* ===== MODULE 2 — Playwright on TypeScript 7 in Practice ============== */
  { id:'m2q1', module:'Module 2', stem:'What is the recommended way to make type-checking run automatically before your Playwright tests?',
    options:{ A:'Wire tsc --noEmit as a pretest script so npm test checks types, then runs the tests.', B:'Pass --typecheck to playwright test.', C:'There is no way to run them in sequence.' }, correct:'A' },
  { id:'m2q2', module:'Module 2', stem:'Which tsconfig.json options does Playwright actually honour when it loads your specs?',
    options:{ A:'All of them, including strict and target.', B:'Only allowJs, baseUrl, paths, and references; the rest are used by tsc for type-checking.', C:'None — Playwright ignores tsconfig entirely.' }, correct:'B' },
  { id:'m2q3', module:'Module 2', stem:'A teammate asks "why didn\u2019t Playwright enforce my strict setting at run time?" What\u2019s the correct explanation?',
    options:{ A:'strict is broken in TypeScript 7.', B:'Playwright doesn\u2019t type-check when running; strict governs the tsc --noEmit gate, which is the part that enforces it.', C:'strict only works in the browser.' }, correct:'B' },
  { id:'m2q4', module:'Module 2', stem:'Why does typing your page objects and fixtures well matter for a Playwright suite?',
    options:{ A:'It makes the browser run faster.', B:'The better-typed your tests are, the more mistakes the tsc gate catches instantly — and TypeScript 7 makes running that check fast enough to do constantly.', C:'It is required or Playwright will refuse to run.' }, correct:'B' },

  /* ===== MODULE 3 — Adopting It on Your Suite =========================== */
  { id:'m3q1', module:'Module 3', stem:'Why is adopting TypeScript 7 lower-risk for a test suite than for an application that ships code?',
    options:{ A:'Test suites don\u2019t use TypeScript at all.', B:'A test project only uses TypeScript to check specs (Playwright does the running), so the risky production-emit changes don\u2019t apply.', C:'TypeScript 7 disables breaking changes for tests automatically.' }, correct:'B' },
  { id:'m3q2', module:'Module 3', stem:'Which two changed defaults is a Playwright project most likely to meet on TypeScript 7?',
    options:{ A:'strict on by default, and types no longer auto-loading every @types package.', B:'outDir and incremental.', C:'noEmit and watch.' }, correct:'A' },
  { id:'m3q3', module:'Module 3', stem:'After upgrading, a spec errors with "Cannot find name \'process\'." What\u2019s the fix?',
    options:{ A:'Reinstall Playwright.', B:'List the global type package you depend on, e.g. "types": ["node"], since 7.0 no longer auto-loads @types.', C:'Switch the test to JavaScript.' }, correct:'B' },
  { id:'m3q4', module:'Module 3', stem:'What is the safest way to bring TypeScript 7 into your CI pipeline?',
    options:{ A:'Immediately replace the existing type-check and remove the old compiler.', B:'Add a non-blocking (informational) 7.0 type-check job beside the existing one, confirm they agree over real commits, then promote it.', C:'Only run TypeScript 7 on a developer\u2019s laptop, never in CI.' }, correct:'B' },

  /* ===== EXAM-ONLY — synthesis / scenario (xS1..xS8) =================== */
  { id:'xS1', module:'Synthesis', stem:'A spec with a misspelled locator method passes npx playwright test but fails confusingly in the browser. What would have caught it earlier, and why?',
    options:{ A:'Nothing — Playwright already type-checks.', B:'Running tsc --noEmit as a gate; Playwright doesn\u2019t type-check specs, so the typo only surfaces at run time without the separate check.', C:'Raising the test timeout.' }, correct:'B' },
  { id:'xS2', module:'Synthesis', stem:'You set strict and target in tsconfig, but Playwright seems to ignore target. Why is that expected?',
    options:{ A:'Playwright only honours allowJs, baseUrl, paths, and references; target is used by tsc for the type-check gate, not by Playwright\u2019s runner.', B:'target is deprecated in TypeScript 7.', C:'Playwright caches the old tsconfig.' }, correct:'A' },
  { id:'xS3', module:'Synthesis', stem:'On a large suite, your pretest type-check used to take a minute and people started skipping it. How does TypeScript 7 change that calculus?',
    options:{ A:'It removes the need for type-checking.', B:'The native compiler is ~10\u00d7 faster, so the gate finishes fast enough that there\u2019s no incentive to skip it.', C:'It runs the gate inside the browser.' }, correct:'B' },
  { id:'xS4', module:'Synthesis', stem:'You want the fastest safe win from TypeScript 7 on your suite this week, with no risk to CI. What do you do?',
    options:{ A:'Replace the CI type-check with 7.0 immediately.', B:'Install side by side, add a non-blocking 7.0 type-check job, and let testers try the native preview editor extension.', C:'Convert all specs to JavaScript.' }, correct:'B' },
  { id:'xS5', module:'Synthesis', stem:'After upgrading, await row.textContent() now errors as possibly null. What changed, and what\u2019s the idiomatic fix?',
    options:{ A:'Playwright changed textContent; downgrade.', B:'strict (strictNullChecks) is on by default; handle the null, e.g. (await row.textContent() ?? "").', C:'The compiler is broken; reinstall Node.' }, correct:'B' },
  { id:'xS6', module:'Synthesis', stem:'Your specs import { test } from \'@playwright/test\', and Playwright\u2019s types work fine after upgrade, but a Node global broke. Why the difference?',
    options:{ A:'Playwright types are imported at the point of use, so the types-default change doesn\u2019t affect them; ambient globals like Node\u2019s need listing via the types option.', B:'Playwright reinstalled its types automatically.', C:'Node globals are never typed.' }, correct:'A' },
  { id:'xS7', module:'Synthesis', stem:'A tester reports tsc isn\u2019t found after installing a preview build. What\u2019s the most likely explanation?',
    options:{ A:'The install failed and must be global only.', B:'On earlier preview builds the binary is named tsgo; from the 7.0 RC onward it\u2019s tsc — same compiler, different command name by build phase.', C:'Playwright removed tsc.' }, correct:'B' },
  { id:'xS8', module:'Synthesis', stem:'What single sentence best captures why TypeScript 7 matters specifically to a Playwright tester?',
    options:{ A:'It adds new test syntax to Playwright.', B:'Because Playwright doesn\u2019t type-check specs, the separate tsc --noEmit gate is your safety net — and TypeScript 7 makes that gate ~10\u00d7 faster, so it\u2019s cheap to run constantly.', C:'It replaces the need for assertions.' }, correct:'B' }

];
