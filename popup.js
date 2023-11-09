// popup.js

document.addEventListener('DOMContentLoaded', function () {
    const script = document.createElement('script');
    script.src = chrome.runtime.getURL('node_modules/monaco-editor/min/vs/loader.js');
    script.onload = function () {
        const vs = chrome.runtime.getURL('node_modules/monaco-editor/min/vs');
        require.config({ paths: { 'vs': vs } });

        require(['vs/editor/editor.main'], function () {
            var editor = monaco.editor.create(document.getElementById('editor'), {
                language: 'sql',
                theme: 'vs-dark'
            });

            // Event-Listener für Änderungen im Inhalt des Editors
            editor.onDidChangeModelContent(function (event) {
                var editorContent = editor.getValue();
                window.parent.postMessage({ type: 'editorContent', content: editorContent }, '*');
            });

        });
    };
    document.head.appendChild(script);
});
