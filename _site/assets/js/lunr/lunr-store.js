var store = [{
        "title": "sample",
        "excerpt":"역시 마찬가지로, 단순히 고통이라는 이유 때문에 고통 그 자체를 사랑하거나 추구하거나 소유하려는 자는 없다. 다만 노역과 고통이 아주 큰 즐거움을 선사하는 상황이 때로는 발생하기 때문에 고통을 찾는 사람이 있는 것이다. 간단한 예를 들자면, 모종의 이익을 얻을 수도 없는데 힘든 육체적 노력을 기꺼이 할 사람이 우리들 중에 과연 있겠는가? 하지만 귀찮은...","categories": ["etc."],
        "tags": ["Lorem ipsum"],
        "url": "http://localhost:4000/etctemp/",
        "teaser": null
      },{
        "title": "NetCDF4 데이터 가시화(1)",
        "excerpt":"NetCDF4 데이터를 읽어서 다음과 같이 가시화해보겠다. 사용 데이터는 Hycom 재분석 자료이며, 관련 링크는 다음과 같다. Hycom Homepage Hycom FTP 파일의 마지막에 ts3z라 적혀 있으면 수온 및 염분 데이터, uv3z는 유속 UV 데이터이다. 그리고 ssh는 수위이다. 우리가 가시화하고자 하는 데이터는 수온과 UV를 사용하므로 이 두가지를 저장하자. 시간대는 아무거나 상관없다. NetCDF4 설치...","categories": ["Marine Data Analysis"],
        "tags": ["Python","Marine Data Analysis","Data Visualization","NetCDF4"],
        "url": "http://localhost:4000/marine%20data%20analysis/netcdf_1/",
        "teaser": null
      },{
        "title": "NetCDF4 데이터 가시화(2)",
        "excerpt":"1편에 이어서 NetCDF4 데이터를 읽어서 다음과 같이 가시화해보겠다. 2편에서는 Basemap이라는 라이브러리를 사용하여 해안선을 깔아줄 것이다. 이를 위해서 먼저 Basemap을 설치해주자. Basemap 설치 Basemap은 지도 데이터를 담은 파이썬 라이브러리이다. CMD에 다음의 명령어로 라이브러리를 설치해준다. conda 대신 pip를 사용해도 된다. conda install -y -c conda-forge basemap geos proj4 basemap-data-hires 지도 추가 이제...","categories": ["Marine Data Analysis"],
        "tags": ["Python","Marine Data Analysis","Data Visualization","NetCDF4"],
        "url": "http://localhost:4000/marine%20data%20analysis/netcdf_2/",
        "teaser": null
      },{
        "title": "괜찮은 무료 웹북들",
        "excerpt":"무료 웹북 목록     Network Science by Albert-László Barabási            물리학과 선배가 추천해주신 책. 그래프 데이터 처리할 때 도움이 될 듯 하여 받아왔다           The Analysis of Data by Guy Lebanon            웹서핑하다가 우연히 찾은 책. Random Variable, Measure Theory 등 기초를 복습하고 싶을 때 읽을 예정.       저자가 지금 구글의 엔지니어링 디렉터라고 한다.          ","categories": ["etc."],
        "tags": ["etc."],
        "url": "http://localhost:4000/etcbooks_to_read/",
        "teaser": null
      },{
        "title": "Boxplot에 대해 알아보자",
        "excerpt":"Boxplot이란 다음과 같은 그래프를 말한다. 이번 포스트에서는 이 Boxplot에 대해서 알아보겠다. Boxplot이란? 위의 Boxplot 샘플을 보면 무슨 선도 있고 점도 있고 박스도 있어서 복잡해보이는데, 그만큼 많은 정보를 담고 있어 데이터의 분포를 표현하는 데에 적합한 그래프이다. 어떠한 정보를 담고 있는지 다음의 그림에서 보자. 하나하나 쉬운 용어부터 설명하겠다. 중앙값 중앙값(Median)말 그대로 데이터를...","categories": ["Marine Data Analysis"],
        "tags": ["Python","Data Science","Seaborn","Matplotlib","Data Visualization"],
        "url": "http://localhost:4000/marine%20data%20analysis/boxplot/",
        "teaser": null
      },{
        "title": "`load': marshal data too short (ArgumentError) 문제 해결",
        "excerpt":"열심히 블로그 공사하다가 서버를 껐다 켰더니 이런 에러가 뜬다 &gt; jekyll serve ------------------------------------------------ Jekyll 4.1.1 Please append `--trace` to the `serve` command for any additional information or backtrace. ------------------------------------------------ 여기에서 해달라는 데로 jekyll serve --trace라 쳤더니 에러가 막 길게 뜨는데, &gt; jekyll serve --trace Traceback (most recent call last): 19:...","categories": ["etc."],
        "tags": ["Jekyll","Debugging","etc"],
        "url": "http://localhost:4000/etcjekyll_debug/",
        "teaser": null
      },{
        "title": "Pandas를 이용한 데이터 분석(1)",
        "excerpt":"Pandas란 무엇인가? pandas is a fast, powerful, flexible and easy to use open source data analysis and manipulation tool, built on top of the Python programming language. Pandas 홈페이지에 나와있는 설명문이다. 빠르고 유연하고 기능이 많으며, 사용하기 쉬운 파이썬 기반의 오픈소스 데이터 분석 및 조작 도구라고 한다. 좀 더 설명하면 파이썬에서...","categories": ["Marine Data Analysis"],
        "tags": ["Python","Marine Data Analysis","Data Science","Pandas"],
        "url": "http://localhost:4000/marine%20data%20analysis/pandas_1/",
        "teaser": null
      },{
        "title": "Pandas를 이용한 데이터 분석(2)",
        "excerpt":"이전 포스트에서는 간단한 샘플 DataFrame을 만들고 그 메타데이터를 확인해 보았다. 이번 포스트에서는 pandas.Series라는 형식에 대해서 알아보고 DataFrame의 indexing 방법에 대해 알아보고자 한다. 그 전에 우선 지난 번에 만들었던 샘플 Dataset을 다시 한번 만들어놓자. &gt;&gt;&gt; import pandas as pd &gt;&gt;&gt; dic = { '이름' : ['김A', '최B', '이C'], '성별' : ['남',...","categories": ["Marine Data Analysis"],
        "tags": ["Python","Marine Data Analysis","Data Science","Pandas"],
        "url": "http://localhost:4000/marine%20data%20analysis/pandas_2/",
        "teaser": null
      }]
