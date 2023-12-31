import LogChannelSelector from '@/components/selectors/LogChannelSelector'
import LogTypeToggle from '@/components/toggles/LogTypeToggle'
import fetchGuildChannels from '@/utils/api/fetchGuildChannels'
import fetchGuildModules from '@/utils/api/fetchGuildModules'
import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import LogIgnoredRolesSelector from '@/components/selectors/LogIgnoredRolesSelector'
import fetchGuildRoles from '@/utils/api/fetchGuildRoles'
import LogIgnoredChannelsSelector from '@/components/selectors/LogIgnoredChannelsSelector'

const LoggingModulePage = async ({ params }: { params: { guildId: string } }) => {
  const modules = await fetchGuildModules(params.guildId)
  const channels = await fetchGuildChannels(params.guildId)
  const roles = await fetchGuildRoles(params.guildId)

  return (
    <div className="container">
      <section className="section">
        <h1 className="text-xl font-bold uppercase mb-3">log channel</h1>
        <p>Select a channel to send logs to</p>
        <LogChannelSelector channels={channels} modules={modules} />
      </section>
      <section className="section flex flex-col gap-3">
        <h1 className="text-xl font-bold uppercase mb-3">ignored channels & roles</h1>
        <p>Events will not be emitted in these channels or by these role owners</p>
        <div>
          <h2 className="font-bold text-lg uppercase">channels</h2>
          <LogIgnoredChannelsSelector channels={channels} modules={modules} />
        </div>
        <div>
          <h2 className="font-bold text-lg uppercase">roles</h2>
          <LogIgnoredRolesSelector modules={modules} roles={roles} />
        </div>
      </section>
      <section className="section flex flex-col gap-2">
        <h1 className="text-xl font-bold uppercase mb-3">EVENTS</h1>
        <p>Select what events to log</p>
        <div className={styles.eventGroup}>
          <h2>Message Events</h2>
          <Image className="invert" src={'/message-square.svg'} alt="Message event toggle group icon" width={20} height={20} />

          <LogTypeToggle type="messageDelete" modules={modules} />
          <LogTypeToggle type="messageUpdate" modules={modules} />
        </div>
        <div className={styles.eventGroup}>
          <h2>Ban Events</h2>
          <Image className="invert" src={'/slash.svg'} alt="Bans event toggle group icon" width={20} height={20} />
          <LogTypeToggle type="guildBanAdd" modules={modules} />
          <LogTypeToggle type="guildBanRemove" modules={modules} />
        </div>
        <div className={styles.eventGroup}>
          <h2>Member Events</h2>
          <Image className="invert" src={'/users.svg'} alt="Members event toggle group icon" width={20} height={20} />
          <LogTypeToggle type="guildMemberAdd" modules={modules} />
          <LogTypeToggle type="guildMemberRemove" modules={modules} />
          <LogTypeToggle type="guildMemberReport" modules={modules} />
          <LogTypeToggle type="guildMemberRolesUpdate" modules={modules} />
          <LogTypeToggle type="guildMemberTimeout" modules={modules} />
          <LogTypeToggle type="guildMemberNicknameUpdate" modules={modules} />
          <LogTypeToggle type="guildMemberWarn" modules={modules} />
        </div>
        <div className={styles.eventGroup}>
          <h2>Voice Activity Events</h2>
          <Image className="invert" src={'/volume-2.svg'} alt="Voice activity event toggle group icon" width={20} height={20} />
          <LogTypeToggle type="voiceStateUpdate" modules={modules} />
        </div>
      </section>
    </div>
  )
}

export default LoggingModulePage
