// ** Type import
import { HorizontalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): HorizontalNavItemsType => {
  return [
    {
      icon: 'mdi:home-outline',
      title: 'Dashboards',
      path: '/dashboards'
    },
    {
      icon: 'mdi:apps',
      title: 'Apps',
      children: [
        {
          title: 'Invoice',
          icon: 'mdi:file-document-outline',
          children: [
            {
              title: 'List',
              path: '/apps/invoice/list'
            },
            {
              title: 'Preview',
              path: '/apps/invoice/preview'
            },
            {
              title: 'Edit',
              path: '/apps/invoice/edit'
            },
            {
              title: 'Add',
              path: '/apps/invoice/add'
            }
          ]
        },
        {
          title: 'User',
          icon: 'mdi:account-outline',
          children: [
            {
              title: 'List',
              path: '/apps/user/list'
            },
            {
              title: 'View',
              children: [
                {
                  title: 'Overview',
                  path: '/apps/user/view/overview'
                },
                {
                  title: 'Security',
                  path: '/apps/user/view/security'
                },
                {
                  title: 'Billing & Plans',
                  path: '/apps/user/view/billing-plan'
                },
                {
                  title: 'Notifications',
                  path: '/apps/user/view/notification'
                },
                {
                  title: 'Connection',
                  path: '/apps/user/view/connection'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      icon: 'mdi:file-document-outline',
      title: 'Pages',
      children: [
        {
          title: 'User Profile',
          icon: 'mdi:card-account-details-outline',
          children: [
            {
              title: 'Profile',
              path: '/pages/user-profile/profile'
            },
            {
              title: 'Teams',
              path: '/pages/user-profile/teams'
            },
            {
              title: 'Projects',
              path: '/pages/user-profile/projects'
            },
            {
              title: 'Connections',
              path: '/pages/user-profile/connections'
            }
          ]
        },
        {
          icon: 'mdi:account-cog-outline',
          title: 'Account Settings',
          children: [
            {
              title: 'Account',
              path: '/pages/account-settings/account'
            },
            {
              title: 'Security',
              path: '/pages/account-settings/security'
            },
            {
              title: 'Billing',
              path: '/pages/account-settings/billing'
            },
            {
              title: 'Notifications',
              path: '/pages/account-settings/notifications'
            },

            {
              title: 'Connections',
              path: '/pages/account-settings/connections'
            }
          ]
        },
        {
          title: 'FAQ',
          path: '/pages/faq',
          icon: 'mdi:help-circle-outline'
        },
        {
          title: 'Help Center',
          icon: 'mdi:help-circle-outline',
          path: '/pages/help-center'
        },
        {
          title: 'Pricing',
          icon: 'mdi:currency-usd',
          path: '/pages/pricing'
        },
        {
          title: 'Miscellaneous',
          icon: 'mdi:file-outline',
          children: [
            {
              openInNewTab: true,
              title: 'Coming Soon',
              path: '/pages/misc/coming-soon'
            },
            {
              openInNewTab: true,
              title: 'Under Maintenance',
              path: '/pages/misc/under-maintenance'
            },
            {
              openInNewTab: true,
              title: 'Page Not Found - 404',
              path: '/pages/misc/404-not-found'
            },
            {
              openInNewTab: true,
              title: 'Not Authorized - 401',
              path: '/pages/misc/401-not-authorized'
            },
            {
              openInNewTab: true,
              title: 'Server Error - 500',
              path: '/pages/misc/500-server-error'
            }
          ]
        }
      ]
    },
    {
      title: 'Forms & Tables',
      icon: 'mdi:checkbox-marked-outline',
      children: [
        {
          title: 'Form Elements',
          icon: 'mdi:form-select',
          children: [
            {
              title: 'File Uploader',
              path: '/forms/form-elements/file-uploader'
            },
            {
              title: 'Editor',
              path: '/forms/form-elements/editor'
            }
          ]
        },
        {
          title: 'Mui DataGrid',
          icon: 'mdi:grid',
          path: '/tables/data-grid'
        }
      ]
    },
    {
      path: '/acl',
      action: 'read',
      subject: 'acl-page',
      icon: 'mdi:shield-outline',
      title: 'Access Control'
    }
  ]
}

export default navigation
