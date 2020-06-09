package com.niharika.stockApp.entity;

import java.io.Serializable;
import java.sql.Timestamp;

public class StockId implements Serializable {
	private String stockSymbol;

	private Timestamp eventTime;

	public String getStockSymbol() {
		return stockSymbol;
	}

	public void setStockSymbol(String stockSymbol) {
		this.stockSymbol = stockSymbol;
	}

	public Timestamp getEventTime() {
		return eventTime;
	}

	public void setEventTime(Timestamp eventTime) {
		this.eventTime = eventTime;
	}
}
