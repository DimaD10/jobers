tinymce.init({
  selector: ".post-textarea__textarea",
  plugins:
    "tinycomments anchor autolink autoresize charmap codesample emoticons image lists media searchreplace visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss",
  toolbar: "bold italic bullist",
  tinycomments_mode: "embedded",
  autoresize_min_height: 100,
  autoresize_max_height: 50000,
  autoresize_bottom_margin: 20,
  setup: function (editor) {
    editor.on("focus", (e) => {
      e.target.contentAreaContainer
        .closest(".post-textarea")
        .classList.add("focus");
    });

    editor.on("blur", (e) => {
      e.target.contentAreaContainer
        .closest(".post-textarea")
        .classList.remove("focus");
    });
  },
  content_css: ["styles/textarea.css"],
  content_css_cors: true,
  body_class: "editor",
  content_style:
    "  body, .mce-content-body[data-mce-placeholder]:not(.mce-visualblocks)::before { font-size: 16px !important; line-height: 24px !important; color: #9999a6 !important; font-family: 'Proxima Nova';} p, ul, li, div, h1, h2, h3, h4, h5, h6 { font-size: 16px !important; line-height: 24px !important; color: #636d77; !important; margin: 0 !important;} body {font-family: 'Proxima Nova' !important; } ul {padding-inline-start: 24px !important;} p, ul {margin-bottom: 20px !important;}",
});
