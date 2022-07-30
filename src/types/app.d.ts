export interface App {
  id: string;
  name: string;
  version: string;
  title: string;
  subtitle: string;
  description: string;
  vendor: string;
  icon: string;
  color: string;
  link?: string | null;
  tags: Tags;
  config: Config;
  deployed: string;
  created_by: Createdby;
  modified?: any;
  modified_by?: any;
}

interface Createdby {
  id: string;
  name: string;
}

interface Config {
  '!prediction-data'?: string | null;
  'geo-features'?: string | null;
  'geo-areas'?: string | null;
  '!private'?: boolean | null;
}

interface Tags {
  note: string;
  note1?: string | null;
  sdk: string;
  category?: string | null;
  type?: string | null;
  bundle?: string | null;
}