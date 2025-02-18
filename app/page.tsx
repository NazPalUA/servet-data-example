import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { getComponentCode } from '@/lib/getComponentCode'

const approachConfig = {
  minimum: {
    basePath: 'components/minimum',
    files: {
      parent: 'parent.server.tsx',
      child1: 'child-1.client.tsx',
      child2: 'child-2.client.tsx'
    }
  },
  suspense: {
    basePath: 'components/with-suspense',
    files: {
      parent: 'parent.server.tsx',
      server1: 'child-1.server.tsx',
      server2: 'child-2.server.tsx',
      child1: 'child-1.client.tsx',
      child2: 'child-2.client.tsx'
    }
  },
  best: {
    basePath: 'components/with-suspense-and-use',
    files: {
      parent: 'parent.server.tsx',
      child1: 'child-1.client.tsx',
      child2: 'child-2.client.tsx'
    }
  }
}

const contentConfig = {
  description:
    "Compare different approaches to data fetching in React 19 using Server Components, Suspense and the new 'use' API. This demo shows how to implement each approach and the pros and cons of each.",
  approaches: {
    bad: {
      title: '1. Bad Approach',
      description: (
        <>
          A single parent server component fetches data for both client
          components. No Suspense is used, so the entire rendering is blocked
          until all data is fetched.
        </>
      ),
      tabs: ['parent', 'child1', 'child2']
    },
    good: {
      title: '2. Good Approach',
      description: (
        <>
          The parent server component delegates data fetching by rendering two
          server components wrapped in <code>Suspense</code>. Each server
          component fetches its own data and passes it to its corresponding
          client component so that each can show its own loading state.
        </>
      ),
      tabs: ['parent', 'server1', 'server2', 'child1', 'child2']
    },
    best: {
      title: '3. Best Approach',
      description: (
        <>
          The parent server component initiates data fetching without awaiting
          AND passes the resulting promises to client components wrapped in{' '}
          <code>Suspense</code>. The client components use the new{' '}
          <code>use</code> API to suspend rendering until the data is resolved.
        </>
      ),
      tabs: ['parent', 'child1', 'child2']
    }
  },
  footer: {
    text: 'Check out the code on ',
    github: {
      url: 'https://github.com/NazPalUA/servet-data-example',
      label: 'GitHub'
    }
  }
}

export default function Home() {
  // Group related code fetches
  const minimumApproach = {
    parent: getComponentCode(
      `${approachConfig.minimum.basePath}/${approachConfig.minimum.files.parent}`
    ),
    child1: getComponentCode(
      `${approachConfig.minimum.basePath}/${approachConfig.minimum.files.child1}`
    ),
    child2: getComponentCode(
      `${approachConfig.minimum.basePath}/${approachConfig.minimum.files.child2}`
    )
  }

  const suspenseApproach = {
    parent: getComponentCode(
      `${approachConfig.suspense.basePath}/${approachConfig.suspense.files.parent}`
    ),
    server1: getComponentCode(
      `${approachConfig.suspense.basePath}/${approachConfig.suspense.files.server1}`
    ),
    server2: getComponentCode(
      `${approachConfig.suspense.basePath}/${approachConfig.suspense.files.server2}`
    ),
    child1: getComponentCode(
      `${approachConfig.suspense.basePath}/${approachConfig.suspense.files.child1}`
    ),
    child2: getComponentCode(
      `${approachConfig.suspense.basePath}/${approachConfig.suspense.files.child2}`
    )
  }

  const bestApproach = {
    parent: getComponentCode(
      `${approachConfig.best.basePath}/${approachConfig.best.files.parent}`
    ),
    child1: getComponentCode(
      `${approachConfig.best.basePath}/${approachConfig.best.files.child1}`
    ),
    child2: getComponentCode(
      `${approachConfig.best.basePath}/${approachConfig.best.files.child2}`
    )
  }

  // Reusable tab content component
  const ApproachSection = ({
    title,
    description,
    tabs,
    codeMap
  }: {
    title: string
    description: React.ReactNode
    tabs: string[]
    codeMap: Record<string, string>
  }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <section>
        <h2 className="text-xl font-semibold mb-3">{title}</h2>
        <p className="mb-4">{description}</p>
        <div className="mt-4">
          <Tabs defaultValue="parent">
            <TabsList className="mb-4">
              {tabs.map(tab => (
                <TabsTrigger key={tab} value={tab}>
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>
            {tabs.map(tab => (
              <TabsContent key={tab} value={tab}>
                <pre className="bg-slate-50 p-4 rounded text-sm overflow-auto border border-slate-200">
                  {codeMap[tab]}
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
        <p>{contentConfig.description}</p>
      </header>

      <main className="max-w-4xl mx-auto">
        <Tabs defaultValue="bad" className="mb-6">
          <TabsList>
            {Object.entries(contentConfig.approaches).map(([key]) => (
              <TabsTrigger key={key} value={key}>
                {key.charAt(0).toUpperCase() + key.slice(1)} Approach
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(contentConfig.approaches).map(([key, config]) => (
            <TabsContent key={key} value={key}>
              <ApproachSection
                title={config.title}
                description={config.description}
                tabs={config.tabs}
                codeMap={
                  {
                    bad: minimumApproach,
                    good: suspenseApproach,
                    best: bestApproach
                  }[key] as Record<string, string>
                }
              />
            </TabsContent>
          ))}
        </Tabs>
      </main>

      <footer className="mt-12 text-center max-w-4xl mx-auto text-slate-600">
        <p>
          {contentConfig.footer.text}
          <a
            className="text-blue-600 hover:underline"
            href={contentConfig.footer.github.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contentConfig.footer.github.label}
          </a>
        </p>
      </footer>
    </div>
  )
}
