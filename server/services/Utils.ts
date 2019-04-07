type ModeChecker = () => boolean;
type getType = (any: any) => string;

export const getType: getType = (any) => Object.prototype.toString.call(any).slice(8, -1);
export const isProduction: ModeChecker = () => process.env.MODE === 'prod';
export const isDevelopment: ModeChecker = () => process.env.MODE === 'dev';
