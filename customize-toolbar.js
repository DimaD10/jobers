tinymce.init({
  selector: ".post-textarea__textarea",
  plugins:
    "tinycomments anchor autolink charmap codesample emoticons image lists media searchreplace visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss",
  toolbar: "bold italic bullist",
  tinycomments_mode: "embedded",
  setup: function (editor) {
    editor.on("focus", e => {
      e.target.contentAreaContainer
        .closest(".post-textarea")
        .classList.add("focus");
    });

    editor.on("blur", e => {
      e.target.contentAreaContainer
        .closest(".post-textarea")
        .classList.remove("focus");
    });
  },
});
