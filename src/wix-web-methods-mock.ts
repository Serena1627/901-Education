export const Permissions = { Anyone: 'Anyone', SiteMember: 'SiteMember' };
export const webMethod = (permission: string, fn: Function) => fn;