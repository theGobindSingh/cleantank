import * as migration_20261021_101918_initial from './20261021_101918_initial';
import * as migration_20261021_181258_pages from './20261021_181258_pages';
import * as migration_20261022_162357_process from './20261022_162357_process';
import * as migration_20261022_163707_process_drop_text from './20261022_163707_process_drop_text';
import * as migration_20261023_102606_clients from './20261023_102606_clients';
import * as migration_20261023_104818_clients_band from './20261023_104818_clients_band';
import * as migration_20261023_124158_audiences from './20261023_124158_audiences';
import * as migration_20261023_133243_trust_band from './20261023_133243_trust_band';
import * as migration_20261023_140040_testimonials from './20261023_140040_testimonials';
import * as migration_20261026_072952_process_page from './20261026_072952_process_page';
import * as migration_20261026_160615_about_page from './20261026_160615_about_page';
import * as migration_20261027_091859_credentials_from_site from './20261027_091859_credentials_from_site';
import * as migration_20261028_114430_service_area_block from './20261028_114430_service_area_block';
import * as migration_20261028_132838_client_certificates from './20261028_132838_client_certificates';
import * as migration_20261028_142411_testimonial_name_optional from './20261028_142411_testimonial_name_optional';

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
    name: '20261022_163707_process_drop_text',
  },
  {
    up: migration_20261023_102606_clients.up,
    down: migration_20261023_102606_clients.down,
    name: '20261023_102606_clients',
  },
  {
    up: migration_20261023_104818_clients_band.up,
    down: migration_20261023_104818_clients_band.down,
    name: '20261023_104818_clients_band',
  },
  {
    up: migration_20261023_124158_audiences.up,
    down: migration_20261023_124158_audiences.down,
    name: '20261023_124158_audiences',
  },
  {
    up: migration_20261023_133243_trust_band.up,
    down: migration_20261023_133243_trust_band.down,
    name: '20261023_133243_trust_band',
  },
  {
    up: migration_20261023_140040_testimonials.up,
    down: migration_20261023_140040_testimonials.down,
    name: '20261023_140040_testimonials',
  },
  {
    up: migration_20261026_072952_process_page.up,
    down: migration_20261026_072952_process_page.down,
    name: '20261026_072952_process_page',
  },
  {
    up: migration_20261026_160615_about_page.up,
    down: migration_20261026_160615_about_page.down,
    name: '20261026_160615_about_page',
  },
  {
    up: migration_20261027_091859_credentials_from_site.up,
    down: migration_20261027_091859_credentials_from_site.down,
    name: '20261027_091859_credentials_from_site',
  },
  {
    up: migration_20261028_114430_service_area_block.up,
    down: migration_20261028_114430_service_area_block.down,
    name: '20261028_114430_service_area_block',
  },
  {
    up: migration_20261028_132838_client_certificates.up,
    down: migration_20261028_132838_client_certificates.down,
    name: '20261028_132838_client_certificates',
  },
  {
    up: migration_20261028_142411_testimonial_name_optional.up,
    down: migration_20261028_142411_testimonial_name_optional.down,
    name: '20261028_142411_testimonial_name_optional',
  },
];
