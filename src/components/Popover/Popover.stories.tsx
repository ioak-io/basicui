import React, { useRef, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Popover from '.';

const meta: Meta<typeof Popover> = {
    title: 'Surfaces/Popover',
    component: Popover,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Basic: Story = {
    render: () => {
        const [visible, setVisible] = useState(false);
        const buttonRef = useRef<HTMLButtonElement>(null);

        return (
            <div style={{ padding: 100 }}>
                <button ref={buttonRef} onClick={() => setVisible((v) => !v)}>
                    Toggle Popover
                </button>

                <Popover
                    anchorRef={buttonRef}
                    visible={visible}
                    onClose={() => setVisible(false)}
                >
                    <div
                        style={{
                            background: 'var(--basicui-bg-card)',
                            padding: '1rem',
                            borderRadius: '4px',
                            border: '1px solid var(--basicui-border-color)',
                            // minWidth: '200px',
                        }}
                    >
                        <strong>Popover Content</strong>
                        <p>This content appears when the popover is visible.</p>
                    </div>
                </Popover>
            </div>
        );
    },
};
