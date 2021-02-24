export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6036b0ce739b110ba64687e9',
                  title: 'Sanity Studio',
                  name: 'gatsbytest-studio',
                  apiId: '46fa6cb5-7d9c-4ea6-ab0b-443fc89338f7'
                },
                {
                  buildHookId: '6036b0ceda0f1a0b6f46e811',
                  title: 'Blog Website',
                  name: 'gatsbytest-web',
                  apiId: '17e08f8c-1128-4ef2-be8d-1da89f12a975'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/xazax7/Gatsbytest',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://gatsbytest-web.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
