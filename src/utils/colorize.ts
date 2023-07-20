/* eslint-disable @typescript-eslint/no-magic-numbers, @typescript-eslint/no-unnecessary-condition */

export interface ColorizeInterface {
    borders?: boolean;
    node?: HTMLElement | ChildNode;
    withNodesNested?: boolean;
}

export function colorize ( {
    borders = false,
    node,
    withNodesNested = false,
}: ColorizeInterface ): void {
    if ( !node ) {
        return;
    }

    const nodeColorize = ( nodeArgument: HTMLElement ) => {
        if ( !nodeArgument.style ) {
            return;
        }
        nodeArgument.style.backgroundColor = `#${ (
            Math.random() * 0xffffff <<
            0
        ).toString( 16 ) }`;
        if ( borders ) {
            nodeArgument.style.border = `1px dashed #${ (
                Math.random() * 0xffffff <<
                0
            ).toString( 16 ) }`;
        }
    };

    if ( !withNodesNested ) {
        nodeColorize( node as HTMLElement );
        return;
    }

    while ( node ) {
        if ( node.nodeType === 1 ) {
            nodeColorize( node as HTMLElement );
            node.childNodes.length && colorize( {
                node: node.firstChild as HTMLElement,
                borders,
            } );
        }
        node = node.nextSibling as HTMLElement;
    }
}
