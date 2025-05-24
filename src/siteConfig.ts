import siteConfigJson from "./siteConfig.json";
import type { MultilingualValue } from "./i18n";

export interface SiteConfiguration {
  name: MultilingualValue<string>;
  bio: MultilingualValue<string>;
  profilePicture: string;
  url: MultilingualValue<string>;
  blog: boolean;
  iconLinks: IconLink[];
  customLinks: MultilingualValue<CustomLink[]>;
  multilang: {
    showDefaultSelector: boolean;
    languages: {
      [key: string]: {
        name: string;
        flag?: string;
        icon?: string;
      };
    };
  };
}

interface IconLink {
  id: string;
  icon: string;
  url: MultilingualValue<string>;
}

interface CustomLink {
  id: string;
  title: MultilingualValue<string>;
  url: MultilingualValue<string>;
}

// Export the configuration from JSON
export const SITE: SiteConfiguration = siteConfigJson;
