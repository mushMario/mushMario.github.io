@echo off
echo ����commit��ע�ͣ�
set/p "commit="
echo push��Զ�˲ֿ���ĸ���֧?��
set/p "branch="
if "%branch%" == "" (set "branch=master")
git add .
git commit -m "%commit%"
git push origin %branch%
pause