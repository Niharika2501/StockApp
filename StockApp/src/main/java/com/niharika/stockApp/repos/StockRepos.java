package com.niharika.stockApp.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.niharika.stockApp.entity.StockEntity;
import com.niharika.stockApp.entity.StockId;

public interface StockRepos extends JpaRepository<StockEntity, StockId> {
@Query( value ="select t.stock_symbol,	t.price,	case when t.price> last_MP then 'UP'	else 'Down'end as trend from\r\n" + 
		" (select st.stock_symbol ,\r\n" + 
		"  (st.ask_price+st.bid_price)/2 as price ,\r\n" + 
		"  st.event_time ,\r\n" + 
		"  (select (s3.ask_price+s3.bid_price)/2 as last_MP\r\n" + 
		"     from stock s3 where (s3.stock_symbol,s3.event_time) in ( \r\n" + 
		"	 select s1.stock_symbol,max(s1.event_time) \r\n" + 
		"	 from stock s1\r\n" + 
		"	 where s1.event_time <> st.event_time\r\n" + 
		"     and s1.stock_symbol= st.stock_symbol\r\n" + 
		"	 group by s1.stock_symbol  )\r\n" + 
		"  ) as last_MP\r\n" + 
		" from stock st\r\n" + 
		" where (st.stock_symbol,st.event_time) in ( \r\n" + 
		"		select s.stock_symbol,max(s.event_time) from stock s group by s.stock_symbol\r\n" + 
		")) as t",
		 nativeQuery = true
		)
List<Object[]> getStockDetails();
}
