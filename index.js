var isTextEditorActive = document.getElementById('sqlVerineSwitch');

if (isTextEditorActive) {
    isTextEditorActive.addEventListener("change", function () {
        var textEditorTextBox = document.querySelector('.form-control');
        if (isTextEditorActive.checked === true) {
            // Textbereich unsichtbar machen
            var codeEditorContainer = document.getElementById('codeAreaText');
            textEditorTextBox.classList.add("invisible");

            var editor = document.createElement("iframe");
            editor.classList = "editorWindow"
            editor.src = chrome.runtime.getURL('codeWindow.html');
            editor.width = '800';
            editor.height = '300';
            codeEditorContainer.appendChild(editor);
            

            // Im umgebenden Dokument
            window.addEventListener('message', function (event) {
                if (event.data.type === 'editorContent') {
                    var editorContent = event.data.content;
                    textEditorTextBox.innerHTML = editorContent;
                }
            });

            

        } else {
            // Umgekehrt: Code-Editor deaktivieren und Textbereich anzeigen
            var textEditorTextBox = document.querySelector('.form-control');
            textEditorTextBox.classList.remove("invisible");
            var codeEditor = document.querySelector('.editorWindow');
            if (codeEditor) {
                codeEditor.remove();
            }
        }
    });
}

