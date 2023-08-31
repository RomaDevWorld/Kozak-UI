import LogChannelSelector from '@/components/selectors/LogChannelSelector'
import LogTypeToggle from '@/components/toggles/LogTypeToggle'
import fetchGuildChannels from '@/utils/api/fetchGuildChannels'
import fetchGuildModules from '@/utils/api/fetchGuildModules'
import React from 'react'

const LoggingModulePage = async ({ params }: { params: { guildId: string } }) => {
  const modules = await fetchGuildModules(params.guildId)
  const channels = await fetchGuildChannels(params.guildId)

  return (
    <div className="container flex flex-col gap-5">
      <div>
        <h1 className="text-2xl font-bold text-center">Set log channel</h1>
        <LogChannelSelector channels={channels} modules={modules} />
      </div>
      <div className="flex flex-col gap-3 items-center text-xl">
        <h1 className="text-2xl font-bold text-center">Toggle log types</h1>
        <h2>Messages</h2>
        <LogTypeToggle type="messageDelete" modules={modules} />
        <LogTypeToggle type="messageUpdate" modules={modules} />
        <h2>Bans</h2>
        <LogTypeToggle type="guildBanAdd" modules={modules} />
        <LogTypeToggle type="guildBanRemove" modules={modules} />
        <h2>Members</h2>
        <LogTypeToggle type="guildMemberAdd" modules={modules} />
        <LogTypeToggle type="guildMemberRemove" modules={modules} />
        <LogTypeToggle type="guildMemberReport" modules={modules} />
        <LogTypeToggle type="guildMemberRolesUpdate" modules={modules} />
        <LogTypeToggle type="guildMemberTimeout" modules={modules} />
        <h2>Voices</h2>
        <LogTypeToggle type="voiceStateUpdate" modules={modules} />
      </div>
    </div>
  )
}

export default LoggingModulePage
