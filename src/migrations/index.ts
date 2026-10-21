import * as migration_20261021_101918_initial from './20261021_101918_initial';

export const migrations = [
  {
    up: migration_20261021_101918_initial.up,
    down: migration_20261021_101918_initial.down,
    name: '20261021_101918_initial'
  },
];
