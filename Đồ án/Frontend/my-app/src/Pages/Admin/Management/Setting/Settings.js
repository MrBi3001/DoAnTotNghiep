import React, { useState } from 'react';
import './Settings.css';

function Settings() {
  const [settings, setSettings] = useState({
    general: {
      siteName: 'My E-commerce Store',
      siteEmail: 'contact@store.com',
      phoneNumber: '+1234567890',
      address: '123 Store Street, City, Country'
    },
    appearance: {
      theme: 'light',
      primaryColor: '#3498db',
      currency: 'USD'
    },
    notifications: {
      emailNotifications: true,
      orderAlerts: true,
      stockAlerts: true,
      newsletterEnabled: true
    }
  });

  const handleGeneralChange = (e) => {
    const { name, value } = e.target;
    setSettings(prev => ({
      ...prev,
      general: {
        ...prev.general,
        [name]: value
      }
    }));
  };

  const handleAppearanceChange = (e) => {
    const { name, value } = e.target;
    setSettings(prev => ({
      ...prev,
      appearance: {
        ...prev.appearance,
        [name]: value
      }
    }));
  };

  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [name]: checked
      }
    }));
  };

  const handleSave = () => {
    // Save settings to backend
    console.log('Settings saved:', settings);
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>

      <div className="settings-section">
        <h3>General Settings</h3>
        <div className="settings-form">
          <div className="form-group">
            <label>Site Name</label>
            <input
              type="text"
              name="siteName"
              value={settings.general.siteName}
              onChange={handleGeneralChange}
            />
          </div>
          <div className="form-group">
            <label>Contact Email</label>
            <input
              type="email"
              name="siteEmail"
              value={settings.general.siteEmail}
              onChange={handleGeneralChange}
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={settings.general.phoneNumber}
              onChange={handleGeneralChange}
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <textarea
              name="address"
              value={settings.general.address}
              onChange={handleGeneralChange}
            />
          </div>
        </div>
      </div>

      <div className="settings-section">
        <h3>Appearance</h3>
        <div className="settings-form">
          <div className="form-group">
            <label>Theme</label>
            <select
              name="theme"
              value={settings.appearance.theme}
              onChange={handleAppearanceChange}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
          <div className="form-group">
            <label>Primary Color</label>
            <input
              type="color"
              name="primaryColor"
              value={settings.appearance.primaryColor}
              onChange={handleAppearanceChange}
            />
          </div>
          <div className="form-group">
            <label>Currency</label>
            <select
              name="currency"
              value={settings.appearance.currency}
              onChange={handleAppearanceChange}
            >
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="GBP">GBP (£)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="settings-section">
        <h3>Notifications</h3>
        <div className="settings-form">
          <div className="form-group checkbox">
            <label>
              <input
                type="checkbox"
                name="emailNotifications"
                checked={settings.notifications.emailNotifications}
                onChange={handleNotificationChange}
              />
              Email Notifications
            </label>
          </div>
          <div className="form-group checkbox">
            <label>
              <input
                type="checkbox"
                name="orderAlerts"
                checked={settings.notifications.orderAlerts}
                onChange={handleNotificationChange}
              />
              Order Alerts
            </label>
          </div>
          <div className="form-group checkbox">
            <label>
              <input
                type="checkbox"
                name="stockAlerts"
                checked={settings.notifications.stockAlerts}
                onChange={handleNotificationChange}
              />
              Low Stock Alerts
            </label>
          </div>
          <div className="form-group checkbox">
            <label>
              <input
                type="checkbox"
                name="newsletterEnabled"
                checked={settings.notifications.newsletterEnabled}
                onChange={handleNotificationChange}
              />
              Enable Newsletter
            </label>
          </div>
        </div>
      </div>

      <div className="settings-actions">
        <button className="save-btn" onClick={handleSave}>Save Changes</button>
      </div>
    </div>
  );
}

export default Settings;
