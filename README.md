# Run PowerShell Command VS Code Extension

![Extension Icon](images/icon.png)

## Overview

**Run PowerShell Command** is a Visual Studio Code extension that lets you easily execute PowerShell scripts directly from the VS Code interface. Configure your favorite scripts and run them with a single click from the Explorer context menu.

---

## Features

- **Quick Script Execution:** Run any PowerShell script from VS Code.
- **Custom Script List:** Configure multiple scripts with labels and options.
- **Terminal or Background:** Choose to run scripts in a terminal or silently in the background.
- **Explorer Context Menu:** Access your scripts from the right-click menu in the Explorer.

---

## Getting Started

### Installation

1. Download the latest `.vsix` file from the [Releases](https://github.com/JuanJoseSolorzano/ExecPS1Command/releases).
2. In VS Code, press `Ctrl+Shift+P` and select `Extensions: Install from VSIX...`.
3. Choose the downloaded file to install.

### Configuration

Add your scripts to the extension settings:

```json
{
  "RunPs1Command.scripts": [
    {
      "label": "Example Script",
      "command": "C:\\Scripts\\example.ps1",
      "terminal": true
    }
  ]
}
```

- **label:** Name shown in the menu.
- **command:** Full path to your `.ps1` script.
- **terminal:** `true` to run in a terminal, `false` to run in the background.

---

## Usage

1. Right-click any file or folder in the Explorer.
2. Select `RunPs1Command`.
3. Pick your script from the list.
4. View output in the terminal or as a notification.

---

## License

This project is licensed under the MIT License. See [LICENCE](LICENCE) for details.

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## Links

- [GitHub Repository](https://github.com/JuanJoseSolorzano/ExecPS1Command)
- [Report Issues](https://github.com/JuanJoseSolorzano/ExecPS1Command/issues)
