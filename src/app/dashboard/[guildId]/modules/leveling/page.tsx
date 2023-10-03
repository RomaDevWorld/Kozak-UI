import MinMaxXp from '@/components/selectors/numbers/MinMaxXp'
import XpCooldownSelector from '@/components/selectors/numbers/XpCooldownSelector'
import LevelingModuleToggle from '@/components/toggles/LevelingModuleToggle'
import XpNotificationsToggle from '@/components/toggles/XpNotificationsToggle'
import fetchGuildModules from '@/utils/api/fetchGuildModules'
import React from 'react'

const LevelingModulePage = async ({ params }: { params: { guildId: string } }) => {
  const modules = await fetchGuildModules(params.guildId)

  return (
    <div className="container">
      <section className="section flex items-center gap-4">
        <h1 className="text-xl font-bold uppercase">status:</h1>
        <LevelingModuleToggle modules={modules} />
      </section>
      <section className="section">
        <h1 className="text-xl font-bold uppercase">XP range</h1>
        <MinMaxXp modules={modules} />
      </section>
      <section className="section">
        <h1 className="text-xl font-bold uppercase">XP cooldown (seconds)</h1>
        <XpCooldownSelector modules={modules} />
      </section>
      <section className="section">
        <h1 className="text-xl font-bold uppercase">notifications</h1>
        <div className="flex-row flex gap-4 items-center">
          <h1 className="text-lg">On lvl up:</h1>
          <XpNotificationsToggle modules={modules} />
        </div>
      </section>
    </div>
  )
}

export default LevelingModulePage
