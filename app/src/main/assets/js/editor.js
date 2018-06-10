// Generated by CoffeeScript 1.6.3
(function() {
  var displayFileContent, editor, lang;

  lang = void 0;

  editor = void 0;

  displayFileContent = function() {
    var editorElm, editorOption, rawCodes;
    rawCodes = CodeLoader.getCode();
    $('#editor').text(rawCodes);
    editorElm = document.getElementById("editor");
    editorOption = {
      lineNumbers: true,
      mode: lang,
      theme: CodeLoader.getTheme(),
      matchBrackets: true,
      lineWrapping: true,
      readOnly: true
    };
    return editor = CodeMirror.fromTextArea(editorElm, editorOption);
  };

  window.setLang = function(l) {
    lang = l;
    if (editor) {
      return editor.setOption("mode", lang);
    }
  };

  window.display = displayFileContent;

  window.setEditable = function() {
    return editor.setOption("readOnly", false);
  };

  window.save = function() {
    editor.setOption("readOnly", true);
    return CodeLoader.save(editor.getValue());
  };

  window.copy_all = function() {
    value = editor.getValue();
    return CodeLoader.copy_all(value);
  }


  $(document).ready(function() {
    return CodeLoader.loadCode();
  });

}).call(this);
