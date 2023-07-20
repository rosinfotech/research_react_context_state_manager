import type { FC } from "react";
import { Box } from "@mui/material";
import { BoxContextState1 } from "@components/BoxContextState1";
import { BoxContextState2 } from "@components/BoxContextState2";
import { ContextStateProvider } from "@contexts/ContextState/ContextState";
import { useRerenderColorize } from "@hooks/useRerenderColorize";
import { BoxName } from "@components/BoxName";

export const App: FC = () => {
    const { refHTMLElement } = useRerenderColorize( { name: "App" } );

    return (
        <ContextStateProvider>
            <Box ref={ refHTMLElement } display="flex" flexDirection="column">
                <BoxContextState1 />
                <BoxName name="BoxName1" />
                <BoxContextState2 />
                <Box width="100%">
                    BoxContextState1 and BoxContextState2 rerender apart because they are using useContextSelector() which subscribed them on change specific parts of value of ContextState.
                </Box>
            </Box>
        </ContextStateProvider>
    );
};
