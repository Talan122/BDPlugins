/**
 * @name CustomFonts
 * @author Talan122
 * @id 267333357874970624
 * @version 0.0.3
 * @description Allows you to change the default Discord font relatively easily.
 */

const settings = {
    fontLink: "",
    localyInstalled: true,
    fontName: "Comic Sans MS",
    fontSize: 15
}

module.exports = class CustomFonts {
    start() {
        if(!settings.localyInstalled) this.injectCSS(`@import url(${settings.fontLink});`)

        this.injectCSS(
        `
        :root {
            --Chat-Font-Used: '${settings.fontName}', regular;
            --Chat-Font-Size: ${settings.fontSize}px;
        }

        :not([class="hljs"]):not(code){
            font-family: var(--Chat-Font-Used)!important;
        }
            
        .markup:not(code) {
            font-size: var(--Chat-Font-Size)!important;
        }
        `
        );
        /*
        CSS courtesy of
        https://gist.github.com/BBoldt/67438fb40301144235272bdb01e1336b?permalink_comment_id=2804380#gistcomment-2804380
        */

    }
    stop() {
        BdApi.clearCSS("CustomFonts");
    }

    injectCSS(input) {
        BdApi.injectCSS("CustomFonts", input);
    }
}