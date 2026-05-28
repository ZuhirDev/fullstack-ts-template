import { z } from 'zod';

const envSchema = z.object({
    VITE_BACKEND_URL: z.string().default(''),
});

const parsed = envSchema.safeParse(import.meta.env);
if (!parsed.success) {
    console.error('Invalid environment variables:');
    console.error(z.treeifyError(parsed.error));
    throw new Error('Invalid environment variables');
}

const env = parsed.data;

export interface AppConfig {
    BACKEND_URL: string;
}

const CONFIG: AppConfig = {
    BACKEND_URL: env.VITE_BACKEND_URL,
};

export default CONFIG;