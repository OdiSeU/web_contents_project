function openTest(editor) {
    let doc = document.getElementById(editor).value;
    let script = document.createElement('script');
    script.text = 'window.onblur = function(){window.close()};'
    testWindow = window.open('','result',"width=400, height=400, toolbar=no, menubar=no, scrollbars=no, resizable=yes");
    testWindow.document.head.innerHTML = '';
    testWindow.document.body.innerHTML = '';
    testWindow.document.write(doc);
    testWindow.document.head.append(script);
}