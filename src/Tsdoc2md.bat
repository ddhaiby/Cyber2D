@echo off
rem start at the top of the tree to visit and loop though each directory
for /r %%a in (*.ts) do (
  rem enter the directory
  pushd %%a
  echo In directory:
  IF EXIST %%a (
    echo In If
    echo %%a
    set pathTs=%%a + %pathTs%
    echo fin IF
  ) ELSE (
    cd
  rem leave the directory
    popd
    )

  )
echo %pathTs%
typedoc --plugin typedoc-plugin-markdown --out docs --entryPoints "./" --logger "console" --logLevel Verbose
