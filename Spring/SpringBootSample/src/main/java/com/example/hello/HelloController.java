package com.example.hello;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller //画面などからHTTPリクエストを受け付けるクラスのこと
public class HelloController {
	
	@GetMapping("/hello") 
	// GETメソッドのHTTPリクエストを受け付けるために使う、受け付けるURLを引数に設定する
	public String getHello() {
		// hello.htmlに画面遷移
		return "hello";
	}

}
