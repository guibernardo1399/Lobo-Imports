const BASE = import.meta.env.BASE_URL || '/';

const getPath = (path: string) => {
  const cleanBase = BASE.endsWith('/') ? BASE : `${BASE}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
};

export const IMAGES = {
  logoFull: getPath('assets/logo_full.png'),
  logoSymbol: getPath('assets/logo_symbol.png'),
  johnAnderson: getPath('assets/john_anderson.jpg'),
  delivery1: getPath('assets/delivery_1.jpg'),
  delivery2: getPath('assets/delivery_2.jpg'),
  delivery3: getPath('assets/delivery_3.jpg'),
  delivery4: getPath('assets/delivery_4.jpg'),
  iphone17ProMax: getPath('assets/iphone_17_pro_max.jpg'),
  iphone16ProMax: getPath('assets/iphone_16_pro_max.jpg'),
  macbookAirM5: getPath('assets/macbook_air_m5.jpg'),
  macbookAirM4: getPath('assets/macbook_air_m4.jpg'),
  garminFenix8: getPath('assets/garmin_fenix_8.jpg'),
  garminForerunner965: getPath('assets/garmin_forerunner_965.jpg'),
  ps5Slim: getPath('assets/ps5_slim.jpg'),
  xiaomi14Ultra: getPath('assets/xiaomi_14_ultra.jpg'),
  realme12Pro: getPath('assets/realme_12_pro.jpg')
};
