const sqlKeywords = [
    "SELECT",
    "FROM",
    "WHERE",
    "GROUP BY",
    "HAVING",
    "ORDER BY",
    "INSERT INTO",
    "UPDATE",
    "DELETE",
    "CREATE",
    "ALTER",
    "DROP",
    "JOIN",
    "INNER JOIN",
    "LEFT JOIN",
    "RIGHT JOIN",
    "FULL OUTER JOIN",
    "ON",
    "AS",
    "DISTINCT",
    "UNION",
    "UNION ALL",
    "IN",
    "BETWEEN",
    "LIKE",
    "NOT",
    "NULL",
    "IS NULL",
    "IS NOT NULL",
    "EXISTS",
    "ALL",
    "ANY",
    "COUNT",
    "SUM",
    "AVG",
    "MAX",
    "MIN",
    "GROUP_CONCAT",
    "CREATE TABLE",
    "PRIMARY KEY",
    "FOREIGN KEY",
    "INDEX",
    "UNIQUE",
    "CONSTRAINT",
    "VIEW",
    "PROCEDURE",
    "TRIGGER",
    "DATABASE",
    "TABLE",
    "COLUMN",
    "INDEX",
    "DISTINCT",
    "CASE",
    "WHEN",
    "THEN",
    "ELSE",
    "END",
    "CAST",
    "AS",
    "BETWEEN",
    "ORDER",
    "BY",
    "ASC",
    "DESC",
    "TOP",
    "LIMIT"
  ];

  var isTextEditorActive = document.getElementById('sqlVerineSwitch');

  if (isTextEditorActive) {
      isTextEditorActive.addEventListener("change", function () {
          var textEditorTextBox = document.querySelector('.form-control');
          if (isTextEditorActive.checked === true) {
            // Textbereich unsichtbar machen
            var codeEditorContainer = document.getElementById('codeAreaText');
            textEditorTextBox.classList.add("invisible");

            // Container für den Code-Editor
            var codeEditor = document.createElement('div');
            codeEditor.className = "codeInput";

            // Create Line Numbers Counter Site
            var lineNumbers = document.createElement('pre');
            lineNumbers.id = "line-numbers";
            lineNumbers.textContent = "1";
            codeEditor.appendChild(lineNumbers);

            // Create Editor Space
            var editor = document.createElement('pre');
            editor.id = "editor";
            editor.setAttribute("contenteditable", true)
            editor.addEventListener('input', updateLineNumbers);

            function updateLineNumbers() {
                // Content
            }

            codeEditor.appendChild(editor);

            // Add Code-Editor Div
            codeEditorContainer.appendChild(codeEditor);
  
          } else {
              // Umgekehrt: Code-Editor deaktivieren und Textbereich anzeigen
              var codeEditor = document.querySelector('.codeInput');
              if (codeEditor) {
                  codeEditor.remove();
                  textEditorTextBox.classList.remove("invisible");
              }
          }
      });
  }
  
 // Funktion, um den Cursor an das Ende des Elements zu setzen
 function setCursorPosition(element) {
    const range = document.createRange();
    const sel = window.getSelection();
    const lastChild = element.lastChild;
    const isLastChildSpan = lastChild && lastChild.tagName === 'SPAN';
    if (isLastChildSpan) {
        range.setStart(lastChild.firstChild, lastChild.firstChild.length);
        range.setEnd(lastChild.firstChild, lastChild.firstChild.length);
    } else {
        range.setStart(lastChild, lastChild.length);
        range.setEnd(lastChild, lastChild.length);
    }
    sel.removeAllRanges();
    sel.addRange(range);
}