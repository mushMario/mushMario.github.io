@echo off
echo 本次commit的注释：
set/p "commit="
echo push到远端仓库的哪个分支?：
set/p "branch="
if "%branch%" == "" (set "branch=master:master") else set "branch=%branch%:master"
git add .
git commit -m "%commit%"
git push origin %branch%
pause