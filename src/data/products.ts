export interface Product {
  id: string;
  name: string;
  category: 'apple' | 'garmin' | 'games' | 'xiaomi-realme';
  description: string;
  price: string;
  retailPrice: string;
  imageUrl: string;
  tags: string[];
  specs: string[];
}

export const productsData: Product[] = [
  {
    id: 'iphone-17-pro-max',
    name: 'iPhone 17 Pro Max 256GB',
    category: 'apple',
    description: 'O ápice da engenharia móvel com o revolucionário chip de 2nm. Chassi de titânio ultra leve e câmera periscópica avançada com zoom de alta definição.',
    price: 'Preço sob consulta',
    retailPrice: '',
    imageUrl: '/assets/iphone_17_pro_max.jpg',
    tags: ['Titânio Deserto', 'Garantia Apple de 1 ano', 'Pronta Entrega'],
    specs: ['Chip A19 Pro', 'Nova Tela Super Retina XDR', 'Câmera Periscópio Avançada']
  },
  {
    id: 'iphone-16-pro-max',
    name: 'iPhone 16 Pro Max 256GB',
    category: 'apple',
    description: 'A obra-prima da Apple com chassi reforçado em titânio grau 5. Nova tela de 6.9\" com bordas ultra-finas e botão de Controle de Câmera capacitivo.',
    price: 'Preço sob consulta',
    retailPrice: '',
    imageUrl: '/assets/iphone_16_pro_max.jpg',
    tags: ['Titânio Natural', 'Garantia Apple de 1 ano', 'Pronta Entrega'],
    specs: ['Chip A18 Pro', 'Tela Super Retina de 6.9"', 'Controle de Câmera Tátil']
  },
  {
    id: 'macbook-air-m5',
    name: 'MacBook Air 15" M5',
    category: 'apple',
    description: 'Design ultra-fino icônico com o poder extremo do novíssimo chip M5. Desempenho profissional silencioso e bateria impressionante para o dia inteiro.',
    price: 'Preço sob consulta',
    retailPrice: '',
    imageUrl: '/assets/macbook_air_m5.jpg',
    tags: ['Space Gray', 'Até 20h de Bateria', 'Garantia Global Apple'],
    specs: ['Chip Apple M5', '16GB de RAM Unificada', '512GB SSD Ultrarrápido']
  },
  {
    id: 'macbook-air-m4',
    name: 'MacBook Air 13" M4',
    category: 'apple',
    description: 'Portabilidade extrema e desempenho rápido com o chip M4. Estrutura de alumínio leve, silenciosa e com suporte integrado para inteligência artificial.',
    price: 'Preço sob consulta',
    retailPrice: '',
    imageUrl: '/assets/macbook_air_m4.jpg',
    tags: ['Estelar', '18h de Bateria', 'Design Silencioso'],
    specs: ['Chip Apple M4', 'Design Ultra Leve de 1.2kg', 'Suporte a Telas Externas']
  },
  {
    id: 'garmin-fenix-8',
    name: 'Garmin Fênix 8 Solar',
    category: 'garmin',
    description: 'O relógio inteligente multiesporte definitivo com lente Power Sapphire para carregamento solar e bisel robusto em titânio. Mapas avançados integrados.',
    price: 'Preço sob consulta',
    retailPrice: '',
    imageUrl: '/assets/garmin_fenix_8.jpg',
    tags: ['Carregamento Solar', 'GPS Multibanda', 'Resistente 100m'],
    specs: ['Luz de lanterna LED integrada', 'Sensor Cardíaco Gen 5', 'Tela AMOLED Colorida']
  },
  {
    id: 'garmin-forerunner-965',
    name: 'Garmin Forerunner 965 OLED',
    category: 'garmin',
    description: 'O smartwatch de corrida e triatlo premium com tela colorida AMOLED brilhante de 1.4\". Métricas avançadas de treinamento para maximizar o seu rendimento.',
    price: 'Preço sob consulta',
    retailPrice: '',
    imageUrl: '/assets/garmin_forerunner_965.jpg',
    tags: ['Tela AMOLED', 'Bisel de Titânio', 'Mapas Coloridos'],
    specs: ['Até 23 dias de bateria', 'Dinâmicas de Corrida no Pulso', 'Status de VFC e Prontidão']
  },
  {
    id: 'playstation-5-slim-bundle',
    name: 'PlayStation 5 Slim 1TB',
    category: 'games',
    description: 'Experimente carregamento ultra-rápido com um SSD de altíssima velocidade e feedback tátil incrível do controle DualSense.',
    price: 'Preço sob consulta',
    retailPrice: '',
    imageUrl: '/assets/ps5_slim.jpg',
    tags: ['Leitor Físico', 'Controle DualSense', 'Garantia Oficial'],
    specs: ['SSD Especializado de 1TB', 'Resolução 4K a 120 FPS', 'Tecnologia HDR e Ray Tracing']
  },
  {
    id: 'xiaomi-14-ultra',
    name: 'Xiaomi 14 Ultra 512GB',
    category: 'xiaomi-realme',
    description: 'O smartphone com as lentes óticas mais avançadas do mundo, co-desenvolvidas pela Leica. Sensor gigante de 1 polegada para fotos cinematográficas.',
    price: 'Preço sob consulta',
    retailPrice: '',
    imageUrl: '/assets/xiaomi_14_ultra.jpg',
    tags: ['Lentes Leica Summilux', 'Carga Ultra de 90W', '512GB Interno'],
    specs: ['Processador Snapdragon 8 Gen 3', 'Sensor de Câmera de 1 Polegada', 'Tela AMOLED WQHD+ 120Hz']
  },
  {
    id: 'realme-12-pro-plus',
    name: 'Realme 12 Pro+ 512GB',
    category: 'xiaomi-realme',
    description: 'Design de luxo inspirado em relógios suíços finos, com traseira em couro vegano azul. Câmera retrato telefoto periscópica inédita na categoria.',
    price: 'Preço sob consulta',
    retailPrice: '',
    imageUrl: '/assets/realme_12_pro.jpg',
    tags: ['Couro Vegano', 'Zoom Periscópio 120x', 'Tela Curva 120Hz'],
    specs: ['Traseira projetada por Ollivier Savéo', 'Câmera Periscópio Sony de 64MP', 'Carregamento SUPERVOOC 67W']
  }
];
