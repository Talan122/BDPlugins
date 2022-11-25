# Custom Fonts
Allows you to change the font within discord without needing to get confused in CSS.

Yes, it defaults to Comic Sans MS. Suffer.

![preview](/plugins/CustomFonts/images/preview.png)

TODO:
   - Add a settings interface within Discord

How to change font:

Open the file and look at the `settings` object.
  - fontLink is the link to the file. This works with most things that download to .ttf or some similar font format. Suggestion: Upload .ttf to Discord and copy its link.
  - locallyInstalled is if the font is already locally installed. Basically, if you see it in something like Word, then it's installed locally.
  - fontName is the name of the font. You can get this from looking in the .ttf file and seeing the name of the document.
  ![font](/plugins/CustomFonts/images/font.png)
  - fontSize is the size of the font in pixels. Appears to not work.