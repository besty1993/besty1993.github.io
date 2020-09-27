---
title:  "Jekyll `load': marshal data too short (ArgumentError) 디버깅"
layout: single
categories: 
  - Debugging
last_modified_at: 2020-09-06T19:00:00
classes: wide
tags:
  - Jekyll
  - Debugging
  - etc
---

열심히 블로그 공사하다가 서버를 껐다 켰더니 이런 에러가 뜬다
```
> jekyll serve
                    ------------------------------------------------
      Jekyll 4.1.1   Please append `--trace` to the `serve` command
                     for any additional information or backtrace.
                    ------------------------------------------------
```

여기에서 해달라는 데로 `jekyll serve --trace`라 쳤더니 에러가 막 길게 뜨는데,

```
> jekyll serve --trace
Traceback (most recent call last):
        19: from C:/Ruby26-x64/bin/jekyll:23:in `<main>'
        18: from C:/Ruby26-x64/bin/jekyll:23:in `load'
        17: from C:/Ruby26-x64/lib/ruby/gems/2.6.0/gems/jekyll-4.1.1/exe/jekyll:15:in `<top (required)>'
        16: from C:/Ruby26-x64/lib/ruby/gems/2.6.0/gems/mercenary-0.4.0/lib/mercenary.rb:21:in `program'
        15: from C:/Ruby26-x64/lib/ruby/gems/2.6.0/gems/mercenary-0.4.0/lib/mercenary/program.rb:44:in `go'
        14: from C:/Ruby26-x64/lib/ruby/gems/2.6.0/gems/mercenary-0.4.0/lib/mercenary/command.rb:221:in `execute'
        13: from C:/Ruby26-x64/lib/ruby/gems/2.6.0/gems/mercenary-0.4.0/lib/mercenary/command.rb:221:in `each'
        12: from C:/Ruby26-x64/lib/ruby/gems/2.6.0/gems/mercenary-0.4.0/lib/mercenary/command.rb:221:in `block in execute'
        11: from C:/Ruby26-x64/lib/ruby/gems/2.6.0/gems/jekyll-4.1.1/lib/jekyll/commands/serve.rb:86:in `block (2 levels) in init_with_program'
        10: from C:/Ruby26-x64/lib/ruby/gems/2.6.0/gems/jekyll-4.1.1/lib/jekyll/command.rb:91:in `process_with_graceful_fail'
         9: from C:/Ruby26-x64/lib/ruby/gems/2.6.0/gems/jekyll-4.1.1/lib/jekyll/command.rb:91:in `each'
         8: from C:/Ruby26-x64/lib/ruby/gems/2.6.0/gems/jekyll-4.1.1/lib/jekyll/command.rb:91:in `block in process_with_graceful_fail'
         7: from C:/Ruby26-x64/lib/ruby/gems/2.6.0/gems/jekyll-4.1.1/lib/jekyll/commands/build.rb:30:in `process'
         6: from C:/Ruby26-x64/lib/ruby/gems/2.6.0/gems/jekyll-4.1.1/lib/jekyll/commands/build.rb:30:in `new'
         5: from C:/Ruby26-x64/lib/ruby/gems/2.6.0/gems/jekyll-4.1.1/lib/jekyll/site.rb:35:in `initialize'
         4: from C:/Ruby26-x64/lib/ruby/gems/2.6.0/gems/jekyll-4.1.1/lib/jekyll/site.rb:118:in `reset'
         3: from C:/Ruby26-x64/lib/ruby/gems/2.6.0/gems/jekyll-4.1.1/lib/jekyll/cache.rb:41:in `clear_if_config_changed'
         2: from C:/Ruby26-x64/lib/ruby/gems/2.6.0/gems/jekyll-4.1.1/lib/jekyll/cache.rb:86:in `[]'
         1: from C:/Ruby26-x64/lib/ruby/gems/2.6.0/gems/jekyll-4.1.1/lib/jekyll/cache.rb:171:in `load'
C:/Ruby26-x64/lib/ruby/gems/2.6.0/gems/jekyll-4.1.1/lib/jekyll/cache.rb:171:in `load': marshal data too short (ArgumentError)
```

죄다 **Ruby**에 관련된 내용인데 방금 설치한 루비에 문제가 있을 리가 없지 않은가.\
혹시 몰라서 샘플 mmistake 소스코드를 다시 받아서 돌려봤는데 잘만 돌아간다.

인터넷에 `'load': marshal data too short (ArgumentError)`라고 검색해도 전혀 도움 안되는 내용만 있다.

다시 받은 mmistake 소스코드에 지금까지 올린 포스트나 설정 하나하나 배껴가면서 어디에서 문제가 생겼나 알아보던 중, 우연히 **.jekyll-cache**라는 폴더가 눈에 띄었다.\
위의 에러도 캐시에 관련된 내용이니까 이거 지우면 어떨까 해서 지웠더니 허무하게도 매우 잘 돌아간다.

### 결론
`'load': marshal data too short (ArgumentError)`라는 에러가 뜨면 **.jekyll-cache**라는 폴더를 지우고 다시 서버를 켜보자.