export interface LogTypes {
  messageDelete: boolean
  messageUpdate: boolean
  guildMemberAdd: boolean
  guildMemberRemove: boolean
  guildMemberNicknameUpdate: boolean
  guildMemberRolesUpdate: boolean
  guildMemberTimeout: boolean
  voiceStateUpdate: boolean
  guildBanRemove: boolean
  guildBanAdd: boolean
  guildMemberReport: boolean
  guildMemberWarn: boolean
}

export interface Modules {
  guildId: string
  log: {
    channel: string | null
    ignoredChannels: string[]
    ignoredRoles: string[]
    types: LogTypes
  }
  lobby: {
    channel: string | null
  }
  counter: {
    channelId: string | null
    label: string | null
  }
  roles: {
    autorole: string | null
    restore: {
      status: boolean
      expireTime: number
    }
  }
  starboard: {
    status: boolean
    channelId: string | null
    emoji: string | null
    threshold: number
  }
  leveling: {
    status: boolean
    minXp: number
    maxXp: number
    cooldown: number
    notifications: {
      onLvlUp: boolean
    }
    ignoredChannels: string[]
    ignoredRoles: string[]
  }
  tickets: Ticket[]
}

export interface Ticket {
  _id: string
  prefix: string
  channelId: string
  messageId: string
  allowedRoles: string[]
}
