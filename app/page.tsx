import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { getComponentCode } from '@/lib/getComponentCode'

const approachConfig = {
  bad: {
    title: '1. Bad Approach',
    description: (
      <>
        A single parent server component fetches data for both client
        components. No Suspense is used, so the entire rendering is blocked
        until all data is fetched.
      </>
    ),
    tabs: {
      parent: {
        title: 'Parent',
        file: 'components/minimum/parent.server.tsx'
      },
      child1: {
        title: 'Child 1',
        file: 'components/minimum/child-1.client.tsx'
      },
      child2: {
        title: 'Child 2',
        file: 'components/minimum/child-2.client.tsx'
      }
    }
  },
  good: {
    title: '2. Good Approach',
    description: (
      <>
        The parent server component delegates data fetching by rendering two
        server components wrapped in <code>Suspense</code>. Each server
        component fetches its own data and passes it to its corresponding client
        component so that each can show its own loading state.
      </>
    ),
    tabs: {
      parent: {
        title: 'Parent',
        file: 'components/with-suspense/parent.server.tsx'
      },
      server1: {
        title: 'Server 1',
        file: 'components/with-suspense/child-1.server.tsx'
      },
      server2: {
        title: 'Server 2',
        file: 'components/with-suspense/child-2.server.tsx'
      },
      child1: {
        title: 'Child 1',
        file: 'components/with-suspense/child-1.client.tsx'
      },
      child2: {
        title: 'Child 2',
        file: 'components/with-suspense/child-2.client.tsx'
      }
    }
  },
  best: {
    title: '3. Best Approach',
    description: (
      <>
        The parent server component initiates data fetching without awaiting AND
        passes the resulting promises to client components wrapped in{' '}
        <code>Suspense</code>. The client components use the new{' '}
        <code>use</code> API to suspend rendering until the data is resolved.
      </>
    ),
    tabs: {
      parent: {
        title: 'Parent',
        file: 'components/with-suspense-and-use/parent.server.tsx'
      },
      child1: {
        title: 'Child 1',
        file: 'components/with-suspense-and-use/child-1.client.tsx'
      },
      child2: {
        title: 'Child 2',
        file: 'components/with-suspense-and-use/child-2.client.tsx'
      }
    }
  }
}

export default function Home() {
  // Reusable tab content component
  const ApproachSection = ({
    title,
    description,
    tabs
  }: {
    title: string
    description: React.ReactNode
    tabs: Record<string, { title: string; file: string }>
  }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <section>
        <h2 className="text-xl font-semibold mb-3">{title}</h2>
        <p className="mb-4">{description}</p>
        <div className="mt-4">
          <Tabs defaultValue="parent">
            <TabsList className="mb-4">
              {Object.entries(tabs).map(([key, config]) => (
                <TabsTrigger key={key} value={key}>
                  {config.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {Object.entries(tabs).map(([key, config]) => (
              <TabsContent key={key} value={key}>
                <pre className="bg-slate-50 p-4 rounded text-sm overflow-auto border border-slate-200">
                  {getComponentCode(config.file)}
                </pre>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  )

  return (
    <div className=" font-sans bg-slate-100 text-slate-900">
      <header className="my-3 max-w-4xl mx-auto">
        <p>
          Compare different approaches to data fetching in React 19 using Server
          Components, Suspense and the new 'use' API. This demo shows how to
          implement each approach and the pros and cons of each.
        </p>
      </header>

      <main className="max-w-4xl mx-auto">
        <Tabs defaultValue="bad" className="mb-6">
          <TabsList>
            {Object.entries(approachConfig).map(([key]) => (
              <TabsTrigger key={key} value={key}>
                {key.charAt(0).toUpperCase() + key.slice(1)} Approach
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(approachConfig).map(([key, config]) => (
            <TabsContent key={key} value={key}>
              <ApproachSection
                title={config.title}
                description={config.description}
                tabs={config.tabs}
              />
            </TabsContent>
          ))}
        </Tabs>
      </main>

      <footer className="mt-12 text-center max-w-4xl mx-auto text-slate-600">
        <p>
          Check out the code on{' '}
          <a
            className="text-blue-600 hover:underline"
            href="https://github.com/NazPalUA/servet-data-example"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </footer>
    </div>
  )
}
