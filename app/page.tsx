import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { getComponentCode } from '@/lib/getComponentCode'

const approachConfig = {
  bad: {
    title: '1. Basic Approach (leads to waterfall effect in dynamic routes)',
    description: (
      <>
        A single server component fetches all data <strong>sequentially</strong>
        . This creates a <strong>waterfall effect</strong>, where each fetch
        waits for the previous one to complete. Client components are blocked
        until all data is available, leading to a{' '}
        <strong>slow initial load</strong> and{' '}
        <strong>no individual loading states</strong>.
        <br />
        <br />
        Note: For static pages that are pre-rendered at build time, this
        approach is perfectly acceptable since all data fetching happens during
        build.
      </>
    ),
    tabs: {
      parent: {
        title: 'Parent (Server)',
        file: 'components/minimum/parent.server.tsx'
      },
      child: {
        title: 'Child (Client)',
        file: 'components/minimum/child.client.tsx'
      }
    }
  },
  good: {
    title: '2. Streaming with parallel fetching',
    description: (
      <>
        Leverages <strong>Suspense</strong> boundaries to enable{' '}
        <strong>parallel data fetching</strong> in separate server components.
        Each component fetches its own data independently, allowing for{' '}
        <strong>incremental loading</strong> and{' '}
        <strong>individual loading states</strong>. Improves perceived
        performance but requires creating more components.
        <br />
        <br />
        If you are still on React 18 - this is the best approach.
      </>
    ),
    tabs: {
      parent: {
        title: 'Parent (Server)',
        file: 'components/with-suspense/parent.server.tsx'
      },
      server1: {
        title: 'Child 1 (Server)',
        file: 'components/with-suspense/child-1.server.tsx'
      },
      server2: {
        title: 'Child 2 (Server)',
        file: 'components/with-suspense/child-2.server.tsx'
      },
      grandchild: {
        title: 'Grandchild (Client)',
        file: 'components/with-suspense/grandchild.client.tsx'
      }
    }
  },
  best: {
    title: '3. Streaming with `use`',
    description: (
      <>
        Combines server-side data fetching with the React <strong>use</strong>{' '}
        api within <strong>Suspense</strong> boundaries. The parent server
        component initiates data requests and <strong>passes Promises</strong>{' '}
        to client components. This enables <strong>incremental loading</strong>{' '}
        and <strong>individual loading states</strong> in client components,{' '}
        <strong>without separate server components</strong> for each data
        dependency.
        <br />
        <br />
        The <strong>use</strong> api is available in React 19 and above.
      </>
    ),
    tabs: {
      parent: {
        title: 'Parent (Server)',
        file: 'components/with-suspense-and-use/parent.server.tsx'
      },
      child: {
        title: 'Child (Client)',
        file: 'components/with-suspense-and-use/child.client.tsx'
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
            <TabsList>
              {Object.entries(tabs).map(([key, config]) => (
                <TabsTrigger key={key} value={key}>
                  {config.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {Object.entries(tabs).map(([key, config]) => (
              <TabsContent key={key} value={key} className="mt-1">
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
    <div className="bg-slate-100 text-slate-900">
      <p className="my-3 text-sm md:text-base">
        Compare different approaches to data fetching in React 19 Server
        Components. This demo shows how to implement each approach and the pros
        and cons of each.
      </p>

      <main>
        <Tabs defaultValue="bad" className="my-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <TabsList className="w-full md:w-auto overflow-x-auto">
              {Object.entries(approachConfig).map(([key]) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="text-sm md:text-base"
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)} Approach
                </TabsTrigger>
              ))}
            </TabsList>

            <p className="text-center text-slate-600 text-sm md:text-base">
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
          </div>

          {Object.entries(approachConfig).map(([key, config]) => (
            <TabsContent key={key} value={key} className="mt-4">
              <ApproachSection
                title={config.title}
                description={config.description}
                tabs={config.tabs}
              />
            </TabsContent>
          ))}
        </Tabs>
      </main>
    </div>
  )
}
