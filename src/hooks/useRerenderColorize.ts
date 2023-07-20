import { RefObject, useEffect, useRef } from "react";
import {
    ColorizeInterface,
    colorize,
} from "../utils/colorize";

interface IuseRerenderColorizeOptions extends Omit<ColorizeInterface, "node"> {
    name: string;
}

interface IUseEffectColorizeReturn {
    refHTMLElement: RefObject<HTMLElement>;
}

export function useRerenderColorize (
    options: IuseRerenderColorizeOptions,
): IUseEffectColorizeReturn {
    const { borders, name } = options;
    const refRenderCounter = useRef( 0 );
    const refHTMLElement = useRef<HTMLElement>( null );

    useEffect( () => {
        refRenderCounter.current++;
        console.log( `useRerenderColorize <${ name }> <${ !!refHTMLElement.current }> <${ refRenderCounter.current }>` );
        if ( !refHTMLElement.current ) {
            return;
        }
        colorize( {
            node: refHTMLElement.current,
            borders,
        } );
    } );

    return { refHTMLElement };
}
