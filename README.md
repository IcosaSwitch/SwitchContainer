# SwitchContainer

This Repo is for SwitchContainer for your electron app (for html emulation or other thing)

<img src="https://i.imgur.com/CQVxblh.png"/>

## Install

```console
> git clone https://github.com/IcosaSwitch/SwitchContainer.git
> cd SwitchContainer
> npm install
> npm start
```

## Documentation

This app work with Emitteur called `switchem`

| Event | Key | Switch Button | Description |
| ----- | --- | ------------- | ----------- |
| `power` | `P` | Power | Make screen off/on |
| `volp` | `none` | Volume Up/Plus | |
| `volm` | `none` | Volume Down/Minus | |
| `minus` | `none` | - | |
| `plus` | `none` | + | |
| `ltopstart` | `none` | Left Joystick Up | |
| `ltopstop` | `none` | Left Joystick Up | |
| `ltopleftstart` | `none` | Left Joystick Up Left | |
| `ltopleftstop` | `none` | Left Joystick Up Left | |
| `lleftstart` | `none` | Left Joystick Left | |
| `lleftstop` | `none` | Left Joystick Left | |
| `lleftbottomstart` | `none` | Left Joystick Left Down | |
| `lleftbottomstop` | `none` | Left Joystick Left Down | |
| `lbottomstart` | `none` | Left Joystick Bottom | |
| `lbottomstop` | `none` | Left Joystick Bottom | |
| `lbottomrightstart` | `none` | Left Joystick Bottom Right | |
| `lbottomrightstop` | `none` | Left Joystick Bottom Right | |
| `lrightstart` | `none` | Left Joystick Right | |
| `lrightstop` | `none` | Left Joystick Right | |
| `lrighttopstart` | `none` | Left Joystick Right Top | |
| `lrighttopstop` | `none` | Left Joystick Right Top | |
| `arrowup` | `Arrow Up` | Arrow Up | |
| `arrowleft` | `Arrow Left` | Arrow Left | |
| `arrowbottom` | `Arrow Bottom` | Arrow Bottom | |
| `arrowright` | `Arrow Right` | Arrow Right | |
| `capture` | `none` | Capture Button | Make a capture(1) |
| `l` | `none` | L | |
| `x` | `none` | X | |
| `y` | `none` | Y | |
| `b` | `none` | B | |
| `a` | `none` | A | |
| `rtopstart` | `none` | Right Joystick Up | |
| `rtopstop` | `none` | Right Joystick Up | |
| `rtopleftstart` | `none` | Right Joystick Up Right | |
| `rtopleftstop` | `none` | Right Joystick Up Right | |
| `rleftstart` | `none` | Right Joystick Right | |
| `rleftstop` | `none` | Right Joystick Right | |
| `rleftbottomstart` | `none` | Right Joystick Right Down | |
| `rleftbottomstop` | `none` | Right Joystick Right Down | |
| `rbottomstart` | `none` | Right Joystick Bottom | |
| `rbottomstop` | `none` | Right Joystick Bottom | |
| `rbottomrightstart` | `none` | Right Joystick Bottom Right | |
| `rbottomrightstop` | `none` | Right Joystick Bottom Right | |
| `rrightstart` | `none` | Right Joystick Right | |
| `rrightstop` | `none` | Right Joystick Right | |
| `rrighttopstart` | `none` | Right Joystick Right Top | |
| `rrighttopstop` | `none` | Right Joystick Right Top | |
| `home` | `none` | Home Button | |
| `r` | `none` | R | |

Write your script in the function `init()`

(1) Create a canvas with the content of the div "switchcontainer" with html2canvas and save it in the app folder as "screenshot.png"
