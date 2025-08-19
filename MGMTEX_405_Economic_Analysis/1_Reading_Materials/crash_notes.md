# MGMTEX 405 — Economic Analysis: No‑Textbook Crash Notes

Purpose: Self-contained notes to pass a 90‑minute, application-heavy waiver exam. Skim once, then practice with the included problems.

## Exam Playbook
- Read every prompt for the economic mechanism (incentives, constraints, tradeoffs).
- Draw a quick graph/table if relevant; label axes and shifts.
- Write the decision rule first (e.g., produce where MR = MC) before computing.
- When time is tight: identify direction and magnitude qualitatively, then quantify.

## 1) Core Micro Toolkit

### Supply & Demand
- Market equilibrium: Qd(P) = Qs(P). Surplus = Qs − Qd; price adjusts to clear.
- Shifts: non-price factors (income, tastes, technology, input costs, expectations, number of buyers/sellers).
- Welfare: CS = area under demand above P; PS = area above supply below P; DWL from taxes/price controls.

### Elasticity (use midpoint when needed)
- Price elasticity of demand: Ed = %ΔQ / %ΔP. |Ed| > 1 elastic; < 1 inelastic.
- Revenue test: If demand elastic, ↑P → ↓Revenue; if inelastic, ↑P → ↑Revenue.
- Cross-price: Exy > 0 substitutes; < 0 complements. Income: Ey > 0 normal; < 0 inferior.

### Government Interventions
- Tax on sellers or buyers shifts the wedge; incidence falls more on the less elastic side.
- Price ceiling (binding) → shortage, quality deterioration, queues. Floor (binding) → surplus, waste.

### Consumer Choice (useful intuitions)
- Utility maximization: choose bundle with MUx/Px = MUy/Py subject to budget. Indifference curves convex; higher is better.
- Income effect vs substitution effect: normal good (both reinforce when price drops); inferior good (offsetting effects).

### Firm Production & Costs
- Short run: fixed vs variable. Diminishing marginal product → rising MC.
- Cost relations: MC intersects AVC and ATC at their minima; ATC = AFC + AVC; AFC falls with Q.
- Long run: all inputs variable; economies/diseconomies of scale; minimum efficient scale.

### Market Structures & Pricing
- Perfect competition: price taker; profit-max at MR = MC with P = MR. Long run: P = min ATC (zero economic profit).
- Monopoly: choose Q with MR = MC; P from demand at that Q; DWL vs perfect competition.
- Monopolistic competition: many differentiated sellers; long-run zero profit with excess capacity.
- Oligopoly: strategic interaction; think best responses and Nash equilibrium.

### Price Discrimination & Pricing Tactics
- 1st-degree: personalized pricing (theoretical upper bound on profit).
- 2nd-degree: menu/quantity discounts (screening types).
- 3rd-degree: segment-based pricing; allocate more to high-margin (less elastic) segment.
- Two-part tariff: access fee + per-unit price (set per-unit near MC; capture surplus in fee).
- Bundling: valuable with negatively correlated valuations across products.

### Game Theory (quick wins)
- Dominant strategy: best regardless of opponent; if present, equilibrium is trivial.
- Nash equilibrium: mutual best responses. For 2x2, check each player’s best response in each cell.
- Credibility: only threats that are optimal when reached are credible (subgame perfect via backward induction).

## 2) Managerial Decision Rules
- Shut down (short run): produce if P ≥ AVC at Q where MR = MC; else produce 0 and lose fixed cost only.
- Entry/Exit (long run): enter if P > ATC at profit-max Q; exit if P < ATC.
- Profit maximization: pick Q where MR = MC; if market gives P, then P = MR (price taker). Markup pricing under market power: (P − MC)/P = −1/Ed.
- Capacity & learning: declining ATC with cumulative output; exploit scale until marginal savings < marginal costs of expansion.

## 3) Macro Essentials for Managers
- GDP: Y = C + I + G + NX. Real vs nominal (deflator = nominal/real × 100).
- Unemployment: cyclical vs structural vs frictional; labor force = employed + unemployed.
- Inflation: CPI vs GDP deflator; real interest ≈ nominal − expected inflation.
- AS–AD: demand shocks (C/I/G/NX) vs supply shocks (input costs/productivity). Short-run tradeoff between inflation and output; long-run neutrality of money.
- Monetary policy: central bank sets short-term rates; ↑rates → ↓I, ↓AD; expectations matter. Fiscal: multipliers; crowding out.

## 4) Common Quant Setups

### Break-even and Contribution
- Contribution margin per unit = P − VC; Break-even Q = Fixed Cost / (P − VC).

### Linear Demand and MR
- If P(Q) = a − bQ, then TR = P·Q = aQ − bQ²; MR = a − 2bQ.

### Cournot Duopoly (symmetric, constant MC)
- Inverse demand P = a − bQ, MC = c. Each firm’s best response: qi = (a − c − bqj)/(2b).
- Symmetric NE: q1 = q2 = (a − c)/(3b); Q = 2(a − c)/(3b); P = a − bQ.

### Price Discrimination by Segment
- Optimal per-segment rule: choose Qi with MRi(Qi) = MC; price Pi from each segment’s demand at Qi.

## 5) Worked Mini-Examples

1) Tax Incidence and DWL
- Demand: Qd = 100 − 2P; Supply: Qs = −20 + 3P. Specific tax t = 4 per unit on sellers.
- No tax: 100 − 2P = −20 + 3P → 120 = 5P → P* = 24; Q* = 52.
- With tax: supply becomes Qs = −20 + 3(P − t) = −32 + 3P.
  New equilibrium: 100 − 2P = −32 + 3P → 132 = 5P → Pc = 26.4; Q = 47.2; Ps = Pc − t = 22.4.
- Incidence: Consumers pay +2.4; producers receive −1.6 relative to 24. More burden on less elastic side (here demand is moderately inelastic near eq vs supply).

2) Monopoly with Linear Demand
- Demand: P = 60 − Q; MC = 20.
- MR = 60 − 2Q; set MR = MC → 60 − 2Q = 20 → Q = 20; P = 40; Profit per unit = 20; If no fixed cost, Profit = 400.
- Competitive benchmark (P = MC = 20): Q = 40. DWL = 0.5 × (40 − 20) × (40 − 20) = 200.

3) Two-Part Tariff
- 100 identical consumers with demand P = 10 − Q; MC = 2.
- Efficient per-unit price p = MC = 2; each consumes Q = 8, surplus per consumer = 0.5 × (10 − 2) × 8 = 32.
- Access fee F = 32 captures all surplus; profit = 100 × 32 = 3200.

4) Cournot Quick Calc
- P = 100 − Q; MC = 10. Symmetric firms.
- qi = (a − c)/(3b) = (100 − 10)/(3×1) = 30. Q = 60; P = 40.

5) Contribution and Shut-Down
- P = 6; AVC at Q* = 7; ATC = 9. If price is below AVC, shut down; loss = fixed cost. If 6 > AVC, produce and minimize loss; here 6 < 7 → shut down.

6) Simple AS–AD Shock
- Demand shock: ↑G shifts AD right → higher short-run Y and P; with sticky wages, unemployment falls. Over time, expectations adjust; SRAS shifts left; Y returns near potential with higher P.

## 6) Rapid Checklists

Pricing Power
- Is demand inelastic? Differentiation? Switching costs? Capacity constraints among rivals?

Entry Deterrence
- Scale economies, learning curves, network effects, high capital requirements, access to distribution, regulation.

Game/Strategy
- Identify the players, actions, payoffs; compute best responses; check credibility of threats; if sequential, use backward induction.

Policy/Welfare
- Who bears the tax? Are there externalities? Is there DWL? What’s the equity vs efficiency tradeoff?

## 7) Practice Set (with concise answers)

1. If |Ed| = 0.4, a 10% price increase changes revenue by? Answer: +6% (inelastic, revenue rises; approx 10% − 0.4×10%).
2. With P = 50 − Q and MC = 10, monopoly Q and P? Answer: MR = 50 − 2Q = 10 → Q = 20; P = 30.
3. Tax of 5 on buyers shifts which curve? Answer: Demand down by 5 (or price intercept down by 5).
4. If AVC < P < ATC at Q*, produce? Answer: Yes in short run; minimize loss; do not exit until long run.
5. Cross-price elasticity +0.8 implies? Answer: Goods are substitutes.
6. Income elasticity −0.3 implies? Answer: Inferior good.
7. Break-even Q for P = 20, VC = 14, F = 1200? Answer: 1200/(20−14) = 200 units.
8. Cournot with a = 90, b = 1, c = 30: each firm’s q? Answer: (a−c)/(3b) = 60/3 = 20.
9. Third-degree PD: segment A Ed = −0.5, B Ed = −2; which pays higher P? Answer: Segment A (less elastic).
10. Money supply ↑ short run effect? Answer: AD↑ → output and prices rise; unemployment falls.
11. Real interest if nominal 5% and expected inflation 3%? Answer: ≈ 2%.
12. Price floor above equilibrium causes? Answer: Surplus, DWL, potential disposal.
13. For P = a − bQ, markup (P−MC)/P equals? Answer: −1/Ed (Lerner index relationship on linear demand at optimum).
14. In monopolistic competition long run, relative to perfect competition? Answer: Higher P, lower Q, excess capacity, zero economic profit.
15. Dominant strategy equilibrium existence implies? Answer: Predictable outcome; best regardless of rival; check mutual dominance.

— End —

