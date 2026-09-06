import type { Profile } from '../domain';
import { paydownRecommendation, utilization } from './financial';
export function analyzeFinancialProfile(profile: Profile) { const debt = utilization(profile.accounts); return { utilization: debt, paydown: paydownRecommendation(profile), paymentRate: Math.round((profile.onTimePayments / profile.totalPayments) * 100) }; }
export function explainMetric(metric: 'utilization' | 'score') { return metric === 'utilization' ? 'Utilization is the percentage of your revolving credit currently in use. Lower utilization can support your score.' : 'Financial Health is an educational score based on the account and payment data available to CreditFlow.'; }
