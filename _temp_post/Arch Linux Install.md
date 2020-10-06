# Arch Linux Install
참고\
https://withjeon.com/2017/11/07/arch-linux-install-guide/


## 부팅 USB 만들기

## PC 스피커 음소거
다음의 소리로 삑삑소리 음소거 가능
```
# rmmod pcspkr
```

cf. 아치 리눅스 설치가 끝난 후에는 다음과 같은 코드로 부팅 때부터 자동으로 음소거 가능
```
# echo "blacklist pcspkr" > /etc/modprobe.d/nobeep.conf
```

## 취소 명령어
CLI상에서 진행 중인 프로세스를 취소하고 싶을 때 리눅스가 설치 되었다면 `ctrl+c`로 취소할 수 있지만
설치가 아직 되지 않았을 때에는 `ctrl+c`와 `q`가 혼용된다.
따라서 `ctrl+c`로 취소가 되지 않을 때에는 `q`키를 눌러보면 취소될 것이다.

## UEFI 설치 가능 여부 확인
우선 UEFI 설치가 가능한지 확인
```
# ls /sys/firmware/efi
```
결과에 `efivars`라는 폴더가 보이면 UEFI 설치 가능


## 1. 인터넷 연결
유선 인터넷을 사용한다면 별다른 작업 필요없음
무선 인터넷을 사용한다면
```
# wifi-menu
```
를 통해 무선 인터넷 연결 화면에 들어간 후 인터넷 선택-엔터-비밀번호 입력으로 사용 가능

연결이 되었는지는 핑을 확인하면 된다.
```
# ping -c 3 google.com
```
로 확인 가능.
cf. `-c 3`은 3회 핑 확인. 숫자를 바꿀 수도 있으며 단순히 `ping google.com`도 가능하지만 `ctrl+c`로 취소해줘야 함

## 2. 파티션 설정
리눅스가 설치될 드라이브를 <부팅>, <스왑메모리>, <데이터 스토리지> 파티션으로 나눌 예정.

- 컴퓨터에 메모리가 충분하다면 <스왑메모리>는 필요 없음. 스왑 메모리는 컴퓨터의 메모리가 부족할 때 보조저장장치의 일부를 메모리처럼 사용하는 것을 말하며, 메모리에 비하면 매우 느림.
- 본인 컴퓨터의 메모리는 다음의 명령어로 확인 가능. 
    ```
    # top
    ```
    4번째 줄에 `MiB Mem : `부터가 메모리 관련 정보인데, 필자는 `7853.9 total`이라고 나와있으니 8G 메모리이다. 나올 때에는 `ctrl+c'로 나올 수 있다.

현재 드라이브 및 파티션은 아래 명령어로 확인 가능
```
# lsblk
```
sda, sdb, sdc, ... 혹은 hda, hdb, hdc, ...와 같은 저장장치를 확인할 수 있다. hda는 기존의 IDE 방식으로 연결된 하드디스크라고 하고, sda는 최근의 SCSI/SATA 방식으로 연결된 HDD/SDD라고 한다.
일반적으로 sda에 리눅스를 설치하지만 필자는 sdb가 SSD이기에 sdb에 설치를 하고자 한다.\
어떤 드라이브에 리눅스를 설치할 지 정했다면 파티션을 어떻게 나눌지 계획해야 한다.

| /dev/파티션이름 | 파일시스템 | 코드 | 용량 | 설명 |
|---|---|---|---|---|
|/dev/sdb1|EFI System|EF00|512m|ESP(EFI System Partition/부트파티션)|
|/dev/sdb2|Linux Swap|8200|4G|스왑메모리|
|/dev/sdb3|Linux FileSystem|8300|나머지 용량|루트파티션|

```
# gdisk /dev/sdb
```
위의 명령어를 치면 `Partition table scan`이라는게 뜨면서 커맨드 라인이 `#`이 아닌 `Command (? for help) :`라고 뜨는데, 우선 `GPT: present`인지 확인. `GPT: not present`라면 GPT로 바꾸겠냐고 할텐데 바꾸면 됨

```
Command (? for help): ?
```
라고 입력하여 명령어 목록을 일단 보자. 

    파티션 초기화 : o

    파티션 생성모드 : n\
    파티션 번호 : 1(default)\
    첫번째 섹터 : 엔터(자동)\
    마지막 섹터 : +512mb(용량)\
    파일 시스템 코드 : EF00

    파티션 생성모드 : n\
    파티션 번호 : 2(default)\
    첫번째 섹터 : 엔터(자동)\
    마지막 섹터 : +4G(용량)\
    파일 시스템 코드 : 8200
    
    파티션 생성모드 : n\
    파티션 번호 : 3(default)\
    첫번째 섹터 : 엔터(자동)\
    마지막 섹터 : -1(마지막 섹터까지)\
    파일 시스템 코드 : 8300(default)

    파티션 확인 : p
    저장 : w

## 포맷
mkfs(**M**a**k**e **F**ile **S**ystem) 사용
스왑영역은 아직 포멧하지 말것.
```
# mkfs.vfat -F32 /dev/sdb1
```
```
# mkfs.ext4 /dev/sdb3
```

## 스왑
mkswap(**M**a**k**e **swap**)사용 
```
# mkswap /dev/sdb2
```
```
# swapon /dev/sdb2
```

## 마운트
```
# mount /dev/sdb3 /mnt
```
sdb3을 /mnt에 마운트
```
# mkdir /mnt/boot
```
boot 폴더 생성 (mkdir : Make Directory)
```
# mount /dev/sdb1 /mnt/boot
```
부팅 파티션을 boot 폴더에 마운트

## 미러리스트
```
# vim /etc/pacman.d/mirrorlist
```
Server = http://ftp.lanet.kr/pub/archlinux/$repo/os/$arch\
Server = https://ftp.lanet.kr/pub/archlinux/$repo/os/$arch\
추가 (위에꺼는 이미 추가되어있었음)

## pacstrap
```
# pacstrap /mnt base linux linux-firmware
```
vim, nano, dhcpcd, NetworkManager도 같이 설치 
```
# pacstrap /mnt vim, dhcpcd, NetworkManager
```
dhcpcd : CLI환경에서의 무선인터넷 연결
NetworkManager : GUI 환경에서의 무선인터넷 연결

## genfstab
```
# genfstab -U /mnt >> /mnt/etc/fstab
```

## system 진입
```
# arch-chroot /mnt
```

후에 인터넷 다시 확인
```
# ping google.com
```

## 루트 비밀번호 설정
```
# passwd
```

## 로컬 설정
```
# vim /etc/locale.gen
  en_US.UTF-8 부분 주석(#) 삭제
  (ko_KR.UTF-8 주석 삭제해도 됨)
# locale-gen
```

## 언어 설정
```
# echo=en_US.UTF-8 > /etc/locale.conf
# export LANG=en_US.UTF-8
```

## PC 이름 설정
```
# echo PC이름 > /etc/hostname
```
PC이름 부분에 자기 이름 추가

## 로컬 타임 설정
```
# ls -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime
```

## 하드웨어 시간 설정
```
# hwclock --systohc --utc
```

# sudo 설치
```
# pacman -Syu
# pacman -S vim sudo
```


## 사용자 추가
```
# useradd -m -g users -G wheel -s /bin/bash 사용자ID
# passwd 사용자ID
비밀번호 두번 입력
# visudo
Uncomment to allow members of group sudo to execute any command 다음 줄 주석 삭제
```


## 부트로더 설치
```
# bootctl --path=/boot install
# vim /boot/loader/loader.conf
(파일에 다음 세 줄 작성
default arch
editor 1
timeout 3)
# vim /boot/loader/entries/arch.conf
(다음 세 줄 작성
title Hello
linux /vmlinuz-linux
initrd /initramfs-linux.img)
# echo "options root=PARTUUID=$(blkid -s PARTUUID -o value /dev/sdb3) rw">> /boot/loader/entries/arch.conf
# blkid
# cat /boot/loader/entries/arch.conf
```
`echo "options root=PARTUUID=$(blkid -s PARTUUID -o value /dev/sdb3) rw">> /boot/loader/entries/arch.conf`에서 sdb3부분에 자신의 루트파티션 입력

`blkid`으로 자신의 루트파티션 PARTUUID를 확인한 후 `cat /boot/loader/entries/arch.conf`의 마지막 줄 PARTUUID가 일치하는지 확인

## 인터넷 설정(유선인터넷에 한함)
```
# pacman -S netctl dialog
```
재부팅 하고 난 후 `wifi-menu`를 사용하기 위함
dhcpcd 사용해도 됨.

## 재부팅
```
# exit
# umount -R /mnt
# reboot
(장치가 종료되고 다시 시작되는 시점에서 USB 빼기)
```

