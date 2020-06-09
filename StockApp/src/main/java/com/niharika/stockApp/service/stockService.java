package com.niharika.stockApp.service;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.niharika.stockApp.contoller.StockResponse;
import com.niharika.stockApp.entity.StockEntity;
import com.niharika.stockApp.repos.StockRepos;

@Service
public class stockService {
	@Autowired
	private StockRepos sr;

	public List<StockResponse> getStockDetails() {
		List<StockResponse> result = new ArrayList<StockResponse>();
		result = sr.getStockDetails().stream().map(objRow -> {
			StockResponse stockRes = new StockResponse();
			stockRes.setPrice(Double.valueOf(objRow[1].toString()));
			stockRes.setStockSymbol(objRow[0].toString().toUpperCase());
			stockRes.setTrend(objRow[2].toString().toUpperCase());
			return stockRes;
		}).collect(Collectors.toList());
		return result;
	}

	public void saveStockDetails(StockEntity se) {
		se.setEventTime(Timestamp.valueOf(LocalDateTime.now()));
		sr.save(se);
	}

}
