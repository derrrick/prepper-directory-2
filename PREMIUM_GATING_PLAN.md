# Premium Content Gating Strategy

## Overview
This document outlines the comprehensive strategy for gating premium content across the Prepper Directory website. The goal is to provide value to free users while creating compelling reasons to upgrade to premium ($9/month or $79/year).

## Technical Infrastructure

### Current Setup ✅
- **Supabase Database**: `profiles` table with `subscription_status` field ("premium" or "free")
- **Stripe Integration**: Webhooks handle subscription lifecycle (create, update, cancel)
- **Authentication**: Supabase Auth with email/password
- **Account Page**: Shows subscription status and management

### New Components Created ✅
1. **`useSubscription()` Hook** (`hooks/use-subscription.ts`)
   - Client-side hook to check user's premium status
   - Returns: `{ isPremium, isLoading, user, subscriptionEndsAt }`
   - Automatically updates on auth state changes

2. **`<PremiumGate>` Component** (`components/premium-gate.tsx`)
   - Wraps premium content with access control
   - Shows blur effect + lock icon for non-premium users
   - Triggers upgrade modal on click
   - Props: `blur`, `showLock`, `feature`, `fallback`

3. **`<PremiumModal>` Component** (`components/premium-modal.tsx`)
   - Upgrade prompt with feature highlights
   - Shows pricing ($9/month or $79/year)
   - Links to premium page for checkout

## Content Gating Strategy

### Tools Page (`/tools`)

**FREE Features:**
- ✅ Basic Food Storage Calculator
- ✅ Basic Water Storage Calculator  
- ✅ Emergency Kit Checklists (3 types)
- ✅ Budget estimates (basic)
- ✅ Storage space estimates (basic)

**PREMIUM Features (Gated):**
- 🔒 Multi-Scenario Planning
  - Plan for multiple threats simultaneously
  - Compare scenarios side-by-side
  - Export comprehensive reports
  
- 🔒 Inventory Management System
  - Track current supplies with quantities
  - Expiry date tracking and rotation alerts
  - Shopping list generation based on gaps
  - Barcode scanning (future)
  
- 🔒 Budget Optimization
  - Find cheapest options while meeting nutritional needs
  - Price comparison across retailers
  - Bulk buying recommendations
  
- 🔒 Location-Based Risk Assessment
  - Zip code specific threat analysis
  - Local resource mapping
  - Evacuation route planning
  
- 🔒 Custom Meal Planning
  - 30-day meal plans with recipes
  - Dietary restriction support
  - Nutritional breakdown
  - Printable shopping lists

**Implementation:**
\`\`\`tsx
<PremiumGate feature="multi-scenario planning" blur={true}>
  <MultiScenarioPlanner />
</PremiumGate>
\`\`\`

### Blog Page (`/blog`)

**FREE Content:**
- ✅ All beginner/intermediate articles
- ✅ Product reviews and comparisons
- ✅ Basic how-to guides
- ✅ Weekly preparedness tips
- ✅ First 2-3 paragraphs of premium posts (teaser)

**PREMIUM Content (Gated):**
- 🔒 Monthly In-Depth Threat Analysis Reports
  - "2025 Threat Landscape Analysis"
  - "Economic Collapse Indicators to Watch"
  - "Geopolitical Risk Assessment"
  
- 🔒 Expert Interview Series
  - Former military strategists
  - Survival instructors
  - Medical professionals
  
- 🔒 Advanced Strategy Guides
  - "Building a Faraday Cage: Complete Guide"
  - "Advanced Medical Training for Preppers"
  - "Off-Grid Power Systems Design"

**Implementation:**
\`\`\`tsx
// Show teaser, then gate full content
{post.isPremium ? (
  <>
    <div>{post.excerpt}</div>
    <PremiumGate feature="this full article" showLock={false}>
      <div className="prose">{post.fullContent}</div>
    </PremiumGate>
  </>
) : (
  <div className="prose">{post.fullContent}</div>
)}
\`\`\`

### Guides Page (`/guides`)

**FREE Guides:**
- ✅ Beginner's Guide to Prepping
- ✅ 72-Hour Emergency Kit Essentials
- ✅ Water Purification Methods
- ✅ Basic Food Storage
- ✅ Home Security Basics

**PREMIUM Guides (Gated):**
- 🔒 Advanced Guides
  - Building a Faraday Cage
  - Advanced Medical Training
  - Off-Grid Power Systems
  - Tactical Communication Systems
  - Advanced Shelter Construction
  
- 🔒 Downloadable PDF Versions
  - All guides available as printable PDFs
  - Includes checklists and worksheets
  - Offline access
  
- 🔒 Video Course Series
  - Step-by-step video tutorials
  - Expert demonstrations
  - Q&A sessions

**Implementation:**
\`\`\`tsx
{guide.isPremium && (
  <Badge className="ml-2">
    <Crown className="h-3 w-3 mr-1" />
    Premium
  </Badge>
)}

// On guide detail page
{guide.isPremium ? (
  <PremiumGate feature="this advanced guide">
    <GuideContent content={guide.content} />
  </PremiumGate>
) : (
  <GuideContent content={guide.content} />
)}
\`\`\`

### Gear Page (`/gear`)

**FREE Content:**
- ✅ All basic gear reviews
- ✅ Product comparisons (basic table)
- ✅ Affiliate links (drives revenue)
- ✅ User ratings and comments

**PREMIUM Features (Gated):**
- 🔒 Advanced Comparison Matrices
  - Detailed scoring system (durability, value, performance)
  - Side-by-side spec comparisons
  - Expert ratings and analysis
  
- 🔒 Video Reviews & Field Testing
  - Hands-on testing footage
  - Long-term durability reports
  - Real-world scenario testing
  
- 🔒 Exclusive Gear Deals
  - Member-only discounts
  - Early access to sales
  - Bundle recommendations

**Implementation:**
\`\`\`tsx
<Tabs defaultValue="basic">
  <TabsList>
    <TabsTrigger value="basic">Basic Comparison</TabsTrigger>
    <TabsTrigger value="advanced">
      Advanced Analysis
      <Crown className="h-3 w-3 ml-1" />
    </TabsTrigger>
  </TabsList>
  
  <TabsContent value="basic">
    <BasicComparisonTable />
  </TabsContent>
  
  <TabsContent value="advanced">
    <PremiumGate feature="advanced gear analysis">
      <AdvancedComparisonMatrix />
    </PremiumGate>
  </TabsContent>
</Tabs>
\`\`\`

## User Experience Flow

### For Free Users:
1. Browse site freely, access all basic content
2. Encounter premium features with clear visual indicators (lock icon, blur)
3. Click on premium feature → See upgrade modal with benefits
4. Click "View Premium Plans" → Go to `/premium` page
5. Choose plan → Stripe checkout → Redirect to `/account?success=true`
6. All premium content now unlocked

### For Premium Users:
1. Sign in → Subscription status checked automatically
2. All premium content visible and accessible
3. No interruptions or upgrade prompts
4. Badge on account page showing premium status
5. Manage subscription via Stripe Customer Portal

## Conversion Optimization

### Key Principles:
1. **Show, Don't Hide**: Display premium features with blur/lock so users know what they're missing
2. **Clear Value Prop**: Each gated feature explains specific benefits
3. **Friction-Free Upgrade**: One-click from any premium gate to checkout
4. **No Bait-and-Switch**: Free features remain genuinely useful
5. **Social Proof**: Show number of premium members, testimonials

### A/B Testing Opportunities:
- Blur intensity (50% vs 80% opacity)
- Lock icon size and placement
- Modal copy and feature highlights
- Pricing display (monthly vs annual emphasis)
- Free trial offer (7-day trial vs no trial)

## Implementation Checklist

### Phase 1: Core Infrastructure ✅
- [x] Create `useSubscription()` hook
- [x] Create `<PremiumGate>` component
- [x] Create `<PremiumModal>` component
- [x] Update pricing in `lib/products.ts`

### Phase 2: Tools Page Gating
- [ ] Add premium tabs for advanced features
- [ ] Implement multi-scenario planner (premium)
- [ ] Implement inventory management (premium)
- [ ] Implement budget optimizer (premium)
- [ ] Implement location-based risk assessment (premium)
- [ ] Implement custom meal planner (premium)

### Phase 3: Blog Page Gating
- [ ] Add `isPremium` field to blog posts
- [ ] Mark specific posts as premium
- [ ] Implement teaser + paywall for premium posts
- [ ] Add premium badge to post cards

### Phase 4: Guides Page Gating
- [ ] Add `isPremium` field to guides
- [ ] Mark advanced guides as premium
- [ ] Add premium badge to guide cards
- [ ] Implement PDF download feature (premium)
- [ ] Add video course section (premium)

### Phase 5: Gear Page Enhancements
- [ ] Create advanced comparison matrix component
- [ ] Add video review section (premium)
- [ ] Implement exclusive deals section (premium)
- [ ] Add expert scoring system (premium)

### Phase 6: Analytics & Optimization
- [ ] Track premium gate interactions
- [ ] Track conversion rates from gates to checkout
- [ ] A/B test modal copy and design
- [ ] Monitor churn and retention
- [ ] Collect user feedback on premium value

## Success Metrics

### Key Performance Indicators:
- **Conversion Rate**: % of free users who upgrade to premium
- **Gate Interaction Rate**: % of users who click on premium gates
- **Modal Conversion**: % of modal views that lead to checkout
- **Retention Rate**: % of premium users who renew monthly/annually
- **Churn Rate**: % of premium users who cancel
- **Average Revenue Per User (ARPU)**
- **Customer Lifetime Value (CLV)**

### Target Goals (First 6 Months):
- 5% conversion rate from free to premium
- 30% gate interaction rate
- 15% modal-to-checkout conversion
- 85% monthly retention rate
- $150 average CLV

## Future Enhancements

### Potential Premium Features:
- Mobile app with offline access
- Community forum with expert Q&A
- Live webinars and workshops
- One-on-one expert consultations
- Custom preparedness plans
- Automated supply rotation reminders
- Integration with smart home devices
- Barcode scanning for inventory
- Location-based emergency alerts

### Pricing Tiers (Future):
- **Free**: Basic tools and content
- **Premium** ($9/mo): All current premium features
- **Pro** ($19/mo): + Community access, webinars, consultations
- **Enterprise** (Custom): For organizations, teams, communities

## Support & Documentation

### User Support:
- FAQ section on premium page
- Email support for billing questions
- Stripe Customer Portal for self-service
- Refund policy (30-day money-back guarantee)

### Developer Documentation:
- Component API documentation
- Integration testing guide
- Webhook testing procedures
- Database schema documentation

---

**Last Updated**: January 2025  
**Owner**: Development Team  
**Status**: Phase 1 Complete, Phase 2-6 In Progress
