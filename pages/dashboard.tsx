<main className="p-6">
  {/* Dashboard Cards */}
  <DashboardCards />

  {/* New Project Button */}
  <div className="mt-6 mb-6">
    <button
      onClick={() => openModal('project')}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      New Project
    </button>
  </div>

  {/* Projects List */}
  <section className="mb-6">
    <h2 className="text-lg font-bold mb-3">Projects</h2>
    <ul className="space-y-2">
      <li className="p-3 bg-white dark:bg-gray-800 rounded shadow flex justify-between items-center">
        Project A
        <button onClick={() => openModal('project', { name: 'Project A' })} className="text-blue-500">Edit</button>
      </li>
      <li className="p-3 bg-white dark:bg-gray-800 rounded shadow flex justify-between items-center">
        Project B
        <button onClick={() => openModal('project', { name: 'Project B' })} className="text-blue-500">Edit</button>
      </li>
    </ul>
  </section>

  {/* Tasks List */}
  <section className="mb-6">
    <h2 className="text-lg font-bold mb-3">Tasks</h2>
    <button
      onClick={() => openModal('task')}
      className="mb-3 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
    >
      New Task
    </button>
    <ul className="space-y-2">
      <li className="p-3 bg-white dark:bg-gray-800 rounded shadow flex justify-between items-center">
        Task 1
        <button onClick={() => openModal('task', { name: 'Task 1' })} className="text-green-500">Edit</button>
      </li>
      <li className="p-3 bg-white dark:bg-gray-800 rounded shadow flex justify-between items-center">
        Task 2
        <button onClick={() => openModal('task', { name: 'Task 2' })} className="text-green-500">Edit</button>
      </li>
    </ul>
  </section>

  {/* Team List */}
  <section className="mb-6">
    <h2 className="text-lg font-bold mb-3">Team</h2>
    <button
      onClick={() => openModal('team')}
      className="mb-3 px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600"
    >
      Add Member
    </button>
    <ul className="space-y-2">
      <li className="p-3 bg-white dark:bg-gray-800 rounded shadow flex justify-between items-center">
        Alice
        <button onClick={() => openModal('team', { name: 'Alice' })} className="text-purple-500">Edit</button>
      </li>
      <li className="p-3 bg-white dark:bg-gray-800 rounded shadow flex justify-between items-center">
        Bob
        <button onClick={() => openModal('team', { name: 'Bob' })} className="text-purple-500">Edit</button>
      </li>
    </ul>
  </section>

  {/* Charts Placeholder */}
  <section className="mb-6">
    <h2 className="text-lg font-bold mb-3">Charts</h2>
    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow h-48 flex items-center justify-center text-gray-400">
      Chart Placeholder
    </div>
  </section>
</main>
