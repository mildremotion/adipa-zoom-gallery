import institucionalImage from '../assets/institucional.jpg';
import fiestasPatriasImage from '../assets/fiestas-patrias.png';
import amorAmistadImage from '../assets/amor-amistad.png';
import cyberImage from '../assets/cyber-adipa.png';
import blackFridayImage from '../assets/black-friday.png';
import ventaNocturnaImage from '../assets/venta-nocturna.png';

export type Campaign = {
  id: string;
  name: string;
  slug: string;
  active: boolean;
  description?: string;
};

export type ZoomBackground = {
  id: string;
  title: string;
  campaignId: string;
  imageUrl: string;
  downloadUrl: string;
  dimensions: string;
  createdAt: string;
};

export const campaigns: Campaign[] = [
  {
    id: 'campaign-institucional',
    name: 'Institucional',
    slug: 'institucional',
    active: true,
    description: 'Identidad corporativa de ADIPA',
  },
  {
    id: 'campaign-fiestas-patrias',
    name: 'Fiestas Patrias Chile y México',
    slug: 'fiestas-patrias-chile-y-mexico',
    active: true,
    description: 'Celebración de la identidad nacional',
  },
  {
    id: 'campaign-amor-amistad',
    name: 'Amor y Amistad',
    slug: 'amor-y-amistad',
    active: true,
    description: 'Campaña orientada a relaciones y comunidad',
  },
  {
    id: 'campaign-cyber',
    name: 'Cyber',
    slug: 'cyber',
    active: true,
    description: 'Promoción digital de tecnología y ofertas',
  },
  {
    id: 'campaign-black-friday',
    name: 'Black Friday',
    slug: 'black-friday',
    active: true,
    description: 'Campaña de descuento anual',
  },
  {
    id: 'campaign-venta-nocturna',
    name: 'Venta Nocturna',
    slug: 'venta-nocturna',
    active: true,
    description: 'Promoción nocturna y lanzamiento especial',
  },
];

export const zoomBackgrounds: ZoomBackground[] = [
  {
    id: 'bg-1',
    title: 'Institucional',
    campaignId: 'campaign-institucional',
    imageUrl: institucionalImage,
    downloadUrl: institucionalImage,
    dimensions: '1920x1080',
    createdAt: '2026-01-10',
  },
  {
    id: 'bg-2',
    title: 'Fiestas Patrias Chile y México',
    campaignId: 'campaign-fiestas-patrias',
    imageUrl: fiestasPatriasImage,
    downloadUrl: fiestasPatriasImage,
    dimensions: '1920x1080',
    createdAt: '2026-06-15',
  },
  {
    id: 'bg-3',
    title: 'Amor y Amistad',
    campaignId: 'campaign-amor-amistad',
    imageUrl: amorAmistadImage,
    downloadUrl: amorAmistadImage,
    dimensions: '1920x1080',
    createdAt: '2026-02-12',
  },
  {
    id: 'bg-4',
    title: 'Cyber',
    campaignId: 'campaign-cyber',
    imageUrl: cyberImage,
    downloadUrl: cyberImage,
    dimensions: '1920x1080',
    createdAt: '2026-11-01',
  },
  {
    id: 'bg-5',
    title: 'Black Friday',
    campaignId: 'campaign-black-friday',
    imageUrl: blackFridayImage,
    downloadUrl: blackFridayImage,
    dimensions: '1920x1080',
    createdAt: '2026-11-20',
  },
  {
    id: 'bg-6',
    title: 'Venta Nocturna',
    campaignId: 'campaign-venta-nocturna',
    imageUrl: ventaNocturnaImage,
    downloadUrl: ventaNocturnaImage,
    dimensions: '1920x1080',
    createdAt: '2026-09-30',
  },
];
