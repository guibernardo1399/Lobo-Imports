const BASE = import.meta.env.BASE_URL || '/';

const getPath = (path: string) => {
  const cleanBase = BASE.endsWith('/') ? BASE : `${BASE}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
};

export const IMAGES = {
  logoFull: getPath('assets/logo_full_640.png'),
  logoSymbol: getPath('assets/logo_symbol_160.png'),
  ogLogoSymbol: getPath('assets/logo_symbol.png'),
  johnAnderson: getPath('assets/john_anderson_640.jpg'),
  delivery1: getPath('assets/delivery_1_640.jpg'),
  delivery2: getPath('assets/delivery_2_640.jpg'),
  delivery3: getPath('assets/delivery_3_640.jpg'),
  delivery4: getPath('assets/delivery_4_640.jpg'),
  iphone17ProMax: getPath('assets/iphone_17_pro_max_640.jpg'),
  iphone16ProMax: getPath('assets/iphone_16_pro_max_640.jpg'),
  macbookAirM5: getPath('assets/macbook_air_m5_640.jpg'),
  macbookAirM4: getPath('assets/macbook_air_m4_640.jpg'),
  garminFenix8: getPath('assets/garmin_fenix_8_640.jpg'),
  garminForerunner965: getPath('assets/garmin_forerunner_965_640.jpg'),
  ps5Slim: getPath('assets/ps5_slim_640.jpg'),
  xiaomi14Ultra: getPath('assets/xiaomi_14_ultra_640.jpg'),
  realme12Pro: getPath('assets/realme_12_pro_640.jpg')
};
