import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { lucario } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Componente reutilizable
const CodeExample = ({ codeString, language = 'javascript' }) => {
  return (
    <SyntaxHighlighter language={language} style={lucario}>
      {codeString}
    </SyntaxHighlighter>
  );
};

export default CodeExample;

/*
(possible exports: a11yDark, atomDark, base16AteliersulphurpoolLight, cb, coldarkCold, coldarkDark, coy, coyWithoutShadows, 
darcula, dark, dracula, duotoneDark, duotoneEarth, duotoneForest, duotoneLight, duotoneSea, duotoneSpace, funky, ghcolors, 
gruvboxDark, gruvboxLight, holiTheme, hopscotch, lucario, materialDark, materialLight, materialOceanic, nightOwl, nord, okaidia, 
oneDark, oneLight, pojoaque, prism, shadesOfPurple, solarizedDarkAtom, solarizedlight, synthwave84, tomorrow, twilight, vs, 
vscDarkPlus, xonokai, zTouch)
*/ 
