import { type FC, useCallback } from "react";
import { Box } from "@mui/material";
import { useContextStateSelector } from "@contexts/ContextState/ContextState";
import { useRerenderColorize } from "@hooks/useRerenderColorize";

const CURSOR_SX = { cursor: "pointer" };

export const BoxContextState1: FC = () => {
    const state1 = useContextStateSelector( state => state.state1 );
    const contextStateStateSet = useContextStateSelector( state => state.contextStateStateSet );
    const { refHTMLElement } = useRerenderColorize( { name: "ButtonContextState1" } );

    const onClick = useCallback( () => {
        contextStateStateSet( {
            state1: state1 + 1,
        } );
    }, [ contextStateStateSet, state1 ] );

    return (
        <Box
            ref={ refHTMLElement }
            sx={ CURSOR_SX }
            width="100%"
            onClick={ onClick }
        >
            Click me! BoxContextState.state1 &lt;{state1}&gt;
        </Box>
    );
};
