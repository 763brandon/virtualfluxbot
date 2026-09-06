import test from 'node:test';
import assert from 'node:assert/strict';
import { paydownRecommendation, prioritizeActions, utilization } from '../src/services/financial.ts';
import type { Action, Profile } from '../src/domain.ts';
const profile = { accounts: [{ id: '1', institution: 'Bank', type: 'Credit', balance: 6800, limit: 10000, updated: '', status: 'Connected' }] } as Profile;
test('calculates utilization from revolving accounts only', () => assert.deepEqual(utilization(profile.accounts), { used: 6800, limits: 10000, percentage: 68 }));
test('recommends deterministic 30 percent utilization paydown', () => assert.equal(paydownRecommendation(profile), 3800));
test('prioritizes open high impact actions', () => { const actions: Action[] = [{ id: 'a', title: '', detail: '', impact: 'low', state: 'open', category: '' }, { id: 'b', title: '', detail: '', impact: 'high', state: 'open', category: '' }, { id: 'c', title: '', detail: '', impact: 'high', state: 'done', category: '' }]; assert.deepEqual(prioritizeActions(actions).map((a) => a.id), ['b', 'c', 'a']); });
