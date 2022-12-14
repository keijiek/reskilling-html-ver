#

## header imgs (src/images/header/) (450*300px)
- header01.jpg
- header02.jpg

## card imgs (src/images/cards/) (270*18px)
- reskill01.jpg
- reskill02.jpg
- job01.jpg
- job02.jpg
- job03.jpg

## 横幅を常にブラウザの最大幅にしたい要素(body, header, footer)

- 以下の二つのみが常に適用されるように設定。
- ここに余計なプロパティを設定すると、横幅を縮めた時、必要以上にシュリンクするページになるのではないか。
  - max-width: 100%; (ありうる最大)
  - min-width: 320px; (ありうる最低)
- あるいは、min-width をわざわざ設定することが、意図せぬ見た目の異常に繋がっているのではないか。

### 対象
- body
- header
- footer