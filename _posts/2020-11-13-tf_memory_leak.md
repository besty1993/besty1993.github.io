---
title:  "텐서플로우 학습 시 메모리 누수 발생"
layout: single
categories: 
  - Debugging
last_modified_at: 2020-11-17
classes: wide
tags:
  - Tensorflow
  - Debugging
---

## 요약
쓰레기 수집을 Callback으로 넣어서 Epoch가 끝날 때마다 실행시켜주자

```python
## 예시
class GarbageCollector(tf.keras.callbacks.Callback):
    def on_epoch_end(self, epoch, logs=None):
        gc.collect()
        return

model.fit(train_dataset, epochs=200, validation_data=val_dataset,
	callback=[GarbageCollector()], verbose=2)
```

---

## 내용

텐서플로우의 `data.Dataset.from_generator`는 대용량의 데이터을 쉽게 학습시킬 수 있다는 장점이 있지만
왜인지 메모리 누수가 발생하기도 한다. 내 생각에는 GIL의 영향을 받아서 그러는 거 같은데 어디까지나 내 추측일 뿐이고

어쨌든, 이 메모리 누수는 특히 `tf.image.random_flip_left_right`이나 `tf.random.uniform`과 같이 데이터 증강이나 랜덤 변수 사용 시 더 크게 발생하는 듯 하다.

이 문제를 해결을 못 해서 한 동안 코드를 전부 PyTorch로 갈아엎을까 고민했었는데, 
PM에게 코드를 갈아엎겠다고 차마 말 할 수가 없어서 관두었다.

</br>

Tensorflow KR에도 이 문제에 대해 물어봤는데 한 분께서 다음의 코드로 해결을 했다고 한다.

```echo 1 > /proc/sys/vm/drop_caches```

> 만약 권한이 없다면서 안 되는 분들은 [http://egloos.zum.com/studyfoss/v/5204344](http://egloos.zum.com/studyfoss/v/5204344) 여기를 참고하면 된다.

검색해보니 pagecache를 해제하는 명령어라고 한다. 이걸 crontab으로 5분마다 돌리셨다는데...

문제는 이게 Docker 컨테이너 속 캐시까지 해제해주진 않는다! Docker 컨테이너 속에서는 저 `/proc/sys/vm/drop_caches`가 읽기 전용이라며 안 된다.
(이걸 또 검색해보니 Docker 컨테이너에선 원래 안 된다고 한다)

</br>

그래도 여기에서 캐시를 지우면 된다는 힌트를 얻어서 gc.collect()를 매 epoch마다 실행해주면 어떨까? 해서 해보니...

된다. lol

그냥 위에 적은 것 처럼 tf.keras.callbacks.Callback을 상속받아 커스텀 콜백을 하나 만들면 된다.