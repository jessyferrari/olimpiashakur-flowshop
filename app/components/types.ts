export type LinkItem = { title: string; url: string };

export type LinksData = {
  featured: {
    copa2026: {
      title: string;
      accessories: LinkItem[];
      apparel: LinkItem[];
    };
  };
  amazon: {
    bestsellers: LinkItem[];
    trending: LinkItem[];
  };
  hotmart: {
    hot: LinkItem[];
    favorites: LinkItem[];
  };
  kiwify: {
    items: LinkItem[];
  };
};
