import { createBrowserRouter } from 'react-router-dom'

import { PageLayout } from '@components'
import { ContactsPage, ErrorPage, SchedulePage, TeacherSchedulePage } from '@pages'
import { RouteLinks } from '@routes'

export const router = createBrowserRouter([
  {
    path: RouteLinks.MAIN,
    element: <PageLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <SchedulePage /> },
          {
            path: RouteLinks.CONTACTS,
            element: <ContactsPage />
          },
          {
            path: RouteLinks.TEACHERS,
            element: <TeacherSchedulePage />
          },
          {
            path: '*',
            element: <ErrorPage />
          }
        ]
      }
    ]
  }
])
