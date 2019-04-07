type ModeChecker = () => boolean;

export const isProduction: ModeChecker = () => process.env.MODE === 'prod';

