import React from 'react';
import type { Meta } from '@storybook/react';

const meta: Meta = {
  title: 'Styleguide/Color Themes',
};
export default meta;

export const ColorThemes = () => {
  return (
    <div style={{ display: 'flex', gap: '2rem', padding: '2rem' }}>
      <ThemePreview theme="basicui-light" label="Light Mode" />
      <ThemePreview theme="basicui-dark" label="Dark Mode" />
    </div>
  );
};

type ThemePreviewProps = {
  theme: string;
  label: string;
};

const ThemePreview: React.FC<ThemePreviewProps> = ({ theme, label }) => {
  return (
    <div
      className={theme}
      style={{
        flex: 1,
        backgroundColor: 'var(--basicui-bg-base)',
        padding: '2rem',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        color: 'var(--basicui-fg)',
      }}
    >
      <h2 style={{ textAlign: 'center' }}>{label}</h2>

      {/* Color Palette Swatches */}
      <div>
        <h3>Color Palette</h3>
        <div style={{ display: 'grid', gap: '1rem' }}>
          <ColorSwatch className="basicui-base" label="Base" />
          <ColorSwatch className="basicui-surface" label="Surface" />
          <ColorSwatch className="basicui-card" label="Card" />
          <ColorSwatch className="basicui-accent" label="Accent" />
          <ColorSwatch className="basicui-subtle" label="Subtle" />
        </div>
      </div>

      {/* Surface with Card Listing */}
      <div className="basicui-surface" style={sectionStyle}>
        <h3>Card Listing</h3>
        <div style={cardGridStyle}>
          {[1, 2, 3].map((n) => (
            <div key={n} className="basicui-card" style={cardItemStyle}>
              <h4>Card #{n}</h4>
              <p>Description goes here.</p>
              <button className="basicui-accent" style={buttonStyle}>Open</button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Form Example */}
      <div className="basicui-surface" style={sectionStyle}>
        <h3>Modal with Form</h3>
        <div className="basicui-card" style={modalStyle}>
          <h4>Edit User</h4>
          <div className="basicui-accent" style={formSectionStyle}>
            <label>Name</label>
            <input type="text" placeholder="Jane Doe" />
            <label>Email</label>
            <input type="email" placeholder="jane@example.com" />
          </div>
          <div className="basicui-subtle" style={formSectionStyle}>
            <label>Role</label>
            <select>
              <option>Admin</option>
              <option>Editor</option>
              <option>Viewer</option>
            </select>
            <label>Status</label>
            <input type="checkbox" /> Active
          </div>
          <div style={{ marginTop: '1rem' }}>
            <button className="basicui-accent" style={buttonStyle}>Save</button>
          </div>
        </div>
      </div>

      {/* Deep Nested Editor */}
      <div className="basicui-surface" style={sectionStyle}>
        <h3>Nested Editor</h3>
        <div className="basicui-card" style={{ padding: '1rem', borderRadius: '8px' }}>
          <div className="basicui-accent" style={nestedStyle}>
            <p>Object: <strong>User</strong></p>
            <div className="basicui-subtle" style={nestedStyle}>
              <p>Profile Info</p>
              <div className="basicui-accent" style={nestedStyle}>
                <label>First Name</label>
                <input type="text" />
                <label>Last Name</label>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ColorSwatch: React.FC<{ className: string; label: string }> = ({ className, label }) => (
  <div className={className} style={swatchStyle}>
    {label}
  </div>
);

// Styles
const swatchStyle: React.CSSProperties = {
  border: '1px solid var(--basicui-border-color)',
  borderRadius: '6px',
  padding: '1rem',
  color: 'var(--basicui-fg)',
};

const sectionStyle: React.CSSProperties = {
  padding: '1rem',
  border: '1px solid var(--basicui-border-color)',
  borderRadius: '6px',
};

const cardGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
  gap: '1rem',
  marginTop: '1rem',
};

const cardItemStyle: React.CSSProperties = {
  padding: '1rem',
  borderRadius: '6px',
  border: '1px solid var(--basicui-border-color)',
};

const modalStyle: React.CSSProperties = {
  padding: '1rem',
  border: '1px solid var(--basicui-border-color)',
  borderRadius: '6px',
  backgroundColor: 'var(--basicui-bg-card)',
};

const formSectionStyle: React.CSSProperties = {
  padding: '1rem',
  borderRadius: '6px',
  border: '1px solid var(--basicui-border-color)',
  marginTop: '1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
};

const nestedStyle: React.CSSProperties = {
  padding: '1rem',
  borderRadius: '6px',
  border: '1px solid var(--basicui-border-color)',
  marginTop: '1rem',
};

const buttonStyle: React.CSSProperties = {
  marginTop: '0.5rem',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  border: '1px solid var(--basicui-border-color)',
  backgroundColor: 'var(--basicui-bg-accent)',
  color: 'var(--basicui-fg)',
  cursor: 'pointer',
};
