import type { Account, Action, Profile } from '../domain';
export const currency = (amount: number) => new Intl.NumberFormat('en-GH', { style: 'currency', currency: 'GHS', maximumFractionDigits: 0 }).format(amount);
export function revolvingAccounts(accounts: Account[]) { return accounts.filter((account) => account.limit && account.limit > 0); }
export function utilization(accounts: Account[]) { const revolving = revolvingAccounts(accounts); const limits = revolving.reduce((sum, account) => sum + (account.limit ?? 0), 0); const used = revolving.reduce((sum, account) => sum + Math.max(account.balance, 0), 0); return { used, limits, percentage: limits ? Math.round((used / limits) * 100) : 0 }; }
export function paydownRecommendation(profile: Profile) { const data = utilization(profile.accounts); const target = Math.round(data.limits * 0.3); return Math.max(0, data.used - target); }
export function prioritizeActions(actions: Action[]) { const rank = { high: 3, medium: 2, low: 1 }; return [...actions].filter((action) => action.state !== 'dismissed').sort((a, b) => rank[b.impact] - rank[a.impact] || (a.state === 'open' ? -1 : 1)); }
export const scoreLabel = (score: number) => score >= 740 ? 'Excellent' : score >= 670 ? 'Good' : score >= 580 ? 'Fair' : 'Building';
