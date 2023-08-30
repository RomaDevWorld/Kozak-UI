import PartialChannel from '@/types/PartialChannel'
import React from 'react'

const channelTypes = ['Text', 'DM', 'Voice', 'Group', 'Category', 'Announcement', 'Announcement thread', 'Public thread', 'Private thread', 'Stage voice', 'Directory', 'Forum', 'Media']

export const ChannelOption = ({ channel, showTypes }: { channel: PartialChannel; showTypes?: boolean }) => {
  return <option value={channel.id}>{(showTypes ? `${channelTypes[channel.type]}: ` : '') + `${channel.name.length > 20 ? `${channel.name.slice(0, 20)}...` : channel.name} (ID: ${channel.id})`}</option>
}
