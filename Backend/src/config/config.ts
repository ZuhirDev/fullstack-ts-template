import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const envSchema = z.object({
    PORT: z.coerce.number().int().positive().default(3000),
});

const parsed = envSchema.safeParse(process.env);
if (!parsed.success) {
    console.error('Invalid environment variables:');
    console.error(z.treeifyError(parsed.error));
    throw new Error('Invalid environment variables');
}

const env = parsed.data;

export interface AppConfig {
    PORT: number;
}

const CONFIG: AppConfig = {
    PORT: env.PORT,
};

export default CONFIG;