@echo off
cd /d "D:\GYOGYSZER"

echo Git add...
git add .

git diff --cached --quiet

if errorlevel 1 (
    echo Commit...
    git commit -m "Automatic update"

    echo Push...
    git push origin master
) else (
    echo Nincs valtozas.
)

echo.
echo Kesz.
pause