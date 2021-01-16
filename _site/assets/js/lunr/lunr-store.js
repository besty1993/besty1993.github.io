var store = [{
        "title": "sample",
        "excerpt":"역시 마찬가지로, 단순히 고통이라는 이유 때문에 고통 그 자체를 사랑하거나 추구하거나 소유하려는 자는 없다. 다만 노역과 고통이 아주 큰 즐거움을 선사하는 상황이 때로는 발생하기 때문에 고통을 찾는 사람이 있는 것이다. 간단한 예를 들자면, 모종의 이익을 얻을 수도 없는데 힘든 육체적 노력을 기꺼이 할 사람이 우리들 중에 과연 있겠는가? 하지만 귀찮은...","categories": ["etc."],
        "tags": ["Lorem ipsum"],
        "url": "http://0.0.0.0:4000/etctemp/",
        "teaser": null
      },{
        "title": "NetCDF4 데이터 가시화(1)",
        "excerpt":"NetCDF4 데이터를 읽어서 다음과 같이 가시화해보겠다. 사용 데이터는 Hycom 재분석 자료이며, 관련 링크는 다음과 같다. Hycom Homepage Hycom FTP 파일의 마지막에 ts3z라 적혀 있으면 수온 및 염분 데이터, uv3z는 유속 UV 데이터이다. 그리고 ssh는 수위이다. 우리가 가시화하고자 하는 데이터는 수온과 UV를 사용하므로 이 두가지를 저장하자. 시간대는 아무거나 상관없다. NetCDF4 설치...","categories": ["Marine Data Analysis"],
        "tags": ["Python","Marine Data Analysis","Data Visualization","NetCDF4"],
        "url": "http://0.0.0.0:4000/marine%20data%20analysis/netcdf_1/",
        "teaser": null
      },{
        "title": "NetCDF4 데이터 가시화(2)",
        "excerpt":"1편에 이어서 NetCDF4 데이터를 읽어서 다음과 같이 가시화해보겠다. 2편에서는 Basemap이라는 라이브러리를 사용하여 해안선을 깔아줄 것이다. 이를 위해서 먼저 Basemap을 설치해주자. Basemap 설치 Basemap은 지도 데이터를 담은 파이썬 라이브러리이다. CMD에 다음의 명령어로 라이브러리를 설치해준다. conda 대신 pip를 사용해도 된다. conda install -y -c conda-forge basemap geos proj4 basemap-data-hires 지도 추가 이제...","categories": ["Marine Data Analysis"],
        "tags": ["Python","Marine Data Analysis","Data Visualization","NetCDF4"],
        "url": "http://0.0.0.0:4000/marine%20data%20analysis/netcdf_2/",
        "teaser": null
      },{
        "title": "웹북, 사이트 등 저장소",
        "excerpt":"웹북 및 블로그 목록 Network Science by Albert-László Barabási 물리학과 선배가 추천해주신 책. 그래프 데이터 처리할 때 도움이 될 듯 하여 받아옴 The Analysis of Data by Guy Lebanon 웹서핑하다가 우연히 찾은 책. Random Variable, Measure Theory 등 기초를 복습하고 싶을 때 읽을 예정. 저자가 지금 구글의 엔지니어링 디렉터라고 함...","categories": ["etc."],
        "tags": ["etc."],
        "url": "http://0.0.0.0:4000/etcbooks_to_read/",
        "teaser": null
      },{
        "title": "Boxplot에 대해 알아보자",
        "excerpt":"Boxplot이란 다음과 같은 그래프를 말한다. 이번 포스트에서는 이 Boxplot에 대해서 알아보겠다. Boxplot이란? 위의 Boxplot 샘플을 보면 무슨 선도 있고 점도 있고 박스도 있어서 복잡해보이는데, 그만큼 많은 정보를 담고 있어 데이터의 분포를 표현하는 데에 적합한 그래프이다. 어떠한 정보를 담고 있는지 다음의 그림에서 보자. 하나하나 쉬운 용어부터 설명하겠다. 중앙값 중앙값(Median)말 그대로 데이터를...","categories": ["Marine Data Analysis"],
        "tags": ["Python","Data Science","Seaborn","Matplotlib","Data Visualization"],
        "url": "http://0.0.0.0:4000/marine%20data%20analysis/boxplot/",
        "teaser": null
      },{
        "title": "[Jekyll] `load': marshal data too short (ArgumentError) 디버깅",
        "excerpt":"열심히 블로그 공사하다가 서버를 껐다 켰더니 이런 에러가 뜬다 &gt; jekyll serve ------------------------------------------------ Jekyll 4.1.1 Please append `--trace` to the `serve` command for any additional information or backtrace. ------------------------------------------------ 여기에서 해달라는 데로 jekyll serve --trace라 쳤더니 에러가 막 길게 뜨는데, &gt; jekyll serve --trace Traceback (most recent call last): 19:...","categories": ["Debugging"],
        "tags": ["Jekyll","Debugging","etc"],
        "url": "http://0.0.0.0:4000/debugging/jekyll_debug/",
        "teaser": null
      },{
        "title": "[Open CV] Expected Ptr<cv::UMat> for argument 'src'",
        "excerpt":"해안선 추출 작업 중에 제일 마지막 단계인 Edge Detection에서 자꾸 이런 에러가 뜬다. --------------------------------------------------------------------------- TypeError Traceback (most recent call last) &lt;timed exec&gt; in &lt;module&gt; &lt;ipython-input-16-d58dd581f2d3&gt; in Pipeline(tiff_path) 43 # laplacian[laplacian==0] = np.nan 44 ---&gt; 45 sobel = cv2.Sobel(img, cv2.CV_8U, 1, 1, 3).astype('float') 46 # sobel[sobel==0] = np.nan 47 TypeError: Expected...","categories": ["Debugging"],
        "tags": ["OpenCV","Debugging","PYthon","etc"],
        "url": "http://0.0.0.0:4000/debugging/cv2_debug/",
        "teaser": null
      },{
        "title": "Pandas를 이용한 데이터 분석(1)",
        "excerpt":"Pandas란 무엇인가? pandas is a fast, powerful, flexible and easy to use open source data analysis and manipulation tool, built on top of the Python programming language. Pandas 홈페이지에 나와있는 설명문이다. 빠르고 유연하고 기능이 많으며, 사용하기 쉬운 파이썬 기반의 오픈소스 데이터 분석 및 조작 도구라고 한다. 많은 파이썬 유저들이 정형...","categories": ["Marine Data Analysis"],
        "tags": ["Python","Marine Data Analysis","Data Science","Pandas"],
        "url": "http://0.0.0.0:4000/marine%20data%20analysis/pandas_1/",
        "teaser": null
      },{
        "title": "Dask 사용 팁",
        "excerpt":"1. Multiprocessing을 디폴트로 import dask dask.config.set(pool=Pool(12)) dask.config.set(scheduler='processes') &lt;/br&gt; 2. Dask DataFrame에서 값 변경하기 Pandas처럼 df.loc을 사용하면 다음과 같은 에러 발생 '_LocIndexer' object does not support item assignment 이 때는 dask의 mask 메소드를 사용할 수 있다. wave_ddf.mask((wave_ddf.height&lt;0)|(wave_ddf.period&lt;0),0) ddf.mask(필터, 변경할 값)의 식으로 넣으면 된다. np.where와 비슷하면서도 다름. (DataFrame뿐만 아니라 Series에서도 사용 가능)...","categories": ["etc."],
        "tags": ["dask"],
        "url": "http://0.0.0.0:4000/etcdask_tips/",
        "teaser": null
      },{
        "title": "텐서플로우 학습 시 메모리 누수 발생",
        "excerpt":"요약 쓰레기 수집을 Callback으로 넣어서 Epoch가 끝날 때마다 실행시켜주자 ## 예시 class GarbageCollector(tf.keras.callbacks.Callback): def on_epoch_end(self, epoch, logs=None): gc.collect() return model.fit(train_dataset, epochs=200, validation_data=val_dataset, callback=[GarbageCollector()], verbose=2) 내용 텐서플로우의 data.Dataset.from_generator는 대용량의 데이터을 쉽게 학습시킬 수 있다는 장점이 있지만 왜인지 메모리 누수가 발생하기도 한다. 내 생각에는 GIL의 영향을 받아서 그러는 거 같은데 어디까지나 내...","categories": ["Debugging"],
        "tags": ["Tensorflow","Debugging"],
        "url": "http://0.0.0.0:4000/debugging/tf_memory_leak/",
        "teaser": null
      },{
        "title": "EfficientNet 논문 리뷰",
        "excerpt":"EfficientNet : Rethinking Model Scaling for Convolutional Neural Networks [paper] 저자 : Mingxing Tan, Quoc V. Le Summary Proposed ‘Compound Scaling Method’, which can scale ConvNet by efficiently balancing network Depth, Width, Image Resolution Proposed ‘EfficientNet’, which achieved SOTA accuracy with much more efficient model size and complexity Problems to...","categories": ["PaperReview"],
        "tags": ["ImageClassification","DeepLearning","PaperReview","NAS","NetworkScaling"],
        "url": "http://0.0.0.0:4000/paperreview/EfficientNet/",
        "teaser": null
      }]
