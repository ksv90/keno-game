import { SpotIdList } from "../../helpers";
import { JSX } from 'react';
export interface SceneProps {
    readonly makeBet: (spots: SpotIdList) => void;
}
export declare function SceneMediator(props: SceneProps): JSX.Element;
