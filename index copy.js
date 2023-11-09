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
              codeEditorContainer.appendChild(codeEditor);
  
              // Funktion zum Hinzufügen einer Zeile
              function addLine() {
                  var line = document.createElement('div');
                  line.className = "line";
  
                  // Zeilennummer hinzufügen
                  var lineNumber = document.createElement('div');
                  lineNumber.className = "lineNumber";
                  lineNumber.textContent = codeEditor.children.length + 1;
                  line.appendChild(lineNumber);
  
                  // Eingabe-Div hinzufügen
                  var codeText = document.createElement('div');
                  codeText.className = "codeText";
                  codeText.setAttribute('contenteditable', true);
                  codeText.textContent = '';
                  line.appendChild(codeText);
  
                  codeEditor.appendChild(line);
                  codeText.focus();
              }
  
              // Initialzeile hinzufügen
              addLine();
  
              // Eventlistener zum Hinzufügen einer Zeile beim Drücken von Enter
              codeEditor.addEventListener('keydown', function (event) {
                  if (event.key === 'Enter') {
                      addLine();
                      event.preventDefault();
                  }
              });
              codeEditor.addEventListener("input", function(){
                highlightKeywords();
              });
  
              // Eventlistener zur Aktualisierung der Zeilennummern
              codeEditor.addEventListener('input', function () {
                  updateLineNumbers();
              });
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
  
  function updateLineNumbers() {
      var codeEditor = document.querySelector('.codeInput');
      var lineNumbers = codeEditor.querySelectorAll('.lineNumber');
      lineNumbers.forEach(function (lineNumber, index) {
          lineNumber.textContent = index + 1;
      });
  }

  function getAllWordsFromLines() {
    var codeEditor = document.querySelector('.codeInput');
    var lines = codeEditor.querySelectorAll('.codeText');

    var allWords = [];

    lines.forEach(function (line) {
        var text = line.textContent;
        var words = text.split(/\s+/);
        allWords = allWords.concat(words);
    });

    return allWords;
}

function highlightKeywords() {
    var codeEditor = document.querySelector('.codeInput');
    var lines = codeEditor.querySelectorAll('.codeText');
    if(lines[0].innerHTML.includes('SELECT')){
        lines[0].innerHTML = lines[0].innerHTML.replace(/SELECT/g, '<span class="keyword">SELECT</span>');
        
    }
}
