import React from 'react'
import GeneralSettings from './GeneralSettings'
import ProfileSettings from './ProfileSettings'
import NotificationsSettings from './NotificationsSettings'
import IntegrationsSettings from './IntegrationsSettings'

const SettingsPage: React.FC = () => {
  return (
    <div className="space-y-8 p-6">
      <GeneralSettings />
      <ProfileSettings />
      <NotificationsSettings />
      <IntegrationsSettings />
    </div>
  )
}

export default SettingsPage
