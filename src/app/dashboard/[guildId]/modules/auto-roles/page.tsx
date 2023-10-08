import AutoRoleSelector from '@/components/selectors/AutoRoleSelector'
import RoleRestoreTimer from '@/components/selectors/numbers/RoleRestoreTimer'
import RoleRestoreToggle from '@/components/toggles/RoleRestoreToggle'
import fetchGuildModules from '@/utils/api/fetchGuildModules'
import fetchGuildRoles from '@/utils/api/fetchGuildRoles'
import React from 'react'

const AutoRoleModulePage = async ({ params }: { params: { guildId: string } }) => {
  const modules = await fetchGuildModules(params.guildId)
  const roles = await fetchGuildRoles(params.guildId)

  return (
    <div className="container flex flex-col gap-5">
      <section className="section flex flex-col gap-2">
        <h1 className="text-xl font-bold uppercase">Auto role selector</h1>
        <AutoRoleSelector roles={roles} modules={modules} />
        <p>{`For security measures, you can't select the role with an Admin permissions`}</p>
      </section>
      <section className="section flex flex-col gap-4">
        <h1 className="text-xl font-bold uppercase">Role restore</h1>
        <div className="flex flex-col gap-2">
          <p>Auto role will be given to the newly joined members</p>
          <div className="flex flex-row items-center gap-4">
            <h2 className="font-bold text-lg uppercase">Status: </h2>
            <RoleRestoreToggle modules={modules} />
          </div>
        </div>
        <div>
          <h2 className="font-bold text-xl uppercase mb-1">Role restore expire time</h2>
          <p className="mb-3">{`We will not restore a member's role if the specified time has passed since he left`}</p>
          <RoleRestoreTimer modules={modules} />
        </div>
      </section>
    </div>
  )
}

export default AutoRoleModulePage
