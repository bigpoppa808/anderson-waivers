// Content paths
const contentPaths = {
    crashNotes: 'MGMTEX_405_Economic_Analysis/1_Reading_Materials/crash_notes.md',
    studyGuide: 'MGMTEX_405_Economic_Analysis/study_guide.md',
    podcastSources: 'MGMTEX_405_Economic_Analysis/2_Podcast_Materials/notebooklm_sources.md',
    elasticityWorksheet: 'MGMTEX_405_Economic_Analysis/2_Podcast_Materials/datasets/elasticity_worksheet.md',
    cournotWorksheet: 'MGMTEX_405_Economic_Analysis/2_Podcast_Materials/datasets/cournot_worksheet.md',
    taxWorksheet: 'MGMTEX_405_Economic_Analysis/2_Podcast_Materials/datasets/tax_incidence_worksheet.md'
};

// Show/hide sections
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Remove active class from all nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionId).classList.add('active');
    
    // Add active class to clicked button
    event.target.classList.add('active');
    
    // Scroll to top of content
    window.scrollTo({ top: 200, behavior: 'smooth' });
}

// Show practice problem sections
function showPractice(practiceType) {
    // Hide all practice sections
    document.querySelectorAll('.practice-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Remove active class from all tabs
    document.querySelectorAll('.practice-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected practice section
    document.getElementById(`${practiceType}-practice`).classList.add('active');
    
    // Add active class to clicked tab
    event.target.classList.add('active');
}

// Load markdown content
async function loadMarkdownContent(path, targetId) {
    try {
        const response = await fetch(path);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        
        // Convert markdown to HTML
        const html = marked.parse(text);
        
        // Insert into page
        const target = document.getElementById(targetId);
        if (target) {
            target.innerHTML = html;
            
            // Re-render MathJax
            if (window.MathJax) {
                MathJax.typesetPromise([target]).catch((e) => console.log(e));
            }
            
            // Highlight code blocks
            if (window.Prism) {
                Prism.highlightAllUnder(target);
            }
        }
    } catch (error) {
        console.error('Error loading content:', error);
        const target = document.getElementById(targetId);
        if (target) {
            target.innerHTML = `
                <div class="error-message">
                    <h3>Content Loading Error</h3>
                    <p>Unable to load content from ${path}</p>
                    <p>This might be because the site is being viewed locally. The content will work when deployed to GitHub Pages.</p>
                    <details>
                        <summary>Technical Details</summary>
                        <pre>${error.message}</pre>
                    </details>
                </div>
            `;
        }
    }
}

// Fallback content for local development
const fallbackContent = {
    crashNotes: `
# Economic Analysis Crash Notes

## Part 1: Microeconomics Essentials

### Supply and Demand
**Core Concept**: Markets reach equilibrium where Qd = Qs.

**Key Formulas**:
- Demand: Qd = a - bP
- Supply: Qs = c + dP
- Equilibrium: Set Qd = Qs, solve for P*

### Elasticity
**Price Elasticity of Demand**: $E_d = \\frac{\\% \\Delta Q}{\\% \\Delta P}$

**Interpretation**:
- |Ed| > 1: Elastic (revenue ↓ when P ↑)
- |Ed| = 1: Unit elastic
- |Ed| < 1: Inelastic (revenue ↑ when P ↑)

### Market Structures
| Structure | Firms | Entry | Product | P vs MC |
|-----------|-------|-------|---------|---------|
| Perfect Competition | Many | Easy | Identical | P = MC |
| Monopoly | One | Blocked | Unique | P >> MC |
| Oligopoly | Few | Hard | Either | P > MC |

## Part 2: Game Theory

### Nash Equilibrium
Each player's strategy is best response to others'.

**Prisoner's Dilemma Example**:
\`\`\`
         Cooperate  Defect
Cooperate  (3,3)    (0,5)
Defect     (5,0)    (1,1)
\`\`\`
Nash Equilibrium: (Defect, Defect)

## Part 3: Practice Problems

### Problem 1: Elasticity
If |Ed| = 0.4 and price increases 10%, revenue changes by:
- Answer: +6% (inelastic, so revenue rises)

### Problem 2: Monopoly
With P = 50 - Q and MC = 10:
- MR = 50 - 2Q
- Set MR = MC: 50 - 2Q = 10
- Q* = 20, P* = 30
`,
    studyGuide: `
# MGMTEX 405: Economic Analysis for Managers - Study Guide

## Exam Information
- **Date:** Sunday, August 24th, 2025
- **Time:** 9:30am – 11:00am (1.5 hours)
- **Format:** In-person at UCLA Anderson

## Core Topics to Master

### 1. Microeconomics Fundamentals
- Supply and Demand Analysis
- Price Elasticity
- Consumer and Producer Surplus
- Market Structures

### 2. Game Theory
- Nash Equilibrium
- Dominant Strategies
- Sequential Games
- Business Applications

### 3. Macroeconomics
- GDP and Growth
- Monetary Policy
- Fiscal Policy
- Inflation and Unemployment

## Recommended Study Resources
1. **Textbooks**: Froeb et al., Farnham
2. **Online**: Khan Academy, MIT OCW
3. **Practice**: Work all problems in crash notes

## Study Plan (4 weeks)
- Week 1: Microeconomics fundamentals
- Week 2: Market structures & game theory
- Week 3: Macroeconomics & policy
- Week 4: Practice exams & review
`,
    podcastContent: `
# NotebookLM Podcast Materials

## How to Use
1. Go to [NotebookLM](https://notebooklm.google.com)
2. Upload these materials
3. Generate audio summaries

## Recommended Topics

### Case Studies
- Uber's surge pricing (supply/demand)
- Amazon's market dominance (monopolistic competition)
- OPEC cartel (oligopoly, game theory)

### Economic Concepts
- Market failures and externalities
- Behavioral economics insights
- Trade and globalization

### Current Events
- Federal Reserve policy decisions
- Inflation and interest rates
- Supply chain economics
`,
    elasticityPractice: `
# Elasticity Practice Problems

## Problem 1
A theater faces demand Qd = 500 - 10P. Current price is $30.
- Calculate elasticity at P = $30
- Should they raise or lower price to increase revenue?

**Solution:**
- Q = 500 - 10(30) = 200
- Ed = (dQ/dP) × (P/Q) = -10 × (30/200) = -1.5
- |Ed| = 1.5 > 1 → Elastic
- Should lower price to increase revenue

## Problem 2
If demand is inelastic and price increases 20%, what happens to revenue?
- Revenue increases by less than 20%
- The exact change depends on the elasticity value
`,
    cournotPractice: `
# Cournot Competition Practice

## Problem 1
Two firms face P = 100 - Q, where Q = q1 + q2. MC = 10 for both.

**Solution:**
- Firm 1's reaction: q1 = (90 - q2)/2
- By symmetry: q1 = q2
- Solving: q1 = q2 = 30
- Total Q = 60, P = 40
- Profit per firm = (40-10) × 30 = 900

## Problem 2
Compare to monopoly outcome:
- Monopoly: Q = 45, P = 55, Profit = 2025
- Duopoly total profit = 1800
- Competition reduces profits
`,
    taxPractice: `
# Tax Incidence Practice

## Problem 1
Demand: Qd = 100 - 2P
Supply: Qs = -20 + 3P
Tax: $4 per unit on sellers

**Solution:**
1. Initial equilibrium: P = 24, Q = 52
2. With tax, supply shifts: Qs = -32 + 3P
3. New equilibrium: Pc = 26.4, Q = 47.2
4. Producer receives: Ps = 22.4
5. Consumer burden: $2.4, Producer burden: $1.6
6. More elastic side bears less burden
`
};

// Initialize content on page load
document.addEventListener('DOMContentLoaded', async function() {
    // Try to load content from files, fall back to embedded content if needed
    try {
        // Check if we're running locally or on GitHub Pages
        const isLocal = window.location.protocol === 'file:' || window.location.hostname === 'localhost';
        
        if (isLocal) {
            // Use fallback content for local development
            document.getElementById('crash-notes-content').innerHTML = marked.parse(fallbackContent.crashNotes);
            document.getElementById('study-guide-content').innerHTML = marked.parse(fallbackContent.studyGuide);
            document.getElementById('podcast-content').innerHTML = marked.parse(fallbackContent.podcastContent);
            document.getElementById('elasticity-practice').innerHTML = marked.parse(fallbackContent.elasticityPractice);
            document.getElementById('cournot-practice').innerHTML = marked.parse(fallbackContent.cournotPractice);
            document.getElementById('tax-practice').innerHTML = marked.parse(fallbackContent.taxPractice);
            
            // Show local development notice
            console.log('Running in local mode - using fallback content');
        } else {
            // Load content from markdown files
            await loadMarkdownContent(contentPaths.crashNotes, 'crash-notes-content');
            await loadMarkdownContent(contentPaths.studyGuide, 'study-guide-content');
            await loadMarkdownContent(contentPaths.podcastSources, 'podcast-content');
            await loadMarkdownContent(contentPaths.elasticityWorksheet, 'elasticity-practice');
            await loadMarkdownContent(contentPaths.cournotWorksheet, 'cournot-practice');
            await loadMarkdownContent(contentPaths.taxWorksheet, 'tax-practice');
        }
        
        // Render math after content is loaded
        if (window.MathJax) {
            MathJax.typesetPromise().catch((e) => console.log(e));
        }
    } catch (error) {
        console.error('Error initializing content:', error);
    }
});

// Add smooth scrolling for anchor links
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
});

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey || e.metaKey) {
        switch(e.key) {
            case '1':
                e.preventDefault();
                showSection('crash-notes');
                break;
            case '2':
                e.preventDefault();
                showSection('study-guide');
                break;
            case '3':
                e.preventDefault();
                showSection('podcasts');
                break;
            case '4':
                e.preventDefault();
                showSection('practice');
                break;
            case '5':
                e.preventDefault();
                showSection('resources');
                break;
        }
    }
});

// Add print functionality
window.addEventListener('beforeprint', function() {
    // Show all sections for printing
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'block';
    });
});

window.addEventListener('afterprint', function() {
    // Restore normal view after printing
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = '';
    });
});