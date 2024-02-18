import React, { ReactNode } from 'react';
export interface PanelOptions {
    title: string;
    size: 'sm' | 'md' | 'lg';
    render: (onSubmit: () => void, onCancel: () => void) => ReactNode;
}
export interface PanelProps extends PanelOptions {
    open: boolean;
    onSubmit: () => void;
    onClose: () => void;
}
export declare const usePanel: () => (options: PanelOptions) => Promise<void>;
export declare const AppPanel: React.FC<PanelProps>;
