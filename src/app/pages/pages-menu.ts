import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'Projects',
    home: true,
    expanded: true,
    children: [
      {
        title: 'Create new',
        link: '/pages/projects',
      }
    ]
  },
  {
    title: 'Platform Services',
    expanded: true,
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
