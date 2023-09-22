import MinMaxXp from '@/components/selectors/numbers/MinMaxXp'
import XpCooldownSelector from '@/components/selectors/numbers/XpCooldownSelector'
import LevelingModuleToggle from '@/components/toggles/LevelingModuleToggle'
import XpNotificationsToggle from '@/components/toggles/XpNotificationsToggle'
import fetchGuildModules from '@/utils/api/fetchGuildModules'
import React from 'react'

const LevelingModulePage = async ({ params }: { params: { guildId: string } }) => {
  const modules = await fetchGuildModules(params.guildId)

  return (
    <div className="container flex flex-col gap-5">
      <h1 className="text-2xl font-bold text-center">Configure leveling</h1>
      <div className="flex flex-row gap-10 items-center">
        <h1 className="text-xl font-bold">Toggle</h1>
        <LevelingModuleToggle modules={modules} />
      </div>
      <div className="flex flex-row gap-10 items-center">
        <h1 className="text-xl font-bold">XP range</h1>
        <MinMaxXp modules={modules} />
      </div>
      <div className="flex flex-row gap-10 items-center">
        <h1 className="text-xl font-bold">XP cooldown</h1>
        <XpCooldownSelector modules={modules} />
      </div>
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-xl font-bold">Notifications</h1>
        <div className="flex-row flex gap-4 items-center">
          <h1>On lvl up:</h1>
          <XpNotificationsToggle modules={modules} />
        </div>
      </div>
    </div>
  )
}

export default LevelingModulePage
