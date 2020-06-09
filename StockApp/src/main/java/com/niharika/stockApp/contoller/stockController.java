package com.niharika.stockApp.contoller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.niharika.stockApp.entity.StockEntity;
import com.niharika.stockApp.service.stockService;

@RestController
@RequestMapping("api/stock/")
public class stockController {
	@Autowired
	private stockService sr;
	
	@CrossOrigin
	@GetMapping("/")
	public List<StockResponse> getStockDetails() {
		return sr.getStockDetails();
	}
	@PostMapping("/save")
	public void saveStock(@RequestBody List<StockEntity> seList) {
		seList.forEach(se->sr.saveStockDetails(se));
	}

}
