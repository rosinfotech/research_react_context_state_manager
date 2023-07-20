import { type FC, useCallback } from "react";
import { Box } from "@mui/material";
import { useContextStateSelector } from "@contexts/ContextState/ContextState";
import { useRerenderColorize } from "@hooks/useRerenderColorize";

const CURSOR_SX = { cursor: "pointer" };

export const BoxContextState2: FC = () => {
    const state2 = useContextStateSelector( state => state.state2 );
    const contextStateStateSet = useContextStateSelector( state => state.contextStateStateSet );
    const { refHTMLElement } = useRerenderColorize( { name: "ButtonContextState2" } );

    const onClick = useCallback( () => {
        contextStateStateSet( {
            state2: state2 + 1,
        } );
    }, [ contextStateStateSet, state2 ] );

    return (
        <Box
            ref={ refHTMLElement }
            sx={ CURSOR_SX }
            width="100%"
            onClick={ onClick }
        >
            Click me! BoxContextState.state2 &lt;{state2}&gt;
        </Box>
    );
};
