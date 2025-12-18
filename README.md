# Electron Tutorial

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

결과내용이 Restricted 출력 될 경우 아래의 명령어중 하나를 실행한다.
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

여기서는 안정적인 Node.js LTS (Install) 버전을 설치합니다.

```
choco install nodejs-lts
```

중간에 아래 명령어 나오면 Y
```
 Do you want to continue?([Y]es/[N]o): Y
```

Node JS 여러 버전을 설치해서 테스트가 필요 할 수 있음으로 NVM 을 설치합니다.

```
choco install nvm
```

중간에 아래 명령어 나오면 Y
```
 Do you want to continue?([Y]es/[N]o): Y
```

설치 되어 있는 Node JS 버전 목록 보기
```
nvm list
```

```
* 24.11.1 (Currently using 64-bit executable)
```

설치 되어 있는 Node JS 버전중 특정버전(version)으로 선택하기
```
nvm use version
```

## 3. NPM 설치

NPM 초기화
```
npm init -y
```

왼쪽 탐색기를 열고 새로고침을 해보자 생성된 package.json 파일을 확인합니다.


## 4. .gitignore 파일 작업

NPM 모듈을 설치하기 전에 .gitignore 파일을 생성하여 아래와 같이 추가합니다.
.gitignore
```
node_modules
```

## 5. TypeScript 컴파일 설치

해당 디렉토리 경로에 TypeScript 컴파일러 설치
```
npm install typescript
```

전역 설치
```
npm install typescript -g
```

버전 확인
```
tsc -v
```

TypeScript src/index.ts 파일 컴파일
```
tsc src/index.ts
```

JavaScript index.js 파일 실행
```
node src/index.js
```

## 6. Electron 설치



## 프로젝트 구조

ChatGPT 에게 추천받은 구조
```


```