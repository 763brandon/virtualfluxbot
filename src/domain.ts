export type Priority = 'high' | 'medium' | 'low';
export type ActionState = 'open' | 'done' | 'snoozed' | 'dismissed';
export interface Account { id: string; institution: string; type: string; balance: number; limit?: number; updated: string; status: 'Connected' | 'Manual'; }
export interface Payment { id: string; name: string; due: string; amount: number; account: string; state: 'upcoming' | 'complete' | 'snoozed'; }
export interface Goal { id: string; name: string; current: number; target: number; unit: 'currency' | 'percent' | 'score'; due: string; }
export interface Action { id: string; title: string; detail: string; impact: Priority; state: ActionState; category: string; }
export interface Insight { id: string; priority: Priority; title: string; detail: string; action: string; }
export interface Profile { score: number; previousScore: number; onTimePayments: number; totalPayments: number; accounts: Account[]; payments: Payment[]; goals: Goal[]; actions: Action[]; insights: Insight[]; }
