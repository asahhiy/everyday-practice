#!/bin/zsh

TODAY=$(date "+%y-%m%d")

FILENAME=20${TODAY}.md


if [ -e "$FILENAME" ]; then
  echo "本日のtodo.mdは作成されています"
else
  echo "# $TODAY のメモ" > $FILENAME
 echo "$FILENAME を作成しました！"
fi
