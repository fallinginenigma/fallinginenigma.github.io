/**
 *
 * A jQuery function that displays the footnotes
 * on the side (sidenotes) for easier reading.
 *
 * This is as recommended by Edward Tufte's style sidenotes:
 * https://edwardtufte.github.io/tufte-css/#sidenotes
 *
 **/
(function () {

    $(window).on("load", function() {
        const $footnotes = $(".footnotes"),
              $postContent = $(".post-content");

        loadSideNotesFromFootnotes($postContent, $footnotes);

        $(window).resize(function() {
            // console.log(" XXX -- RESIZE -- XXX ");

            // TODO: optimization if window width doesn't change that much
            // const new_ww = $(".wrapper").outerWidth();
            // if (new_ww === windowWidth) return;
            // windowWidth = new_ww;

            loadSideNotesFromFootnotes($postContent, $footnotes);
        });
    });

    function loadSideNotesFromFootnotes($postContent, $footnotes) {

        // remove any existing side notes to begin
        $(".sidenote").remove();

        //region Should we even show sidenotes?

        // has post content
        if ($postContent.length < 1) {
            $footnotes.show();  // previous resize could have hidden footnotes
            return;
        }

        // Check if we're in a TOC layout (3-column layout)
        const $sidenotesContainer = $("#sidenotes-container");
        const isTocLayout = $sidenotesContainer.length > 0;

        if (!isTocLayout) {
            // Original logic for non-TOC layouts
            const startPosition = $postContent.position().left
                + $postContent.outerWidth()
                + 120; // increased padding for more gap

            // has room to show side content
            if(startPosition + startPosition / 3 > $(".post").outerWidth()) {
                $footnotes.show();  // previous resize could have hidden footnotes
                return;
            }

            const $fnItems = $footnotes.find("ol li");

            $("sup").each(function(index) {
                const $footnoteText = $fnItems.eq(index).text().trim();
                createSideNote($(this), $footnoteText, startPosition);
            });

            $footnotes.hide();
        } else {
            // TOC layout - use original floating sidenotes behavior
            const startPosition = $postContent.position().left
                + $postContent.outerWidth()
                + 120; // increased padding for more gap

            // Check if there's enough room for sidenotes
            if(startPosition + startPosition / 3 > $(".container-fluid").outerWidth()) {
                $footnotes.show();  // previous resize could have hidden footnotes
                return;
            }

            const $fnItems = $footnotes.find("ol li");

            $("sup").each(function(index) {
                const $footnoteText = $fnItems.eq(index).text().trim();
                createSideNote($(this), $footnoteText, startPosition);
            });

            $footnotes.hide();
        }
    }

    function createSideNote(superscript, footnoteText, startPosition) {

        // console.log(" ---> " + superscript.text() + " : " + footnoteText);

        // construct side note <div>
        let div = $(document.createElement('div'))
            .text(footnoteText)
            .addClass("sidenote");

        const topPosition = superscript.offset();

        div.css({
            position: "absolute",
            left: startPosition,
            top: topPosition["top"],
            width: startPosition/3,
        });

        if (startPosition > 420) {
            superscript.hover(function() {
                div.addClass("sidenote-hover");
            }, function () {
                div.removeClass("sidenote-hover");
            });
        } else {
            div.addClass("sidenote-hover");
        }

        // attach side note <div>
        $(document.body).append(div);
    }



})();
