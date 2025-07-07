import React from 'react';
import type { Meta } from '@storybook/react';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';

const meta: Meta = {
  title: 'Styleguide/Color Theme Preview',
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
        gap: '1.5rem',
      }}
    >
      <h2 style={{ textAlign: 'center', color: 'var(--basicui-fg)' }}>{label}</h2>

      <ColorBox className="basicui-base" label="Base" />
      <ColorBox className="basicui-surface" label="Surface" />
      <ColorBox className="basicui-card" label="Card" />
      <ColorBox className="basicui-accent" label="Accent" />

      <div className="basicui-surface" style={componentWrapperStyle}>
        <h3 style={{ marginTop: 0 }}>Modal</h3>
        <div className="basicui-card" style={modalStyle}>
          <p>This is a modal window.</p>
          <button className="basicui-accent" style={buttonStyle}>Close</button>
        </div>
      </div>

      <div className="basicui-surface" style={componentWrapperStyle}>
        <h3 style={{ marginTop: 0 }}>Input Fields</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label htmlFor={`input-${theme}`}>Name</label>
          <Input id={`input-${theme}`} type="text" placeholder="Enter name" />
          <label htmlFor={`textarea-${theme}`}>Message</label>
          <Textarea id={`textarea-${theme}`} rows={3} placeholder="Enter message" />
        </div>
      </div>
    </div>
  );
};

const ColorBox: React.FC<{ className: string; label: string }> = ({ className, label }) => (
  <div className={className} style={colorBoxStyle}>
    {label}
  </div>
);

// Shared styles
const colorBoxStyle: React.CSSProperties = {
  border: '1px solid var(--basicui-border-color)',
  borderRadius: '6px',
  padding: '1rem',
  color: 'var(--basicui-fg)',
};

const componentWrapperStyle: React.CSSProperties = {
  padding: '1rem',
  border: '1px solid var(--basicui-border-color)',
  borderRadius: '6px',
  color: 'var(--basicui-fg)',
  backgroundColor: 'var(--basicui-bg-surface)',
};

const modalStyle: React.CSSProperties = {
  padding: '1rem',
  border: '1px solid var(--basicui-border-color)',
  borderRadius: '6px',
  backgroundColor: 'var(--basicui-bg-card)',
};

const buttonStyle: React.CSSProperties = {
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  border: '1px solid var(--basicui-border-color)',
  color: 'var(--basicui-fg)',
  backgroundColor: 'var(--basicui-bg-accent)',
  cursor: 'pointer',
};
