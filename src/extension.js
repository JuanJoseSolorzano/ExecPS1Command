
// Imports
const vscode = require('vscode');
const {exec} = require('child_process');
const path = require('path');
const fs = require('fs')

function activate(context) {
  let disposable = vscode.commands.registerCommand("extension.RunPs1Command", async (uri) => {
    // Here you will put 
    const config = vscode.workspace.getConfiguration("RunPs1Command");
    const scripts = config.get("scripts");
    if(!scripts || scripts.length === 0){
      vscode.window.showWarningMessage("No scripts configured.");return;
    }
    const userSelection = await vscode.window.showQuickPick(scripts.map(s=>s.label),{placeHolder:"Select one:"});
    if(!userSelection){
      vscode.window.showErrorMessage("No user selection");
    }
    const script = scripts.find(s=>s.label === userSelection);
    if(!script) return;
    const ps1Command = `${script.command}`;
    //Command execution.
    if(script.terminal){
      const terminal = vscode.window.createTerminal({
        name: "PowerShell Script Runner",
        shellPath: "powershell.exe"});
        terminal.show(true);
        terminal.sendText(`powershell -ExecutionPolicy Bypass -C ${ps1Command}`);
    }else{
      exec(`powershell -ExecutionPolicy Bypass -C "${ps1Command}"`,(error,stdout,stderr) => {
        if(error){vscode.window.showErrorMessage(`Error: ${error.message}`);return;}
        if(stderr){vscode.window.showErrorMessage(`StdError: ${stderr.trim()}`);return;}
        vscode.window.showInformationMessage(`Output: ${stdout.trim()}`);
      });
    }
  });
  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
