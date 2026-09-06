import type { Profile } from '../domain';
import type { FinancialProvider } from './provider';
const demo: Profile = {
  score: 742, previousScore: 724, onTimePayments: 31, totalPayments: 32,
  accounts: [
    { id: 'a1', institution: 'Fidelity Bank', type: 'Credit card', balance: 4080, limit: 6000, updated: 'Today, 09:24', status: 'Connected' },
    { id: 'a2', institution: 'Ecobank', type: 'Savings', balance: 12650, updated: 'Today, 09:24', status: 'Connected' },
    { id: 'a3', institution: 'MTN MoMo', type: 'Wallet', balance: 840, updated: 'Yesterday', status: 'Manual' }
  ],
  payments: [{ id: 'p1', name: 'Fidelity card minimum', due: 'Sep 9', amount: 420, account: 'Fidelity Bank', state: 'upcoming' }, { id: 'p2', name: 'Internet service', due: 'Sep 12', amount: 280, account: 'Ecobank', state: 'upcoming' }],
  goals: [{ id: 'g1', name: 'Lower card utilization', current: 68, target: 30, unit: 'percent', due: 'Dec 2026' }, { id: 'g2', name: 'Emergency fund', current: 12650, target: 18000, unit: 'currency', due: 'Mar 2027' }],
  actions: [{ id: 'ac1', title: 'Reduce credit utilization', detail: 'Pay GH₵2,280 toward your Fidelity card to reach 30% utilization.', impact: 'high', state: 'open', category: 'Utilization' }, { id: 'ac2', title: 'Protect your payment streak', detail: 'Your Fidelity card minimum is due in 3 days.', impact: 'high', state: 'open', category: 'Payments' }, { id: 'ac3', title: 'Build your emergency reserve', detail: 'Move GH₵750 after your next payday.', impact: 'medium', state: 'open', category: 'Savings' }],
  insights: [{ id: 'i1', priority: 'high', title: 'Utilization needs attention', detail: 'Your revolving balance is 68% of your available credit, above the 30% target.', action: 'See payoff plan' }, { id: 'i2', priority: 'medium', title: 'A stronger month', detail: 'Your financial health improved for the third month in a row.', action: 'View score history' }, { id: 'i3', priority: 'high', title: 'Payment due soon', detail: 'A GH₵420 card payment is due Sep 9.', action: 'Set reminder' }]
};
const clone = () => structuredClone(demo);
export class SandboxProvider implements FinancialProvider { async connectAccount() { return clone().accounts; } async disconnectAccount() {} async fetchAccounts() { return clone().accounts; } async fetchProfile() { return clone(); } async refreshData() { return clone(); } }
