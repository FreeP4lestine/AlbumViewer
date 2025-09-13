#Requires AutoHotkey v2.0
#SingleInstance Force
#Include <WebViewToo>
brw := WebViewGui('Resize', 'Album Viewer')
brw.OnEvent('Close', (*) => (wvc := wv := 0, ExitApp()))
brw.Show('Maximize')
brw.Navigate('file:///' A_ScriptDir '/index.html')