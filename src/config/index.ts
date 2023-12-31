import { Store } from 'confidence';
import { ormConfig } from './ormconfig';

const doc = {
  port: { $env: 'PORT' },
  saltRounds: { $env: 'SALT_ROUNDS' },
  ormConfig,
};

const store = new Store(doc);

export const getConfig = (key: string) => store.get(key);
