import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'Projects',
    home: true,
    icon: 'home-outline',
    expanded: true,
    children: [
      {
        title: 'Overview',
        link: '/pages/overview',
      },
      {
        title: 'Create new',
        link: '/pages/projects',
      }
    ]
  },
  {
    title: 'Platform Services',
    expanded: true,
    icon: 'layers-outline',
    children: [
      {
        title: 'App Runtime',
        link: '/pages/platform-services/app-runtime',
      },
      {
        title: 'Kubernetes',
        link: '/pages/platform-services/kubernetes',
      },
      {
        title: 'Virtual Machines',
        link: '/pages/platform-services/virtual-machines',
      },
      {
        title: 'Object Storage',
        link: '/pages/platform-services/object-storage',
      },
    ],
  },
  {
    title: 'Marketplace',
    link: '/pages/ui-features',
    icon: 'cube-outline',
    expanded: true,
    children: [
      {
        title: 'Databases',
        link: '/pages/marketplace/databases',
      },
      {
        title: 'Messaging',
        link: '/pages/marketplace/messaging',
      },
      {
        title: 'Monitoring',
        link: '/pages/marketplace/monitoring',
      },
      {
        title: 'Insights',
        link: '/pages/marketplace/insights',
      },
    ],
  },
  {
    title: 'Account',
    expanded: true,
    icon: 'settings-2-outline',
    children: [
      {
        title: 'Settings',
        link: '/pages/account/settings',
      },
      {
        title: 'Billing',
        link: '/pages/account/billing',
      },
      {
        title: 'API',
        link: '/pages/account/api',
      }
    ],
  }
];
