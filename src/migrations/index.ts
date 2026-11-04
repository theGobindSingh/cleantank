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
import * as migration_20261028_172219_price_list_block from './20261028_172219_price_list_block';
import * as migration_20261030_153216_hero_highlight from './20261030_153216_hero_highlight';
import * as migration_20261030_155423_value_prop_block from './20261030_155423_value_prop_block';
import * as migration_20261030_170357_value_prop_highlight from './20261030_170357_value_prop_highlight';
import * as migration_20261030_170745_value_prop_second_image from './20261030_170745_value_prop_second_image';
import * as migration_20261030_194036_process_benefit_highlight from './20261030_194036_process_benefit_highlight';
import * as migration_20261030_205012_heading_highlight from './20261030_205012_heading_highlight';
import * as migration_20261030_212213_value_prop_image_url from './20261030_212213_value_prop_image_url';
import * as migration_20261103_110603_trust_band_figure_source from './20261103_110603_trust_band_figure_source';
import * as migration_20261103_112948_client_logo_link from './20261103_112948_client_logo_link';
import * as migration_20261103_113730_media_folders from './20261103_113730_media_folders';
import * as migration_20261103_174127_value_prop_list from './20261103_174127_value_prop_list';
import * as migration_20261104_171328_home_prices_global from './20261104_171328_home_prices_global';
import * as migration_20261104_184510_value_prop_rich_text from './20261104_184510_value_prop_rich_text';

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
  {
    up: migration_20261028_172219_price_list_block.up,
    down: migration_20261028_172219_price_list_block.down,
    name: '20261028_172219_price_list_block',
  },
  {
    up: migration_20261030_153216_hero_highlight.up,
    down: migration_20261030_153216_hero_highlight.down,
    name: '20261030_153216_hero_highlight',
  },
  {
    up: migration_20261030_155423_value_prop_block.up,
    down: migration_20261030_155423_value_prop_block.down,
    name: '20261030_155423_value_prop_block',
  },
  {
    up: migration_20261030_170357_value_prop_highlight.up,
    down: migration_20261030_170357_value_prop_highlight.down,
    name: '20261030_170357_value_prop_highlight',
  },
  {
    up: migration_20261030_170745_value_prop_second_image.up,
    down: migration_20261030_170745_value_prop_second_image.down,
    name: '20261030_170745_value_prop_second_image',
  },
  {
    up: migration_20261030_194036_process_benefit_highlight.up,
    down: migration_20261030_194036_process_benefit_highlight.down,
    name: '20261030_194036_process_benefit_highlight',
  },
  {
    up: migration_20261030_205012_heading_highlight.up,
    down: migration_20261030_205012_heading_highlight.down,
    name: '20261030_205012_heading_highlight',
  },
  {
    up: migration_20261030_212213_value_prop_image_url.up,
    down: migration_20261030_212213_value_prop_image_url.down,
    name: '20261030_212213_value_prop_image_url',
  },
  {
    up: migration_20261103_110603_trust_band_figure_source.up,
    down: migration_20261103_110603_trust_band_figure_source.down,
    name: '20261103_110603_trust_band_figure_source',
  },
  {
    up: migration_20261103_112948_client_logo_link.up,
    down: migration_20261103_112948_client_logo_link.down,
    name: '20261103_112948_client_logo_link',
  },
  {
    up: migration_20261103_113730_media_folders.up,
    down: migration_20261103_113730_media_folders.down,
    name: '20261103_113730_media_folders',
  },
  {
    up: migration_20261103_174127_value_prop_list.up,
    down: migration_20261103_174127_value_prop_list.down,
    name: '20261103_174127_value_prop_list',
  },
  {
    up: migration_20261104_171328_home_prices_global.up,
    down: migration_20261104_171328_home_prices_global.down,
    name: '20261104_171328_home_prices_global',
  },
  {
    up: migration_20261104_184510_value_prop_rich_text.up,
    down: migration_20261104_184510_value_prop_rich_text.down,
    name: '20261104_184510_value_prop_rich_text'
  },
];
