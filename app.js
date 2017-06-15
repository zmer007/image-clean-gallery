const electron = require('electron')
const path = require('path')
const url = require('url')

// require('electron-debug')({showDevTools: true})

var window = null

electron.app.on("ready", function(){
	window = new electron.BrowserWindow({
			width: 1000,
			height: 1000,
			resizeable: false
		})

	window.loadURL(url.format({
			pathname: path.join(__dirname, 'index.html'),
			protocol: 'file:',
			slashes: true
		}))

	window.once('ready-to-show', function(){
			window.show()
		})
})
