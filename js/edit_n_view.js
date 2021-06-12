function openTest(editor) {
    let doc = document.getElementById(editor).value;
    testWindow = window.open('','result',"width=400, height=400, toolbar=no, menubar=no, scrollbars=no, resizable=yes");
    testWindow.document.head.innerHTML = '';
    testWindow.document.body.innerHTML = '';
    testWindow.document.write(doc);
}