import type { FC } from "react";
import { Box } from "@mui/material";
import { useRerenderColorize } from "@hooks/useRerenderColorize";

interface IBoxNameProps {
    name: string;
}

export const BoxName: FC<IBoxNameProps> = ( props ) => {
    const { name } = props;
    const { refHTMLElement } = useRerenderColorize( { name: `BoxName <${ name }>` } );

    return (
        <Box ref={ refHTMLElement } width="100%" >
            BoxName &lt;{name}&gt;
        </Box>
    );
};
