const textarea = document.getElementById("textarea")
async function openFile(){
    let [fileHandle] = await window.showOpenFilePicker(); //await window.showDirectoryPicker();
    let fileData = await fileHandle.getFile();
    let text = await fileData.text();
    textarea.innerText = text;
}

async function save(){
    let [fileHandle] = await window.showOpenFilePicker();
    let stream = await fileHandle.createWritable();
    await stream.write(textarea.innerText);
    await stream.close();
}

async function saveAs(){
    let [fileHandle] = await window.showSaveFilePicker();
    save();
}