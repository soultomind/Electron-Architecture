# Electron Architecture

## 1.Installing Chocolately

https://chocolatey.org/install

Windows PowerShell 을 관리자 권한으로 실행 후에 아래 명령어를 실행한다.
```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

Get-ExecutionPolicy 명령어를 실행
```
Get-ExecutionPolicy
```

결과내용이 Restricted 출력 될 경우 아래의 명령어를 실행한다.
```
Set-ExecutionPolicy AllSigned 
```
```
Set-ExecutionPolicy Bypass -Scope Process
```

명령 프롬프트(Cmd.exe) 를 실행하여 choco or choco -? 명령어를 실행해보자 아래와 유사하게 출력 될경우 정상적으로 설치 된 것이다.

```
choco
Chocolately v2.6.0
Please run 'choco --help' or 'choco <command> --help' for help menu
```

## 2. Node JS 설치

https://community.chocolatey.org/packages

위 주소로 이동후에 Search packages or get suggestions... 텍스트박스 항목에 Node JS 을 입력한다.

Node.js LTS (Install) 

