Run from cmd:
 Gradle 5 (5.6.x only) or Gradle 6 (6.3 or later)
redirect to project folder
command:gradle bootrun
or
Spring Boot Application :
import as a gradle
Through STS IDE run as 'Spring Boot App'

Through Postman
PUT URL : localhost:9091/api/stock/save
[{
	"stockSymbol":"xyz1",
	"askPrice":53,
	"bidPrice":33
},
{
	"stockSymbol":"xyz1",
	"askPrice":23,
	"bidPrice":33
},
{
	"stockSymbol":"xyz",
	"askPrice":53,
	"bidPrice":33
},
{
	"stockSymbol":"xyz",
	"askPrice":23,
	"bidPrice":33
},
{
	"stockSymbol":"Abc",
	"askPrice":53,
	"bidPrice":33
},
{
	"stockSymbol":"Abc",
	"askPrice":53,
	"bidPrice":43
},
{
	"stockSymbol":"wxy",
	"askPrice":43,
	"bidPrice":33
},
{
	"stockSymbol":"wxy",
	"askPrice":53,
	"bidPrice":33
}
]

GET URL : localhost:9091/api/stock/


Note: Due to time constraint I haven't written unit test case. 