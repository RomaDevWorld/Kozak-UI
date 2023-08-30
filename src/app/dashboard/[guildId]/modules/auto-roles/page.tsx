import AutoRoleSelector from '@/components/selectors/AutoRoleSelector'
import fetchGuildModules from '@/utils/api/fetchGuildModules'
import fetchGuildRoles from '@/utils/api/fetchGuildRoles'
import React from 'react'

const AutoRoleModulePage = async ({ params }: { params: { guildId: string } }) => {
  const modules = await fetchGuildModules(params.guildId)
  const roles = await fetchGuildRoles(params.guildId)

  return (
    <div className="container flex flex-col gap-5">
      <div>
        <h1 className="text-2xl font-bold text-center">Auto role selector</h1>
        <AutoRoleSelector roles={roles} modules={modules} />
      </div>
    </div>
  )
}

export default AutoRoleModulePage
