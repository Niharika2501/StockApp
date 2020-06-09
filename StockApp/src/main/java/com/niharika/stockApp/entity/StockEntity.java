package com.niharika.stockApp.entity;



import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

@Entity
@Table(name="Stock")
@IdClass(StockId.class)
public class StockEntity {

	@Id
	@Column(name="STOCK_SYMBOL")
	private String stockSymbol;
	@Column(name="ASK_PRICE")
	private double askPrice;
	@Column(name="BID_PRICE")
	private double bidPrice;
	@Id
	private Timestamp eventTime;

	public String getStockSymbol() {
		return stockSymbol;
	}

	public void setStockSymbol(String stockSymbol) {
		this.stockSymbol = stockSymbol;
	}

	public double getAskPrice() {
		return askPrice;
	}

	public void setAskPrice(double askPrice) {
		this.askPrice = askPrice;
	}

	public double getBidPrice() {
		return bidPrice;
	}

	public void setBidPrice(double bidPrice) {
		this.bidPrice = bidPrice;
	}

	public Timestamp getEventTime() {
		return eventTime;
	}

	public void setEventTime(Timestamp timestamp) {
		this.eventTime = timestamp;
	}

}
