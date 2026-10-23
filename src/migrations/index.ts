import * as migration_20261021_101918_initial from './20261021_101918_initial';
import * as migration_20261021_181258_pages from './20261021_181258_pages';
import * as migration_20261022_162357_process from './20261022_162357_process';
import * as migration_20261022_163707_process_drop_text from './20261022_163707_process_drop_text';

export const migrations = [
  {
    up: migration_20261021_101918_initial.up,
    down: migration_20261021_101918_initial.down,
    name: '20261021_101918_initial',
  },
  {
    up: migration_20261021_181258_pages.up,
    down: migration_20261021_181258_pages.down,
    name: '20261021_181258_pages',
  },
  {
    up: migration_20261022_162357_process.up,
    down: migration_20261022_162357_process.down,
    name: '20261022_162357_process',
  },
  {
    up: migration_20261022_163707_process_drop_text.up,
    down: migration_20261022_163707_process_drop_text.down,
    name: '20261022_163707_process_drop_text'
  },
];
