const posts = [
  {
    id: 1,
    title: 'StockX – UI Engineering & Consulting',
    href: '/projects/stockx',
    description:
      'Collaborated with internal teams to improve frontend architecture and design system adoption. Provided UI consulting, built reusable components, and helped streamline workflows using Tailwind CSS, TypeScript, and Storybook.',
    imageUrl:
      'https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: 'Feb 20, 2024',
    datetime: '2024-02-20',
    category: {
      name: 'Consulting',
    },
  },
  {
    id: 2,
    title: 'Fanatics – Design System & eComm Redesigns',
    href: '/projects/fanatics',
    description:
      'Led frontend efforts on flagship projects like ZeroCool, Topps.com, and Fanatics Collect. Owned design system implementation, built reusable components, and collaborated cross-functionally to ship accessible, scalable UIs using React, Elixir, and Tailwind.',
    imageUrl:
      'https://techcrunch.com/wp-content/uploads/2022/04/Fanatics-Image--e1649282414802.jpg?resize=1200,800',
    date: 'Apr 30, 2025',
    datetime: '2025-04-30',
    category: {
      name: 'Enterprise Frontend Development',
    },
  },
]

export default function ProjectBox() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
          works
        </h2>
        <p className="mt-2 text-lg/8 text-gray-600">
          Learn how to grow your business with our expert advice.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        {posts.map((post) => (
          <div
            key={post.id}
            className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pt-80 pb-8 sm:pt-48 lg:pt-80"
          >
            <img
              alt=""
              src={post.imageUrl}
              className="absolute inset-0 -z-10 size-full object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-linear-to-t from-gray-900 via-gray-900/40" />
            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />

            <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
              <div className="-ml-4 flex items-center gap-x-4">
                <svg viewBox="0 0 2 2" className="-ml-0.5 size-0.5 flex-none fill-white/50">
                  <circle r={1} cx={1} cy={1} />
                </svg>
                <div className="flex gap-x-2.5">{post.category.name}</div>
              </div>
            </div>
            <h3 className="mt-3 text-lg/6 font-semibold text-white">
              <a href={post.href}>
                <span className="absolute inset-0" />
                {post.title}
              </a>
            </h3>
          </div>
        ))}
      </div>
    </div>
  )
}
