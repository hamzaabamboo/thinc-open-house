import { code } from "mdx-deck/themes";
import okaidia from "react-syntax-highlighter/styles/prism/okaidia";
import prismJSX from "react-syntax-highlighter/languages/prism/jsx";
import prismBash from "react-syntax-highlighter/languages/prism/bash";

export default {
  ...code,
  prism: {
    style: okaidia,
    languages: {
      html: prismJSX,
      bash: prismBash
    }
  }
};
