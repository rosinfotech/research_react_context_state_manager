import { BoxContextState1 } from "@components/BoxContextState1";
import { BoxContextState2 } from "@components/BoxContextState2";
import { BoxName } from "@components/BoxName";
import { ContextStateProvider } from "@contexts/ContextState/ContextState";
import { Box } from "@mui/material";
import { useColorizeRender } from "@rosinfo.tech/utils/useColorizeRender";
import type { FC } from "react";

export const App: FC = () => {
    const { colorizeRenderRef } = useColorizeRender( { name: "App" } );

    return (
        <ContextStateProvider>
            <Box ref={ colorizeRenderRef } display="flex" flexDirection="column">
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
