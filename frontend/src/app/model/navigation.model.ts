export type NavTab = {
  title: string;
  submenus?: NavTab[];
  route?: string;
  selected?: boolean;
  expanded?: boolean;
};

export const NAV_TABS: NavTab[] = [
  {
    title: 'HOME',
    route: '/home',
  },
  {
    title: 'LEISTUNGEN',
    submenus: [
      {
        title: 'LOHNSCHNITT',
        route: '/leistungen/lohnschnitt',
      },
      {
        title: 'HOLZHANDEL',
        route: '/leistungen/holzhandel',
      },
    ],
  },
  {
    title: 'PRODUKTE',
    submenus: [
      {
        title: 'SCHNITTHOLZ',
        route: '/produkte/schnittholz',
      },
      {
        title: 'ZWEITE WAHL',
        route: '/produkte/zweitewahl',
      },
      {
        title: 'BRENNHOLZ',
        route: '/produkte/brennholz',
      },
      {
        title: 'SONSTIGES',
        route: '/produkte/sonstiges',
      },
    ],
  },
  {
    title: 'UNTERNEHMEN',
    submenus: [
      {
        title: 'ÜBER UNS',
        route: '/unternehmen/ueberuns',
      },
      {
        title: 'GALERIE',
        route: '/unternehmen/galerie',
      },
    ],
  },
  {
    title: 'KONTAKT',
    route: '/kontakt',
  },
];
