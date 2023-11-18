import { DataSource } from 'typeorm';
import { getConfig } from '../../config';

const ORM_CONFIG = getConfig('/ormConfig');

export const dataSource = new DataSource(ORM_CONFIG);
