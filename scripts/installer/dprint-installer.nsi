Name "dprint"

RequestExecutionLevel User

OutFile "dprint-x86_64-pc-windows-msvc-installer.exe"
InstallDir $PROFILE\.dprint

Section

    CreateDirectory $INSTDIR\bin
    SetOutPath $INSTDIR\bin
    File ..\..\target\release\dprint.exe

    EnVar::AddValue "PATH" "$INSTDIR\bin"
    Pop $0

    SetOutPath $INSTDIR
    WriteUninstaller $INSTDIR\uninstall.exe

    # Note: Don't bother adding to registry keys in order to do "Add/remove programs"
    # because we'd rather run the installer with `RequestExecutionLevel User`. We
    # tell the user in this message how to uninstall if they wish to do so.

    MessageBox MB_OK "Success! Installed to: $INSTDIR$\n$\nTo get started, restart your terminal and \
        run the following command:$\n$\n    dprint --help$\n$\nTo uninstall run: $INSTDIR\uninstall.exe"

SectionEnd

Section "Uninstall"

    EnVar::DeleteValue "PATH" "$INSTDIR\bin"
    Pop $0

    Delete $INSTDIR\uninstall.exe
    Delete $INSTDIR\bin\dprint.exe
    RMDir $INSTDIR\bin
    RMDir $INSTDIR

    # delete the plugin cache folder
    RMDir /r $LOCALAPPDATA\Dprint

SectionEnd
