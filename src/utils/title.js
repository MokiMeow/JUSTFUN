const EMPHASIS_PATTERN = /(<b>.*?<\/b>)/g;

export const parseStyledTitle = (title) =>
  title.split("<br />").map((line) =>
    line
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .map((word) =>
        word
          .split(EMPHASIS_PATTERN)
          .filter(Boolean)
          .map((part) => ({
            emphasized: part.startsWith("<b>") && part.endsWith("</b>"),
            text: part.replace(/^<b>|<\/b>$/g, ""),
          })),
      ),
  );
