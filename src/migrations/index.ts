import * as migration_20261021_101918_initial from './20261021_101918_initial';
import * as migration_20261021_181258_pages from './20261021_181258_pages';

export const migrations = [
  {
    up: migration_20261021_101918_initial.up,
    down: migration_20261021_101918_initial.down,
    name: '20261021_101918_initial',
  },
  {
    up: migration_20261021_181258_pages.up,
    down: migration_20261021_181258_pages.down,
    name: '20261021_181258_pages'
  },
];
