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
}

export interface Modules {
  guildId: string
  log: {
    channel: string | null
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
  tickets: Ticket[]
}

export interface Ticket {
  _id: string
  channelId: string
  messageId: string
  allowedRoles: string[]
}
