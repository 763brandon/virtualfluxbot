import type { Account, Profile } from '../domain';
export interface FinancialProvider { connectAccount(): Promise<Account[]>; disconnectAccount(id: string): Promise<void>; fetchAccounts(): Promise<Account[]>; fetchProfile(): Promise<Profile>; refreshData(): Promise<Profile>; }
