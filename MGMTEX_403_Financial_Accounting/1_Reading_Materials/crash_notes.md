# MGMTEX 403 — Financial Accounting: No‑Textbook Crash Notes

Purpose: Self-contained notes to pass a 3-hour online waiver exam. Read once, then practice problems intensively.

## Exam Playbook
- Start with what you know: Journal entries → Trial balance → Statements
- For ratios: Know formula, normal range, and what drives improvement
- Cash flows: Always use indirect method unless specified
- Time allocation: 1 hour fundamentals, 1 hour statements, 1 hour analysis/complex topics

## 1) Accounting Foundation

### The Equation That Rules Everything
**Assets = Liabilities + Equity**
- Expanded: A = L + (Common Stock + Retained Earnings)
- RE = Beginning RE + Net Income − Dividends
- Every transaction maintains this balance

### Debit/Credit System
| Account | Normal | Increase | Decrease |
|---------|---------|----------|----------|
| Assets | Debit | Debit | Credit |
| Liabilities | Credit | Credit | Debit |
| Equity | Credit | Credit | Debit |
| Revenue | Credit | Credit | Debit |
| Expenses | Debit | Debit | Credit |

**DEALER**: Dividends, Expenses, Assets = Debit normal; Liabilities, Equity, Revenue = Credit normal

### Journal Entry Framework
1. Identify accounts affected
2. Determine increase/decrease
3. Apply debit/credit rules
4. Verify: Debits = Credits

## 2) Financial Statements

### Income Statement Structure
```
Sales Revenue
− Cost of Goods Sold
= Gross Profit
− Operating Expenses (SG&A, Depreciation)
= Operating Income (EBIT)
+ Other Income
− Interest Expense
= Income Before Tax
− Tax Expense
= Net Income
```

### Balance Sheet Structure
```
ASSETS
Current: Cash, AR, Inventory, Prepaid
Non-current: PP&E (net), Intangibles
Total Assets

LIABILITIES & EQUITY
Current: AP, Accrued, Current LTD
Long-term: Bonds, Deferred Tax
Equity: Common Stock, APIC, RE, Treasury
Total L&E
```

### Cash Flow Statement (Indirect Method)
**Operating Activities:**
```
Net Income
+ Depreciation/Amortization
+ Losses (− Gains) on sales
− ↑Current Assets (except cash)
+ ↑Current Liabilities
= CFO
```

**Key adjustments:**
- AR↑ = collected < revenue → subtract
- Inventory↑ = bought > sold → subtract
- AP↑ = paid < expenses → add

**Investing:** PP&E purchases (−), asset sales (+)
**Financing:** Issue stock/debt (+), dividends (−), buybacks (−)

## 3) Key Accounting Topics

### Revenue Recognition (ASC 606)
1. Identify contract with customer
2. Identify performance obligations
3. Determine transaction price
4. Allocate price to obligations
5. Recognize when/as satisfied

**Point in time vs Over time** - Control transfer determines timing

### Inventory Accounting
| Method | Rising Prices | COGS | Ending Inv | Tax |
|--------|---------------|------|------------|-----|
| FIFO | First In First Out | Lower | Higher | Higher |
| LIFO | Last In First Out | Higher | Lower | Lower |

**Inventory Turnover** = COGS / Avg Inventory
**Days Inventory** = 365 / Turnover

### Depreciation Methods
- **Straight-line**: (Cost − Salvage) / Life
- **Double-declining**: Rate = 2/Life; Depreciation = BV × Rate
- **Units**: (Cost − Salvage) / Total Units × Current Units

### Bond Accounting
**Premium** (Coupon > Market):
- Cash > Interest Expense
- Difference reduces carrying value

**Discount** (Coupon < Market):
- Cash < Interest Expense
- Difference increases carrying value

**Effective Interest**: Interest Exp = Carrying Value × Market Rate

### Leases (Post-ASC 842)
**Finance Lease** (any one criterion):
- Ownership transfer
- Purchase option
- ≥75% of life
- PV ≥90% of FV
- Specialized asset

Both types on balance sheet; finance has interest + depreciation

## 4) Financial Analysis

### Liquidity Ratios
- **Current** = CA / CL (target: 1.5−2.0)
- **Quick** = (CA − Inventory) / CL (target: 1.0+)
- **Cash** = Cash / CL

### Activity/Efficiency
- **AR Turnover** = Sales / Avg AR
- **Days Sales Outstanding** = 365 / AR Turnover
- **Inventory Turnover** = COGS / Avg Inventory
- **Asset Turnover** = Sales / Avg Assets

### Leverage/Solvency
- **Debt-to-Equity** = Total Debt / Equity
- **Times Interest Earned** = EBIT / Interest
- **Debt Ratio** = Total Debt / Total Assets

### Profitability
- **Gross Margin** = Gross Profit / Sales
- **Operating Margin** = Operating Income / Sales
- **Net Margin** = Net Income / Sales
- **ROA** = Net Income / Avg Assets
- **ROE** = Net Income / Avg Equity

**DuPont**: ROE = Net Margin × Asset Turnover × Equity Multiplier

## 5) Common Adjusting Entries

### Accruals (earned/incurred but not yet cash)
- **Accrued Revenue**: DR AR, CR Revenue
- **Accrued Expense**: DR Expense, CR Payable

### Deferrals (cash first, earn/incur later)
- **Deferred Revenue**: DR Cash, CR Unearned Revenue
  - Later: DR Unearned, CR Revenue
- **Prepaid Expense**: DR Prepaid, CR Cash
  - Later: DR Expense, CR Prepaid

### Period-End Adjustments
- **Depreciation**: DR Depreciation Expense, CR Accumulated Depreciation
- **Bad Debt**: DR Bad Debt Expense, CR Allowance for Doubtful Accounts
- **Lower of Cost or Market**: DR Loss, CR Inventory

## 6) Worked Examples

### Example 1: Complete Transaction Flow
Company sells $10,000 merchandise (cost $6,000) on account, collects $7,000:

```
1) DR AR 10,000
   CR Sales 10,000

2) DR COGS 6,000
   CR Inventory 6,000

3) DR Cash 7,000
   CR AR 7,000
```

Impact: Income +4,000; Assets +4,000 (Cash +7,000, AR +3,000, Inv −6,000)

### Example 2: Bond Discount Amortization
$100,000 bond, 4% coupon, issued at 95, market rate 5%:

Semi-annual payment:
- Cash payment = 100,000 × 4% × 0.5 = 2,000
- Interest expense = 95,000 × 5% × 0.5 = 2,375
- Discount amortization = 375

```
DR Interest Expense 2,375
CR Discount on Bonds 375
CR Cash 2,000
```

### Example 3: Cash Flow Adjustments
Net Income = 50,000
Depreciation = 8,000
AR increased 5,000
Inventory decreased 3,000
AP decreased 2,000

CFO calculation:
```
Net Income         50,000
+ Depreciation      8,000
− AR increase      (5,000)
+ Inventory decrease 3,000
− AP decrease      (2,000)
= CFO              54,000
```

### Example 4: Inventory FIFO/LIFO
Beginning: 100 @ $10 = $1,000
Purchase 1: 200 @ $12 = $2,400
Purchase 2: 150 @ $15 = $2,250
Available: 450 units = $5,650
Sold: 300 units

**FIFO COGS**: 100@$10 + 200@$12 = $3,400
**LIFO COGS**: 150@$15 + 150@$12 = $4,050
**Difference**: $650 (LIFO higher COGS, lower tax in inflation)

### Example 5: Ratio Analysis
Current Assets = 500,000; Current Liabilities = 250,000
Inventory = 150,000; Cash = 50,000
Sales = 2,000,000; COGS = 1,200,000
Net Income = 180,000; Total Assets = 1,500,000

- Current Ratio = 500,000/250,000 = 2.0 ✓
- Quick Ratio = 350,000/250,000 = 1.4 ✓
- Inventory Turnover = 1,200,000/150,000 = 8 times
- Net Margin = 180,000/2,000,000 = 9%
- ROA = 180,000/1,500,000 = 12%

## 7) Rapid Practice Problems

1. **Journal Entry**: Buy equipment $50,000, pay 20% cash, finance rest
   - DR Equipment 50,000; CR Cash 10,000; CR Note Payable 40,000

2. **Adjusting Entry**: $12,000 insurance paid July 1 for one year, year-end Dec 31
   - 6 months used: DR Insurance Expense 6,000; CR Prepaid Insurance 6,000

3. **Closing Entry**: Revenue $100,000, Expenses $70,000
   - DR Revenue 100,000; CR Income Summary 100,000
   - DR Income Summary 70,000; CR Expenses 70,000
   - DR Income Summary 30,000; CR Retained Earnings 30,000

4. **Cash Flow**: Net Income $40,000, Depreciation $5,000, AR increased $8,000
   - CFO = 40,000 + 5,000 − 8,000 = $37,000

5. **FIFO vs LIFO**: 100@$5, buy 200@$7, sell 150. COGS?
   - FIFO: 100@$5 + 50@$7 = $850
   - LIFO: 150@$7 = $1,050

6. **Depreciation**: Asset $40,000, salvage $4,000, 6-year life, year 2 DDB?
   - Rate = 2/6 = 33.33%
   - Year 1: 40,000 × 0.3333 = 13,333; BV = 26,667
   - Year 2: 26,667 × 0.3333 = $8,889

7. **Bond Premium**: $100,000, 6% coupon, issued at 103, market 5%. First payment?
   - Cash = 3,000; Interest = 103,000 × 0.025 = 2,575
   - DR Interest 2,575; DR Premium 425; CR Cash 3,000

8. **Current Ratio Impact**: Buy inventory $10,000 on account. Current ratio was 2.0
   - Both CA and CL increase equally; ratio decreases (moves toward 1.0)

9. **Revenue Recognition**: 2-year service contract $24,000 paid upfront
   - Monthly: DR Unearned Revenue 1,000; CR Revenue 1,000

10. **ROE Calculation**: NI = $50,000, Beginning Equity = $400,000, Ending = $450,000
    - ROE = 50,000 / 425,000 = 11.76%

## 8) Exam Time Management

### Hour 1: Fundamentals (40% of points)
- Journal entries (15 min)
- Adjusting entries (15 min)
- Statement preparation (30 min)

### Hour 2: Analysis (35% of points)
- Ratio calculations (20 min)
- Cash flow statement (25 min)
- Trend analysis (15 min)

### Hour 3: Complex Topics (25% of points)
- Revenue recognition scenarios (20 min)
- Consolidation basics (20 min)
- Review and check (20 min)

## Final 30-Minute Checklist
- [ ] DEALER mnemonic solid
- [ ] Can prepare all 3 statements from trial balance
- [ ] Know all ratio formulas
- [ ] Understand indirect cash flow adjustments
- [ ] FIFO vs LIFO effects clear
- [ ] Bond premium/discount mechanics
- [ ] Revenue recognition 5 steps

— End —