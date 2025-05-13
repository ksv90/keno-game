import { Component, ErrorInfo, JSX, ReactNode } from 'react';
interface ErrorBoundaryProps {
    readonly children: ReactNode;
    readonly onError?: () => void;
}
interface BoundaryState {
    readonly error?: Error;
    readonly errorInfo?: ErrorInfo;
}
export declare class ErrorBoundary extends Component<ErrorBoundaryProps, BoundaryState> {
    constructor(props: ErrorBoundaryProps);
    static getDerivedStateFromError(error: Error): BoundaryState;
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    handleReload: () => void;
    render(): string | number | boolean | Iterable<ReactNode> | JSX.Element | null | undefined;
}
export default ErrorBoundary;
