import type { IconButtonProps } from '@chakra-ui/react';
import type { ThemeProviderProps } from 'next-themes';
import { JSX } from 'react';
export interface ColorModeProviderProps extends ThemeProviderProps {
}
export declare function ColorModeProvider(props: ColorModeProviderProps): JSX.Element;
interface ColorModeButtonProps extends Omit<IconButtonProps, 'aria-label'> {
}
export declare const ColorModeButton: import("react").ForwardRefExoticComponent<ColorModeButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export {};
